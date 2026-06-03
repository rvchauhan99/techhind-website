"use client";

import { Clock, DollarSign, Zap, BarChart3 } from "lucide-react";
import { siteData } from "../data/siteData";

const benefitIcons = [Clock, DollarSign, Zap, BarChart3];

export default function ValueProposition() {
  const { valueProposition } = siteData;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,102,46,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
            {valueProposition.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {valueProposition.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueProposition.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] || Zap;
            return (
              <div
                key={index}
                className="group relative p-8 glass rounded-3xl border border-gray-200/50 hover:border-[#00823b]/50 hover:shadow-glow transition-all duration-500 bg-white/90 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#00823b]/3 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-[#00823b] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-[#00823b] hover:bg-[#00662e] text-white rounded-2xl hover:shadow-glow transition-all duration-200 font-bold text-lg transform hover:scale-105">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}

