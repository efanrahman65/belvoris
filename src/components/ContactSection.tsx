import React from 'react';
import { Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP } from '../data/apparelData';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F3EFE8] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-[#8C827A] font-medium mb-3">
            Direct Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.15]">
            CONNECT WITH BELVORIS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#595550] font-light leading-relaxed">
            Our executive desk responds directly to international brand inquiries, tech pack reviews, and sourcing audits.
          </p>
        </div>

        {/* Contact Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Leadership Contacts */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className="p-8 bg-[#FAF9F5] border border-[#1A1A1A]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#8C827A] font-medium block mb-1">
                    {leader.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#18181B] mb-6">
                    {leader.name}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <a
                      href={`tel:${leader.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-3 text-[#383531] hover:text-[#18181B] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#8C827A] shrink-0" />
                      <span className="font-mono">{leader.phone}</span>
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center gap-3 text-[#383531] hover:text-[#18181B] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#8C827A] shrink-0" />
                      <span className="font-mono underline decoration-[#1A1A1A]/20 hover:decoration-[#18181B]">
                        {leader.email}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1A1A1A]/5">
                  <span className="text-[11px] text-[#8C827A]">Direct Mobile & WhatsApp Available</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Centralized Sourcing Desk & Quote CTA */}
          <div className="lg:col-span-5 bg-[#FAF9F5] border border-[#1A1A1A]/10 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium block mb-2">
                Centralized Communications
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B] mb-4">
                General Inquiries & RFQs
              </h3>
              <p className="text-sm text-[#595550] font-light leading-relaxed mb-6">
                For complete tech pack submissions, factory compliance verification, or general buyer inquiries:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 bg-[#F3EFE8] border border-[#1A1A1A]/5">
                  <span className="text-[11px] uppercase tracking-wider text-[#8C827A] block font-medium mb-0.5">
                    Official Inquiries Inbox
                  </span>
                  <a
                    href="mailto:contact@belvoris.com"
                    className="text-base font-serif text-[#18181B] hover:underline"
                  >
                    contact@belvoris.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#524E48]">
                  <Clock className="w-4 h-4 text-[#8C827A] shrink-0" />
                  <span>Aligned with European (CET), UK (BST), and US (EST) working hours</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="group w-full py-4 text-xs font-medium tracking-[0.16em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
