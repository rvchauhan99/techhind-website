import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbStructuredData from "../components/structured-data/BreadcrumbStructuredData";
import { buildPageMetadata } from "../config/metadata";
import { getAllBlogPosts } from "../lib/blog";

export const metadata = buildPageMetadata({
  title: "Solar CRM Blog | Guides for Indian EPC Companies",
  description:
    "Practical guides on Solar CRM, EPC software, lead management, quotations, and operations for Indian solar companies.",
  path: "/blog",
  keywords: [
    "solar CRM blog",
    "solar EPC software guides",
    "solar CRM India",
    "solar lead management",
  ],
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbStructuredData items={[{ name: "Blog", path: "/blog" }]} />
      <Header />

      <section className="pt-28 pb-12 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-sm font-semibold text-[#00823b] mb-3 uppercase tracking-wide">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2e] mb-4">
            Solar CRM Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Practical guides for Indian Solar EPC companies — CRM, operations, and growth without the tool chaos.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-4">
          {posts.length === 0 ? (
            <p className="text-gray-600">Posts coming soon.</p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-gray-200 rounded-xl p-5 hover:border-[#00823b]/40 hover:shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="text-xl font-bold text-[#0d1b2e] mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
              </Link>
            ))
          )}

          <div className="pt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/solar-crm" className="text-[#00823b] font-semibold hover:underline">
              Solar CRM overview
            </Link>
            <Link href="/solar-epc-software" className="text-[#00823b] font-semibold hover:underline">
              Solar EPC software
            </Link>
            <Link href="/features" className="text-[#00823b] font-semibold hover:underline">
              Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
