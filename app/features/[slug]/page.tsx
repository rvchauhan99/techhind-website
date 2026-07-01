import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FeaturePageLayout from "../../components/FeaturePageLayout";
import BreadcrumbStructuredData from "../../components/structured-data/BreadcrumbStructuredData";
import FeaturePageStructuredData from "../../components/structured-data/FeaturePageStructuredData";
import { buildPageMetadata } from "../../config/metadata";
import {
  featureSlugs,
  getFeatureBySlug,
} from "../../data/platformFeatures";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return buildPageMetadata({
    title: feature.metaTitle,
    description: feature.metaDescription,
    path: `/features/${slug}`,
    keywords: [...feature.keywords],
  });
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      <FeaturePageStructuredData feature={feature} />
      <BreadcrumbStructuredData
        items={[
          { name: "Features", path: "/features" },
          { name: feature.title, path: `/features/${slug}` },
        ]}
      />
      <FeaturePageLayout feature={feature} />
    </>
  );
}
