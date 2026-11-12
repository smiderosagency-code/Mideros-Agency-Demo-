import React from 'react';
import { Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101C35] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand Lockup & Purpose (2 cols on lg) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#438CEB] to-[#2563EB] flex items-center justify-center text-white shadow-sm shadow-[#438CEB]/30">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Thunder Cleaning <span className="text-[#438CEB] font-light">OKC</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Powerful Cleaning. Peaceful Living. Professional residential housekeeping and commercial
              cleaning solutions proudly serving homes and businesses across the Oklahoma City metropolitan area.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#438CEB] shrink-0" />
                <a
                  href="mailto:info@thundercleaningservicesokc.com"
                  className="hover:text-white transition-colors"
                >
                  info@thundercleaningservicesokc.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#438CEB] shrink-0" />
                <span>Oklahoma City, Oklahoma, USA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#438CEB] shrink-0" />
                <span>Insured & Background-Checked Cleaners</span>
              </div>
            </div>
          </div>

          {/* Col 3: Residential Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Residential Cleaning
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Standard House Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Deep Cleaning Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Move-In / Move-Out Clean
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Recurring Maid Care
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Apartment & Condo Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  One-Time Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Oklahoma City Metro
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Oklahoma City (OKC)
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Edmond, OK
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Norman & Moore, OK
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Nichols Hills & The Village
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Yukon & Mustang, OK
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Midwest City & Del City
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Navigation & Quick Quote */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 mb-6">
              <li>
                <a href="#pathways" className="hover:text-white transition-colors">
                  Commercial Pathways
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Company
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#438CEB] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar with Mandatory Agency Credit & Legal Notices */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © {new Date().getFullYear()} Thunder Cleaning Services OKC. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Original website: <a href="https://www.thundercleaningservicesokc.com/" target="_blank" rel="noreferrer" className="underline hover:text-slate-300">thundercleaningservicesokc.com</a>
            </p>
          </div>

          {/* Mandatory agency attribution per user brief */}
          <div className="text-right">
            <p className="text-slate-400 font-medium">
              Independent website redesign concept by{' '}
              <span className="text-white font-semibold">S.Mideros Agency</span>.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
