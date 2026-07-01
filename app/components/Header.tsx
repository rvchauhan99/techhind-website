"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteData } from "../data/siteData";

type NavItem = {
  name: string;
  hasDropdown: boolean;
  href: string;
  subLinks?: { name: string; href: string }[];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = siteData.navigation.items as NavItem[];
  const demoUrl = siteData.navigation.demoUrl;
  const { bookDemo, tryDemo } = siteData.navigation.ctaButtons;

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);

    if (href === "#") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
      return;
    }

    if (href.startsWith("#")) {
      if (pathname === "/") {
        try {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
          console.warn("Invalid scroll target:", href);
        }
      } else {
        router.push(`/${href}`);
      }
      return;
    }

    router.push(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.12)] border-b border-gray-100"
          : "bg-white/95 backdrop-blur-md border-b border-white/30 shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/logo.png"
              alt="techHind - Solar CRM for EPC Companies"
              width={750}
              height={139}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => {
              const href = item.href || "#";
              const commonClass =
                "relative px-3 py-2 text-[#1b365d] hover:text-[#00823b] transition-colors font-medium text-[14px] rounded-lg hover:bg-[#00823b]/5 group flex items-center gap-1";

              if (item.hasDropdown && item.subLinks?.length) {
                return (
                  <div key={item.name} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={commonClass}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        {item.subLinks.map((sub) =>
                          sub.href.startsWith("#") ? (
                            <button
                              key={sub.name}
                              type="button"
                              onClick={() => handleNavClick(sub.href)}
                              className="block w-full text-left px-4 py-2.5 text-sm text-[#1b365d] hover:bg-[#00823b]/5 hover:text-[#00823b]"
                            >
                              {sub.name}
                            </button>
                          ) : sub.href.endsWith(".pdf") ? (
                            <a
                              key={sub.name}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 text-sm text-[#1b365d] hover:bg-[#00823b]/5 hover:text-[#00823b]"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.name}
                            </a>
                          ) : (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2.5 text-sm text-[#1b365d] hover:bg-[#00823b]/5 hover:text-[#00823b]"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              if (href.startsWith("#")) {
                return (
                  <button key={item.name} onClick={() => handleNavClick(href)} className={commonClass}>
                    {item.name}
                  </button>
                );
              }
              return (
                <Link key={item.name} href={href} className={commonClass}>
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#00823b] text-[#00823b] hover:bg-[#00823b]/5 rounded-lg font-semibold text-sm transition-all duration-200"
            >
              {tryDemo}
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 bg-[#1b365d] hover:bg-[#142847] text-white rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px"
            >
              {bookDemo}
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-[#1b365d] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-4 pt-2">
            {navItems.map((item) => {
              const href = item.href || "#";
              return (
                <div key={item.name}>
                  {href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(href)}
                      className="block w-full text-left px-4 py-3 text-[#1b365d] hover:text-[#00823b] hover:bg-[#00823b]/5 rounded-lg font-medium transition-colors text-[15px]"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={href}
                      className="block px-4 py-3 text-[#1b365d] hover:text-[#00823b] hover:bg-[#00823b]/5 rounded-lg font-medium transition-colors text-[15px]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.subLinks?.map((sub) =>
                    sub.href.startsWith("#") ? (
                      <button
                        key={sub.name}
                        onClick={() => handleNavClick(sub.href)}
                        className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:text-[#00823b]"
                      >
                        {sub.name}
                      </button>
                    ) : sub.href.endsWith(".pdf") ? (
                      <a
                        key={sub.name}
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-[#00823b]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ) : (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-[#00823b]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    )
                  )}
                </div>
              );
            })}
            <div className="px-2 pt-2 flex flex-col gap-2">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 border border-[#00823b] text-[#00823b] rounded-lg font-semibold text-center transition-all hover:bg-[#00823b]/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {tryDemo}
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-4 py-3 bg-[#1b365d] text-white rounded-lg font-semibold transition-all hover:bg-[#142847]"
              >
                {bookDemo}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
