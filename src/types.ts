export type CustomerType = 'residential' | 'commercial';

export type ResidentialServiceType =
  | 'standard'
  | 'deep'
  | 'move_in_out'
  | 'recurring'
  | 'one_time'
  | 'apartment';

export type FrequencyType = 'weekly' | 'biweekly' | 'monthly' | 'one_time';

export type CommercialFacilityType =
  | 'office'
  | 'medical'
  | 'retail'
  | 'studio_gym'
  | 'coworking'
  | 'other';

export interface QuoteFormData {
  customerType: CustomerType;
  // Residential fields
  residentialService: ResidentialServiceType;
  frequency: FrequencyType;
  bedrooms: number;
  bathrooms: number;
  approxSqFt: string;
  hasPets: boolean;
  addOns: {
    insideOven: boolean;
    insideFridge: boolean;
    interiorWindows: boolean;
    baseboardDeepWipe: boolean;
  };
  // Commercial fields
  commercialFacility: CommercialFacilityType;
  commercialSqFt: string;
  commercialFrequency: string;
  preferredSchedule: 'after_hours' | 'business_hours' | 'weekends' | 'flexible';
  // Contact & Location
  fullName: string;
  email: string;
  phone: string;
  cityOrZip: string;
  notes: string;
}

export interface ServiceDetail {
  id: ResidentialServiceType;
  title: string;
  tagline: string;
  description: string;
  bestFor: string;
  includes: string[];
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceType: string;
  rating: number;
  date: string;
  quote: string;
  source: string;
}

export interface ServiceAreaLocation {
  name: string;
  county: string;
  zipCodes: string[];
  description: string;
}
