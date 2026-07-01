import { SITE_URL } from "../../config/siteUrl";
import JsonLd from "./JsonLd";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbStructuredDataProps = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbStructuredData({
  items,
}: BreadcrumbStructuredDataProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };

  return <JsonLd data={breadcrumbSchema} />;
}
