import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS, ProcessStepItem } from '../data/apparelData';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface SourcingProcessProps {
  onOpenQuote: () => void;
}

export const SourcingProcess: React.FC<SourcingProcessProps> = ({ onOpenQuote }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Execution Discipline"
          title="FROM REQUIREMENT TO DELIVERY"
          subtitle="A systematic 8-stage operational framework ensuring transparency, quality validation, and predictable delivery for every order."
        />

        {/* Desktop & Tablet Interactive Timeline Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Numbered Step Selector */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 sm:p-6 transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F2EFE8] border-[#18181B] text-[#18181B] shadow-sm'
                      : 'bg-transparent border-transparent hover:border-[#1A1A1A]/10 hover:bg-[#F8F6F1] text-[#595550]'
                  }`}
                >
                  <div className="flex items-center gap-5 sm:gap-6">
                    <span
                      className={`text-sm sm:text-base font-mono tracking-widest ${
                        isActive ? 'text-[#18181B] font-semibold' : 'text-[#8C827A]'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-serif leading-tight ${
                          isActive ? 'text-[#18181B]' : 'text-[#383531]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-xs text-[#8C827A] font-light mt-0.5 block">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-[#18181B] font-medium mr-2">
                        Active Stage
                      </span>
                    )}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#18181B] translate-x-1' : 'text-[#B8B1A6]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Stage Spotlight Panel */}
          <div className="lg:col-span-6 xl:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#18181B] text-[#FAF9F5] p-8 sm:p-12 relative overflow-hidden border border-[#2A2926]">
              {/* Subtle background stage watermark */}
              <div className="text-xs font-mono tracking-[0.25em] text-[#C5BCB1] uppercase mb-4">
                Stage {activeStep.step} of 08
              </div>

              <h4 className="text-3xl sm:text-4xl font-serif text-[#FAF9F5] mb-2">
                {activeStep.title}
              </h4>
              
              <div className="text-sm text-[#A8A196] font-light mb-6">
                {activeStep.subtitle}
              </div>

              <div className="w-12 h-[1px] bg-[#FAF9F5]/25 my-6" />

              <p className="text-base sm:text-lg text-[#E5E0D8] font-light leading-relaxed mb-8">
                {activeStep.description}
              </p>

              <div className="p-4 bg-[#232220] border border-[#FAF9F5]/10 mb-8">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#A8A196] font-medium mb-1">
                  Primary Stage Focus
                </div>
                <div className="text-sm text-[#FAF9F5] font-light">
                  {activeStep.focusArea}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#FAF9F5]/10">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeStepIndex === 0}
                    className="px-3 py-1.5 text-xs text-[#FAF9F5] border border-[#FAF9F5]/20 hover:border-[#FAF9F5] disabled:opacity-30 disabled:hover:border-[#FAF9F5]/20 cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                    disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                    className="px-3 py-1.5 text-xs text-[#FAF9F5] border border-[#FAF9F5]/20 hover:border-[#FAF9F5] disabled:opacity-30 disabled:hover:border-[#FAF9F5]/20 cursor-pointer"
                  >
                    Next Stage
                  </button>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="text-xs tracking-wider uppercase text-[#FAF9F5] hover:underline cursor-pointer"
                >
                  Start at Step 01 →
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
