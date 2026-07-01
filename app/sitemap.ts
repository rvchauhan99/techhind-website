import type { MetadataRoute } from "next";
import { SITE_URL } from "./config/siteUrl";
import { SITEMAP_LAST_MODIFIED } from "./config/sitemapDates";
import { featureSlugs } from "./data/platformFeatures";

export default function sitemap(): MetadataRoute.Sitemap {
  const featureEntries = featureSlugs.map((slug) => ({
    url: `${SITE_URL}/features/${slug}`,
    lastModified: SITEMAP_LAST_MODIFIED[`/features/${slug}`] ?? "2026-07-01",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: SITEMAP_LAST_MODIFIED["/"],
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/features`,
      lastModified: SITEMAP_LAST_MODIFIED["/features"],
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...featureEntries,
    {
      url: `${SITE_URL}/pricing`,
      lastModified: SITEMAP_LAST_MODIFIED["/pricing"],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: SITEMAP_LAST_MODIFIED["/privacy-policy"],
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-conditions`,
      lastModified: SITEMAP_LAST_MODIFIED["/terms-conditions"],
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/data-deletion`,
      lastModified: SITEMAP_LAST_MODIFIED["/data-deletion"],
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
