import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenQuote: (type?: 'residential' | 'commercial') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  const [sentMessage, setSentMessage] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactData.name && contactData.email && contactData.message) {
      setSentMessage(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
            <span>Direct Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-4">
            Connect with Thunder Cleaning Services OKC
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Have questions about specialized requirements, recurring schedules, or commercial proposals?
            Reach out directly or choose your dedicated quotation path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Verified Business Details (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#F8FAFD] p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-[#101C35] mb-6">
              Verified Business Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#438CEB] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Official Contact Email
                  </h4>
                  <a
                    href="mailto:info@thundercleaningservicesokc.com"
                    className="text-sm font-semibold text-[#101C35] hover:text-[#438CEB] transition-colors break-all"
                  >
                    info@thundercleaningservicesokc.com
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    For quotes, schedule adjustments & commercial tenders.
                  </p>
                </div>
              </div>

              {/* Service Base Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#438CEB] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Primary Service Location
                  </h4>
                  <p className="text-sm font-semibold text-[#101C35]">
                    Oklahoma City, Oklahoma, USA
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Serving OKC, Edmond, Norman, Moore, Yukon, Nichols Hills, and surrounding metro communities.
                  </p>
                </div>
              </div>

              {/* Direct Quote Pathways */}
              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Prefer a Guided Quote?
                </h4>
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => onOpenQuote('residential')}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-[#438CEB] text-xs font-bold text-[#101C35] hover:text-[#438CEB] transition-colors cursor-pointer"
                  >
                    <span>Request Residential Home Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenQuote('commercial')}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-[#438CEB] text-xs font-bold text-[#101C35] hover:text-[#438CEB] transition-colors cursor-pointer"
                  >
                    <span>Request Commercial Office Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Message Inquiry Form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#101C35] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Need to ask a specific question before requesting a quote? Reach out below.
            </p>

            {sentMessage ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-base font-bold text-emerald-900 mb-1">
                  Message Sent to Thunder Cleaning OKC
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto mb-4">
                  Thank you for contacting Thunder Cleaning Services OKC. A representative will review your message and reply to <strong>{contactData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSentMessage(false);
                    setContactData({ name: '', email: '', subject: 'General Question', message: '' });
                  }}
                  className="text-xs font-semibold text-emerald-900 hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full py-2.5 px-3.5 bg-[#F8FAFD] border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full py-2.5 px-3.5 bg-[#F8FAFD] border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Subject
                  </label>
                  <select
                    value={contactData.subject}
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    className="w-full py-2.5 px-3.5 bg-[#F8FAFD] border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#438CEB] focus:bg-white"
                  >
                    <option value="General Question">General Cleaning Question</option>
                    <option value="Recurring Service Adjustment">Recurring Service Inquiry</option>
                    <option value="Commercial Contract Request">Commercial Facility Proposal</option>
                    <option value="Special Checklist Request">Special Room / Event Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Tell us what you need or ask any question about our Oklahoma City cleaning services..."
                    className="w-full py-2.5 px-3.5 bg-[#F8FAFD] border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#101C35] hover:bg-[#1f2937] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
