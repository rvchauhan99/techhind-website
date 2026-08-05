import { SITE_URL } from "../../config/siteUrl";
import type { BlogPost } from "../../lib/blog";
import JsonLd from "./JsonLd";

type BlogArticleStructuredDataProps = {
  post: BlogPost;
};

export default function BlogArticleStructuredData({
  post,
}: BlogArticleStructuredDataProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: post.author || "techHind",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "techHind",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.keywords?.join(", "),
  };

  return <JsonLd data={articleSchema} />;
}
