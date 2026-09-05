#!/usr/bin/env node
/**
 * Weekly SEO blog generator (full-auto friendly).
 * - Picks next unused keyword from data/seo-keywords.json
 * - Grounds copy in platform-handbook + llms.txt
 * - Writes content/blog/<slug>.md with status: published
 * - Appends content/blog/.weekly-log.md
 *
 * Usage:
 *   node scripts/weekly-seo-blog.mjs
 *   node scripts/weekly-seo-blog.mjs --dry-run
 *   node scripts/weekly-seo-blog.mjs --keyword="solar CRM India"
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content", "blog");
const KEYWORDS_PATH = path.join(ROOT, "data", "seo-keywords.json");
const LOG_PATH = path.join(ROOT, "data", "seo-weekly-log.md");
const HANDBOOK_DIR = path.join(ROOT, "platform-handbook");
const LLMS_PATH = path.join(ROOT, "public", "llms.txt");
const PRODUCTION_MODULE_PATH = path.join(
  HANDBOOK_DIR,
  "modules",
  "18-production-assembly.md",
);

const PRODUCTION_KEYWORD_RE =
  /production|bom|work\s*order|assembly|kit|manufactur|finished\s*good/i;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const keywordArg = args.find((a) => a.startsWith("--keyword="))?.slice(10);

function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function listBlogFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith(".") && f !== "README.md")
    .map((f) => path.join(BLOG_DIR, f));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const idx = trimmed.indexOf(":");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }
    data[key] = value.replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

function collectUsedKeywordsAndSlugs() {
  const usedKeywords = new Set();
  const usedSlugs = new Set();

  for (const file of listBlogFiles()) {
    const raw = fs.readFileSync(file, "utf8");
    const { data } = parseFrontmatter(raw);
    const slug = data.slug || path.basename(file, ".md");
    usedSlugs.add(String(slug).toLowerCase());

    if (Array.isArray(data.keywords)) {
      for (const k of data.keywords) usedKeywords.add(String(k).toLowerCase());
    }
  }

  return { usedKeywords, usedSlugs };
}

function isProductionKeyword(keyword) {
  return PRODUCTION_KEYWORD_RE.test(String(keyword));
}

function loadHandbookSnippets() {
  const snippets = [];
  const files = [
    path.join(HANDBOOK_DIR, "01-executive-overview.md"),
    path.join(HANDBOOK_DIR, "02-platform-capabilities.md"),
    PRODUCTION_MODULE_PATH,
    LLMS_PATH,
  ];
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8").slice(0, 3500);
    snippets.push(`### ${path.basename(file)}\n${text}`);
  }
  return snippets.join("\n\n");
}

function pickBulletFacts(text, limit = 6) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- ") || l.startsWith("* ") || l.startsWith("**"));
  const cleaned = lines
    .map((l) => l.replace(/^[-*]\s+/, "").replace(/\*\*/g, ""))
    .filter((l) => l.length > 20 && l.length < 180);
  return [...new Set(cleaned)].slice(0, limit);
}

function titleFromKeyword(keyword) {
  const base = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  return `${base}: Full Solar CRM & Management System for Indian EPCs`;
}

function buildGenericPath() {
  return `1. Lead / Meta ads → inquiry → site visit
2. GST quotation → order confirmation
3. Procurement, warehouse, serial tracking
4. Installation, delivery challans, payments
5. B2B dealer flow and after-sales service where needed`;
}

function buildProductionPath() {
  return `1. Procurement brings components into warehouse stock
2. Activate a versioned **BOM** recipe for the finished good
3. Create and approve a **work order** (BOM snapshot frozen)
4. Print shortage-aware **picklist**, then post **assembly booking**
5. Finished goods land in stock with cost roll-up — ready for B2B dispatch or project install
6. Sales, payments, and after-sales continue in the same Solar CRM`;
}

function prioritizeLinks(links, keyword) {
  if (!isProductionKeyword(keyword)) return links;
  const preferred = "/features/solar-production-assembly";
  const rest = links.filter((href) => href !== preferred);
  return [preferred, ...rest];
}

