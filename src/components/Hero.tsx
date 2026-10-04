import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import heroApparelImg from '../assets/images/belvoris_hero_apparel_1791038873651.jpg';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      {/* Background subtle textile grain / ambient tone */}
      <div className="absolute inset-0 bg-[#FAF9F5] -z-20" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            
            {/* Quiet Editorial Sub-header (NO PILL BADGE) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8C827A] font-medium mb-6">
              <span>Dhaka, Bangladesh</span>
              <span aria-hidden="true" className="text-[#B8B1A6]">·</span>
              <span>Apparel & Denim Sourcing Partner</span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-serif font-normal text-[#18181B] tracking-tight leading-[1.08] text-balance mb-6 sm:mb-8">
              YOUR GLOBAL APPAREL & DENIM SOURCING PARTNER
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#524E48] font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
              Connecting international buyers, emerging labels, and global fashion brands with dependable apparel production and specialized denim sourcing in Bangladesh.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2F2D2A] transition-all duration-200 active:scale-[0.99] cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#denim"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-[#18181B] bg-transparent border border-[#18181B]/20 hover:border-[#18181B] hover:bg-[#18181B]/5 transition-all duration-200 cursor-pointer"
              >
                EXPLORE DENIM SOLUTIONS
              </a>
            </div>

            {/* Trust Anchors - Minimal Editorial Specifiers */}
            <div className="pt-10 sm:pt-12 mt-10 border-t border-[#1A1A1A]/10 grid grid-cols-3 gap-6 text-left">
              <div>
                <span className="block text-xl sm:text-2xl font-serif text-[#18181B]">Denim Hero</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] mt-1 block">Selvedge, Washes & Fits</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-serif text-[#18181B]">Full Chain</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] mt-1 block">Fiber to Final Shipment</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-serif text-[#18181B]">Startups & Growth</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] mt-1 block">Emerging Brand Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Fashion Photography */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative group">
              {/* Refined offset shadow border */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden bg-[#EAE6DF]">
                <img
                  src={heroApparelImg}
                  alt="Editorial garment production and fine fabric craftsmanship at BELVORIS sourcing studio"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft edge gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Quiet caption tag inside image bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF9F5]/90 backdrop-blur-sm border border-[#1A1A1A]/10 text-left">
                  <div className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#18181B]">
                    Precision Fabric & Production Coordination
                  </div>
                  <div className="text-xs text-[#6B655D] mt-0.5">
                    End-to-end follow-up from proto-sampling to final export shipment
                  </div>
                </div>
              </div>

              {/* Architectural framing accent line */}
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#18181B]/15 -z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between text-xs text-[#8C827A] tracking-wider uppercase">
        <div className="hidden sm:flex items-center gap-2">
          <span>International Fashion Supply Chain</span>
          <span>·</span>
          <span>Europe, Americas, Global</span>
        </div>
        <a
          href="#introduction"
          className="inline-flex items-center gap-2 hover:text-[#18181B] transition-colors ml-auto sm:ml-0"
          aria-label="Scroll down to introduction"
        >
          <span className="text-[11px] tracking-[0.16em]">DISCOVER MORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
