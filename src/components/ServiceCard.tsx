import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../data/apparelData';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(service)}
      className="group relative bg-[#FAF9F5] p-8 sm:p-10 border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Editorial Numbering (Clean human editorial numbering, not mechanical code slashes) */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-mono tracking-widest text-[#8C827A] group-hover:text-[#18181B] transition-colors">
            {service.number}
          </span>
          <div className="w-8 h-8 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center text-[#18181B] group-hover:bg-[#18181B] group-hover:text-[#FAF9F5] group-hover:border-[#18181B] transition-all duration-200">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-serif text-[#18181B] mb-3 group-hover:translate-x-0.5 transition-transform">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#595550] leading-relaxed font-light mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Scope Details List */}
      <div className="pt-6 border-t border-[#1A1A1A]/8">
        <div className="text-[11px] uppercase tracking-[0.16em] text-[#8C827A] font-medium mb-3">
          Key Scope
        </div>
        <ul className="space-y-2 mb-4">
          {service.detailedScope.slice(0, 2).map((item, idx) => (
            <li key={idx} className="text-xs text-[#524E48] leading-relaxed flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#8C827A] mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Key Deliverable */}
        <div className="text-[11px] text-[#2C2B29] font-medium pt-3 border-t border-[#1A1A1A]/5">
          <span className="text-[#8C827A] font-normal">Deliverable: </span>
          {service.keyDeliverable}
        </div>
      </div>
    </div>
  );
};
