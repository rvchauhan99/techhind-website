import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import PricingStructuredData from "../components/structured-data/PricingStructuredData";
import BreadcrumbStructuredData from "../components/structured-data/BreadcrumbStructuredData";
import { buildPageMetadata } from "../config/metadata";

export const metadata = buildPageMetadata({
  title: "Solar CRM Pricing for EPC Companies in India",
  description:
    "Transparent solar CRM pricing for Indian EPC companies. Compare plans for lead management, project tracking, and team collaboration.",
  path: "/pricing",
  keywords: [
    "solar CRM pricing",
    "solar CRM pricing India",
    "EPC software pricing",
    "solar project management cost",
    "crm price in india",
  ],
});

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingStructuredData />
      <BreadcrumbStructuredData items={[{ name: "Pricing", path: "/pricing" }]} />
      <Header />
      <Pricing />
      <Footer />
    </main>
  );
}
