import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { DenimSection } from './components/DenimSection';
import { SupplyChain } from './components/SupplyChain';
import { ProductCategories } from './components/ProductCategories';
import { EmergingBuyers } from './components/EmergingBuyers';
import { Services } from './components/Services';
import { WhyBelvoris } from './components/WhyBelvoris';
import { About } from './components/About';
import { Leadership } from './components/Leadership';
import { InternationalCTA } from './components/InternationalCTA';
import { InquiryForm } from './components/InquiryForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategoryForQuote, setSelectedCategoryForQuote] = useState<string | undefined>(undefined);

  const handleOpenQuote = (categoryOrService?: string) => {
    if (categoryOrService) {
      setSelectedCategoryForQuote(categoryOrService);
    }
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#18181B] selection:bg-[#18181B] selection:text-[#FAF9F5] flex flex-col font-sans">
      {/* 1. Header Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Introduction Section */}
        <Introduction onOpenQuote={() => handleOpenQuote()} />

        {/* 4. Dedicated Denim Hero & Solutions Section */}
        <DenimSection onOpenQuote={(cat) => handleOpenQuote(cat)} />

        {/* 5. Complete Supply Chain: From Fiber to Shipment (8 Stages) */}
        <SupplyChain onOpenQuote={(stage) => handleOpenQuote(stage)} />

        {/* 6. Comprehensive Product Portfolio (5 Groups) */}
        <ProductCategories
          onOpenQuoteWithCategory={(categoryName) => handleOpenQuote(categoryName)}
        />

        {/* 7. Dedicated Support for Small & Emerging Brands */}
        <EmergingBuyers onOpenQuote={(note) => handleOpenQuote(note)} />

        {/* 8. Core Sourcing Capabilities & Services */}
        <Services onOpenQuote={(serviceName) => handleOpenQuote(serviceName)} />

        {/* 9. Trust & Quality Pillars (Why Belvoris) */}
        <WhyBelvoris />

        {/* 10. About Section */}
        <About onOpenQuote={() => handleOpenQuote()} />

        {/* 11. Leadership Section */}
        <Leadership />

        {/* 12. International Buyer CTA */}
        <InternationalCTA onOpenQuote={() => handleOpenQuote()} />

        {/* 13. Buyer Inquiry Form (UI Prototype) */}
        <InquiryForm
          prefilledCategory={selectedCategoryForQuote}
          onClearPrefill={() => setSelectedCategoryForQuote(undefined)}
        />

        {/* 14. Contact Section */}
        <ContactSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 15. Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
