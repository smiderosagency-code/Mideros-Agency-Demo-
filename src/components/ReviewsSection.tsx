import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { PUBLISHED_REVIEWS } from '../data/cleaningData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
              <span>Client Experiences</span>
              <span aria-hidden="true">·</span>
              <span>Published Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-3">
              Trusted by Hundreds of Oklahoma City Families
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Read real feedback published by local homeowners and residents who rely on Thunder
              Cleaning Services for weekly upkeep, thorough deep cleans, and moving transitions.
            </p>
          </div>

          {/* Published Rating Summary Card */}
          <div className="bg-[#101C35] text-white p-5 rounded-2xl border border-white/10 shadow-lg shrink-0 flex items-center gap-4">
            <div className="text-center">
              <span className="text-3xl font-extrabold text-white block leading-none">5.0</span>
              <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-white/10 pl-4 text-xs">
              <p className="font-bold text-white">Google Rating Claim</p>
              <p className="text-slate-300">500+ Happy Clients</p>
              <a
                href="https://www.google.com/search?q=Thunder+Cleaning+Services+OKC"
                target="_blank"
                rel="noreferrer"
                className="text-[#438CEB] hover:text-white inline-flex items-center gap-1 mt-1 font-semibold text-[11px]"
              >
                <span>View on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PUBLISHED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F8FAFD] p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between relative"
            >
              <div>
                {/* Header with Stars and Source */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <span>{rev.source}</span>
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </blockquote>
              </div>

              {/* Author & Service Footnote */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[#101C35]">{rev.name}</h3>
                  <p className="text-[11px] text-slate-500">{rev.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#438CEB] bg-[#438CEB]/10 px-2 py-0.5 rounded">
                    {rev.serviceType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Attribution note */}
        <p className="text-[11px] text-center text-slate-500 mt-10">
          Reviews quoted reflect authentic client experiences shared on Google and public platforms for Thunder Cleaning Services OKC.
        </p>

      </div>
    </section>
  );
};
