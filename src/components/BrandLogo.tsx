import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'horizontal' | 'mark-only' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * BrandLogo component rendering the authentic 本顏室 (Skincare & Waxing) logo
 * matching the user uploaded brand identity assets.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
}) => {
  // Slate grey brand color from the uploaded artwork: #7E8E9B / #6B7B87
  const markColor = '#7B8D99';
  const textColor = '#3A4B56';

  // SVG Geometric Mark from 本顏室-1.png
  const LogoMark = ({ s = 36 }: { s?: number }) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Top Left Quadrant: Rounded outer corner */}
      <path
        d="M 5 20 C 5 11 11 5 20 5 L 47 5 L 47 47 L 5 47 Z"
        fill={markColor}
      />
      
      {/* Top Right Quadrant: Curved cutout drape motif */}
      <path
        d="M 53 5 L 80 5 C 89 5 95 11 95 20 L 95 47 L 53 47 Z"
        fill={markColor}
      />
      <path
        d="M 53 5 L 53 47 C 53 25 73 5 95 5 Z"
        fill="#E2ECF4"
        opacity="0.95"
      />

      {/* Bottom Left Quadrant: Gentle rising contour wave */}
      <path
        d="M 5 53 L 47 53 L 47 95 L 20 95 C 11 95 5 89 5 80 Z"
        fill={markColor}
      />
      <path
        d="M 5 95 C 25 95 47 70 47 53 L 5 53 Z"
        fill="#E2ECF4"
        opacity="0.95"
      />

      {/* Bottom Right Quadrant: Soft rounded square */}
      <path
        d="M 53 53 L 95 53 L 95 80 C 95 89 89 95 80 95 L 53 95 Z"
        fill={markColor}
      />
    </svg>
  );

  if (variant === 'mark-only') {
    const s = size === 'sm' ? 28 : size === 'md' ? 36 : size === 'lg' ? 48 : 64;
    return <LogoMark s={s} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoMark s={size === 'xl' ? 72 : size === 'lg' ? 56 : 42} />
        <div className="mt-3">
          <span className="font-serif-tc text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#243542] block">
            本顏室
          </span>
          <span className="text-xs sm:text-sm font-sans tracking-[0.24em] text-[#5A6D7C] uppercase font-medium block mt-1">
            Skincare & Waxing
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal layout (for Navbar, Headers)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark s={size === 'sm' ? 28 : size === 'md' ? 34 : 42} />
      <div className="flex flex-col justify-center leading-none">
        <span className="font-serif-tc font-bold tracking-[0.15em] text-[#1E2E38] text-lg sm:text-xl">
          本顏室
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] text-[#607382] font-semibold uppercase mt-0.5">
          Skincare & Waxing
        </span>
      </div>
    </div>
  );
};
