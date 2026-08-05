import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import type { PillarPage } from "../data/pillarPages";
import { siteData } from "../data/siteData";

type PillarPageLayoutProps = {
  page: PillarPage;
};

export default function PillarPageLayout({ page }: PillarPageLayoutProps) {
  const demoUrl = siteData.navigation.demoUrl;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-28 pb-12 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#00823b] mb-3 uppercase tracking-wide">
              {page.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2e] mb-6">
              {page.h1}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl font-bold transition-colors"
              >
                Book a Demo
              </Link>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-[#1b365d] text-[#1b365d] hover:bg-[#1b365d]/5 rounded-xl font-semibold transition-colors"
              >
                Try Live Demo
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-7 py-3 text-[#00823b] font-semibold hover:underline"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-4">{page.problemTitle}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{page.problemBody}</p>
          <ul className="space-y-2">
            {page.problemPoints.map((point) => (
              <li key={point} className="flex gap-2 text-gray-600">
                <span className="text-[#00823b] font-bold shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-8">{page.workflowTitle}</h2>
          <ol className="space-y-5">
            {page.workflowSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00823b] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0d1b2e] mb-1">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-6">{page.modulesTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {page.modules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className="block border border-gray-200 rounded-xl p-4 hover:border-[#00823b]/40 hover:shadow-sm transition-all"
              >
                <h3 className="font-bold text-[#0d1b2e] mb-1">{mod.title}</h3>
                <p className="text-sm text-gray-600">{mod.body}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Explore the full module list on{" "}
            <Link href="/features" className="text-[#00823b] font-semibold hover:underline">
              Features
            </Link>
            {" "}
            ·{" "}
            <Link href="/blog" className="text-[#00823b] font-semibold hover:underline">
              Blog
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-3">{page.comparisonTitle}</h2>
          <p className="text-gray-600 mb-6">{page.comparisonIntro}</p>
          <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#0d1b2e] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Capability</th>
                  <th className="px-4 py-3 font-semibold">techHind</th>
                  <th className="px-4 py-3 font-semibold">Generic CRM / sheets</th>
                </tr>
              </thead>
              <tbody>
                {page.comparisonRows.map((row) => (
                  <tr key={row.capability} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.capability}</td>
                    <td className="px-4 py-3 text-[#00823b] font-semibold">{row.techhind}</td>
                    <td className="px-4 py-3 text-gray-600">{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#0d1b2e] mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#0d1b2e] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-3">{page.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{page.ctaBody}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-[#00823b] hover:bg-[#00a049] text-white rounded-xl font-bold transition-colors"
            >
              Book a Demo
            </Link>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 bg-white/10 hover:bg-white/15 border border-white/30 rounded-xl font-semibold transition-colors"
            >
              Try Live Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
