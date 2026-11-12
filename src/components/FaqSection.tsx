import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/cleaningData';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  // Keep first open by default for immediate preview
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFD] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
            <span>Clear Answers</span>
            <span aria-hidden="true">·</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find prompt, transparent answers to common questions about our house cleaning scopes,
            scheduling flexibility, service areas, and satisfaction guarantee.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#438CEB] cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-sm sm:text-base font-bold text-[#101C35] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#E9EFF6] text-[#101C35] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#438CEB] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions footer */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200">
          <p className="text-xs text-slate-600 mb-2">
            Have a specialized inquiry or specific cleaning checklist request?
          </p>
          <button
            onClick={onAskQuestion}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#438CEB] hover:text-[#101C35] transition-colors cursor-pointer"
          >
            <span>Contact Thunder Cleaning Services OKC</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
