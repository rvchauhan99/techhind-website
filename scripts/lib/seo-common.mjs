#!/usr/bin/env node
/**
 * Shared helpers for TechHind SEO rank-loop scripts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, "../..");
export const BLOG_DIR = path.join(ROOT, "content", "blog");
export const DATA_DIR = path.join(ROOT, "data");
export const HANDBOOK_DIR = path.join(ROOT, "platform-handbook");
export const PUBLIC_DIR = path.join(ROOT, "public");
export const OUTPUT_DIR = path.join(ROOT, "data", "seo-reports");
export const CANDIDATES_PATH = path.join(DATA_DIR, "seo-rewrite-candidates.json");
export const KEYWORDS_PATH = path.join(DATA_DIR, "seo-keywords.json");

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function readJson(file, fallback = null) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function writeJson(file, data) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw, raw };
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
  return { data, body: match[2], raw };
}

export function serializeFrontmatter(data, body) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      lines.push(`${key}: [${value.map((v) => `"${String(v).replace(/"/g, '\\"')}"`).join(", ")}]`);
    } else {
      lines.push(`${key}: "${String(value).replace(/"/g, '\\"')}"`);
    }
  }
  lines.push("---", "", body.trimEnd(), "");
  return lines.join("\n");
}

export function listBlogFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith(".") && f !== "README.md")
    .map((f) => path.join(BLOG_DIR, f));
}

export function loadBlogPosts() {
  return listBlogFiles().map((fullPath) => {
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, body } = parseFrontmatter(raw);
    const slug = data.slug || path.basename(fullPath, ".md");
    return {
      fullPath,
      file: path.basename(fullPath),
      slug,
      title: data.title || slug,
      description: data.description || "",
      status: data.status || "published",
      date: data.date || "",
      updated: data.updated || "",
      keywords: Array.isArray(data.keywords) ? data.keywords : [],
      body,
      data,
      raw,
    };
  });
}

export function loadHandbookSnippets(limitPerFile = 3500) {
  const files = [
    path.join(HANDBOOK_DIR, "01-executive-overview.md"),
    path.join(HANDBOOK_DIR, "02-platform-capabilities.md"),
    path.join(PUBLIC_DIR, "llms.txt"),
  ];
  const snippets = [];
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    snippets.push(`### ${path.basename(file)}\n${fs.readFileSync(file, "utf8").slice(0, limitPerFile)}`);
  }
  return snippets.join("\n\n");
}

export function pickBulletFacts(text, limit = 6) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- ") || l.startsWith("* "));
  const cleaned = lines
    .map((l) => l.replace(/^[-*]\s+/, "").replace(/\*\*/g, ""))
    .filter((l) => l.length > 20 && l.length < 180);
  return [...new Set(cleaned)].slice(0, limit);
}

/** Ensure post body links core pillars + up to 2 sibling blog posts. */
export function enrichInternalLinks(body, { currentSlug, siblings = [] } = {}) {
  let next = body;
  const required = [
    { href: "/solar-crm", label: "Solar CRM overview" },
    { href: "/features", label: "features" },
    { href: "/pricing", label: "pricing" },
  ];
  for (const link of required) {
    if (!next.includes(`](${link.href})`) && !next.includes(`](${link.href}/)`)) {
      next += `\n\nSee also: [${link.label}](${link.href}).`;
    }
  }
  const picks = siblings
    .filter((s) => s.slug !== currentSlug && s.status !== "draft")
    .slice(0, 2);
  if (picks.length && !next.includes("### Related reading")) {
    next += "\n\n### Related reading\n";
    for (const p of picks) {
      next += `- [${p.title}](/blog/${p.slug})\n`;
    }
  }
  return next;
}

export function daysSince(isoDate) {
  if (!isoDate) return 999;
  const t = Date.parse(isoDate);
  if (Number.isNaN(t)) return 999;
  return Math.floor((Date.now() - t) / (1000 * 60 * 60 * 24));
}

export function appendGithubOutput(obj) {
  const out = process.env.GITHUB_OUTPUT;
  if (!out) return;
  for (const [k, v] of Object.entries(obj)) {
    fs.appendFileSync(out, `${k}=${String(v ?? "")}\n`);
  }
}
