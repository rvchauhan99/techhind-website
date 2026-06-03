"use client";

import { Check } from "lucide-react";
import { siteData } from "../data/siteData";

export default function UseCases() {
  const { useCases } = siteData;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,130,59,0.06),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
            {useCases.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {useCases.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.cases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-10 glass rounded-3xl border border-gray-200/50 hover:border-[#00823b]/30 hover:shadow-glow transition-all duration-500 bg-white/90 backdrop-blur-sm transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#00823b] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-[#00823b] transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-accent-emerald mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

