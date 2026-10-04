import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { SUPPLY_CHAIN_STAGES, SupplyChainStageItem } from '../data/apparelData';
import { ChevronRight, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface SupplyChainProps {
  onOpenQuote: (stageName?: string) => void;
}

export const SupplyChain: React.FC<SupplyChainProps> = ({ onOpenQuote }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = SUPPLY_CHAIN_STAGES[activeStageIndex];

  return (
    <section id="supply-chain" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8C827A] font-medium mb-3 flex items-center gap-2">
            <span>End-to-End Orchestration</span>
            <span aria-hidden="true" className="text-[#B8B1A6]">·</span>
            <span>8 Sequential Sourcing Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.1] text-balance">
            COMPLETE SUPPLY CHAIN SUPPORT, FROM FIBER TO SHIPMENT
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#524E48] font-light leading-relaxed">
            International apparel manufacturing involves dozens of specialized facilities. BELVORIS serves as your on-the-ground coordination partner in Bangladesh—managing complexity, maintaining daily communication, and monitoring progress across all eight production stages without claiming factory ownership.
          </p>
        </div>

        {/* Process Roadmap Bar */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-[780px] border-b border-[#1A1A1A]/10">
            {SUPPLY_CHAIN_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.stageNumber}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`flex-1 py-4 px-3 text-left transition-all border-b-2 cursor-pointer ${
                    isActive
                      ? 'border-[#18181B] bg-[#F3EFE8]/70 text-[#18181B]'
                      : 'border-transparent text-[#8C827A] hover:text-[#18181B] hover:bg-[#FAF9F5]'
                  }`}
                >
                  <span className="block font-mono text-[11px] mb-1">
                    {stage.stageNumber}
                  </span>
                  <span className={`block text-xs font-serif truncate ${isActive ? 'font-semibold text-[#18181B]' : 'font-normal'}`}>
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Stage Spotlight Card */}
        <div className="bg-[#FAF9F5] border border-[#1A1A1A]/12 shadow-sm p-6 sm:p-10 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Stage Visual */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1] border border-[#1A1A1A]/10 shadow-sm">
                <img
                  src={activeStage.image}
                  alt={`Stage ${activeStage.stageNumber}: ${activeStage.name} coordinated by BELVORIS`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Stage Pill Counter */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#18181B]/90 backdrop-blur-sm text-[#FAF9F5] text-xs font-mono tracking-wider">
                  Stage {activeStage.stageNumber} of 08
                </div>
              </div>
            </div>

            {/* Right: Stage Scope, Role & Verified Outputs */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C827A] font-mono block mb-1">
                  {activeStage.shortLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#18181B] mb-4">
                  {activeStage.name}
                </h3>
                
                <p className="text-sm sm:text-base text-[#524E48] font-light leading-relaxed mb-6">
                  {activeStage.description}
                </p>

                {/* BELVORIS Coordination Role Card */}
                <div className="p-4 sm:p-5 bg-[#F3EFE8] border border-[#1A1A1A]/8 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-mono block mb-1 font-medium">
                    BELVORIS Coordination Role
                  </span>
                  <p className="text-xs sm:text-sm text-[#2C2B29] font-light leading-relaxed">
                    {activeStage.belvorisRole}
                  </p>
                </div>

                {/* Key Outputs */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-mono block mb-2 font-medium">
                    Verified Quality Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {activeStage.keyOutputs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#383531]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#18181B] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeStageIndex === 0}
                    className="px-3.5 py-1.5 text-xs text-[#18181B] border border-[#1A1A1A]/20 hover:border-[#18181B] disabled:opacity-30 disabled:hover:border-[#1A1A1A]/20 cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStageIndex((prev) => Math.min(SUPPLY_CHAIN_STAGES.length - 1, prev + 1))}
                    disabled={activeStageIndex === SUPPLY_CHAIN_STAGES.length - 1}
                    className="px-3.5 py-1.5 text-xs text-[#18181B] border border-[#1A1A1A]/20 hover:border-[#18181B] disabled:opacity-30 disabled:hover:border-[#1A1A1A]/20 cursor-pointer"
                  >
                    Next Stage
                  </button>
                </div>

                <button
                  onClick={() => onOpenQuote(activeStage.name)}
                  className="text-xs tracking-wider uppercase text-[#18181B] font-medium hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Inquire For Stage {activeStage.stageNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 8-Stage Gallery Matrix (Direct Visual Scan) */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#1A1A1A]/10">
            <h3 className="text-xl font-serif text-[#18181B]">
              All 8 Stages at a Glance
            </h3>
            <span className="text-xs text-[#8C827A] font-mono">
              Click any stage to inspect
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {SUPPLY_CHAIN_STAGES.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              return (
                <div
                  key={stage.stageNumber}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`group p-2.5 bg-[#FAF9F5] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#18181B] shadow-sm bg-[#F3EFE8]'
                      : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1] mb-2">
                    <img
                      src={stage.image}
                      alt={stage.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8C827A] block">
                      {stage.stageNumber}
                    </span>
                    <h4 className="text-xs font-serif text-[#18181B] truncate">
                      {stage.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
