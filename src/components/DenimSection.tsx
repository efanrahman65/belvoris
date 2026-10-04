import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import {
  DENIM_HERO_DATA,
  DENIM_PRODUCTS,
  DENIM_SOLUTIONS,
  DenimProductItem
} from '../data/apparelData';
import { ArrowUpRight, Sparkles, Droplets, CheckCircle2, X, Sliders, Shield } from 'lucide-react';

interface DenimSectionProps {
  onOpenQuote: (prefilledCategory?: string) => void;
}

export const DenimSection: React.FC<DenimSectionProps> = ({ onOpenQuote }) => {
  const [selectedDenim, setSelectedDenim] = useState<DenimProductItem | null>(null);

  return (
    <section id="denim" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Kicker & Main Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8C827A] font-medium mb-3 flex items-center gap-2">
              <span>Hero Specialty</span>
              <span aria-hidden="true" className="text-[#B8B1A6]">·</span>
              <span>Premier Sourcing & Development</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.1]">
              DENIM EXPERTISE & SOURCING SOLUTIONS
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#524E48] font-light leading-relaxed">
              Bangladesh is globally renowned for denim manufacturing. BELVORIS leverages this ecosystem to deliver precision fits, authentic vintage and contemporary washes, and sustainable laundry finishes for international brands.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote('Denim Collection')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all cursor-pointer shadow-sm whitespace-nowrap"
            >
              <span>DISCUSS DENIM PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Editorial Showcase Banner */}
        <div className="relative mb-16 overflow-hidden bg-[#18181B] text-[#FAF9F5] border border-[#1A1A1A]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Atmospheric Copy */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between z-10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5BCB1] font-mono block mb-3">
                  Fabric to Finish
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FAF9F5] leading-tight mb-4 text-balance">
                  {DENIM_HERO_DATA.headline}
                </h3>
                <p className="text-sm sm:text-base text-[#D4CDC3] font-light leading-relaxed mb-8">
                  {DENIM_HERO_DATA.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#FAF9F5]/15 text-xs">
                  <div>
                    <span className="text-[#A8A196] block font-mono uppercase tracking-wider text-[10px]">Fabric Weights</span>
                    <span className="text-sm font-serif text-[#FAF9F5] mt-0.5 block">4.5 oz to 15.0 oz</span>
                  </div>
                  <div>
                    <span className="text-[#A8A196] block font-mono uppercase tracking-wider text-[10px]">Laundry Tech</span>
                    <span className="text-sm font-serif text-[#FAF9F5] mt-0.5 block">Laser, Ozone, Enzyme</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FAF9F5]/10 flex items-center justify-between">
                <span className="text-xs text-[#B8B1A6]">Sourced & developed to buyer tech packs</span>
                <button
                  onClick={() => onOpenQuote('Denim Mill Development')}
                  className="text-xs tracking-wider uppercase text-[#FAF9F5] hover:underline cursor-pointer"
                >
                  Explore Mill Options →
                </button>
              </div>
            </div>

            {/* Right: Rich Atelier Image */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden">
              <img
                src={DENIM_HERO_DATA.image}
                alt="BELVORIS premium denim atelier and selvedge fabric sourcing"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Denim Category Showcase Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1A1A1A]/10">
            <div>
              <h3 className="text-2xl font-serif text-[#18181B]">
                Denim Product Categories
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] mt-1 font-light">
                Explore key product lines developed and coordinated with specialized denim manufacturers.
              </p>
            </div>
            <span className="text-xs font-mono text-[#8C827A] hidden sm:block">
              5 Core Product Categories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {DENIM_PRODUCTS.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedDenim(product)}
                className="group bg-[#FAF9F5] border border-[#1A1A1A]/10 hover:border-[#18181B] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-md"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#18181B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="px-4 py-2 bg-[#FAF9F5] text-[#18181B] text-[11px] font-medium tracking-[0.14em] uppercase shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-[#8C827A] font-mono mb-1.5">
                      {product.subtitle}
                    </div>
                    <h4 className="text-xl font-serif text-[#18181B] group-hover:text-[#383531] transition-colors mb-2">
                      {product.title}
                    </h4>
                    <p className="text-xs text-[#524E48] leading-relaxed line-clamp-2 font-light">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#1A1A1A]/8 flex items-center justify-between text-[11px]">
                    <span className="text-[#8C827A]">Washes available</span>
                    <span className="font-mono text-[#18181B] font-medium">{product.washesAvailable.length} Options</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Denim Solutions Section */}
        <div className="p-8 sm:p-12 lg:p-14 bg-[#F3EFE8] border border-[#1A1A1A]/10">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium mb-2 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#18181B]" />
              <span>Full-Spectrum Capability</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B]">
              Denim Solutions: From Mill to Finished Carton
            </h3>
            <p className="text-xs sm:text-sm text-[#524E48] mt-2 font-light leading-relaxed">
              We eliminate the friction of denim production by coordinating fabric weaving, pattern shrinkage formulas, laundry recipe approvals, and hardware sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DENIM_SOLUTIONS.map((solution) => (
              <div
                key={solution.number}
                className="p-6 bg-[#FAF9F5] border border-[#1A1A1A]/8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#8C827A] tracking-widest block mb-3">
                    {solution.number}
                  </span>
                  <h4 className="text-lg font-serif text-[#18181B] mb-2 leading-snug">
                    {solution.title}
                  </h4>
                  <p className="text-xs text-[#524E48] leading-relaxed font-light mb-4">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1A1A1A]/8">
                  <div className="text-[10px] uppercase tracking-wider text-[#8C827A] font-mono mb-2">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {solution.deliverables.map((item, idx) => (
                      <li key={idx} className="text-[11px] text-[#383531] flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#18181B] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-10 pt-8 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-[#524E48] font-light">
              Have specific denim tech packs, wash targets, or swatch references?
            </div>
            <button
              onClick={() => onOpenQuote('Denim Solutions')}
              className="px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all cursor-pointer whitespace-nowrap"
            >
              EXPLORE DENIM SOLUTIONS
            </button>
          </div>
        </div>

      </div>

      {/* Denim Specification Modal */}
      {selectedDenim && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#18181B]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] max-w-2xl w-full p-8 sm:p-10 border border-[#1A1A1A]/20 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDenim(null)}
              className="absolute top-6 right-6 p-2 text-[#595550] hover:text-[#18181B] transition-colors cursor-pointer"
              aria-label="Close denim modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-[#8C827A] mb-2 tracking-widest uppercase">
              {selectedDenim.subtitle}
            </div>

            <h3 className="text-3xl font-serif text-[#18181B] mb-4">
              {selectedDenim.title}
            </h3>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#E2DDD5] mb-6">
              <img
                src={selectedDenim.image}
                alt={selectedDenim.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-[#4A4742] font-light leading-relaxed mb-6">
              {selectedDenim.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10 text-xs">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-mono block mb-1.5">
                  Technical Specifications
                </span>
                <ul className="space-y-1 text-[#2C2B29]">
                  {selectedDenim.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18181B]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-mono block mb-1.5">
                  Wash & Finishing Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDenim.washesAvailable.map((wash, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#F3EFE8] border border-[#1A1A1A]/10 text-[#18181B] text-[11px]">
                      {wash}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8C827A]">
                Custom wash formulas and fit counter-samples available upon inquiry.
              </span>
              <button
                onClick={() => {
                  const title = selectedDenim.title;
                  setSelectedDenim(null);
                  onOpenQuote(title);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire For {selectedDenim.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
