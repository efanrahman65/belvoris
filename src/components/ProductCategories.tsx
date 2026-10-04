import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import {
  EXPANDED_PRODUCT_PORTFOLIO,
  MAJOR_CATEGORIES,
  MajorCategorySummary,
  ProductCategoryItem,
  PortfolioGroup
} from '../data/apparelData';
import { X, ArrowRight, ArrowUpRight, ShieldCheck, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductCategoriesProps {
  onOpenQuoteWithCategory: (categoryName: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onOpenQuoteWithCategory }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductCategoryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'wovens', label: 'Woven Apparel' },
    { id: 'knitwear', label: 'Knit Apparel' },
    { id: 'denim', label: 'Denim' },
    { id: 'essentials', label: 'Fashion Essentials' },
    { id: 'materials', label: 'Materials & Trims' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? EXPANDED_PRODUCT_PORTFOLIO
    : EXPANDED_PRODUCT_PORTFOLIO.filter((p) => {
        if (activeFilter === 'wovens') {
          return p.group === 'wovens' || (p.group === 'denim' && (p.id.includes('jeans') || p.id.includes('jacket') || p.id.includes('shirt')));
        }
        return p.group === activeFilter;
      });

  const handleSelectMajorCategory = (filterKey: 'wovens' | 'knitwear') => {
    setActiveFilter(filterKey);
    const gridEl = document.getElementById('portfolio-grid-anchor');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8C827A] font-medium mb-3">
            Core Production Divisions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.12]">
            PRODUCT SOURCING CATEGORIES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#595550] font-light leading-relaxed">
            BELVORIS provides dedicated sourcing and technical coordination across major apparel divisions—with specialized strength in both <strong>Woven</strong> and <strong>Knit</strong> manufacturing ecosystems in Bangladesh.
          </p>
        </div>

        {/* Major Category Spotlight: Woven & Knit Showcase */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#1A1A1A]/10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C827A]">
              Major Manufacturing Pillars
            </span>
            <span className="text-xs text-[#8C827A] hidden sm:block font-light">
              Full garment assembly, fabric sourcing & laundry finishing
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {MAJOR_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group bg-[#FAF9F5] border border-[#1A1A1A]/12 hover:border-[#18181B] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Visual Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECE8E1]">
                  <img
                    src={cat.image}
                    alt={`${cat.name} production and sourcing at BELVORIS`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#18181B]/85 backdrop-blur-sm text-[#FAF9F5] text-[11px] font-mono tracking-wider uppercase">
                    Major Category
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-[#FAF9F5]">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#C5BCB1] font-mono mb-1">
                      {cat.shortTag}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF9F5]">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Explicit Scope Definition */}
                    <div className="p-3.5 bg-[#F3EFE8] border border-[#1A1A1A]/8 text-xs text-[#2C2B29] font-medium leading-relaxed mb-4">
                      <span className="text-[#8C827A] block font-mono uppercase text-[10px] tracking-wider mb-0.5">
                        Category Scope
                      </span>
                      {cat.scope}
                    </div>

                    <p className="text-xs sm:text-sm text-[#524E48] font-light leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    {/* Key Products List */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-mono block mb-2 font-medium">
                        Key Coordinated Products
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#383531]">
                        {cat.keyProducts.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#18181B] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      onClick={() => handleSelectMajorCategory(cat.filterKey)}
                      className="inline-flex items-center justify-center gap-1.5 text-xs tracking-wider uppercase text-[#18181B] font-medium hover:underline cursor-pointer"
                    >
                      <span>Browse {cat.name} Items</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteWithCategory(cat.name)}
                      className="px-4 py-2.5 bg-[#18181B] text-[#FAF9F5] hover:bg-[#2C2B29] transition-all text-xs font-medium tracking-[0.14em] uppercase cursor-pointer text-center"
                    >
                      Inquire For {cat.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Portfolio Filter & Grid Section */}
        <div id="portfolio-grid-anchor" className="pt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <h3 className="text-2xl font-serif text-[#18181B]">
                Explore Detailed Garment Categories
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] mt-1 font-light">
                Filter by division or browse all individual garments coordinated across our supplier network.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE6DF] border border-[#1A1A1A]/8">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#18181B] text-[#FAF9F5] shadow-sm'
                      : 'text-[#595550] hover:text-[#18181B] hover:bg-[#FAF9F5]/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group bg-[#FAF9F5] border border-[#1A1A1A]/10 hover:border-[#18181B] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1]">
                  <img
                    src={product.image}
                    alt={`${product.name} sourcing category by BELVORIS`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-[#18181B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="px-3.5 py-2 bg-[#FAF9F5] text-[#18181B] text-[11px] font-medium tracking-[0.14em] uppercase shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[#8C827A] mb-2 font-mono uppercase tracking-wider">
                      <span>{product.group}</span>
                      <span aria-hidden="true">·</span>
                      <span>Custom Sourcing</span>
                    </div>

                    <h4 className="text-xl font-serif text-[#18181B] group-hover:text-[#383531] transition-colors mb-2">
                      {product.name}
                    </h4>

                    <p className="text-xs text-[#595550] leading-relaxed line-clamp-2 font-light mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1A1A1A]/8">
                    <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-mono block mb-1">
                      Key Highlights
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {product.highlights.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="text-[10px] text-[#383531] bg-[#F3EFE8] px-2 py-0.5 border border-[#1A1A1A]/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer / Sourcing Feasibility Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F3EFE8] border border-[#1A1A1A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#18181B] mt-2 shrink-0" />
            <p className="text-xs sm:text-sm text-[#524E48] leading-relaxed">
              <strong className="text-[#18181B] font-medium">Custom Sourcing & Development: </strong>
              Products displayed represent categories developed and coordinated through qualified manufacturing partners in Bangladesh. We evaluate fabric composition, machinery setups, and production feasibility against each buyer's unique technical pack and price requirements.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteWithCategory('Custom Portfolio Development')}
            className="text-xs font-medium tracking-[0.14em] uppercase text-[#18181B] hover:underline whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Custom Portfolio Development →
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#18181B]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] max-w-2xl w-full p-8 sm:p-10 border border-[#1A1A1A]/20 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 text-[#595550] hover:text-[#18181B] transition-colors cursor-pointer"
              aria-label="Close product modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8C827A] mb-2 tracking-widest uppercase">
              <span>{selectedProduct.group}</span>
              <span>·</span>
              <span>Sourcing Specification</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#18181B] mb-4">
              {selectedProduct.name}
            </h3>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#E2DDD5] mb-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A4742]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-mono block mb-1">
                  Fabrications & Compositions
                </span>
                <p className="font-light text-sm sm:text-base text-[#18181B]">
                  {selectedProduct.fabricTypes}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-mono block mb-1">
                  Construction & Detailing Options
                </span>
                <p className="font-light leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-mono block mb-1.5">
                  Core Sourcing Capabilities
                </span>
                <ul className="space-y-1 text-[#2C2B29]">
                  {selectedProduct.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18181B]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8C827A]">
                Custom lab dips, prototypes, and trims available upon tech-pack review.
              </span>
              <button
                onClick={() => {
                  const catName = selectedProduct.name;
                  setSelectedProduct(null);
                  onOpenQuoteWithCategory(catName);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire For {selectedProduct.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
