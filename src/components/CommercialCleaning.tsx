import React from 'react';
import { Building2, Clock, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/cleaningData';

interface CommercialCleaningProps {
  onOpenCommercialQuote: () => void;
}

export const CommercialCleaning: React.FC<CommercialCleaningProps> = ({
  onOpenCommercialQuote,
}) => {
  return (
    <section id="commercial" className="py-24 bg-[#101C35] text-white relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 bg-[#438CEB]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Commercial Photo Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
              <img
                src={ASSET_IMAGES.commercialOffice}
                alt="Sunlit executive commercial office space in Oklahoma City"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#101C35]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p className="text-xs font-semibold text-white">Oklahoma City Business Spaces</p>
                <p className="text-[11px] text-[#438CEB]">Flexible After-Hours & Weekend Schedules</p>
              </div>
            </div>

            {/* Quick commercial stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <Clock className="w-5 h-5 text-[#438CEB] mb-2" />
                <h4 className="text-sm font-bold text-white">After-Hours Ready</h4>
                <p className="text-xs text-slate-400">Zero disruption to daily business workflows</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <ShieldCheck className="w-5 h-5 text-[#438CEB] mb-2" />
                <h4 className="text-sm font-bold text-white">Insured Crews</h4>
                <p className="text-xs text-slate-400">Vetted staff for secure office environments</p>
              </div>
            </div>
          </div>

          {/* Column 2: Information & Inquiries (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
              <span>B2B Commercial Services</span>
              <span aria-hidden="true">·</span>
              <span>Thunder Cleaning OKC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5 text-balance">
              Professional Cleaning Solutions for Oklahoma City Workspaces
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              A clean workspace reinforces professionalism for visiting clients and nurtures employee
              well-being. Thunder Cleaning Services works with Oklahoma City business owners, property
              managers, and office directors to structure dependable cleaning schedules tailored to your
              exact square footage and operational hours.
            </p>

            {/* Facility Types We Clean */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#438CEB] mb-4">
                Commercial Facility Inquiries We Accommodate:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                  <span>Corporate Offices & Executive Suites</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                  <span>Medical & Dental Administrative Clinics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                  <span>Boutique Retail & Showroom Floors</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                  <span>Creative Studios & Fitness Facilities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                  <span>Coworking Spaces & Shared Work Hubs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                  <span>Commercial Property Common Areas</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenCommercialQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#101C35] bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Request a Commercial Cleaning Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:info@thundercleaningservicesokc.com?subject=Commercial%20Cleaning%20Inquiry%20-%20OKC"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                <span>Direct Inquiries: info@thundercleaningservicesokc.com</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
