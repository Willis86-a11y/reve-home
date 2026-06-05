import Link from 'next/link';
import { site } from '@/lib/site';
import { cn } from '@/lib/cn';

/** Wordmark set in the serif. Doubles as the home link. */
export default function Logo({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — forside`}
      className={cn(
        'font-serif text-xl tracking-tight transition-opacity hover:opacity-70 sm:text-2xl',
        tone === 'dark' ? 'text-on-dark' : 'text-ink',
        className,
      )}
    >
      {site.name}
    </Link>
  );
}
