import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ServiceCard } from './ServiceCard';
import { SERVICES, ServiceItem } from '../data/apparelData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Core Capabilities"
          title="WHAT WE DO"
          subtitle="Comprehensive apparel buying-house and sourcing support built to eliminate supply-chain friction for global brands."
        />

        {/* 6 Structured Editorial Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(item) => setActiveModalService(item)}
            />
          ))}
        </div>

        {/* Quick Bottom Anchor */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F3EFE8] border border-[#1A1A1A]/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-base sm:text-lg font-serif text-[#18181B]">
              Looking for a custom sourcing workflow or multi-category bundle?
            </div>
            <div className="text-xs sm:text-sm text-[#595550] mt-1 font-light">
              We align our team to your specific brand technical manuals, quality AQL levels, and shipment calendars.
            </div>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all whitespace-nowrap cursor-pointer"
          >
            DISCUSS REQUIREMENTS
          </button>
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#18181B]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] max-w-xl w-full p-8 sm:p-10 border border-[#1A1A1A]/20 shadow-2xl relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 text-[#595550] hover:text-[#18181B] transition-colors cursor-pointer"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-[#8C827A] mb-2 tracking-widest">
              {activeModalService.number} / SERVICE SCOPE
            </div>
            
            <h3 className="text-3xl font-serif text-[#18181B] mb-4">
              {activeModalService.title}
            </h3>

            <p className="text-sm sm:text-base text-[#524E48] font-light leading-relaxed mb-6">
              {activeModalService.shortDescription}
            </p>

            <div className="space-y-4 pt-6 border-t border-[#1A1A1A]/10">
              <div className="text-xs uppercase tracking-[0.16em] text-[#8C827A] font-medium">
                Detailed Scope of Work
              </div>
              <ul className="space-y-2.5">
                {activeModalService.detailedScope.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#383531]">
                    <CheckCircle2 className="w-4 h-4 text-[#18181B] mt-0.5 shrink-0" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#524E48]">
                <span className="font-medium text-[#18181B]">Deliverable: </span>
                {activeModalService.keyDeliverable}
              </div>
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onOpenQuote(serviceName);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire For This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
