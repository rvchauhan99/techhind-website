import { siteData } from "../../data/siteData";
import { SITE_URL } from "../../config/siteUrl";
import JsonLd from "./JsonLd";

export default function GlobalStructuredData() {
  const { company, contact } = siteData;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: "Techhind Private Limited",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: company.description,
    email: contact.email,
    telephone: contact.phone,
    areaServed: "IN",
    knowsAbout: [
      "Solar CRM",
      "Solar EPC software",
      "Solar project management",
      "Solar lead management",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressCountry: "IN",
    },
    sameAs: Object.values(contact.socialMedia),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: SITE_URL,
    description: siteData.seo.description,
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
    </>
  );
}
