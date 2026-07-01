import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesHubStructuredData from "../components/structured-data/FeaturesHubStructuredData";
import BreadcrumbStructuredData from "../components/structured-data/BreadcrumbStructuredData";
import { buildPageMetadata } from "../config/metadata";
import { platformFeatures } from "../data/platformFeatures";

export const metadata = buildPageMetadata({
  title: "Solar CRM Features | Complete Solar Management System",
  description:
    "Explore techHind Solar CRM features — lead management, Meta ads, quotations, orders, inventory, B2B trading, payments, and service warranty for Indian EPC companies.",
  path: "/features",
  keywords: [
    "solar management system India",
    "solar CRM features",
    "solar EPC software modules",
    "solar platform capabilities",
  ],
});

export default function FeaturesHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeaturesHubStructuredData />
      <BreadcrumbStructuredData items={[{ name: "Features", path: "/features" }]} />
      <Header />

      <section className="pt-28 pb-16 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1b2e] mb-6">
            Complete <span className="gradient-text">Solar Management System</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Twelve integrated modules — from Meta Lead Ads and GST quotations through installation, B2B trading, commission, and after-sales service.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platformFeatures.map((feature) => (
              <Link
                key={feature.slug}
                href={`/features/${feature.slug}`}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-[#00823b]/30 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <h2 className="text-xl font-bold text-[#0d1b2e] mb-3 group-hover:text-[#00823b] transition-colors">
                  {feature.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{feature.summary}</p>
                <span className="text-[#00823b] text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
