"use client";

import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { pricingFaqItems, pricingPlans, includedCapabilities } from "../data/pricingData";

export default function Pricing() {
  const router = useRouter();

  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  const handleGetStarted = (plan: (typeof pricingPlans)[number]) => {
    const params = new URLSearchParams({
      plan: plan.name,
      monthly: formatCurrency(plan.monthlyPrice),
      cycle: plan.billingCycle,
      cycleTotal: formatCurrency(plan.monthlyPrice * plan.cycleMonths),
      users: plan.userLimit,
    });
    router.push(`/?${params.toString()}#contact`);
  };

  return (
    <section className="pt-20 pb-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,130,59,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-dark-900 mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Choose the perfect plan for your solar EPC business. All plans include
            our core features with no hidden fees.
          </p>
          <div className="inline-flex items-center justify-center rounded-full border border-[#00823b]/25 bg-[#00823b]/10 px-4 py-2">
            <span className="text-sm font-semibold text-[#00662e]">
              All plans are renewable, billed by selected cycle, plus applicable taxes.
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {includedCapabilities.map((capability) => (
              <span
                key={capability}
                className="inline-flex items-center rounded-full border border-[#1b365d]/20 bg-[#1b365d]/10 px-3 py-1 text-xs font-semibold text-[#1b365d]"
              >
                Included: {capability}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative glass rounded-3xl shadow-soft p-10 ${
                plan.popular
                  ? "border-2 border-[#00823b]/60 transform scale-105 hover:shadow-glow"
                  : "border border-gray-200/50 hover:border-[#00823b]/40"
              } transition-all duration-500 bg-white/90 backdrop-blur-sm hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00823b] text-white px-5 py-2 rounded-full text-sm font-bold shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-3xl font-extrabold text-dark-900 mb-3">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold gradient-text">
                    {formatCurrency(plan.monthlyPrice)}
                  </span>
                  <span className="text-gray-600 ml-2 text-lg">+ tax / month</span>
                </div>
                <div className="rounded-xl bg-[#1b365d]/5 border border-[#1b365d]/15 px-3 py-2 mb-3">
                  <p className="text-sm font-semibold text-[#1b365d]">
                    Billed as {formatCurrency(plan.monthlyPrice * plan.cycleMonths)} every {plan.billingCycle}
                  </p>
                </div>
                <div className="inline-flex items-center rounded-full border border-[#00823b]/25 bg-[#00823b]/10 px-3 py-1">
                  <span className="text-xs font-bold text-[#00662e]">{plan.userLimit}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-6 w-6 text-[#00823b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <li key={limitIndex} className="flex items-start opacity-50">
                    <X className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 line-through">{limitation}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleGetStarted(plan)}
                className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 bg-[#00823b] hover:bg-[#00662e] text-white hover:shadow-glow"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-dark-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {pricingFaqItems.map((item) => (
              <div
                key={item.question}
                className="glass rounded-2xl p-8 shadow-soft border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:border-[#00823b]/40 transition-all"
              >
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

