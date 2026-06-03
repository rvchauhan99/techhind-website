"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { siteData } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { company, contact, footer } = siteData;

  return (
    <>
      {/* Floating social CTA hidden for now; kept in code history for future enablement. */}

      <footer className="bg-[#0b1c33] text-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,130,59,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/logo-transparent.png"
                  alt="techHind - Solar CRM for EPC Companies"
                  width={1780}
                  height={338}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">{company.tagline}</p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm group">
                  <Mail className="h-5 w-5 text-[#00823b]" />
                  <a href={`mailto:${contact.email}`} className="hover:text-[#00823b] transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm group">
                  <Phone className="h-5 w-5 text-[#00823b]" />
                  <a href={`tel:${contact.phone}`} className="hover:text-[#00823b] transition-colors">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-5 w-5 text-[#00823b]" />
                  <span>{contact.address}</span>
                </div>
              </div>

              {/* Footer social media icon section hidden for now; kept for future enablement. */}
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
                {footer.links.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-[#00823b] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {footer.links.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-[#00823b] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Resources</h3>
              <ul className="space-y-3">
                {footer.links.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-[#00823b] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-[#00823b]">{company.name}</span>. All rights reserved.
                Made with ❤️ for Indian Solar Industry.
              </p>
              <div className="flex space-x-6">
                {footer.links.legal.map((link) => (
                  <a
                    key={link}
                    href={
                      link === "Privacy Policy" 
                        ? "/privacy-policy"
                        : link === "Terms & Conditions"
                        ? "/terms-conditions"
                        : link === "Data Deletion Instructions"
                        ? "/data-deletion"
                        : "#"
                    }
                    className="text-gray-400 hover:text-[#00823b] transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
            </div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
