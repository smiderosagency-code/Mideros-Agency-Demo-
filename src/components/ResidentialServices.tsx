import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { RESIDENTIAL_SERVICES, ROOM_CHECKLIST } from '../data/cleaningData';
import { ResidentialServiceType } from '../types';

interface ResidentialServicesProps {
  onSelectService: (serviceId: ResidentialServiceType) => void;
}

export const ResidentialServices: React.FC<ResidentialServicesProps> = ({
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'comparison'>('services');
  const [selectedRoom, setSelectedRoom] = useState<number>(0);

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
              <span>Residential Excellence</span>
              <span aria-hidden="true">·</span>
              <span>Thunder Cleaning Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-3">
              Precision Care for Every Oklahoma City Home
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From weekly maintenance routines to meticulous restorative deep cleanings and moving day
              turnarounds, explore our comprehensive residential services.
            </p>
          </div>

          {/* Segmented View Switcher (Functional interactive control) */}
          <div className="inline-flex p-1.5 bg-[#E9EFF6] rounded-xl self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-white text-[#101C35] shadow-sm'
                  : 'text-slate-600 hover:text-[#101C35]'
              }`}
            >
              Services Overview
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'comparison'
                  ? 'bg-white text-[#101C35] shadow-sm'
                  : 'text-slate-600 hover:text-[#101C35]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Standard vs Deep Checklist</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 6 Core Services Showcase */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESIDENTIAL_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-[#F8FAFD] rounded-2xl border border-slate-200 hover:border-[#438CEB]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo with zoom effect */}
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback to .jpg if .webp cannot be decoded
                        if (e.currentTarget.src.endsWith('.webp')) {
                          e.currentTarget.src = e.currentTarget.src.replace('.webp', '.jpg');
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold text-[#438CEB] uppercase tracking-wider block">
                        Thunder Certified
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs font-medium text-slate-500 italic mb-3">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="mb-5 p-3 rounded-lg bg-white border border-slate-200/70">
                      <p className="text-[11px] font-bold text-[#101C35] mb-1">Best suited for:</p>
                      <p className="text-[11px] text-slate-600">{service.bestFor}</p>
                    </div>

                    <div className="space-y-2 mb-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Inclusions:
                      </p>
                      {service.includes.slice(0, 4).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#438CEB] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-[#101C35] text-[#101C35] hover:text-white border border-slate-200 font-semibold text-xs transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    <span>Quote This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Interactive Room-by-Room Checklist Comparison */}
        {activeTab === 'comparison' && (
          <div className="bg-[#F8FAFD] rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="max-w-2xl mb-8">
              <h3 className="text-xl font-bold text-[#101C35] mb-2">
                Room-by-Room Scope: Standard vs Deep Clean
              </h3>
              <p className="text-xs text-slate-600">
                Compare exactly what tasks are performed in each space of your home. Deep cleanings
                incorporate all standard tasks plus rigorous detail treatment.
              </p>
            </div>

            {/* Room Selector Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {ROOM_CHECKLIST.map((room, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRoom(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedRoom === idx
                      ? 'bg-[#101C35] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {room.room}
                </button>
              ))}
            </div>

            {/* Side-by-Side Comparison Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Standard Cleaning Column */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div>
                    <h4 className="font-bold text-[#101C35] text-base">Standard Cleaning</h4>
                    <p className="text-xs text-slate-500">Regular maintenance focus</p>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    Included
                  </span>
                </div>
                <ul className="space-y-3">
                  {ROOM_CHECKLIST[selectedRoom].standard.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deep Cleaning Column */}
              <div className="bg-[#101C35] text-white rounded-xl p-6 border border-[#438CEB]/30 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div>
                    <h4 className="font-bold text-white text-base">Deep Cleaning Addition</h4>
                    <p className="text-xs text-[#438CEB]">Intensive restorative detailing</p>
                  </div>
                  <span className="text-[11px] font-semibold text-white bg-[#438CEB] px-2.5 py-1 rounded">
                    Deep Focus
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  Includes <strong>everything in Standard</strong>, plus:
                </p>
                <ul className="space-y-3">
                  {ROOM_CHECKLIST[selectedRoom].deep.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-[#438CEB]/20 text-[#438CEB] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#438CEB]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Checklist CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-600">
                Have specific instructions or rooms that need special care? We customize every plan.
              </p>
              <button
                onClick={() => onSelectService('deep')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#438CEB] hover:bg-[#3478d3] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Request Custom Deep Clean Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
