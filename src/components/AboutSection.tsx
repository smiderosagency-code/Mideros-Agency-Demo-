import React from 'react';
import { ShieldCheck, Heart, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { ASSET_IMAGES } from '../data/cleaningData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Column 1: Image & Craft Showcase (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <img
                src={ASSET_IMAGES.equipmentCraft}
                alt="Carefully curated professional cleaning supplies and microfiber cloths"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = '/images/cleaning-equipment-caddy.jpg';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-[#101C35] mb-1">
                  <MapPin className="w-4 h-4 text-[#438CEB]" />
                  <span>Oklahoma City Native Service</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Committed to delivering spotless environments with genuine care and respect for your home.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Storytelling Content (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
              <span>About Us</span>
              <span aria-hidden="true">·</span>
              <span>Thunder Cleaning Services OKC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-6 text-balance">
              Dedicated to Bringing Comfort, Cleanliness, and Calm to Oklahoma City Homes
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-8">
              <p>
                At <strong>Thunder Cleaning Services OKC</strong>, our identity is shaped by the energy,
                resilience, and community spirit of Oklahoma City. We understand that your living space is
                more than just square footage—it is your personal sanctuary after demanding workdays and the
                backdrop to life's most meaningful moments.
              </p>
              <p>
                Our philosophy, <em>"Powerful Cleaning. Peaceful Living."</em>, guides every single visit.
                Whether we are dusting baseboards in Edmond, sanitizing kitchen counters in Midtown, or
                preparing an apartment in Norman for new owners, we treat every residence with meticulous
                care and uncompromising integrity.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E9EFF6] text-[#438CEB] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#101C35]">Vetted & Insured</h3>
                  <p className="text-[11px] text-slate-500">Every team member completes background checks for your security.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E9EFF6] text-[#438CEB] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#101C35]">Pet & Family Friendly</h3>
                  <p className="text-[11px] text-slate-500">Mindful cleaning techniques safe for four-legged family members.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E9EFF6] text-[#438CEB] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#101C35]">Detail-Oriented Standard</h3>
                  <p className="text-[11px] text-slate-500">We inspect high-touch corners, baseboards, and fixture shine.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E9EFF6] text-[#438CEB] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#101C35]">Satisfaction Guarantee</h3>
                  <p className="text-[11px] text-slate-500">If something is not spotless, our team returns to make it right.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
