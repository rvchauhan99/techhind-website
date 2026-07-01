#!/usr/bin/env node
/**
 * One-command live check for SEO, AEO, and core site health.
 * Usage: npm run verify:live
 *        SITE_URL=https://techhind.in npm run verify:live
 */

import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const SITE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://techhind.in").replace(/\/$/, "");
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-ENF5GKMCX2";
const TIMEOUT_SEC = "15";

const FETCH_HEADERS = {
  "User-Agent": "techhind-verify-live/1.0 (+https://techhind.in)",
  Accept: "*/*",
};

const STATIC_PATHS = [
  "/",
  "/pricing",
  "/features",
  "/privacy-policy",
  "/terms-conditions",
  "/data-deletion",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/llms-full.txt",
  "/ai.txt",
  "/og-image.png",
  "/logo.png",
  "/favicon.ico",
  "/TechHind-Solar-CRM-Handbook.pdf",
];

const FEATURE_SLUGS = [
  "solar-lead-management",
  "solar-quotation-software",
  "solar-order-management",
  "solar-inventory-software",
  "b2b-solar-trading",
  "solar-payment-tracking",
  "solar-service-warranty",
];

let failed = 0;
let passed = 0;

function ok(msg) {
  passed += 1;
  console.log(`  OK   ${msg}`);
}

function fail(msg) {
  failed += 1;
  console.log(`  FAIL ${msg}`);
}

function formatErr(err) {
  const stderr = err?.stderr?.toString?.().trim();
  if (stderr) return stderr.split("\n")[0];
  const cause = err?.cause;
  if (cause?.code) return `${cause.code}: ${cause.message || err.message}`;
  return err?.message || String(err);
}

async function curlStatus(url, { follow = true } = {}) {
  if (follow) {
    const { stdout } = await execFileAsync("curl", [
      "-4",
      "-sI",
      "-o",
      "/dev/null",
      "-w",
      "%{http_code}",
      "--max-time",
      TIMEOUT_SEC,
      "-L",
      "--max-redirs",
      "5",
      url,
    ]);
    return { status: Number.parseInt(stdout.trim(), 10), headers: new Headers() };
  }

  const { stdout } = await execFileAsync("curl", ["-4", "-sI", "--max-time", TIMEOUT_SEC, url]);
  const statusMatch = stdout.match(/^HTTP\/\S+\s+(\d+)/m);
  const locMatch = stdout.match(/^location:\s*(.+)$/im);
  const headers = new Headers();
  if (locMatch) headers.set("location", locMatch[1].trim());
  return {
    status: statusMatch ? Number.parseInt(statusMatch[1], 10) : 0,
    headers,
  };
}

async function curlText(url) {
  const { stdout } = await execFileAsync("curl", ["-4", "-sL", "--max-time", "25", url]);
  return stdout;
}

async function fetchStatus(url, { follow = true, method = "HEAD" } = {}) {
  const res = await fetch(url, {
    method,
    headers: FETCH_HEADERS,
    redirect: follow ? "follow" : "manual",
    signal: AbortSignal.timeout(Number(TIMEOUT_SEC) * 1000),
  });
  if (method === "GET" && res.body) {
    await res.body.cancel();
  }
  return { status: res.status, url: res.url, headers: res.headers };
}

async function requestStatus(url, { follow = true } = {}) {
  const attempts = [
    () => fetchStatus(url, { follow, method: "HEAD" }),
    () => fetchStatus(url, { follow, method: "GET" }),
    () => curlStatus(url, { follow }),
  ];

  let lastErr;
  for (const attempt of attempts) {
    try {
      return await attempt();
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

async function requestText(url) {
  try {
    const res = await fetch(url, {
      headers: FETCH_HEADERS,
      signal: AbortSignal.timeout(25000),
    });
    if (!res.ok) return { status: res.status, text: "" };
    return { status: res.status, text: await res.text() };
  } catch (fetchErr) {
    try {
      const text = await curlText(url);
      return { status: 200, text };
    } catch (curlErr) {
      throw fetchErr.cause ? fetchErr : curlErr;
    }
  }
}

async function checkUrl(path) {
  const url = `${SITE_URL}${path}`;
  try {
    const { status } = await requestStatus(url, { follow: true });
    if (status >= 200 && status < 400) ok(`${path} → ${status}`);
    else fail(`${path} → HTTP ${status}`);
  } catch (err) {
    fail(`${path} → ${formatErr(err)}`);
  }
}

async function main() {
  console.log(`\nLive verification for ${SITE_URL}\n`);

  console.log("Core pages & assets");
  for (const path of STATIC_PATHS) await checkUrl(path);
  for (const slug of FEATURE_SLUGS) await checkUrl(`/features/${slug}`);

  console.log("\nRedirects");
  try {
    const www = await requestStatus("https://www.techhind.in/", { follow: false });
    if (www.status === 301 || www.status === 308) {
      const loc = www.headers.get("location") || "";
      if (!loc || loc.startsWith(`${SITE_URL}/`) || loc === `${SITE_URL}/`) {
        ok(`www → apex (${www.status}${loc ? ` → ${loc}` : ""})`);
      } else {
        fail(`www redirect location unexpected: ${loc}`);
      }
    } else fail(`www.techhind.in → HTTP ${www.status} (expected 301/308)`);
  } catch (err) {
    fail(`www redirect → ${formatErr(err)}`);
  }

  console.log("\nSitemap");
  try {
    const { status, text } = await requestText(`${SITE_URL}/sitemap.xml`);
    if (status !== 200) {
      fail(`sitemap.xml → HTTP ${status}`);
    } else {
      const count = (text.match(/<loc>/g) || []).length;
      if (count >= 13) ok(`sitemap.xml has ${count} URLs`);
      else fail(`sitemap.xml has only ${count} URLs (expected ≥13)`);
      if (!text.includes(`${SITE_URL}/features`)) fail("sitemap missing /features");
      else ok("sitemap includes /features");
    }
  } catch (err) {
    fail(`sitemap.xml → ${formatErr(err)}`);
  }

  console.log("\nAEO files");
  try {
    const { text: aiTxt } = await requestText(`${SITE_URL}/ai.txt`);
    for (const needle of ["llms.txt", "llms-full.txt", "sitemap.xml", "contact@techhind.in"]) {
      if (aiTxt.includes(needle)) ok(`ai.txt mentions ${needle}`);
      else fail(`ai.txt missing ${needle}`);
    }
  } catch (err) {
    fail(`ai.txt content → ${formatErr(err)}`);
  }

  console.log("\nAnalytics");
  try {
    const { text: html } = await requestText(`${SITE_URL}/`);
    if (html.includes(GA_ID)) ok(`homepage includes GA ID ${GA_ID}`);
    else fail(`homepage missing GA ID ${GA_ID}`);
  } catch (err) {
    fail(`homepage GA check → ${formatErr(err)}`);
  }

  console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
  if (failed > 0) {
    console.log(
      "Troubleshooting (site works in browser but script fails):\n" +
        "  1. curl -4 -sI https://techhind.in/\n" +
        "  2. node -v   (use Node 18+)\n" +
        "  3. Check VPN/firewall — allow Terminal network access\n" +
        "  4. Try on another network or disable VPN briefly\n"
    );
  }
  process.exit(failed > 0 ? 1 : 0);
}

main();
