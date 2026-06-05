import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'solid' | 'outline' | 'link';
type Tone = 'light' | 'dark';
type Size = 'sm' | 'md';

type OwnProps = {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
};

// Accept the common button attributes (type, disabled, onClick…) plus a couple
// of anchor-only ones (target, rel) so the same component covers links + buttons.
type ButtonProps = OwnProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof OwnProps> &
  Partial<Pick<ComponentPropsWithoutRef<'a'>, 'target' | 'rel'>>;

const base =
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-colors duration-200 ease-calm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none';

const sizes: Record<Size, string> = {
  sm: 'text-[0.8rem] px-5 py-2.5 rounded-full',
  md: 'text-sm px-7 py-3.5 rounded-full',
};

// Primary button stays ink-on-cream (high contrast, ~9:1) for accessibility +
// conversion. Taupe is reserved for borders / accents where contrast allows.
const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    solid: 'bg-ink text-on-dark hover:bg-ink-hover focus-visible:ring-ink/60 focus-visible:ring-offset-cream',
    outline:
      'border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.04] focus-visible:ring-ink/60 focus-visible:ring-offset-cream',
    link: 'text-ink underline decoration-line decoration-1 underline-offset-4 hover:decoration-ink focus-visible:ring-ink/60 focus-visible:ring-offset-cream',
  },
  dark: {
    solid: 'bg-on-dark text-ink hover:bg-white focus-visible:ring-on-dark/70 focus-visible:ring-offset-ink',
    outline:
      'border border-on-dark/30 text-on-dark hover:border-on-dark/70 hover:bg-on-dark/10 focus-visible:ring-on-dark/70 focus-visible:ring-offset-ink',
    link: 'text-on-dark underline decoration-on-dark/40 decoration-1 underline-offset-4 hover:decoration-on-dark focus-visible:ring-on-dark/70 focus-visible:ring-offset-ink',
  },
};

export default function Button({
  variant = 'solid',
  tone = 'light',
  size = 'md',
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variant !== 'link' && sizes[size], styles[tone][variant], className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  );
}
