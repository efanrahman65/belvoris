import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import fabricDetailImg from '../assets/images/belvoris_fabric_detail_1791038890524.jpg';

interface IntroductionProps {
  onOpenQuote: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenQuote }) => {
  const highlights = [
    'Direct coordination with vetted mills & production units in Bangladesh',
    'Technical pack evaluation & rapid counter-sample turnarounds',
    'Systematic quality monitoring from yarn batching to final packing',
    'Transparent milestone tracking & proactive international communication'
  ];

  return (
    <section id="introduction" className="py-20 sm:py-28 lg:py-36 bg-[#F3EFE8] border-y border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Kicker */}
        <div className="text-xs uppercase tracking-[0.22em] text-[#8C827A] font-medium mb-6">
          Sourcing Philosophy
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Expressive Headline */}
          <div className="lg:col-span-6 xl:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.12] text-balance">
              APPAREL SOURCING, BUILT AROUND YOUR NEEDS
            </h2>

            <div className="mt-8 sm:mt-10 pt-8 border-t border-[#18181B]/15">
              <p className="text-lg sm:text-xl text-[#383531] font-light leading-relaxed">
                BELVORIS supports international buyers with apparel sourcing, product development, production coordination, quality awareness, and order follow-up.
              </p>

              <div className="mt-8 space-y-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18181B] mt-2.5 shrink-0" />
                    <span className="text-sm sm:text-base text-[#524E48] font-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button
                  onClick={onOpenQuote}
                  className="group inline-flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all cursor-pointer"
                >
                  <span>START A SOURCING CONVERSATION</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Fabric Texture & Detail Visual Presentation */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E2DDD5] shadow-sm">
                <img
                  src={fabricDetailImg}
                  alt="Macro textile weave and fabric quality detail sourced by BELVORIS"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informative Editorial Caption Card */}
              <div className="p-6 bg-[#FAF9F5] border border-[#1A1A1A]/8">
                <div className="text-xs uppercase tracking-[0.18em] text-[#8C827A] font-medium mb-1">
                  Textile & Construction Fidelity
                </div>
                <div className="text-sm text-[#4A4742] leading-relaxed">
                  Every yarn count, loop construction, and seam finish is reviewed against buyer tech packs. We balance high-speed commercial production with rigorous physical quality assurance.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
