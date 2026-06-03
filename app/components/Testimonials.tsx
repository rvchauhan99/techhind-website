"use client";
// This section is intentionally hidden from homepage for startup phase.
// Keep this component and logic for quick future re-enable.

import { Star, Quote } from "lucide-react";
import { siteData } from "../data/siteData";

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  location: string;
}

const gradients = [
  "from-[#1b365d] to-[#0b1c33]",
  "from-[#1b365d] to-[#0b1c33]",
  "from-[#1b365d] to-[#0b1c33]",
];

export default function Testimonials() {
  const { testimonials } = siteData;

  if (!testimonials.items || testimonials.items.length === 0) {
    return null;
  }

  const testimonialItems = testimonials.items as Testimonial[];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,130,59,0.06),transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            {testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialItems.map((testimonial, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 border border-gray-200/50 hover:border-[#1b365d]/30 hover:shadow-xl hover:shadow-[#1b365d]/10 transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-8 w-8 text-[#1b365d]/60 group-hover:text-[#1b365d] transition-colors" />
                {/* Location badge */}
                <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  📍 {testimonial.location}
                </span>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#f37021] fill-[#f37021]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed text-base italic flex-grow">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200/60 pt-5 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
