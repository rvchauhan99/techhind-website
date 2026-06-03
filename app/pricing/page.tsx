import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

export const metadata: Metadata = {
  title: "Solar CRM Pricing for EPC Companies in India | techHind",
  description:
    "Transparent solar CRM pricing for Indian EPC companies. Compare plans for lead management, project tracking, and team collaboration.",
  keywords: [
    "solar CRM pricing",
    "solar CRM pricing India",
    "EPC software pricing",
    "solar project management cost",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Solar CRM Pricing for EPC Companies in India | techHind",
    description:
      "Transparent solar CRM pricing for Indian EPC companies. Compare plans for lead management, project tracking, and team collaboration.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Pricing />
      <Footer />
    </main>
  );
}
