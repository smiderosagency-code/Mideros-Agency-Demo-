/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CustomerJourneySelector } from './components/CustomerJourneySelector';
import { ResidentialServices } from './components/ResidentialServices';
import { CommercialCleaning } from './components/CommercialCleaning';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { ServiceAreas } from './components/ServiceAreas';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CustomerType, ResidentialServiceType } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [quoteCustomerType, setQuoteCustomerType] = useState<CustomerType>('residential');
  const [quoteService, setQuoteService] = useState<ResidentialServiceType>('standard');
  const [quoteLocation, setQuoteLocation] = useState<string>('Oklahoma City');

  // Track active section for top bar highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'pathways', 'services', 'commercial', 'about', 'service-areas', 'reviews', 'faq', 'quote', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenQuote = (type?: CustomerType) => {
    if (type) setQuoteCustomerType(type);
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectResidentialService = (serviceId: ResidentialServiceType) => {
    setQuoteCustomerType('residential');
    setQuoteService(serviceId);
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectJourney = (type: CustomerType) => {
    setQuoteCustomerType(type);
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteFromArea = (locationName: string) => {
    setQuoteLocation(locationName);
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1F2937] flex flex-col antialiased selection:bg-[#438CEB]/20 selection:text-[#101C35]">
      {/* Premium Top Navigation Bar */}
      <Header onOpenQuote={handleOpenQuote} activeSection={activeSection} />

      <main className="flex-1">
        {/* Section 4.B: Cinematic Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Section 4.C: Trust & Credibility Strip */}
        <TrustStrip />

        {/* Section 4.E: Two Clear Customer Journeys (Residential vs Commercial) */}
        <CustomerJourneySelector onSelectJourney={handleSelectJourney} />

        {/* Section 4.D: Premium Residential Services Showcase & Room Comparison */}
        <ResidentialServices onSelectService={handleSelectResidentialService} />

        {/* Commercial Cleaning Section */}
        <CommercialCleaning onOpenCommercialQuote={() => handleOpenQuote('commercial')} />

        {/* Section 4.F: How It Works */}
        <HowItWorks onStartQuote={() => handleOpenQuote('residential')} />

        {/* Section 4.G: About Thunder Cleaning Services OKC */}
        <AboutSection />

        {/* Section 4.H: Oklahoma City Service Areas & Real-Time ZIP Checker */}
        <ServiceAreas onQuoteFromArea={handleQuoteFromArea} />

        {/* Section 4.I: Customer Testimonials & Verified Google Proof */}
        <ReviewsSection />

        {/* Section 5: The Redesigned 3-Step Quotation Experience */}
        <QuoteSection
          initialCustomerType={quoteCustomerType}
          initialService={quoteService}
          initialLocation={quoteLocation}
        />

        {/* Section 4.J: Interactive FAQ Accordion */}
        <FaqSection onAskQuestion={() => {
          const contactEl = document.getElementById('contact');
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Section 6: Verified Contact Experience */}
        <ContactSection onOpenQuote={handleOpenQuote} />

        {/* Section 4.K: Final Conversion Section */}
        <FinalCta onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer with S.Mideros Agency Credit */}
      <Footer />
    </div>
  );
}
