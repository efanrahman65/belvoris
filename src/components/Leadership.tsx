import React from 'react';
import { SectionHeading } from './SectionHeading';
import { LeadershipCard } from './LeadershipCard';
import { LEADERSHIP } from '../data/apparelData';

export const Leadership: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F3EFE8] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Executive Stewardship"
          title="MEET THE LEADERSHIP"
          subtitle="Accessible, accountable leadership driving direct communication with international apparel brands and retail buying teams."
        />

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {LEADERSHIP.map((member) => (
            <LeadershipCard key={member.name} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};
