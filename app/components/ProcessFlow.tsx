"use client";

import { siteData } from "../data/siteData";

export default function ProcessFlow() {
  const { processFlow } = siteData;

  return (
    <section className="py-24 bg-gradient-to-b from-[#0b1c33] via-[#1b365d] to-[#0b1c33] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,130,59,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,130,59,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-sm font-bold text-white/80">End-to-End Workflow</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {processFlow.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {processFlow.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processFlow.steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div
                  className={`w-[100px] h-[100px] rounded-full bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-2xl`}
                >
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-[10px] font-black text-slate-800">{step.number}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
              <p className="text-[11px] font-semibold text-[#4ade80] mb-2 uppercase tracking-wide">
                {step.module}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
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
