import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ASSET_IMAGES } from '../data/cleaningData';

interface HeroProps {
  onOpenQuote: (type?: 'residential' | 'commercial') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#101C35] text-white overflow-hidden"
    >
      {/* Subtle architectural lighting accents */}
      <div
        className="absolute -top-32 right-0 w-[550px] h-[550px] bg-[#438CEB]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Column 1: Editorial Headline & Value Proposition (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed location kicker (No pills!) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-4">
              <span>Oklahoma City Metro</span>
              <span aria-hidden="true">·</span>
              <span>Professional Residential & Commercial</span>
            </div>

            {/* Cinematic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              Powerful Cleaning.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E9EFF6] to-[#438CEB]">
                More Peace of Mind.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Professional home cleaning services designed to make life easier across Oklahoma City.
              Experience meticulous care from background-checked, insured cleaners dedicated to spotless living.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => onOpenQuote('residential')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide text-white bg-[#438CEB] hover:bg-[#3478d3] active:bg-[#2860ab] rounded-xl transition-all duration-200 shadow-lg shadow-[#438CEB]/25 hover:shadow-xl hover:shadow-[#438CEB]/30 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get a Home Cleaning Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Unboxed trust signals below CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#438CEB]" aria-hidden="true" />
                <span className="text-slate-300 font-medium">100% Insured & Background-Checked</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#438CEB]" aria-hidden="true" />
                <span className="text-slate-300 font-medium">Satisfaction Guaranteed</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="text-slate-300">
                <span className="font-semibold text-white">5-Star</span> Google Rating Claim
              </div>
            </div>
          </div>

          {/* Column 2: High-Impact Oklahoma Home Photography (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 aspect-[4/3] lg:aspect-[5/4] bg-slate-900 group">
              <img
                src={ASSET_IMAGES.hero}
                alt="Pristine sunlit open-concept Oklahoma City home interior featuring clean living and dining areas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Soft vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/70 via-transparent to-transparent pointer-events-none" />

              {/* Discreet photo caption in bottom corner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 bg-[#101C35]/80 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-white/10">
                <span className="font-medium">Residential Living in OKC Metro</span>
                <span className="text-[#438CEB] font-semibold text-[11px] uppercase tracking-wider">Spotless Standard</span>
              </div>
            </div>

            {/* Secondary floating trust badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-[#F8FAFD] text-[#101C35] p-4 rounded-xl shadow-xl border border-slate-200/80 items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-[#438CEB]/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-[#438CEB]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 leading-tight">500+ Happy Clients Claim</p>
                <p className="text-slate-600">Across Oklahoma City & suburbs</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
