import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'horizontal' | 'mark-only' | 'stacked' | 'text-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * BrandLogo component rendering the authentic 本顏室 (Skincare & Waxing) logo
 * strictly following the client's uploaded official brand identity artwork.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
}) => {
  // Client's official uploaded logo assets:
  // 1. Full stacked logo (emblem + 本顏室 + Skincare & Waxing)
  const STACKED_LOGO = '/assets/aistudio/___-1_759b6979.png';
  // 2. Emblem mark cropped directly from the official art
  const MARK_LOGO = '/assets/aistudio/logo_mark.png';
  // 3. Horizontal wordmark (本顏室 + Skincare & Waxing)
  const TEXT_LOGO = '/assets/aistudio/_______93bc6506.png';

  if (variant === 'mark-only') {
    const heightClass =
      size === 'sm'
        ? 'h-7'
        : size === 'md'
          ? 'h-9'
          : size === 'lg'
            ? 'h-12'
            : 'h-16';
    return (
      <img
        src={MARK_LOGO}
        alt="本顏室 Logo"
        className={`${heightClass} w-auto object-contain shrink-0 ${className}`}
        loading="eager"
      />
    );
  }

  if (variant === 'text-only') {
    const heightClass =
      size === 'sm'
        ? 'h-6'
        : size === 'md'
          ? 'h-8'
          : size === 'lg'
            ? 'h-10'
            : 'h-14';
    return (
      <img
        src={TEXT_LOGO}
        alt="本顏室 Skincare & Waxing"
        className={`${heightClass} w-auto object-contain shrink-0 ${className}`}
        loading="eager"
      />
    );
  }

  if (variant === 'stacked') {
    // Exact full logo from user image (geometric mark + calligraphy + typography)
    const heightClass =
      size === 'sm'
        ? 'h-24'
        : size === 'md'
          ? 'h-32'
          : size === 'lg'
            ? 'h-40'
            : 'h-44 sm:h-52';
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <img
          src={STACKED_LOGO}
          alt="本顏室 Skincare & Waxing"
          className={`${heightClass} w-auto max-w-[210px] sm:max-w-[260px] object-contain shrink-0`}
          loading="eager"
        />
      </div>
    );
  }

  // Default: Horizontal layout (for Navbar, Headers)
  const markHeight =
    size === 'sm'
      ? 'h-8'
      : size === 'md'
        ? 'h-9 sm:h-10'
        : size === 'lg'
          ? 'h-11 sm:h-12'
          : 'h-14 sm:h-16';

  const textHeight =
    size === 'sm'
      ? 'h-7'
      : size === 'md'
        ? 'h-8 sm:h-9'
        : size === 'lg'
          ? 'h-10 sm:h-11'
          : 'h-12 sm:h-14';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 shrink-0 ${className}`}>
      <img
        src={MARK_LOGO}
        alt="本顏室"
        className={`${markHeight} w-auto object-contain shrink-0`}
        loading="eager"
      />
      <img
        src={TEXT_LOGO}
        alt="本顏室 Skincare & Waxing"
        className={`${textHeight} w-auto object-contain shrink-0`}
        loading="eager"
      />
    </div>
  );
};
