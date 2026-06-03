"use client";

import {
  Users,
  FolderKanban,
  Package,
  FileText,
  BarChart3,
  Shield,
  Smartphone,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { siteData } from "../data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Users,
  FolderKanban,
  Package,
  FileText,
  BarChart3,
  Shield,
  Smartphone,
  Headphones,
};

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00823b]/8 border border-[#00823b]/15 text-[#00823b] text-sm font-semibold mb-4">Platform Features</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2e] mb-5">
            {siteData.features.title.split(siteData.features.titleHighlight)[0]}
            <span className="gradient-text">{siteData.features.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {siteData.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Users;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#00823b]/20 hover:shadow-xl hover:shadow-[#1b365d]/6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00823b]/0 to-[#1b365d]/0 group-hover:from-[#00823b]/2 group-hover:to-[#1b365d]/2 transition-all duration-300" />
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-[#0d1b2e] mb-2 group-hover:text-[#00823b] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-1.5">
                    {feature.subFeatures.map((sub, subIndex) => (
                      <li key={subIndex} className="flex items-start gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00823b] flex-shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-5">Ready to transform your solar business operations?</p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1b365d] hover:bg-[#142847] text-white rounded-xl font-bold text-base transition-all duration-200 shadow-lg shadow-[#1b365d]/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
