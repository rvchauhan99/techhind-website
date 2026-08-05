#!/usr/bin/env node
/**
 * Phase 2 — Improve: rewrite one underperforming blog post (RankAI-style loop).
 * Reads data/seo-rewrite-candidates.json from gsc-weekly-report.mjs
 *
 * Usage:
 *   node scripts/seo-rewrite-underperformer.mjs
 *   node scripts/seo-rewrite-underperformer.mjs --dry-run
 *   node scripts/seo-rewrite-underperformer.mjs --slug=some-slug
 */

import fs from "node:fs";
import path from "node:path";
import {
  CANDIDATES_PATH,
  todayISO,
  readJson,
  loadBlogPosts,
  loadHandbookSnippets,
  pickBulletFacts,
  enrichInternalLinks,
  serializeFrontmatter,
  appendGithubOutput,
  daysSince,
  DATA_DIR,
} from "./lib/seo-common.mjs";

const REWRITE_LOG = path.join(DATA_DIR, "seo-rewrite-log.md");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const slugArg = args.find((a) => a.startsWith("--slug="))?.slice(7);

function buildRewriteBody(post, facts, siblings) {
  const keyword = post.keywords[0] || post.title;
  const factLines = (facts.length ? facts : [
    "End-to-end solar lifecycle in one Solar Management System",
    "India-first EPC workflows — DISCOM, subsidy docs, serial tracking",
    "Role-based access for sales, warehouse, finance, and field",
  ])
    .map((f) => `- ${f}`)
    .join("\n");

  let body = `*(Updated ${todayISO()} — refreshed for clarity and search intent.)*\n\n`;
  body += `Indian Solar EPC teams researching **${keyword}** usually need more than a single-feature tool. They need a **complete Solar CRM / Solar Management System** that connects lead → site visit → quotation → order → install → stock → payments → after-sales.\n\n`;
  body += `## What changed in this refresh\n\n`;
  body += `- Stronger full-platform positioning (not a point solution)\n`;
  body += `- Clearer buyer checklist for EPC owners\n`;
  body += `- Tighter internal links to money pages\n\n`;
  body += `## Why this topic matters for EPCs\n\n`;
  body += `${post.description || "Operational chaos in WhatsApp and Excel grows as rooftop volume rises under schemes like PM Surya Ghar."}\n\n`;
  body += `## What a full Solar CRM should include\n\n${factLines}\n\n`;
  body += `## How techHind covers it\n\n`;
  body += `techHind is a Solar Management System for Indian EPC companies, distributors, and integrators. Evaluate the full path on [Solar CRM](/solar-crm), [Solar EPC software](/solar-epc-software), and [features](/features) — then [pricing](/pricing).\n\n`;
  body += `## Practical next step\n\n`;
  body += `Book a demo of the full lead-to-install walkthrough, or start a 14-day free trial. Judge daily ops — not one screen.\n\n`;
  body += `## FAQ\n\n`;
  body += `### Is techHind only about ${keyword}?\n`;
  body += `No. That search phrase is one entry point. techHind covers the full solar EPC lifecycle.\n\n`;
  body += `### Does techHind offer a free trial?\n`;
  body += `Yes — 14 days, no payment required.\n`;

  return enrichInternalLinks(body, { currentSlug: post.slug, siblings });
}

function appendLog(entry) {
  const header = `# SEO rewrite log\n\n`;
  let existing = fs.existsSync(REWRITE_LOG) ? fs.readFileSync(REWRITE_LOG, "utf8") : header;
  if (!existing.startsWith("#")) existing = header + existing;
  fs.writeFileSync(REWRITE_LOG, `${existing.trimEnd()}\n- ${entry}\n`);
}

function main() {
  const posts = loadBlogPosts().filter((p) => p.status === "published");
  const candidatesDoc = readJson(CANDIDATES_PATH, { candidates: [] });
  const candidates = candidatesDoc.candidates || [];

  let target = null;
  if (slugArg) {
    target = posts.find((p) => p.slug === slugArg);
    if (!target) {
      console.error(`Slug not found: ${slugArg}`);
      process.exit(1);
    }
  } else {
    for (const c of candidates) {
      const post = posts.find((p) => p.slug === c.slug);
      if (!post) continue;
      // Skip if rewritten in last 14 days
      if (post.updated && daysSince(post.updated) < 14) continue;
      target = post;
      target._reason = c.reason;
      break;
    }
  }

  if (!target) {
    // Fallback: oldest published post not updated recently
    const aged = [...posts]
      .filter((p) => daysSince(p.updated || p.date) >= 21)
      .sort((a, b) => daysSince(b.updated || b.date) - daysSince(a.updated || a.date));
    target = aged[0] || null;
  }

  if (!target) {
    console.log("No rewrite candidate — exiting 0");
    appendGithubOutput({ changed: "false", slug: "" });
    process.exit(0);
  }

  const facts = pickBulletFacts(loadHandbookSnippets());
  const newBody = buildRewriteBody(target, facts, posts);
  const data = {
    ...target.data,
    title: target.title,
    description: target.description,
    slug: target.slug,
    date: target.date || todayISO(),
    updated: todayISO(),
    status: "published",
    author: target.data.author || "techHind",
    keywords: target.keywords.length
      ? target.keywords
      : ["solar CRM India", "solar management system India"],
  };
  const markdown = serializeFrontmatter(data, newBody);

  console.log(`Rewrite target: ${target.slug} (${target._reason || "fallback_age"})`);
  if (dryRun) {
    console.log(markdown.slice(0, 700) + "\n...");
    appendGithubOutput({ changed: "false", slug: target.slug, dry_run: "true" });
    process.exit(0);
  }

  fs.writeFileSync(target.fullPath, markdown);
  appendLog(
    `${todayISO()} | rewrite | \`${target.slug}\` | reason: ${target._reason || "fallback_age"}`,
  );
  appendGithubOutput({ changed: "true", slug: target.slug });
  console.log(`Updated ${target.fullPath}`);
}

main();
