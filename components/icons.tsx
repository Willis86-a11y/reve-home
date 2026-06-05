import type { SVGProps } from 'react';

// Minimal thin-line icons drawn inline (no icon library). Size via className
// (e.g. h-7 w-7); colour via text-* (they use currentColor).
const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

/** Homes delivered */
export function HouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 11.5 12 4l8.5 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M10 20v-5.5h4V20" />
    </svg>
  );
}

/** Bespoke design / craft */
export function PencilIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z" />
      <path d="M14.5 6.5l3 3" />
    </svg>
  );
}

/** Recommendation / rating */
export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L12 16.77 6.8 19.5l.99-5.78-4.21-4.1 5.82-.85z" />
    </svg>
  );
}
