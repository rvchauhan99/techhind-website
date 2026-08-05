import { SITE_URL } from "../../config/siteUrl";
import type { PillarPage } from "../../data/pillarPages";
import JsonLd from "./JsonLd";

type PillarPageStructuredDataProps = {
  page: PillarPage;
};

export default function PillarPageStructuredData({ page }: PillarPageStructuredDataProps) {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    url: `${SITE_URL}${page.path}`,
    description: page.metaDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "techHind",
      url: SITE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "techHind Solar CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}${page.path}`,
    description: page.metaDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "12999",
      url: `${SITE_URL}/pricing`,
    },
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={softwareSchema} />
    </>
  );
}
