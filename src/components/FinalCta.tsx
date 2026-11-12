import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ASSET_IMAGES } from '../data/cleaningData';

interface FinalCtaProps {
  onOpenQuote: (type?: 'residential' | 'commercial') => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-24 bg-[#101C35] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 scale-105"
        style={{ backgroundImage: `url(${ASSET_IMAGES.hero})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#101C35] via-[#101C35]/95 to-[#101C35]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Thunder Cleaning Services OKC</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance">
          Come Home to a Fresh Start.
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
          Tell us what your space needs, and let's find the right cleaning service for you.
          Reliable scheduling, meticulous standards, and genuine peace of mind across Oklahoma City.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenQuote('residential')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#438CEB] hover:bg-[#3478d3] rounded-xl transition-all shadow-xl shadow-[#438CEB]/25 hover:shadow-2xl hover:shadow-[#438CEB]/35 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Request Your Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenQuote('commercial')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
          >
            <span>Commercial Office Inquiries</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#438CEB]" />
            <span>Satisfaction Guaranteed</span>
          </div>
          <span>·</span>
          <span>Insured & Background-Checked</span>
          <span>·</span>
          <span>Oklahoma City Metro</span>
        </div>
      </div>
    </section>
  );
};
