import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: (type?: 'residential' | 'commercial') => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Commercial', href: '#commercial' },
    { label: 'About', href: '#about' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101C35]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-white/10'
          : 'bg-[#101C35] py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (Single CTA) */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white font-extrabold tracking-tight text-xl whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#438CEB] rounded"
          >
            {/* Geometric thunder brand glyph */}
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#438CEB] to-[#2563EB] flex items-center justify-center text-white shadow-sm shadow-[#438CEB]/30 group-hover:scale-105 transition-transform duration-200">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
                aria-hidden="true"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="font-semibold tracking-tight text-white group-hover:text-white/90">
              Thunder Cleaning <span className="text-[#438CEB] font-light">OKC</span>
            </span>
          </a>

          {/* Zone 2: 4–6 concise single-line nav links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white relative ${
                  activeSection === link.href.substring(1) ? 'text-[#438CEB] font-semibold' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote('residential')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#438CEB] hover:bg-[#3478d3] active:bg-[#2860ab] rounded-lg transition-all duration-200 shadow-md shadow-[#438CEB]/20 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101C35] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote('residential');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#438CEB] text-white font-medium text-sm shadow-md"
            >
              <span>Get a Free Home Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote('commercial');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors"
            >
              <span>Commercial Cleaning Inquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
