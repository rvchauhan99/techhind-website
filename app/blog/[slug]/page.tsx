import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbStructuredData from "../../components/structured-data/BreadcrumbStructuredData";
import BlogArticleStructuredData from "../../components/structured-data/BlogArticleStructuredData";
import { buildPageMetadata } from "../../config/metadata";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  markdownToHtml,
} from "../../lib/blog";
import { siteData } from "../../data/siteData";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const post = getBlogPostBySlug(resolved.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const post = getBlogPostBySlug(resolved.slug);
  if (!post) notFound();

  const html = markdownToHtml(post.body);
  const demoUrl = siteData.navigation.demoUrl;

  return (
    <main className="min-h-screen bg-white">
      <BlogArticleStructuredData post={post} />
      <BreadcrumbStructuredData
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Header />

      <article className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            href="/blog"
            className="text-sm text-[#00823b] font-semibold hover:underline"
          >
            ← All posts
          </Link>
          <h1 className="text-4xl font-extrabold text-[#0d1b2e] mt-4 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-10">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
            {post.author ? (
              <>
                <span>·</span>
                <span>{post.author}</span>
              </>
            ) : null}
          </div>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <div className="mt-12 p-6 rounded-xl bg-[#f8fafc] border border-gray-200">
            <h2 className="text-xl font-bold text-[#0d1b2e] mb-2">
              Ready to see techHind Solar CRM?
            </h2>
            <p className="text-gray-600 mb-4">
              14-day free trial. Book a quick demo for your EPC workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#00823b] text-white rounded-xl font-bold"
              >
                Book a Demo
              </Link>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#1b365d] text-[#1b365d] rounded-xl font-semibold"
              >
                Try Live Demo
              </a>
              <Link
                href="/solar-crm"
                className="inline-flex items-center justify-center px-6 py-3 text-[#00823b] font-semibold hover:underline"
              >
                Solar CRM overview
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
