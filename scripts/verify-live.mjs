#!/usr/bin/env node
/**
 * One-command live check for SEO, AEO, and core site health.
 * Usage: npm run verify:live
 *        SITE_URL=https://techhind.in npm run verify:live
 */

const SITE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://techhind.in").replace(/\/$/, "");
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-ENF5GKMCX2";

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

async function headStatus(url, { follow = false, maxRedirects = 0 } = {}) {
  const res = await fetch(url, {
    method: "HEAD",
    redirect: follow ? "follow" : "manual",
    signal: AbortSignal.timeout(15000),
  });
  return { status: res.status, url: res.url, headers: res.headers };
}

async function getText(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
  return { status: res.status, text: await res.text() };
}

async function checkUrl(path) {
  const url = `${SITE_URL}${path}`;
  try {
    const { status } = await headStatus(url, { follow: true, maxRedirects: 5 });
    if (status >= 200 && status < 400) ok(`${path} → ${status}`);
    else fail(`${path} → HTTP ${status}`);
  } catch (err) {
    fail(`${path} → ${err.message}`);
  }
}

async function main() {
  console.log(`\nLive verification for ${SITE_URL}\n`);

  console.log("Core pages & assets");
  for (const path of STATIC_PATHS) await checkUrl(path);
  for (const slug of FEATURE_SLUGS) await checkUrl(`/features/${slug}`);

  console.log("\nRedirects");
  try {
    const www = await headStatus("https://www.techhind.in/", { follow: false });
    if (www.status === 301 || www.status === 308) {
      const loc = www.headers.get("location") || "";
      if (loc.startsWith(`${SITE_URL}/`) || loc === `${SITE_URL}/`) {
        ok(`www → apex (${www.status})`);
      } else fail(`www redirect location unexpected: ${loc}`);
    } else fail(`www.techhind.in → HTTP ${www.status} (expected 301/308)`);
  } catch (err) {
    fail(`www redirect → ${err.message}`);
  }

  console.log("\nSitemap");
  try {
    const { status, text } = await getText(`${SITE_URL}/sitemap.xml`);
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
    fail(`sitemap.xml → ${err.message}`);
  }

  console.log("\nAEO files");
  try {
    const { text: aiTxt } = await getText(`${SITE_URL}/ai.txt`);
    for (const needle of ["llms.txt", "llms-full.txt", "sitemap.xml", "contact@techhind.in"]) {
      if (aiTxt.includes(needle)) ok(`ai.txt mentions ${needle}`);
      else fail(`ai.txt missing ${needle}`);
    }
  } catch (err) {
    fail(`ai.txt content → ${err.message}`);
  }

  console.log("\nAnalytics");
  try {
    const { text: html } = await getText(`${SITE_URL}/`);
    if (html.includes(GA_ID)) ok(`homepage includes GA ID ${GA_ID}`);
    else fail(`homepage missing GA ID ${GA_ID}`);
  } catch (err) {
    fail(`homepage GA check → ${err.message}`);
  }

  console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
  process.exit(failed > 0 ? 1 : 0);
}

main();
