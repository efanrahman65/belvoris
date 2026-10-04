import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Compass, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { emergingBrandsImg } from '../data/apparelData';

interface EmergingBuyersProps {
  onOpenQuote: (note?: string) => void;
}

export const EmergingBuyers: React.FC<EmergingBuyersProps> = ({ onOpenQuote }) => {
  const pillars = [
    {
      icon: Compass,
      title: 'Flexible Sourcing Solutions',
      description:
        'We explore viable production options for developing brands, identifying manufacturing partners who can accommodate smaller initial runs or capsule collections where supplier setups and mill minimums allow.'
    },
    {
      icon: MessageSquare,
      title: 'Direct, Attentive Communication',
      description:
        'You never get lost in a corporate hierarchy. Emerging founders receive direct, responsive consultation, regular video/photo progress check-ins, and proactive advice on fabric and pattern choices.'
    },
    {
      icon: Layers,
      title: 'Product Development Assistance',
      description:
        'Transitioning from an initial sketch to a factory-ready tech pack can be challenging. We help refine grading charts, suggest cost-effective fabric alternatives, and organize physical counter-samples.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Sourcing Coordination',
      description:
        'No hidden surcharges or opaque factory layers. We clearly explain fabric yields, trim costs, laundry expenses, and logistics hurdles so you can make informed commercial decisions.'
    },
    {
      icon: TrendingUp,
      title: 'Built for Scalable Growth',
      description:
        'Our relationships with emerging brands are designed for long-term scalability. As your brand gains traction and reorder volumes expand, our network easily scales to meet your growing volume.'
    }
  ];

  return (
    <section id="emerging-brands" className="py-24 sm:py-32 bg-[#F6F4EF] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Kicker */}
        <div className="text-xs uppercase tracking-[0.25em] text-[#8C827A] font-medium mb-3">
          Inclusive Partnership
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.12] text-balance">
            YOUR PARTNER, FROM FIRST ORDER TO FUTURE GROWTH
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#524E48] font-light leading-relaxed">
            Starting a fashion brand or testing a new market should not be hindered by rigid factory barriers. BELVORIS actively supports independent fashion labels, emerging startups, and boutique retailers navigating Bangladesh apparel sourcing for the first time.
          </p>
        </div>

        {/* Asymmetrical Grid: Visual Anchor & Reassurance Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left: Studio Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E2DDD5] shadow-sm">
              <img
                src={emergingBrandsImg}
                alt="Fashion startup workspace with moodboards, fabric swatches, and development garments"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-5 bg-[#FAF9F5]/95 backdrop-blur-sm border border-[#1A1A1A]/10 text-left">
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#18181B] block mb-1">
                  Founder-Focused Approach
                </span>
                <p className="text-xs text-[#595550] leading-relaxed">
                  We demystify international apparel manufacturing with patient guidance, realistic scheduling, and reliable execution.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Support Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#FAF9F5] border border-[#1A1A1A]/8 hover:border-[#1A1A1A]/25 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F3EFE8] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#18181B]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif text-[#18181B] mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#524E48] font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Commitment Statement Banner */}
        <div className="p-8 sm:p-10 bg-[#FAF9F5] border border-[#1A1A1A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#8C827A] font-mono block mb-1">
              Transparent MOQ Policy
            </span>
            <h4 className="text-xl font-serif text-[#18181B] mb-1.5">
              Honest Assessment of Production Feasibility
            </h4>
            <p className="text-xs sm:text-sm text-[#595550] font-light leading-relaxed">
              We never promise unrealistic minimums just to secure interest. Instead, we review your specific tech pack, assess mill yarn and dyeing requirements, and present viable paths to bring your vision into production responsibly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote('Emerging Brand Consultation')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.14em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all cursor-pointer shadow-sm whitespace-nowrap"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
