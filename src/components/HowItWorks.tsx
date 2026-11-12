import React from 'react';
import { Calendar, FileText, CheckCheck, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartQuote }) => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Service',
      description:
        'Select the cleaning option that fits your needs—from standard house maintenance and intensive deep cleaning to move-in transitions or commercial workspace upkeep.',
      icon: Calendar,
      detail: 'Tailored frequencies: One-time, weekly, bi-weekly, or monthly.',
    },
    {
      step: '02',
      title: 'Tell Us About Your Space',
      description:
        'Share your Oklahoma City location, approximate property size, bedroom and bathroom counts, and any specific preferences like pet care or appliance detailing.',
      icon: FileText,
      detail: 'Clear, transparent inquiries with no hidden surprises.',
    },
    {
      step: '03',
      title: 'Coordinate Your Cleaning',
      description:
        'Our Oklahoma City team reviews your inquiry, confirms availability, provides a personalized estimate, and coordinates your preferred date and time.',
      icon: CheckCheck,
      detail: 'Personalized coordination prior to official booking confirmation.',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFD] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
            <span>Seamless Process</span>
            <span aria-hidden="true">·</span>
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-4">
            Simple, Transparent, and Stress-Free
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We designed our quotation experience to be clear from the very first step. Here is how we
            bring clean comfort to your Oklahoma City doorstep.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#101C35] to-[#438CEB]">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#E9EFF6] text-[#101C35] group-hover:bg-[#438CEB] group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#101C35] mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-medium text-[#438CEB]">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* Transparent Booking Disclaimer Callout */}
        <div className="mt-12 bg-white rounded-xl p-5 border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs text-slate-600">
            <strong>Clear Communication Guarantee:</strong> Submitting an inquiry generates a customized estimate proposal. Bookings are only finalized once our OKC team reviews your schedule preferences and confirms availability with you.
          </p>
          <div className="mt-3">
            <button
              onClick={onStartQuote}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#438CEB] hover:text-[#101C35] transition-colors cursor-pointer"
            >
              <span>Start Your Free Quote Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
