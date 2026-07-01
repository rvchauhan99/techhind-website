import { siteData } from "../../data/siteData";
import { SITE_URL } from "../../config/siteUrl";
import { pricingPlans } from "../../data/pricingData";
import { platformWorkflow } from "../../data/platformHandbook";
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

export default function HomeStructuredData() {
  const { company, seo, faq, whyTechHind } = siteData;
  const priceValidUntil = `${new Date().getFullYear()}-12-31`;
  const lowestPrice = Math.min(...pricingPlans.map((plan) => plan.monthlyPrice));
  const highestPrice = Math.max(...pricingPlans.map((plan) => plan.monthlyPrice));

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "techHind Solar CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: seo.description,
    url: SITE_URL,
    featureList: whyTechHind.features,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: lowestPrice,
      highPrice: highestPrice,
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Solar project lifecycle in techHind Solar CRM",
    description: platformWorkflow.subtitle,
    step: platformWorkflow.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: `${step.module}: ${step.description}`,
    })),
  };

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={buildFaqSchema(faq.items)} />
      <JsonLd data={howToSchema} />
    </>
  );
}
