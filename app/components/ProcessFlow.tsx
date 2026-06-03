"use client";

import { siteData } from "../data/siteData";

export default function ProcessFlow() {
  const { processFlow } = siteData;

  return (
    <section className="py-24 bg-gradient-to-b from-[#0b1c33] via-[#1b365d] to-[#0b1c33] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,130,59,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,130,59,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-sm font-bold text-white/80">🔄 End-to-End Workflow</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {processFlow.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {processFlow.subtitle}
          </p>
        </div>

        {/* Steps — Desktop: horizontal, Mobile: vertical */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {processFlow.steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Mobile connector (vertical) */}
                {index < processFlow.steps.length - 1 && (
                  <div className="lg:hidden absolute top-[120px] left-1/2 w-0.5 h-10 bg-gradient-to-b from-white/30 to-transparent -translate-x-1/2" />
                )}

                {/* Step number + icon circle */}
                <div className="relative mb-6">
                  <div
                    className={`w-[120px] h-[120px] rounded-full bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300`}
                  >
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xs font-black text-slate-800">{step.number}</span>
                  </div>
                </div>

                {/* Step content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>

                {/* Arrow (desktop) */}
                {index < processFlow.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[50px] -right-4 text-white/30 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-4 bg-[#00823b] hover:bg-[#00662e] text-white rounded-2xl hover:shadow-glow transition-all duration-200 font-bold text-lg transform hover:scale-105"
            >
              Start Your Free Trial
            </button>
            <span className="text-slate-500 text-sm">No credit card required · Setup in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
