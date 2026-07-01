import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import type { PlatformFeature } from "../data/platformFeatures";
import { siteData } from "../data/siteData";

type FeaturePageLayoutProps = {
  feature: PlatformFeature;
};

export default function FeaturePageLayout({ feature }: FeaturePageLayoutProps) {
  const demoUrl = siteData.navigation.demoUrl;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-28 pb-16 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#00823b] mb-3 uppercase tracking-wide">
              techHind Solar CRM
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2e] mb-6">
              {feature.headline}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{feature.summary}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl font-bold transition-colors"
              >
                Get Started
              </Link>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#1b365d] text-[#1b365d] hover:bg-[#1b365d]/5 rounded-xl font-semibold transition-colors"
              >
                Try Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {feature.screenshots.map((shot) => (
        <section key={shot.src} className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-4">Business Purpose</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">{feature.businessPurpose}</p>

          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-6">What You Can Do</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            {feature.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2 text-gray-600">
                <span className="text-[#00823b] font-bold mt-0.5">✓</span>
                {cap}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-6">How It Works</h2>
          <ol className="space-y-4 mb-12">
            {feature.howItWorks.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00823b] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>

          {feature.relatedSlugs.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-[#0d1b2e] mb-4">Related Features</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {feature.relatedSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/features/${slug}`}
                    className="px-4 py-2 rounded-full border border-[#1b365d]/20 bg-[#1b365d]/5 text-[#1b365d] text-sm font-semibold hover:bg-[#00823b]/10 hover:border-[#00823b]/30 transition-colors"
                  >
                    {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="rounded-2xl bg-[#0b1c33] p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to see it in action?</h3>
            <p className="text-gray-400 mb-6">
              Start a 14-day free trial or explore our live demo environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-3 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl font-bold transition-colors"
              >
                View Pricing
              </Link>
              <Link
                href="/features"
                className="px-8 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
