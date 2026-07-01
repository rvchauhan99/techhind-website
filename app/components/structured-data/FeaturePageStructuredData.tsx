import { SITE_URL } from "../../config/siteUrl";
import type { PlatformFeature } from "../../data/platformFeatures";
import JsonLd from "./JsonLd";

type FeaturePageStructuredDataProps = {
  feature: PlatformFeature;
};

export default function FeaturePageStructuredData({
  feature,
}: FeaturePageStructuredDataProps) {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: feature.metaTitle,
    url: `${SITE_URL}/features/${feature.slug}`,
    description: feature.metaDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "techHind",
      url: SITE_URL,
    },
  };

  const softwareFeatureSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "techHind Solar CRM",
    applicationCategory: "BusinessApplication",
    featureList: feature.capabilities,
    url: `${SITE_URL}/features/${feature.slug}`,
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={softwareFeatureSchema} />
    </>
  );
}
