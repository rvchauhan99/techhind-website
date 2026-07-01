"use client";

import { Target, Lightbulb, Users, Award } from "lucide-react";
import { siteData } from "../data/siteData";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower solar EPC companies across India with cutting-edge technology that simplifies operations and drives sustainable growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We continuously evolve our platform based on industry needs, ensuring you always have access to the latest tools and features.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "Your success is our priority. We build features that solve real problems faced by solar businesses every day.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Built by professionals who understand the solar industry inside out, ensuring every feature serves a real purpose.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-gradient-to-b from-[#f8fafc] via-white to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,130,59,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
              {siteData.about.title.split(siteData.company.name)[0]}
              <span className="gradient-text">{siteData.company.name}</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {siteData.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 glass rounded-2xl border border-gray-200/50 hover:border-[#00823b]/30 hover:shadow-glow transition-all duration-500 bg-white/80 backdrop-blur-sm transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-[#00823b] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="glass rounded-3xl p-10 shadow-soft border border-gray-200/50 bg-white/90 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-dark-900 mb-6">
              About <span className="gradient-text">{siteData.company.name}</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
              techHind is a solar CRM platform for EPC companies in India that
              manages leads, projects, quotations, and commissioning from a
              single cloud dashboard — including the SolarCRM mobile field app
              for site engineers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {siteData.company.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {siteData.company.additionalInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

