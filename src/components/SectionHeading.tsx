import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = 'left',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {kicker && (
        <div
          className={`text-xs uppercase tracking-[0.2em] font-medium mb-3 ${
            isDark ? 'text-[#C5BCB1]' : 'text-[#8C827A]'
          }`}
        >
          {kicker}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight leading-[1.15] text-balance ${
          isDark ? 'text-[#FAF9F5]' : 'text-[#18181B]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            isDark ? 'text-[#B8B1A6]' : 'text-[#595550]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
