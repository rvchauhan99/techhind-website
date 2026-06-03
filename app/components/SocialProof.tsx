"use client";
// This section is intentionally hidden from homepage for startup phase.
// Keep this component and logic for quick future re-enable.

import { siteData } from "../data/siteData";

export default function SocialProof() {
  const { socialProof } = siteData;

  if (!socialProof.logos || socialProof.logos.length === 0) {
    return null;
  }

  // Duplicate logos for seamless infinite loop
  const doubled = [...socialProof.logos, ...socialProof.logos];

  return (
    <section className="py-16 bg-white border-y border-gray-200/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            {socialProof.title}
          </p>
        </div>
      </div>

      {/* Full-width marquee — no container constraint */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-6 w-max">
          {doubled.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-16 px-6 bg-gradient-to-br from-slate-50 to-white border border-gray-200/70 rounded-2xl shadow-sm hover:border-[#00823b]/40 hover:shadow-md transition-all duration-300 group min-w-[160px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xs">{logo.placeholder.slice(0, 2)}</span>
                </div>
                <span className="text-slate-700 font-semibold text-sm whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