function buildPost({ keyword, facts, links }) {
  const productionIntent = isProductionKeyword(keyword);
  const orderedLinks = prioritizeLinks(links, keyword);
  const linkLines = orderedLinks
    .slice(0, 8)
    .map((href) => `- [${href}](${href})`)
    .join("\n");
  const defaultFacts = productionIntent
    ? [
        "Versioned BOM Master with material and operation standard costs",
        "Work orders with approval-gated BOM snapshot freeze",
        "Atomic production booking — component issue + finished-good receipt",
        "Serial genealogy from finished good back to consumed component serials",
        "Complete Solar CRM lifecycle from lead to after-sales alongside kit assembly",
      ]
    : [
        "Complete lifecycle from marketing lead to after-sales service",
        "Built for Indian solar EPC — DISCOM, subsidy docs, panel/inverter serial tracking",
        "Role-based workspaces for sales, warehouse, finance, and field teams",
        "B2B dealer quotes, orders, shipments, and invoices in one system",
      ];
  const factLines = (facts.length ? facts : defaultFacts)
    .map((f) => `- ${f}`)
    .join("\n");

  const title = titleFromKeyword(keyword);
  const description = productionIntent
    ? `Learn how Indian Solar EPC companies use ${keyword} inside a complete Solar CRM — BOM, work orders, kit assembly, finished goods, inventory, B2B, and lead-to-install.`
    : `Learn how Indian Solar EPC companies use ${keyword} as part of a complete Solar CRM / Solar Management System — lead to install, stock, B2B, payments, and AMC.`;
  const slug = slugify(keyword);
  const date = todayISO();
  const pathSteps = productionIntent ? buildProductionPath() : buildGenericPath();
  const featureCta = productionIntent
    ? `See [Production / Assembly](/features/solar-production-assembly), then the [Solar CRM overview](/solar-crm), [Solar EPC software](/solar-epc-software), [inventory](/features/solar-inventory-software), [features](/features), and [pricing](/pricing).`
    : `Start with the [Solar CRM overview](/solar-crm), then [Solar EPC software](/solar-epc-software), [Solar CRM vs Zoho](/solar-crm-vs-zoho), [features](/features), and [pricing](/pricing).`;
  const introExtra = productionIntent
    ? " That includes in-house **kit assembly** (BOM → work order → picklist → booking) — not only field fabrication."
    : "";
  const faqExtra = productionIntent
    ? `

### Is production the same as field fabrication?
No. Production / Assembly is warehouse kitting into finished goods. Fabrication & Installation tracks project site build and install after the sale.`
    : "";

  const body = `When teams search for **${keyword}**, they often need more than one module. Indian Solar EPC companies need a **complete Solar CRM / Solar Management System** — from lead capture through installation, inventory, B2B trading, payments, and after-sales — not a quotes-only or spreadsheets stack.${introExtra}

## Why WhatsApp + Excel + generic CRM break at scale

As rooftop and commercial volume grows, follow-ups slip, quotations disconnect from orders, stock and serials drift, and finance cannot see outstanding cleanly. Buying a single-purpose tool recreates the same fragmentation.

## What a full platform must cover

techHind Solar CRM is built as an end-to-end Solar Management System for EPC companies, distributors, and integrators:

${factLines}

## How ${keyword} fits inside techHind

Treat **${keyword}** as a search intent that maps to the broader platform — not a standalone product. Evaluate the full path:

${pathSteps}

${featureCta}

### Related pages
${linkLines}

## Practical next step

Book a demo of the **full lead-to-install walkthrough** (not only one screen), or start the 14-day free trial. Judge the system on daily EPC ops.

## FAQ

### Is techHind only for ${keyword}?
No. That phrase may describe one pain. techHind covers the full Solar EPC lifecycle as a Solar Management System.${faqExtra}

### How is this different from Zoho or a point tool?
Generic CRM and single-module apps leave stock, serials, dealer trading, and service fragmented. techHind connects those workflows in one India-first platform.

### Does techHind offer a free trial?
Yes — 14 days, no payment required.
`;

  const markdown = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
slug: "${slug}"
date: "${date}"
status: "published"
author: "techHind"
keywords: ["${keyword}", "solar CRM India", "solar management system India"]
---

${body}
`;

  return { slug, title, markdown, date };
}

function appendLog(entry) {
  const header = `# Weekly SEO auto-publish log\n\n`;
  let existing = "";
  if (fs.existsSync(LOG_PATH)) {
    existing = fs.readFileSync(LOG_PATH, "utf8");
    if (!existing.startsWith("#")) existing = header + existing;
  } else {
    existing = header;
  }
  fs.writeFileSync(LOG_PATH, `${existing.trimEnd()}\n- ${entry}\n`);
}

function main() {
  if (!fs.existsSync(KEYWORDS_PATH)) {
    console.error(`Missing ${KEYWORDS_PATH}`);
    process.exit(1);
  }

  const kwData = readJson(KEYWORDS_PATH);
  const queue = [...(kwData.head || []), ...(kwData.supporting || [])];
  const { usedKeywords, usedSlugs } = collectUsedKeywordsAndSlugs();

  let keyword = keywordArg || null;
  if (keyword) {
    const slug = slugify(keyword);
    if (usedSlugs.has(slug)) {
      console.log(`SKIP: slug already exists for --keyword (${slug})`);
      process.exit(0);
    }
  } else {
    keyword = queue.find((k) => {
      const slug = slugify(k);
      if (usedSlugs.has(slug)) return false;
      if (usedKeywords.has(k.toLowerCase())) return false;
      return true;
    });
  }

  if (!keyword) {
    console.log("NO_KEYWORD_LEFT: all queued keywords already have posts. Exiting 0.");
    const githubOut = process.env.GITHUB_OUTPUT;
    if (githubOut) {
      fs.appendFileSync(githubOut, "changed=false\n");
      fs.appendFileSync(githubOut, "keyword=\n");
      fs.appendFileSync(githubOut, "slug=\n");
    }
    process.exit(0);
  }

  const handbook = loadHandbookSnippets();
  const facts = pickBulletFacts(handbook);
  const links = kwData.internalLinks || [];
  const post = buildPost({ keyword, facts, links });

  const outFile = path.join(BLOG_DIR, `${post.slug}.md`);
  if (fs.existsSync(outFile)) {
    console.log(`SKIP: file already exists ${outFile}`);
    process.exit(0);
  }

  console.log(`Keyword: ${keyword}`);
  console.log(`Slug:    ${post.slug}`);
  console.log(`File:    ${outFile}`);

  if (dryRun) {
    console.log("\n--- DRY RUN (not written) ---\n");
    console.log(post.markdown.slice(0, 1200) + "\n...");
    process.exit(0);
  }

  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(outFile, post.markdown);
  appendLog(
    `${post.date} | published | \`${post.slug}\` | keyword: ${keyword} | auto weekly-seo-blog`,
  );

  // Machine-readable output for GitHub Actions
  const githubOut = process.env.GITHUB_OUTPUT;
  if (githubOut) {
    fs.appendFileSync(githubOut, `slug=${post.slug}\n`);
    fs.appendFileSync(githubOut, `keyword=${keyword}\n`);
    fs.appendFileSync(githubOut, `title=${post.title}\n`);
    fs.appendFileSync(githubOut, `changed=true\n`);
  }

  console.log("Wrote published post + weekly log.");
}

main();
