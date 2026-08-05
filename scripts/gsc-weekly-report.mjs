#!/usr/bin/env node
/**
 * Phase 1 — Measure: Google Search Console weekly report + rewrite candidates.
 *
 * Env (optional — falls back to heuristic age-based candidates):
 *   GSC_SITE_URL=https://techhind.in/
 *   GSC_SERVICE_ACCOUNT_JSON=<raw JSON string of Google service account>
 *
 * Usage:
 *   node scripts/gsc-weekly-report.mjs
 *   node scripts/gsc-weekly-report.mjs --days=28
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import {
  OUTPUT_DIR,
  CANDIDATES_PATH,
  todayISO,
  ensureDir,
  writeJson,
  loadBlogPosts,
  daysSince,
  appendGithubOutput,
} from "./lib/seo-common.mjs";

const args = process.argv.slice(2);
const daysArg = Number(args.find((a) => a.startsWith("--days="))?.slice(7) || 28);
const SITE =
  process.env.GSC_SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://techhind.in/";
const siteUrl = SITE.endsWith("/") ? SITE : `${SITE}/`;

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function loadServiceAccount() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    // Sometimes stored base64
    try {
      return JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
    } catch {
      throw new Error("GSC_SERVICE_ACCOUNT_JSON is not valid JSON/base64 JSON");
    }
  }
}

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(unsigned);
  sign.end();
  const signature = sign
    .sign(sa.private_key)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const jwt = `${unsigned}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`Token exchange failed: ${res.status} ${await res.text()}`);
  }
  const json = await res.json();
  return json.access_token;
}

async function querySearchAnalytics(token, body) {
  const encoded = encodeURIComponent(siteUrl);
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encoded}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
  if (!res.ok) {
    throw new Error(`GSC query failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

function heuristicCandidates(posts) {
  return posts
    .filter((p) => p.status === "published")
    .map((p) => {
      const age = daysSince(p.updated || p.date);
      return {
        slug: p.slug,
        path: `/blog/${p.slug}`,
        title: p.title,
        reason: age >= 21 ? "age>=21d_no_gsc" : "age<21d_watch",
        impressions: null,
        clicks: null,
        ctr: null,
        score: age,
      };
    })
    .filter((c) => c.score >= 21)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function fromGscPages(rows, posts) {
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const candidates = [];
  for (const row of rows || []) {
    const page = row.keys?.[0] || "";
    const m = page.match(/\/blog\/([^/?#]+)/);
    if (!m) continue;
    const slug = m[1];
    if (!bySlug.has(slug)) continue;
    const clicks = row.clicks || 0;
    const impressions = row.impressions || 0;
    const ctr = row.ctr || 0;
    const age = daysSince(bySlug.get(slug).updated || bySlug.get(slug).date);
    let reason = null;
    if (impressions >= 30 && clicks === 0 && age >= 14) reason = "impressions_no_clicks";
    else if (impressions >= 50 && ctr < 0.02 && age >= 14) reason = "low_ctr";
    else if (impressions < 5 && age >= 21) reason = "stale_low_impressions";
    if (!reason) continue;
    candidates.push({
      slug,
      path: `/blog/${slug}`,
      title: bySlug.get(slug).title,
      reason,
      impressions,
      clicks,
      ctr: Number((ctr * 100).toFixed(2)),
      score: impressions * (1 - ctr) + age,
    });
  }
  return candidates.sort((a, b) => b.score - a.score).slice(0, 10);
}

function renderMarkdown({ mode, queries, pages, candidates, startDate, endDate }) {
  const lines = [
    `# GSC / SEO weekly measure — ${todayISO()}`,
    "",
    `- Site: ${siteUrl}`,
    `- Window: ${startDate} → ${endDate}`,
    `- Mode: **${mode}**`,
    "",
    "## Rewrite candidates (top)",
    "",
  ];
  if (!candidates.length) {
    lines.push("- (none this week)");
  } else {
    for (const c of candidates) {
      lines.push(
        `- \`${c.slug}\` — ${c.reason}` +
          (c.impressions != null
            ? ` · ${c.impressions} impr / ${c.clicks} clicks / ${c.ctr}% CTR`
            : ` · ageScore ${c.score}`),
      );
    }
  }

  if (mode === "gsc") {
    lines.push("", "## Top queries", "");
    for (const row of (queries || []).slice(0, 15)) {
      const q = row.keys?.[0] || "";
      lines.push(
        `- ${q} — ${row.clicks || 0} clicks / ${row.impressions || 0} impr / ${((row.ctr || 0) * 100).toFixed(1)}% CTR`,
      );
    }
    lines.push("", "## Top pages", "");
    for (const row of (pages || []).slice(0, 15)) {
      const p = row.keys?.[0] || "";
      lines.push(
        `- ${p} — ${row.clicks || 0} clicks / ${row.impressions || 0} impr`,
      );
    }
  } else {
    lines.push(
      "",
      "## Setup GSC API (to upgrade from heuristic mode)",
      "",
      "1. Create a Google Cloud service account with Search Console API enabled.",
      "2. Add the SA email as a user in Google Search Console (Full or Restricted).",
      "3. Set GitHub secrets:",
      "   - `GSC_SERVICE_ACCOUNT_JSON` — full SA JSON",
      "   - `GSC_SITE_URL` — e.g. `https://techhind.in/`",
      "",
    );
  }

  lines.push(
    "",
    "## Manual GSC follow-ups",
    "",
    "- Refresh sitemap: https://techhind.in/sitemap.xml",
    "- URL Inspection for new/rewritten `/blog/*` URLs",
    "",
  );
  return lines.join("\n");
}

async function main() {
  const posts = loadBlogPosts();
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - daysArg);
  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);

  let mode = "heuristic";
  let queries = [];
  let pages = [];
  let candidates = [];

  const sa = loadServiceAccount();
  if (sa?.client_email && sa?.private_key) {
    try {
      const token = await getAccessToken(sa);
      const common = {
        startDate,
        endDate,
        rowLimit: 25,
      };
      const qRes = await querySearchAnalytics(token, {
        ...common,
        dimensions: ["query"],
      });
      const pRes = await querySearchAnalytics(token, {
        ...common,
        dimensions: ["page"],
      });
      queries = qRes.rows || [];
      pages = pRes.rows || [];
      candidates = fromGscPages(pages, posts);
      mode = "gsc";
      console.log(`GSC OK — ${queries.length} queries, ${pages.length} pages`);
    } catch (err) {
      console.warn(`GSC failed, falling back to heuristic: ${err.message}`);
      candidates = heuristicCandidates(posts);
    }
  } else {
    console.log("No GSC_SERVICE_ACCOUNT_JSON — heuristic rewrite candidates");
    candidates = heuristicCandidates(posts);
  }

  ensureDir(OUTPUT_DIR);
  const reportPath = path.join(OUTPUT_DIR, `gsc-weekly-${todayISO()}.md`);
  const md = renderMarkdown({ mode, queries, pages, candidates, startDate, endDate });
  fs.writeFileSync(reportPath, md + "\n");
  writeJson(CANDIDATES_PATH, {
    generatedAt: new Date().toISOString(),
    mode,
    siteUrl,
    window: { startDate, endDate },
    candidates,
  });

  console.log(`Wrote ${reportPath}`);
  console.log(`Wrote ${CANDIDATES_PATH} (${candidates.length} candidates)`);
  appendGithubOutput({
    mode,
    candidates: candidates.length,
    report: path.relative(path.resolve(OUTPUT_DIR, "../.."), reportPath),
    top_slug: candidates[0]?.slug || "",
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
