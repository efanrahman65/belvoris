import React from 'react';
import { Mail, Phone, UserCheck, Camera } from 'lucide-react';
import { LeadershipMember } from '../data/apparelData';

interface LeadershipCardProps {
  member: LeadershipMember;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({ member }) => {
  // Extract initials for the architectural placeholder monogram
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <div className="bg-[#FAF9F5] border border-[#1A1A1A]/10 p-8 sm:p-10 flex flex-col justify-between">
      <div>
        {/* Elegant Architectural Portrait Placeholder Frame (NOT fake AI face) */}
        <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto mb-8 bg-[#EFECE6] border border-[#1A1A1A]/15 flex flex-col items-center justify-center p-6 text-center group">
          {/* Subtle architectural grid pattern inside frame */}
          <div className="w-20 h-20 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center mb-4 bg-[#FAF9F5] shadow-inner">
            <span className="text-2xl font-serif font-medium tracking-wider text-[#18181B]">
              {initials}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#8C827A] font-medium mb-1">
            <Camera className="w-3.5 h-3.5" />
            <span>Executive Portrait</span>
          </div>
          <span className="text-[10px] text-[#A8A196] tracking-wider uppercase">
            Reserved for Official Photography
          </span>

          {/* Corner crop markers for architectural studio look */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#1A1A1A]/30 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#1A1A1A]/30 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#1A1A1A]/30 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#1A1A1A]/30 pointer-events-none" />
        </div>

        {/* Member Details */}
        <div className="text-center sm:text-left">
          <div className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium mb-1">
            {member.role}
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B] mb-3">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#595550] font-light leading-relaxed mb-6">
            {member.bioNote}
          </p>
        </div>
      </div>

      {/* Direct Contact Links */}
      <div className="pt-6 border-t border-[#1A1A1A]/10 space-y-2.5 text-xs sm:text-sm">
        <a
          href={`tel:${member.phone.replace(/\s+/g, '')}`}
          className="flex items-center gap-3 text-[#383531] hover:text-[#18181B] transition-colors py-1"
        >
          <Phone className="w-4 h-4 text-[#8C827A] shrink-0" />
          <span className="font-mono text-xs">{member.phone}</span>
        </a>
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-3 text-[#383531] hover:text-[#18181B] transition-colors py-1"
        >
          <Mail className="w-4 h-4 text-[#8C827A] shrink-0" />
          <span className="font-mono text-xs underline decoration-[#1A1A1A]/20 hover:decoration-[#18181B]">
            {member.email}
          </span>
        </a>
      </div>
    </div>
  );
};
