import React from 'react';
import { Mail, Phone, Clock, ArrowUpRight, MapPin, Navigation } from 'lucide-react';
import { LEADERSHIP, HEAD_OFFICE } from '../data/apparelData';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F3EFE8] border-t border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-[#8C827A] font-medium mb-3">
            Direct Inquiries & Presence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.15]">
            CONNECT WITH BELVORIS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#595550] font-light leading-relaxed">
            Our executive desk responds directly to international brand inquiries, tech pack reviews, and on-site buyer visits in Dhaka.
          </p>
        </div>

        {/* Dedicated Head Office Card (Prominent & Elegant) */}
        <div className="mb-10 p-8 sm:p-10 lg:p-12 bg-[#FAF9F5] border border-[#1A1A1A]/12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C827A] font-mono mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#18181B]" />
                <span>{HEAD_OFFICE.title} · {HEAD_OFFICE.city}, {HEAD_OFFICE.country}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B] mb-3">
                {HEAD_OFFICE.addressLine}
              </h3>

              <p className="text-sm sm:text-base text-[#524E48] font-light leading-relaxed max-w-3xl">
                {HEAD_OFFICE.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <a
                href={HEAD_OFFICE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF9F5] hover:bg-[#F3EFE8] text-[#18181B] border border-[#1A1A1A]/20 hover:border-[#18181B] text-xs font-medium tracking-[0.14em] uppercase transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <span className="text-[11px] text-[#8C827A] font-mono">
                Visiting buyers welcome by appointment
              </span>
            </div>

          </div>
        </div>

        {/* Contact Matrix: Leadership & Sourcing Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
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
