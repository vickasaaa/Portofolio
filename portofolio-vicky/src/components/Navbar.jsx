"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-6xl rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md shadow-slate-200/60" : ""
          }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="text-lg font-bold tracking-tight text-slate-900"
          >
            <span className="text-blue-600">Portofolio</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:inline-flex"
          >
            <Download size={16} />
            Unduh CV
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 px-5 pb-5 pt-3 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="block text-sm font-medium text-slate-600 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.cv}
              download
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
