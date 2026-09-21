"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolioData";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07090F] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-lg font-bold text-white">
          <span className="text-blue-400">Vicky</span>
        </p>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className={`fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-400/30 text-white shadow-xl shadow-blue-900/40 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
