"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteData } from "../data/siteData";

export default function FAQ() {
  const { faq } = siteData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-24 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(27,54,93,0.06),transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b365d]/10 border border-[#1b365d]/20 mb-6">
            <HelpCircle className="h-4 w-4 text-[#1b365d]" />
            <span className="text-sm font-bold text-[#1b365d]">Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            {faq.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#1b365d]/20 bg-[#1b365d]/10 shadow-lg shadow-[#1b365d]/10"
                    : "border-gray-200/70 bg-white hover:border-[#1b365d]/30 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span
                    id={`faq-question-${index}`}
                    className={`font-semibold text-base sm:text-lg transition-colors ${
                      isOpen ? "text-[#1b365d]" : "text-slate-800"
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-[#1b365d]" : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="h-px bg-[#1b365d]/20 mb-4" />
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#f8fafc] border border-[#1b365d]/20 rounded-3xl px-8 py-6">
            <div className="text-left">
              <p className="font-bold text-slate-800 text-lg">Still have questions?</p>
              <p className="text-gray-500 text-sm">Our team is happy to help. Reach out anytime.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl font-bold hover:shadow-glow transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
            >
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
