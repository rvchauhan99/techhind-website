#!/usr/bin/env node
/**
 * Phase 3 — Enrich all published blog posts with pillar + sibling internal links.
 *
 * Usage:
 *   node scripts/enrich-blog-internal-links.mjs
 *   node scripts/enrich-blog-internal-links.mjs --dry-run
 */

import fs from "node:fs";
import {
  loadBlogPosts,
  enrichInternalLinks,
  serializeFrontmatter,
  appendGithubOutput,
} from "./lib/seo-common.mjs";

const dryRun = process.argv.includes("--dry-run");

function main() {
  const posts = loadBlogPosts().filter((p) => p.status === "published");
  let changed = 0;

  for (const post of posts) {
    const enriched = enrichInternalLinks(post.body, {
      currentSlug: post.slug,
      siblings: posts,
    });
    if (enriched.trim() === post.body.trim()) continue;
    const markdown = serializeFrontmatter(post.data, enriched);
    console.log(`Enrich: ${post.slug}`);
    if (!dryRun) {
      fs.writeFileSync(post.fullPath, markdown);
    }
    changed += 1;
  }

  console.log(`Enriched ${changed} posts${dryRun ? " (dry-run)" : ""}`);
  appendGithubOutput({ changed: String(changed) });
}

main();
