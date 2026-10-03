import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { ProductCategories } from './components/ProductCategories';
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

        {/* 4. Services Section */}
        <Services onOpenQuote={(serviceName) => handleOpenQuote(serviceName)} />

        {/* 5. Product Categories */}
        <ProductCategories
          onOpenQuoteWithCategory={(categoryName) => handleOpenQuote(categoryName)}
        />

        {/* 6. Why Belvoris */}
        <WhyBelvoris />

        {/* 7. About Section */}
        <About onOpenQuote={() => handleOpenQuote()} />

        {/* 8. Leadership Section */}
        <Leadership />

        {/* 9. International Buyer CTA */}
        <InternationalCTA onOpenQuote={() => handleOpenQuote()} />

        {/* 10. Buyer Inquiry Form (UI Prototype) */}
        <InquiryForm
          prefilledCategory={selectedCategoryForQuote}
          onClearPrefill={() => setSelectedCategoryForQuote(undefined)}
        />

        {/* 11. Contact Section */}
        <ContactSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 12. Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
