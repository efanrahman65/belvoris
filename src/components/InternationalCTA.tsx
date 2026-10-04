import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import atelierCtaImg from '../assets/images/belvoris_atelier_cta_1791038942232.jpg';

interface InternationalCTAProps {
  onOpenQuote: () => void;
}

export const InternationalCTA: React.FC<InternationalCTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#18181B] text-[#FAF9F5]">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 -z-10">
        <img
          src={atelierCtaImg}
          alt="BELVORIS apparel atelier and sourcing studio"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/85 to-[#18181B]/95" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C5BCB1] font-medium mb-4">
          Partnership Initiation
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#FAF9F5] tracking-tight leading-[1.1] mb-6 text-balance">
          LET'S BUILD YOUR NEXT COLLECTION
        </h2>

        <p className="text-base sm:text-xl text-[#C8C1B7] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us what you are looking for and let's discuss your sourcing requirements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium tracking-[0.16em] uppercase text-[#18181B] bg-[#FAF9F5] hover:bg-[#FFFFFF] transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.99]"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="mailto:contact@belvoris.com"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-medium tracking-[0.16em] uppercase text-[#FAF9F5] border border-[#FAF9F5]/30 hover:border-[#FAF9F5] hover:bg-[#FAF9F5]/10 transition-all duration-200 cursor-pointer"
          >
            Direct Inquiry: contact@belvoris.com
          </a>
        </div>
      </div>
    </section>
  );
};
