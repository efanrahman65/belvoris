import React from 'react';
import { SectionHeading } from './SectionHeading';
import { WHY_BELVORIS_POINTS } from '../data/apparelData';

export const WhyBelvoris: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F3EFE8] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Value Proposition"
          title="WHY BELVORIS"
          subtitle="Built from the perspective of an international buyer seeking transparency, dependable communication, and rigorous quality execution."
        />

        {/* 6 Points Editorial Grid with Large Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {WHY_BELVORIS_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 bg-[#FAF9F5] border border-[#1A1A1A]/8 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#8C827A] tracking-widest block mb-4">
                  0{idx + 1}
                </span>

                <h3 className="text-2xl font-serif text-[#18181B] leading-snug mb-4">
                  {point.title}
                </h3>

                <p className="text-sm sm:text-base text-[#595550] font-light leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1A1A1A]/5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18181B]" />
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A]">
                  Institutional Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
