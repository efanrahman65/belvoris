import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProductCategoryItem } from '../data/apparelData';

interface ProductCardProps {
  product: ProductCategoryItem;
  onSelectProduct: (product: ProductCategoryItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative bg-[#FAF9F5] border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Editorial Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1]">
        <img
          src={product.image}
          alt={`${product.name} sourcing category by BELVORIS`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Hover overlay with quick action */}
        <div className="absolute inset-0 bg-[#18181B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="px-4 py-2 bg-[#FAF9F5] text-[#18181B] text-[11px] font-medium tracking-[0.14em] uppercase shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <span>View Specifications</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Category Group & Fabric indicator (Clean unboxed text, no pills) */}
          <div className="flex items-center gap-2 text-xs text-[#8C827A] mb-2 font-mono">
            <span className="capitalize">{product.group}</span>
            <span aria-hidden="true">·</span>
            <span>Sourced to Spec</span>
          </div>

          <h3 className="text-xl font-serif text-[#18181B] group-hover:text-[#383531] transition-colors">
            {product.name}
          </h3>

          <p className="mt-2 text-xs text-[#6B655D] leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-4 pt-4 border-t border-[#1A1A1A]/8 flex items-center justify-between text-[11px]">
          <span className="text-[#8C827A]">Indicative MOQ</span>
          <span className="font-mono text-[#2C2B29] font-medium">{product.typicalMOQ}</span>
        </div>
      </div>
    </div>
  );
};
