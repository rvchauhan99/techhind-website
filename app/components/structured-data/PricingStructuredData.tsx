import { siteData } from "../../data/siteData";
import { SITE_URL } from "../../config/siteUrl";
import { pricingFaqItems, pricingPlans } from "../../data/pricingData";
import JsonLd from "./JsonLd";

function buildFaqSchema(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function PricingStructuredData() {
  const { company, seo } = siteData;
  const priceValidUntil = `${new Date().getFullYear()}-12-31`;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "techHind Solar CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: seo.description,
    url: SITE_URL,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: Math.min(...pricingPlans.map((plan) => plan.monthlyPrice)),
      highPrice: Math.max(...pricingPlans.map((plan) => plan.monthlyPrice)),
      priceCurrency: "INR",
      offerCount: pricingPlans.length,
      priceValidUntil,
      url: `${SITE_URL}/pricing`,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: SITE_URL,
    },
  };

  const productOffers = pricingPlans.map((plan) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `techHind Solar CRM — ${plan.name}`,
    description: plan.description,
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    offers: {
      "@type": "Offer",
      price: plan.monthlyPrice,
      priceCurrency: "INR",
      priceValidUntil,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/pricing`,
      description: `${plan.userLimit}, billed ${plan.billingCycle}`,
    },
  }));

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={productOffers} />
      <JsonLd data={buildFaqSchema(pricingFaqItems)} />
    </>
  );
}
