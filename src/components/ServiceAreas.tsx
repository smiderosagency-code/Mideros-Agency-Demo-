import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../data/cleaningData';

interface ServiceAreasProps {
  onQuoteFromArea: (locationName: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onQuoteFromArea }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    status: 'idle' | 'found' | 'outside';
    matchedLocation?: string;
    message?: string;
  }>({ status: 'idle' });

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setLookupResult({ status: 'idle' });
      return;
    }

    // Match by ZIP code or city name in our verified OKC metro database
    const matched = SERVICE_AREAS.find((area) => {
      const matchName = area.name.toLowerCase().includes(query);
      const matchZip = area.zipCodes.some((zip) => zip === query);
      return matchName || matchZip;
    });

    if (matched) {
      setLookupResult({
        status: 'found',
        matchedLocation: matched.name,
        message: `Great news! ${matched.name} is a confirmed primary service area for Thunder Cleaning Services OKC. We offer full residential and commercial services here.`,
      });
    } else {
      setLookupResult({
        status: 'outside',
        message: `"${searchQuery}" is not within our standard primary OKC metro service areas. If your property is located near county borders or in an adjacent township, submit an inquiry and our dispatch team will review route availability.`,
      });
    }
  };

  return (
    <section id="service-areas" className="py-24 bg-[#F8FAFD] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
            <span>Service Coverage</span>
            <span aria-hidden="true">·</span>
            <span>Oklahoma City & Surrounding Metro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-4 text-balance">
            Proudly Cleaning Homes & Businesses Across the Greater OKC Metro
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Thunder Cleaning Services provides dependable residential housekeeping and commercial
            inquiries throughout Oklahoma City and neighboring communities.
          </p>
        </div>

        {/* Interactive ZIP / City Lookup Tool */}
        <div className="max-w-2xl mx-auto mb-16 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#101C35] mb-2 text-center">
            Check Your Neighborhood Coverage
          </h3>
          <p className="text-xs text-slate-500 mb-6 text-center">
            Enter your Oklahoma City ZIP code or community name (e.g., <em>73013</em>, <em>Edmond</em>, <em>Norman</em>, or <em>Nichols Hills</em>):
          </p>

          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter OKC ZIP or City (e.g., 73013, Yukon, Edmond)..."
                className="w-full pl-10 pr-4 py-3 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] focus:bg-white transition-all"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#101C35] hover:bg-[#1f2937] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Verify Location</span>
            </button>
          </form>

          {/* Lookup Result Feedback */}
          {lookupResult.status === 'found' && (
            <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-emerald-900">{lookupResult.matchedLocation} is Covered!</p>
                <p className="text-emerald-700 mt-0.5">{lookupResult.message}</p>
                <button
                  onClick={() => onQuoteFromArea(lookupResult.matchedLocation || searchQuery)}
                  className="mt-2.5 inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                >
                  <span>Request a Quote for {lookupResult.matchedLocation}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {lookupResult.status === 'outside' && (
            <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-amber-900">Custom Review Needed</p>
                <p className="text-amber-700 mt-0.5">{lookupResult.message}</p>
                <button
                  onClick={() => onQuoteFromArea(searchQuery)}
                  className="mt-2.5 inline-flex items-center gap-1.5 font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
                >
                  <span>Inquire for Nearby Coverage</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Confirmed Metro Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E9EFF6] text-[#438CEB] flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#101C35]">{area.name}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{area.county}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Active Route
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="mb-4">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                    Sample ZIPs Served:
                  </p>
                  <p className="text-[11px] text-slate-600 font-mono">
                    {area.zipCodes.slice(0, 4).join(', ')} {area.zipCodes.length > 4 && '+ more'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onQuoteFromArea(area.name)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-50 hover:bg-[#101C35] hover:text-white text-slate-700 text-xs font-semibold transition-colors duration-200 border border-slate-200/80 cursor-pointer"
              >
                <span>Book in {area.name}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-center text-slate-500 mt-10">
          * Service coverage applies to all verified postal ZIP codes within the Oklahoma City metropolitan jurisdiction.
        </p>

      </div>
    </section>
  );
};
