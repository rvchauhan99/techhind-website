"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function Hero() {
  const { hero } = siteData;
  const demoUrl = siteData.navigation.demoUrl;
  const {
    headline,
    subheadline,
    ctaButtons,
    featureHighlights,
    kpis,
    pipelinePreview,
    energyHighlights,
  } = hero;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "68px" }}
    >
      {/* ── Cinematic background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark overlay — left heavy for text legibility, lighter right for card */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      {/* Top fade into header */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />

      {/* Animated energy particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00823b] blur-xl opacity-20 animate-pulse"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${5 + i * 15}%`,
              bottom: `${10 + (i % 3) * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Hero copy ── */}
          <div className="space-y-6">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00823b]/20 border border-[#00823b]/40 backdrop-blur-sm transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="h-4 w-4 text-[#4ade80]" />
              <span className="text-sm font-semibold text-[#4ade80]">
                {hero.banner.text}
              </span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] text-white tracking-tight drop-shadow-lg">
                {headline.prefix}
                <br />
                <span className="text-[#00e676]">{headline.crm}</span>
                {" "}{headline.middle}
                <br />
                {headline.industry} {headline.suffix}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-lg drop-shadow">
                {subheadline}
              </p>
            </div>

            {/* Feature pills */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 delay-150 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {featureHighlights.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#00e676]" />
                  {f}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div
              className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={handleCTAClick}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00823b] hover:bg-[#00a84c] text-white rounded-xl font-bold text-base transition-all duration-200 shadow-[0_0_30px_rgba(0,130,59,0.5)] hover:shadow-[0_0_40px_rgba(0,168,76,0.7)] hover:-translate-y-0.5"
              >
                {ctaButtons.primary}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white rounded-xl font-semibold text-base backdrop-blur-sm transition-all duration-200"
              >
                <Play className="h-4 w-4 text-[#00e676]" />
                {ctaButtons.secondary}
              </a>
            </div>

            {/* Trust row */}
            <div
              className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {["14-day free trial", "No credit card", "Cancel anytime", "India-first platform"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00e676]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Frosted glass dashboard ── */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00823b] via-[#4ade80] to-[#00823b]" />

              <div className="p-5 lg:p-6">
                {/* Card header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#00823b]/30 border border-[#00823b]/50 flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-[#4ade80]" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Operations Snapshot</h3>
                  </div>
                  <span className="text-xs font-semibold text-[#4ade80] bg-[#00823b]/20 border border-[#00823b]/30 px-2.5 py-1 rounded-full">
                    Last 7 days
                  </span>
                </div>

                {/* KPI grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mb-4">
                  {kpis.map((kpi) => {
                    const TrendIcon = kpi.trend === "down" ? TrendingDown : TrendingUp;
                    const trendColor =
                      kpi.trend === "down"
                        ? "text-red-400"
                        : kpi.trend === "neutral"
                        ? "text-gray-400"
                        : "text-[#4ade80]";
                    const valColor =
                      kpi.status === "amber"
                        ? "text-amber-400"
                        : kpi.status === "blue"
                        ? "text-blue-300"
                        : kpi.status === "teal"
                        ? "text-teal-300"
                        : "text-[#4ade80]";
                    return (
                      <div
                        key={kpi.label}
                        className="bg-white/[0.06] border border-white/10 rounded-xl p-3 hover:bg-white/[0.10] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[11px] text-white/50 font-medium leading-tight">
                            {kpi.label}
                          </p>
                          <TrendIcon className={`h-3 w-3 ${trendColor} shrink-0`} />
                        </div>
                        <p className={`text-xl font-bold ${valColor} leading-none`}>
                          {kpi.value}
                        </p>
                        <p className="text-[11px] text-white/40 mt-1">{kpi.helper}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Energy highlights */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {energyHighlights.map((item) => {
                    const toneClass =
                      item.tone === "amber"
                        ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                        : item.tone === "blue"
                        ? "bg-blue-500/10 border-blue-500/20 text-blue-300"
                        : "bg-[#00823b]/10 border-[#00823b]/25 text-[#4ade80]";
                    return (
                      <div key={item.label} className={`border rounded-xl px-2.5 py-2 ${toneClass}`}>
                        <p className="text-[10px] font-semibold leading-tight opacity-80">
                          {item.label}
                        </p>
                        <p className="text-sm font-bold mt-0.5">{item.value}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Pipeline bars */}
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-bold text-white/80">Stage Pipeline</p>
                    <p className="text-[10px] text-white/30">Live preview</p>
                  </div>
                  <div className="space-y-2.5">
                    {pipelinePreview.map((stage) => {
                      const width = Math.max(8, Math.min(100, stage.value));
                      const barColor =
                        stage.tone === "warning"
                          ? "bg-amber-400"
                          : stage.tone === "info"
                          ? "bg-blue-400"
                          : "bg-[#00823b]";
                      return (
                        <div key={stage.stage}>
                          <div className="flex justify-between text-[11px] text-white/60 mb-1">
                            <span className="font-medium">{stage.stage}</span>
                            <span className="font-bold text-white/80">{stage.value}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${barColor} rounded-full shadow-sm`}
                              style={{
                                width: `${width}%`,
                                boxShadow:
                                  stage.tone === "success"
                                    ? "0 0 8px rgba(0,130,59,0.6)"
                                    : undefined,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-4 flex items-center justify-between text-xs text-white/30">
                  <span>Powered by techHind Pvt Ltd</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-end justify-between">
          <p className="text-xs text-white/30 select-none">
            Powered by Techhind Pvt Ltd &nbsp;·&nbsp; All Rights Reserved © 2026
          </p>
          <div className="flex gap-2">
            {["Startup-friendly onboarding", "India-first workflow design", "Field-ready operations"].map((b) => (
              <span key={b} className="hidden sm:block text-[10px] text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
