import fs from "node:fs";
import path from "node:path";

export type BlogFrontmatter = {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  keywords?: string[];
  status: "draft" | "published";
  author?: string;
};

export type BlogPost = BlogFrontmatter & {
  body: string;
  readingMinutes: number;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, body: raw.trim() };
  }

  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
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
    value = value.replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, body: match[2].trim() };
}

function estimateReadingMinutes(body: string): number {
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function toPost(filePath: string): BlogPost | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const slug =
    (typeof data.slug === "string" && data.slug) ||
    path.basename(filePath).replace(/\.(md|mdx)$/, "");

  if (!data.title || typeof data.title !== "string") return null;
  if (!data.description || typeof data.description !== "string") return null;

  const status = data.status === "draft" ? "draft" : "published";

  return {
    title: data.title,
    description: data.description,
    slug,
    date: typeof data.date === "string" ? data.date : "1970-01-01",
    updated: typeof data.updated === "string" ? data.updated : undefined,
    keywords: Array.isArray(data.keywords)
      ? data.keywords
      : typeof data.keywords === "string"
        ? data.keywords.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
    status,
    author: typeof data.author === "string" ? data.author : "techHind",
    body,
    readingMinutes: estimateReadingMinutes(body),
  };
}

export function getAllBlogPosts(options?: { includeDrafts?: boolean }): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => (f.endsWith(".md") || f.endsWith(".mdx")) && !f.startsWith(".") && f !== "README.md");

  const posts = files
    .map((f) => toPost(path.join(BLOG_DIR, f)))
    .filter((p): p is BlogPost => Boolean(p))
    .filter((p) => (options?.includeDrafts ? true : p.status === "published"))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getBlogPostBySlug(
  slug: string,
  options?: { includeDrafts?: boolean }
): BlogPost | null {
  return getAllBlogPosts(options).find((p) => p.slug === slug) ?? null;
}

export function getBlogSlugs(options?: { includeDrafts?: boolean }): string[] {
  return getAllBlogPosts(options).map((p) => p.slug);
}

/** Minimal Markdown → safe HTML for blog bodies (no external deps). */
export function markdownToHtml(md: string): string {
  const escaped = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const lines = escaped.split(/\r?\n/);
  const html: string[] = [];
  let inList = false;
  let inPara = false;

  const closePara = () => {
    if (inPara) {
      html.push("</p>");
      inPara = false;
    }
  };
  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  const inline = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g,
        '<a href="$2" class="text-[#00823b] font-semibold underline-offset-2 hover:underline">$1</a>'
      );

  for (const line of lines) {
    if (!line.trim()) {
      closePara();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closePara();
      closeList();
      const level = heading[1].length;
      const tag = `h${level + 1}`; // h2–h4 under page h1
      const cls =
        level === 1
          ? "text-2xl font-bold text-[#0d1b2e] mt-10 mb-3"
          : level === 2
            ? "text-xl font-bold text-[#0d1b2e] mt-8 mb-3"
            : "text-lg font-bold text-[#0d1b2e] mt-6 mb-2";
      html.push(`<${tag} class="${cls}">${inline(heading[2])}</${tag}>`);
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      closePara();
      if (!inList) {
        html.push('<ul class="list-disc pl-5 space-y-2 my-4 text-gray-600">');
        inList = true;
      }
      html.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    closeList();
    if (!inPara) {
      html.push('<p class="text-gray-600 leading-relaxed mb-4">');
      inPara = true;
      html.push(inline(line));
    } else {
      html.push(` ${inline(line)}`);
    }
  }

  closePara();
  closeList();
  return html.join("\n");
}
