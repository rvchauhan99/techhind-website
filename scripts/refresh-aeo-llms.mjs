#!/usr/bin/env node
/**
 * Phase 4 — Refresh public/llms.txt and llms-full.txt from handbook + site facts.
 *
 * Usage:
 *   node scripts/refresh-aeo-llms.mjs
 *   node scripts/refresh-aeo-llms.mjs --dry-run
 */

import fs from "node:fs";
import path from "node:path";
import {
  PUBLIC_DIR,
  HANDBOOK_DIR,
  todayISO,
  loadBlogPosts,
  appendGithubOutput,
} from "./lib/seo-common.mjs";

const dryRun = process.argv.includes("--dry-run");

function readSafe(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function buildLlmsTxt(posts) {
  const overview = readSafe(path.join(HANDBOOK_DIR, "01-executive-overview.md"));
  const about =
    overview.match(/## What Is TechHind Solar CRM\?\n\n([\s\S]*?)\n\n##/)?.[1]?.trim() ||
    "techHind is a complete Solar Management System for Indian EPC companies.";

  const blogLines = posts
    .filter((p) => p.status === "published")
    .slice(0, 12)
    .map((p) => `- ${p.title}: https://techhind.in/blog/${p.slug}`)
    .join("\n");

  return `# techHind

> Complete Solar Management System for EPC companies in India

## About

${about}

techHind (Techhind Private Limited) is a cloud Solar CRM built exclusively for Indian solar EPC companies, distributors, and integrators.

## Integrated Modules

- **Marketing Leads & Meta** — Kanban pipeline with Facebook/Instagram Lead Ads sync
- **Inquiry Management** — Lead-to-inquiry conversion with DISCOM and site visits
- **Quotations** — GST-ready PDF proposals with manager approval
- **Order Lifecycle** — Quotation to confirmed order with document collection
- **Fabrication & Installation** — Serial capture, manager sign-off, delivery challans
- **Payments & Outstanding** — Payment recording, audit, and follow-up reminders
- **Procurement & Inventory** — Purchase orders, stock, serialized panel/inverter tracking
- **Production / Assembly** — Versioned BOMs, work orders, picklists, kit booking into finished goods
- **B2B Trading** — Dealer quotes, orders, shipments, and invoices
- **Commission Management** — Partner incentives with approval and payout
- **Service & Warranty** — Tickets, warranty claims, and spare parts
- **Reports & Audit** — Dashboards, analytics, and document audit trails
- **Document Outputs** — Quotation PDFs, challans, invoices, warranty cards

## 8-Stage Workflow

Lead Capture → Inquiry Qualification → Site Assessment → Commercial Proposal → Order Confirmation → Field Execution → Financial Closure → After-Sales Service

## Pricing

https://techhind.in/pricing — Plans from ₹12,999/month

## Platform Handbook (PDF)

https://techhind.in/TechHind-Solar-CRM-Handbook.pdf

## Contact

- Email: contact@techhind.in
- Phone: +91-8485949461
- Demo: https://demo.techhind.in/auth/preview

## Key Pages

- Homepage: https://techhind.in/
- Solar CRM: https://techhind.in/solar-crm
- Solar EPC Software: https://techhind.in/solar-epc-software
- Solar CRM vs Zoho: https://techhind.in/solar-crm-vs-zoho
- Blog: https://techhind.in/blog
- RSS: https://techhind.in/rss.xml
- Features: https://techhind.in/features
- Lead Management: https://techhind.in/features/solar-lead-management
- Quotations: https://techhind.in/features/solar-quotation-software
- Order Management: https://techhind.in/features/solar-order-management
- Inventory: https://techhind.in/features/solar-inventory-software
- Production / Assembly: https://techhind.in/features/solar-production-assembly
- B2B Trading: https://techhind.in/features/b2b-solar-trading
- Payments: https://techhind.in/features/solar-payment-tracking
- Service & Warranty: https://techhind.in/features/solar-service-warranty
- Pricing: https://techhind.in/pricing

## Recent Blog Posts

${blogLines || "- https://techhind.in/blog"}

## Extended Documentation

- AI crawler index: https://techhind.in/ai.txt
- Full FAQ and module details: https://techhind.in/llms-full.txt

<!-- refreshed: ${todayISO()} -->
`;
}

function buildLlmsFull(posts) {
  const caps = readSafe(path.join(HANDBOOK_DIR, "02-platform-capabilities.md")).slice(0, 8000);
  const exec = readSafe(path.join(HANDBOOK_DIR, "01-executive-overview.md")).slice(0, 6000);
  const blog = posts
    .filter((p) => p.status === "published")
    .map((p) => `### ${p.title}\n${p.description}\nURL: https://techhind.in/blog/${p.slug}\n`)
    .join("\n");

  return `# techHind — Full AI / AEO context

Last refreshed: ${todayISO()}

## Executive overview

${exec}

## Platform capabilities

${caps}

## Blog index

${blog}

## Canonical product pages

- https://techhind.in/solar-crm
- https://techhind.in/solar-epc-software
- https://techhind.in/solar-crm-vs-zoho
- https://techhind.in/features
- https://techhind.in/pricing
- https://techhind.in/blog
`;
}

function main() {
  const posts = loadBlogPosts();
  const llms = buildLlmsTxt(posts);
  const full = buildLlmsFull(posts);
  const llmsPath = path.join(PUBLIC_DIR, "llms.txt");
  const fullPath = path.join(PUBLIC_DIR, "llms-full.txt");

  if (dryRun) {
    console.log(llms.slice(0, 500) + "\n...");
    appendGithubOutput({ changed: "false", dry_run: "true" });
    return;
  }

  fs.writeFileSync(llmsPath, llms);
  fs.writeFileSync(fullPath, full);
  console.log(`Updated ${llmsPath}`);
  console.log(`Updated ${fullPath}`);
  appendGithubOutput({ changed: "true" });
}

main();
