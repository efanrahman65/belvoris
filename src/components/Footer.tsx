import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141416] text-[#FAF9F5] border-t border-[#2A2926] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FAF9F5]/10">
          
          {/* Brand & Mandate */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <button
              onClick={handleScrollToTop}
              className="text-2xl sm:text-3xl font-serif font-semibold tracking-[0.25em] text-[#FAF9F5] uppercase hover:opacity-85 transition-opacity cursor-pointer text-left block"
            >
              BELVORIS
            </button>
            <p className="text-sm sm:text-base text-[#B3ACA2] font-light max-w-sm leading-relaxed">
              Apparel sourcing and buying-house support for international buyers.
            </p>
            <div className="pt-2 text-xs text-[#8C827A] font-mono">
              Dhaka, Bangladesh · Global Apparel Logistics & Supply Chain
            </div>
          </div>

          {/* Quick Navigation Mirror */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium mb-4">
              Navigation
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-[#C8C1B7] hover:text-[#FAF9F5] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & CTA Column */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium mb-4">
                Inquiries
              </div>
              <a
                href="mailto:contact@belvoris.com"
                className="text-lg font-serif text-[#FAF9F5] hover:underline block mb-6"
              >
                contact@belvoris.com
              </a>
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-[#141416] bg-[#FAF9F5] hover:bg-[#FFFFFF] transition-all cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright & Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716A] gap-4">
          <div>
            © 2026 BELVORIS. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase font-mono">
            <span>Bangladesh Sourcing Partner</span>
            <span>·</span>
            <span>International Apparel Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
