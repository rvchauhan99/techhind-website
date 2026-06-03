"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Zap } from "lucide-react";
import { siteData } from "../data/siteData";

const icons = [TrendingUp, Users, Award, Zap];

function useCountUp(target: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

interface StatItemProps {
  value: string;
  suffix: string;
  label: string;
  icon: typeof TrendingUp;
  started: boolean;
}

function StatItem({ value, suffix, label, icon: Icon, started }: StatItemProps) {
  const count = useCountUp(parseInt(value), 2000, started);

  return (
    <div className="text-center group">
      <div className="relative inline-flex items-center justify-center mb-6">
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 scale-125" />
        <div className="relative w-20 h-20 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-10 w-10 text-white" />
        </div>
      </div>
      <div className="text-5xl font-extrabold gradient-text mb-2">
        {started ? count : 0}{suffix}
      </div>
      <div className="text-gray-300 font-semibold text-lg">{label}</div>
    </div>
  );
}

export default function Stats() {
  const { stats } = siteData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#0b1c33] via-[#1b365d] to-[#0b1c33] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,130,59,0.15),transparent_70%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {stats.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.items.map((stat, index) => {
            const Icon = icons[index] || TrendingUp;
            return (
              <StatItem
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={Icon}
                started={started}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
