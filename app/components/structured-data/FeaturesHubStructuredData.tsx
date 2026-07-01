import { SITE_URL } from "../../config/siteUrl";
import { platformFeatures } from "../../data/platformFeatures";
import JsonLd from "./JsonLd";

export default function FeaturesHubStructuredData() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "techHind Solar CRM Features",
    description: "Integrated modules of the techHind Solar Management System",
    numberOfItems: platformFeatures.length,
    itemListElement: platformFeatures.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.title,
      url: `${SITE_URL}/features/${feature.slug}`,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Solar CRM Features | techHind",
    url: `${SITE_URL}/features`,
    description:
      "Complete Solar Management System features for Indian EPC companies — leads, quotations, orders, inventory, B2B, payments, and service.",
    isPartOf: {
      "@type": "WebSite",
      name: "techHind",
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <JsonLd data={webPageSchema} />
    </>
  );
}
