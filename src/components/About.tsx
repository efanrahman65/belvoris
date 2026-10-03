import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Kicker */}
        <div className="text-xs uppercase tracking-[0.22em] text-[#8C827A] font-medium mb-6">
          Our Mandate
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.14] text-balance">
              BUILT TO CONNECT BUYERS WITH THE RIGHT PRODUCTION PARTNERS
            </h2>

            <div className="mt-8 space-y-6 text-base sm:text-lg text-[#524E48] font-light leading-relaxed">
              <p>
                BELVORIS is a Bangladesh-based apparel buying house and sourcing partner established to bridge the gap between discerning international fashion brands and specialized garment manufacturers.
              </p>
              <p>
                We understand that international buyers require more than factory access—they need on-the-ground advocates who comprehend design language, technical specifications, strict delivery windows, and rigorous quality parameters.
              </p>
              <p>
                By positioning ourselves directly in Bangladesh’s major textile manufacturing hubs, we provide continuous oversight at every stage: from initial yarn spinning and lab-dip evaluations to in-line sewing checks and final carton auditing.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#1A1A1A]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C827A] block font-medium">Core Focus</span>
                <span className="text-sm font-serif text-[#18181B] mt-1 block">Buyer Representation</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C827A] block font-medium">Headquarters</span>
                <span className="text-sm font-serif text-[#18181B] mt-1 block">Dhaka, Bangladesh</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C827A] block font-medium">Engagement Model</span>
                <span className="text-sm font-serif text-[#18181B] mt-1 block">Direct Sourcing Agency</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#F3EFE8] border border-[#1A1A1A]/10">
              <h3 className="text-xl font-serif text-[#18181B] mb-4">
                Six Pillars of our Sourcing Philosophy
              </h3>
              
              <ul className="space-y-4 text-sm text-[#4A4742]">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#8C827A] mt-0.5">01</span>
                  <span><strong>Communication:</strong> Daily responsive updates with honest, transparent timeline disclosure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#8C827A] mt-0.5">02</span>
                  <span><strong>Product Understanding:</strong> Faithful interpretation of tech packs, silhouettes, and fabric handfeel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#8C827A] mt-0.5">03</span>
                  <span><strong>Targeted Sourcing:</strong> Selecting production units whose machinery aligns with your category.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#8C827A] mt-0.5">04</span>
                  <span><strong>Production Coordination:</strong> Mitigating material delays before cutting commences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#8C827A] mt-0.5">05</span>
                  <span><strong>Quality Awareness:</strong> Continuous in-process auditing rather than relying solely on end inspection.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#8C827A] mt-0.5">06</span>
                  <span><strong>Long-Term Relationships:</strong> Cultivating sustainable partnerships built on mutual growth.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#FAF9F5] border border-[#1A1A1A]/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C827A] block font-medium">Ready to discuss your supply chain?</span>
                <span className="text-sm font-serif text-[#18181B]">Connect with our sourcing desk</span>
              </div>
              <button
                onClick={onOpenQuote}
                className="p-3 bg-[#18181B] text-[#FAF9F5] hover:bg-[#2C2B29] transition-colors cursor-pointer"
                aria-label="Request quote from about section"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
