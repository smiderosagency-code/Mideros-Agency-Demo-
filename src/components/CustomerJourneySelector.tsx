import React from 'react';
import { Home, Building2, ArrowRight, Check, Sparkles } from 'lucide-react';
import { ASSET_IMAGES } from '../data/cleaningData';

interface CustomerJourneySelectorProps {
  onSelectJourney: (type: 'residential' | 'commercial') => void;
}

export const CustomerJourneySelector: React.FC<CustomerJourneySelectorProps> = ({
  onSelectJourney,
}) => {
  return (
    <section id="pathways" className="py-20 bg-[#F8FAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
            <span>Tailored Experiences</span>
            <span aria-hidden="true">·</span>
            <span>Two Distinct Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-4 text-balance">
            Designed for Homeowners & Oklahoma City Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Whether you need thoughtful maintenance for your personal residence or a reliable cleaning
            partner for your commercial facility, select your journey below for a dedicated inquiry path.
          </p>
        </div>

        {/* Two Pathway Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Residential Cleaning */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              {/* Photo Banner */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={ASSET_IMAGES.bedroomClean}
                  alt="Spotless residential master bedroom and living room"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/images/bedroom-serene-clean.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/80 via-[#101C35]/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold text-[#101C35]">
                  <Home className="w-4 h-4 text-[#438CEB]" />
                  <span>Residential Pathway</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold tracking-tight">Residential Cleaning</h3>
                  <p className="text-xs text-slate-200">For homes, condos, and apartments in OKC</p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8">
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Tailored house cleaning services configured to your family’s routine. From routine weekly or bi-weekly visits to comprehensive deep cleans and moving transitions.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Standard & Deep House Cleaning',
                    'Flexible Weekly, Bi-Weekly, or Monthly Recurring Upkeep',
                    'Apartment & Condominium Living Spaces',
                    'Move-In / Move-Out Deep Turnarounds',
                    'Vetted, Background-Checked & Insured Cleaners',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA */}
            <div className="px-6 sm:px-8 pb-8 pt-0">
              <button
                onClick={() => onSelectJourney('residential')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#101C35] hover:bg-[#1f2937] text-white font-semibold text-sm transition-colors shadow-md group-hover:bg-[#438CEB] cursor-pointer"
              >
                <span>Request a Home Cleaning Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 2: Commercial Cleaning */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              {/* Photo Banner */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={ASSET_IMAGES.commercialOffice}
                  alt="Modern commercial office space in Oklahoma City"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/images/commercial-office-clean.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/80 via-[#101C35]/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold text-[#101C35]">
                  <Building2 className="w-4 h-4 text-[#438CEB]" />
                  <span>Commercial Pathway</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold tracking-tight">Commercial Cleaning</h3>
                  <p className="text-xs text-slate-200">For offices, studios, clinics & retail spaces</p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8">
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Reliable commercial cleaning inquiries structured around your facility size, operating hours, and frequency. Designed to keep work environments hygienic and client-ready.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Business & Office Facility Cleaning',
                    'Customized Approximate Square Footage Proposals',
                    'Flexible Cleaning Cadence (Daily, Weekly, Bi-Weekly)',
                    'Convenient After-Hours, Business Hours, or Weekend Schedules',
                    'Professional, Insured Commercial Cleaning Staff',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#438CEB]/10 text-[#438CEB] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA */}
            <div className="px-6 sm:px-8 pb-8 pt-0">
              <button
                onClick={() => onSelectJourney('commercial')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#438CEB] hover:bg-[#3478d3] text-white font-semibold text-sm transition-colors shadow-md cursor-pointer"
              >
                <span>Request a Commercial Cleaning Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
