import React, { useState, useEffect } from 'react';
import {
  Home,
  Building2,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Info,
  Clock,
  ShieldCheck,
  Send,
} from 'lucide-react';
import {
  CustomerType,
  ResidentialServiceType,
  FrequencyType,
  CommercialFacilityType,
  QuoteFormData,
} from '../types';

interface QuoteSectionProps {
  initialCustomerType?: CustomerType;
  initialService?: ResidentialServiceType;
  initialLocation?: string;
  onSubmitted?: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  initialCustomerType = 'residential',
  initialService = 'standard',
  initialLocation = '',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState<QuoteFormData>({
    customerType: initialCustomerType,
    residentialService: initialService,
    frequency: 'biweekly',
    bedrooms: 3,
    bathrooms: 2,
    approxSqFt: '1,500 – 2,500 sq ft',
    hasPets: false,
    addOns: {
      insideOven: false,
      insideFridge: false,
      interiorWindows: false,
      baseboardDeepWipe: false,
    },
    commercialFacility: 'office',
    commercialSqFt: '2,000 – 5,000 sq ft',
    commercialFrequency: 'Weekly (1x)',
    preferredSchedule: 'after_hours',
    fullName: '',
    email: '',
    phone: '',
    cityOrZip: initialLocation || 'Oklahoma City',
    notes: '',
  });

  // Keep in sync when initial props change
  useEffect(() => {
    if (initialCustomerType) {
      setFormData((prev) => ({ ...prev, customerType: initialCustomerType }));
    }
    if (initialService) {
      setFormData((prev) => ({ ...prev, residentialService: initialService }));
    }
    if (initialLocation) {
      setFormData((prev) => ({ ...prev, cityOrZip: initialLocation }));
    }
  }, [initialCustomerType, initialService, initialLocation]);

  // Calculate a transparent estimated range to give user helpful budgeting insight
  const calculateEstimate = () => {
    if (formData.customerType === 'residential') {
      let base = 120;
      if (formData.residentialService === 'deep') base = 210;
      if (formData.residentialService === 'move_in_out') base = 250;
      if (formData.residentialService === 'apartment') base = 100;

      // Bed / Bath factors
      base += (formData.bedrooms - 1) * 20;
      base += (formData.bathrooms - 1) * 25;

      // Add-ons
      if (formData.addOns.insideOven) base += 35;
      if (formData.addOns.insideFridge) base += 35;
      if (formData.addOns.interiorWindows) base += 45;
      if (formData.addOns.baseboardDeepWipe) base += 50;
      if (formData.hasPets) base += 15;

      // Frequency discount
      let discountMultiplier = 1;
      if (formData.frequency === 'weekly') discountMultiplier = 0.8;
      if (formData.frequency === 'biweekly') discountMultiplier = 0.85;
      if (formData.frequency === 'monthly') discountMultiplier = 0.92;

      const low = Math.round(base * discountMultiplier * 0.95);
      const high = Math.round(base * discountMultiplier * 1.1);
      return { low, high, isRecurring: formData.frequency !== 'one_time' };
    } else {
      // Commercial estimate range
      return { low: 220, high: 480, isCommercial: true };
    }
  };

  const estimate = calculateEstimate();

