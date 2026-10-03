import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';
import { PRODUCT_CATEGORIES, ProductCategoryItem } from '../data/apparelData';
import { X, ArrowRight, ShieldCheck, Layers, Sparkles } from 'lucide-react';

interface ProductCategoriesProps {
  onOpenQuoteWithCategory: (categoryName: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onOpenQuoteWithCategory }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductCategoryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Categories' },
    { id: 'knits', label: 'Knits & Fleece' },
    { id: 'wovens', label: 'Wovens & Tailored' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'essentials', label: 'Essentials & Kids' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? PRODUCT_CATEGORIES
    : PRODUCT_CATEGORIES.filter((p) => p.group === activeFilter);

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#F6F4EF] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-[#8C827A] font-medium mb-3">
              Portfolio Breadth
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.15]">
              PRODUCT CATEGORIES
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#595550] max-w-2xl font-light leading-relaxed">
              Garment categories developed and sourced according to your specific tech packs, measurement charts, and fabric requirements.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional button elements) */}
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
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Critical Disclaimer / Context Notice */}
        <div className="mt-14 p-6 sm:p-7 bg-[#FAF9F5] border border-[#1A1A1A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8C827A] mt-2 shrink-0" />
            <p className="text-xs sm:text-sm text-[#595550] leading-relaxed">
              <strong className="text-[#18181B] font-medium">Sourcing & Development Clarification: </strong>
              BELVORIS operates as an apparel buying house and supply-chain coordinator. Products shown are sourced and developed in specialized Bangladesh manufacturing facilities based on buyer technical files and compliance standards.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteWithCategory('Custom Sourcing Portfolio')}
            className="text-xs font-medium tracking-[0.14em] uppercase text-[#18181B] hover:underline whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Custom Development →
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

            <div className="flex items-center gap-2 text-xs font-mono text-[#8C827A] mb-3 tracking-widest uppercase">
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

            <div className="space-y-4 text-sm text-[#4A4742]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1 font-medium">
                  Fabrications & Compositions
                </span>
                <p className="font-light text-base text-[#18181B]">
                  {selectedProduct.fabricTypes}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1 font-medium">
                  Finishes & Construction Options
                </span>
                <p className="font-light leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="p-4 bg-[#F3EFE8] border border-[#1A1A1A]/8 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#8C827A] block">Indicative Sourcing MOQ</span>
                  <span className="font-mono text-[#18181B] font-medium text-sm mt-0.5 block">{selectedProduct.typicalMOQ}</span>
                </div>
                <div>
                  <span className="text-[#8C827A] block">Sampling Lead Time</span>
                  <span className="font-mono text-[#18181B] font-medium text-sm mt-0.5 block">10–14 Working Days</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8C827A]">
                Custom specs, lab dips & trims available upon tech-pack receipt.
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
