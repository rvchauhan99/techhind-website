"use client";

import Image from "next/image";
import Link from "next/link";
import { platformShowcase } from "../data/platformHandbook";

export default function PlatformShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1b365d]/8 border border-[#1b365d]/15 text-[#1b365d] text-sm font-semibold mb-4">
            Platform in Action
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2e] mb-5">
            See the <span className="gradient-text">Solar Management System</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Real screens from our live demo — lead pipelines, GST quotations, inventory, B2B orders, and service tickets in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformShowcase.map((item) => (
            <div
              key={item.src}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-[#00823b]/20 transition-all duration-300"
            >
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0d1b2e] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl font-bold transition-all duration-200 shadow-lg shadow-[#00823b]/20"
          >
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  );
}