  const validateStep3 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com)';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    }
    if (!formData.cityOrZip.trim()) {
      newErrors.cityOrZip = 'Please provide your OKC city or ZIP code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData((prev) => ({
      ...prev,
      fullName: '',
      email: '',
      phone: '',
      notes: '',
    }));
  };

  return (
    <section id="quote" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#438CEB] font-semibold mb-3">
            <span>Tailored Proposals</span>
            <span aria-hidden="true">·</span>
            <span>Quotation Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] tracking-tight mb-4">
            Request Your Customized Cleaning Quote
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our redesigned quotation experience lets you configure exactly what your space needs
            in three quick steps. No hidden charges, no guesswork.
          </p>
        </div>

        {/* Agency Demo Notice Banner (Mandatory per prompt) */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#E9EFF6] border border-slate-300 text-xs text-slate-700 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#101C35]">Agency Concept Demonstration:</span>{' '}
            This redesign by S.Mideros Agency illustrates the improved 3-step quotation journey for Thunder Cleaning Services OKC. Inquiries submitted here simulate client proposal generation and display transparent scheduling next steps.
          </div>
        </div>

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-lg mx-auto">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step >= 1
                      ? 'bg-[#101C35] text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  1
                </div>
                <span className="text-[11px] font-semibold text-slate-700">Client Type</span>
              </button>

              <div
                className={`h-0.5 flex-1 mx-3 transition-colors ${
                  step >= 2 ? 'bg-[#101C35]' : 'bg-slate-200'
                }`}
              />

              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step >= 2
                      ? 'bg-[#101C35] text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  2
                </div>
                <span className="text-[11px] font-semibold text-slate-700">Cleaning Scope</span>
              </button>

              <div
                className={`h-0.5 flex-1 mx-3 transition-colors ${
                  step >= 3 ? 'bg-[#101C35]' : 'bg-slate-200'
                }`}
              />

              <button
                type="button"
                onClick={() => {
                  if (step === 2) setStep(3);
                }}
                className="flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step === 3
                      ? 'bg-[#101C35] text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  3
                </div>
                <span className="text-[11px] font-semibold text-slate-700">Location & Contact</span>
              </button>
            </div>
          </div>
        )}

        {/* Portal Card */}
        <div className="bg-[#F8FAFD] rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          
          {/* ================= STEP 1: CUSTOMER TYPE ================= */}
          {!isSubmitted && step === 1 && (
            <div>
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#438CEB]">Step 1 of 3</span>
                <h3 className="text-2xl font-bold text-[#101C35] mt-1">
                  What type of property would you like us to clean?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select your service category to personalize your requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Residential Option */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, customerType: 'residential' })}
                  className={`p-6 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    formData.customerType === 'residential'
                      ? 'bg-white border-[#438CEB] shadow-md ring-2 ring-[#438CEB]/20'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E9EFF6] text-[#438CEB] flex items-center justify-center">
                        <Home className="w-6 h-6" />
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          formData.customerType === 'residential'
                            ? 'border-[#438CEB] bg-[#438CEB] text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {formData.customerType === 'residential' && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#101C35]">Residential Cleaning</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      For single-family homes, townhomes, condominiums, and apartments in the Oklahoma City metro.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Includes standard, deep, moving, and recurring cleanings</span>
                  </div>
                </button>

                {/* Commercial Option */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, customerType: 'commercial' })}
                  className={`p-6 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    formData.customerType === 'commercial'
                      ? 'bg-white border-[#438CEB] shadow-md ring-2 ring-[#438CEB]/20'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E9EFF6] text-[#101C35] flex items-center justify-center">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          formData.customerType === 'commercial'
                            ? 'border-[#438CEB] bg-[#438CEB] text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {formData.customerType === 'commercial' && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#101C35]">Commercial Cleaning</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      For business offices, executive suites, clinics, retail storefronts, and co-working environments.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Configured for facility size, after-hours, and recurring schedules</span>
                  </div>
                </button>
              </div>

              {/* Step 1 Next Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#101C35] hover:bg-[#1f2937] text-white text-xs font-semibold rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>Continue to Scope (Step 2)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: REQUIREMENTS ================= */}
          {!isSubmitted && step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#438CEB]">Step 2 of 3</span>
                  <h3 className="text-2xl font-bold text-[#101C35] mt-1">
                    {formData.customerType === 'residential'
                      ? 'Tell Us About Your Home & Preferences'
                      : 'Commercial Facility Specifications'}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 capitalize">
                  {formData.customerType} Path
                </span>
              </div>

              {/* RESIDENTIAL INQUIRY FIELDS */}
              {formData.customerType === 'residential' && (
                <div className="space-y-8">
                  {/* Service Type Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2.5">
                      1. Select Cleaning Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'standard', label: 'Standard Clean', desc: 'Routine upkeep' },
                        { id: 'deep', label: 'Deep Cleaning', desc: 'Detailed restoration' },
                        { id: 'move_in_out', label: 'Move In / Out', desc: 'Empty home prep' },
                        { id: 'recurring', label: 'Recurring Care', desc: 'Weekly/bi-weekly' },
                        { id: 'apartment', label: 'Apartment/Condo', desc: 'Compact footprint' },
                        { id: 'one_time', label: 'One-Time Clean', desc: 'Single occasion' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              residentialService: item.id as ResidentialServiceType,
                            })
                          }
                          className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                            formData.residentialService === item.id
                              ? 'bg-white border-[#438CEB] ring-2 ring-[#438CEB]/20 text-[#101C35]'
                              : 'bg-white/60 border-slate-200 text-slate-700 hover:bg-white'
                          }`}
                        >
                          <p className="text-xs font-bold">{item.label}</p>
                          <p className="text-[11px] text-slate-500">{item.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Frequency Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2.5">
                      2. Desired Frequency <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: 'biweekly', label: 'Bi-Weekly', save: 'Save 15% (Most Popular)' },
                        { id: 'weekly', label: 'Weekly', save: 'Save 20%' },
                        { id: 'monthly', label: 'Monthly', save: 'Save 8%' },
                        { id: 'one_time', label: 'One-Time', save: 'Standard rate' },
                      ].map((freq) => (
                        <button
                          key={freq.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, frequency: freq.id as FrequencyType })
                          }
                          className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                            formData.frequency === freq.id
                              ? 'bg-[#101C35] text-white border-[#101C35]'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <p className="text-xs font-bold">{freq.label}</p>
                          <p
                            className={`text-[10px] ${
                              formData.frequency === freq.id ? 'text-[#438CEB]' : 'text-slate-500'
                            }`}
                          >
                            {freq.save}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bed / Bath / Sq Ft Counters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-5 rounded-2xl border border-slate-200">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Bedrooms
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({ ...formData, bedrooms: num })}
                            className={`w-9 h-9 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                              formData.bedrooms === num
                                ? 'bg-[#438CEB] text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Bathrooms
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({ ...formData, bathrooms: num })}
                            className={`w-9 h-9 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                              formData.bathrooms === num
                                ? 'bg-[#438CEB] text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Approx. Square Footage
                      </label>
                      <select
                        value={formData.approxSqFt}
                        onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
                        className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      >
                        <option value="Under 1,000 sq ft">Under 1,000 sq ft</option>
                        <option value="1,000 – 1,500 sq ft">1,000 – 1,500 sq ft</option>
                        <option value="1,500 – 2,500 sq ft">1,500 – 2,500 sq ft</option>
                        <option value="2,500 – 3,500 sq ft">2,500 – 3,500 sq ft</option>
                        <option value="3,500+ sq ft">3,500+ sq ft</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Preferences & Add-ons */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2.5">
                      3. Optional Add-ons & Pet Preferences (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        {
                          key: 'insideOven',
                          label: 'Inside Oven Deep Clean',
                          sub: '+$35',
                        },
                        {
                          key: 'insideFridge',
                          label: 'Inside Refrigerator Detail',
                          sub: '+$35',
                        },
                        {
                          key: 'interiorWindows',
                          label: 'Interior Window Sills & Glass',
                          sub: '+$45',
                        },
                        {
                          key: 'baseboardDeepWipe',
                          label: 'Baseboard Detail Wipe',
                          sub: '+$50',
                        },
                      ].map((addon) => {
                        const isChecked =
                          formData.addOns[addon.key as keyof typeof formData.addOns];
                        return (
                          <button
                            key={addon.key}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                addOns: {
                                  ...formData.addOns,
                                  [addon.key]: !isChecked,
                                },
                              })
                            }
                            className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-colors ${
                              isChecked
                                ? 'bg-white border-[#438CEB] text-[#101C35] ring-1 ring-[#438CEB]'
                                : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                            }`}
                          >
                            <span className="text-xs font-medium">{addon.label}</span>
                            <span className="text-[11px] font-bold text-[#438CEB] ml-2">
                              {addon.sub}
                            </span>
                          </button>
                        );
                      })}

                      {/* Pets Checkbox */}
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, hasPets: !formData.hasPets })}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-colors ${
                          formData.hasPets
                            ? 'bg-white border-[#438CEB] text-[#101C35] ring-1 ring-[#438CEB]'
                            : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                        }`}
                      >
                        <span className="text-xs font-medium">Home Has Pets (Dogs/Cats)</span>
                        <span className="text-[11px] text-slate-400">Pet-friendly products</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* COMMERCIAL INQUIRY FIELDS */}
              {formData.customerType === 'commercial' && (
                <div className="space-y-8">
                  {/* Business Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2.5">
                      1. Business or Facility Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'office', label: 'Commercial Office Suite' },
                        { id: 'medical', label: 'Medical / Dental Clinic' },
                        { id: 'retail', label: 'Retail / Showroom Storefront' },
                        { id: 'studio_gym', label: 'Creative Studio or Gym' },
                        { id: 'coworking', label: 'Coworking / Shared Office' },
                        { id: 'other', label: 'Other Commercial Space' },
                      ].map((fac) => (
                        <button
                          key={fac.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              commercialFacility: fac.id as CommercialFacilityType,
                            })
                          }
                          className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                            formData.commercialFacility === fac.id
                              ? 'bg-white border-[#438CEB] ring-2 ring-[#438CEB]/20 text-[#101C35] font-bold'
                              : 'bg-white/60 border-slate-200 text-slate-700 hover:bg-white'
                          }`}
                        >
                          <p className="text-xs">{fac.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Commercial Sq Ft & Cadence */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Approximate Facility Square Footage
                      </label>
                      <select
                        value={formData.commercialSqFt}
                        onChange={(e) =>
                          setFormData({ ...formData, commercialSqFt: e.target.value })
                        }
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      >
                        <option value="Under 2,000 sq ft">Under 2,000 sq ft</option>
                        <option value="2,000 – 5,000 sq ft">2,000 – 5,000 sq ft</option>
                        <option value="5,000 – 10,000 sq ft">5,000 – 10,000 sq ft</option>
                        <option value="10,000+ sq ft">10,000+ sq ft (Enterprise proposal)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Desired Cleaning Cadence
                      </label>
                      <select
                        value={formData.commercialFrequency}
                        onChange={(e) =>
                          setFormData({ ...formData, commercialFrequency: e.target.value })
                        }
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      >
                        <option value="Weekly (1x)">Weekly (1x)</option>
                        <option value="2x – 3x per Week">2x – 3x per Week</option>
                        <option value="Daily (Monday – Friday)">Daily (Monday – Friday)</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="One-Time Deep Commercial Clean">One-Time Deep Commercial Clean</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Hours */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2.5">
                      Preferred Cleaning Schedule
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: 'after_hours', label: 'After Hours (Evenings)' },
                        { id: 'business_hours', label: 'During Business Hours' },
                        { id: 'weekends', label: 'Weekends Only' },
                        { id: 'flexible', label: 'Flexible / As Needed' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              preferredSchedule: item.id as any,
                            })
                          }
                          className={`p-3 rounded-xl border text-center transition-colors cursor-pointer text-xs font-semibold ${
                            formData.preferredSchedule === item.id
                              ? 'bg-[#101C35] text-white border-[#101C35]'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Instant Interactive Estimate Banner */}
              <div className="mt-8 p-5 rounded-2xl bg-white border border-[#438CEB]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#438CEB]">
                    Instant Estimate Range
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-extrabold text-[#101C35] font-mono tabular-nums">
                      ${estimate.low} – ${estimate.high}
                    </span>
                    <span className="text-xs text-slate-500">
                      {estimate.isRecurring ? '/ visit (recurring cadence)' : '/ complete visit'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    * Final quote confirmed based on exact square footage, property layout, and personalized requests.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#101C35] hover:bg-[#1f2937] text-white text-xs font-semibold rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <span>Proceed to Contact (Step 3)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 3: CONTACT & LOCATION ================= */}
          {!isSubmitted && step === 3 && (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#438CEB]">Step 3 of 3</span>
                  <h3 className="text-2xl font-bold text-[#101C35] mt-1">
                    Where Should We Send Your Proposal?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Share your Oklahoma City location and contact details so our team can verify availability.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-slate-500 hover:text-[#101C35] underline cursor-pointer"
                >
                  Edit Scope
                </button>
              </div>

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#101C35] mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rachel Miller"
                    className={`w-full py-3 px-4 bg-white border rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] ${
                      errors.fullName ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-[#101C35] mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. rachel@example.com"
                    className={`w-full py-3 px-4 bg-white border rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] ${
                      errors.email ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-[#101C35] mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. (405) 555-0192"
                    className={`w-full py-3 px-4 bg-white border rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] ${
                      errors.phone ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* City or ZIP code */}
                <div>
                  <label className="block text-xs font-bold text-[#101C35] mb-1.5">
                    City or Oklahoma City Metro ZIP <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.cityOrZip}
                    onChange={(e) => {
                      setFormData({ ...formData, cityOrZip: e.target.value });
                      if (errors.cityOrZip) setErrors({ ...errors, cityOrZip: '' });
                    }}
                    placeholder="e.g. Edmond, 73013, Norman, or Downtown OKC"
                    className={`w-full py-3 px-4 bg-white border rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB] ${
                      errors.cityOrZip ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.cityOrZip && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.cityOrZip}</p>
                  )}
                </div>
              </div>

              {/* Optional Notes */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-[#101C35] mb-1.5">
                  Specific Requests or Access Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g., Gate code, specific focus on kitchen tile grout, pet introductions, or preferred cleaning arrival window..."
                  className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                />
              </div>

              {/* What Happens Next Explanation (Required by prompt) */}
              <div className="mb-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
                <p className="font-bold text-[#101C35] mb-1">What happens after you submit?</p>
                <ol className="list-decimal list-inside space-y-1 text-[11px]">
                  <li>Our Oklahoma City team reviews your square footage and schedule requests.</li>
                  <li>We send your formal quote breakdown with exact scheduling availability.</li>
                  <li>You review and approve the proposal before any booking is confirmed.</li>
                </ol>
              </div>

              {/* Form Navigation Buttons */}
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Requirements</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#438CEB] hover:bg-[#3478d3] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer hover:shadow-lg hover:shadow-[#438CEB]/25"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Free Quote Request</span>
                </button>
              </div>
            </form>
          )}

          {/* ================= CONFIRMATION SCREEN ================= */}
          {isSubmitted && (
            <div className="py-8 text-center max-w-xl mx-auto animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-bold text-[#101C35] mb-3">
                Inquiry Successfully Prepared!
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Thank you, <strong>{formData.fullName}</strong>. Your customized{' '}
                <span className="capitalize font-semibold text-[#101C35]">
                  {formData.customerType}
                </span>{' '}
                cleaning request for <strong>{formData.cityOrZip}</strong> has been structured.
              </p>

              {/* Summary card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left mb-6 text-xs text-slate-700 space-y-2">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="font-semibold text-[#101C35] capitalize">
                    {formData.customerType === 'residential'
                      ? `${formData.residentialService} cleaning`
                      : `${formData.commercialFacility} cleaning`}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Frequency:</span>
                  <span className="font-semibold text-[#101C35] capitalize">
                    {formData.customerType === 'residential'
                      ? formData.frequency
                      : formData.commercialFrequency}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Estimated Range:</span>
                  <span className="font-bold text-[#438CEB] font-mono tabular-nums">
                    ${estimate.low} – ${estimate.high}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Destination:</span>
                  <span className="font-medium text-slate-900">{formData.email}</span>
                </div>
              </div>

              {/* Next Steps Reminder */}
              <div className="p-4 rounded-xl bg-[#E9EFF6] text-xs text-slate-600 mb-8 text-left">
                <p className="font-bold text-[#101C35] mb-1">Confirmation Status Notice:</p>
                <p className="text-[11px] leading-relaxed">
                  In production, Thunder Cleaning Services OKC reaches out within 2–4 business hours to verify schedule availability and finalize dates. Bookings are confirmed upon mutual agreement.
                </p>
                <p className="text-[11px] text-slate-500 mt-2 italic">
                  * For real-world immediate inquiries, contact directly at: info@thundercleaningservicesokc.com
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-[#101C35] text-white text-xs font-semibold hover:bg-[#1f2937] transition-colors cursor-pointer"
                >
                  Configure Another Quote
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
