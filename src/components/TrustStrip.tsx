import React from 'react';
import { Star, Users, Shield, UserCheck, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const credentials = [
    {
      icon: Star,
      title: '5-Star Google Rating',
      subtitle: 'Published Business Claim',
      detail: 'Consistent top reviews across Oklahoma City',
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      subtitle: 'Published Track Record',
      detail: 'Trusted homes & commercial facilities',
    },
    {
      icon: Shield,
      title: 'Fully Insured Cleaners',
      subtitle: 'Complete Protection',
      detail: 'Full coverage for your home and belongings',
    },
    {
      icon: UserCheck,
      title: 'Vetted Background Checks',
      subtitle: 'Rigorous Screening',
      detail: 'Only trustworthy, verified professionals',
    },
    {
      icon: HeartHandshake,
      title: 'Satisfaction Guarantee',
      subtitle: 'Our Peace of Mind Promise',
      detail: 'We re-clean if something is not right',
    },
  ];

  return (
    <section aria-label="Trust and Credibility" className="bg-[#E9EFF6] py-12 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle header label */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#101C35]/70">
            Built on Reliability & Verified Oklahoma City Standards
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFD] p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#101C35] text-[#438CEB] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-[#101C35] tracking-tight mb-0.5">
                  {item.title}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#438CEB] mb-1.5">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-snug">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transparent business claim citation note */}
        <p className="text-[11px] text-center text-slate-500 mt-6 italic">
          * Claims reflect publicly published business statements by Thunder Cleaning Services OKC for service quality, licensing, and client satisfaction.
        </p>

      </div>
    </section>
  );
};
