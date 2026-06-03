"use client";

import { useEffect, useRef } from "react";
import { siteData } from "../data/siteData";

export default function Highlights() {
  const { highlights } = siteData;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".highlight-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#0b1c33] via-[#1b365d] to-[#0b1c33] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,130,59,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,130,59,0.08),transparent_60%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {highlights.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {highlights.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.items.map((item, index) => (
            <div
              key={index}
              className="highlight-card opacity-0 translate-y-8 transition-all duration-700 group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:shadow-2xl"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient accent top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${item.color}`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              {/* Stat badge */}
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white mb-4`}
              >
                {item.stat}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
