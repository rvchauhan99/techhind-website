"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-primary text-white rounded-full shadow-glow hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Get in touch"
    >
      <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-2 -right-2 w-3 h-3 bg-accent-emerald rounded-full animate-ping"></span>
    </button>
  );
}

