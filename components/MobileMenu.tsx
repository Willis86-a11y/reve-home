'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';
import { cn } from '@/lib/cn';

/** Compact mobile disclosure menu. The primary CTA lives in the header bar itself. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Luk menu' : 'Åbn menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink"
      >
        <span className="relative block h-3 w-5" aria-hidden="true">
          <span
            className={cn(
              'absolute left-0 top-0 h-px w-5 bg-ink transition-transform duration-300 ease-calm',
              open && 'translate-y-[5.5px] rotate-45',
            )}
          />
          <span
            className={cn(
              'absolute bottom-0 left-0 h-px w-5 bg-ink transition-transform duration-300 ease-calm',
              open && '-translate-y-[5.5px] -rotate-45',
            )}
          />
        </span>
      </button>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-cream">
          <nav aria-label="Mobilmenu" className="mx-auto flex max-w-content flex-col px-6 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3.5 text-base text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.cta.secondary.href}
              onClick={() => setOpen(false)}
              className="py-3.5 text-base text-taupe-deep"
            >
              {site.cta.secondary.label}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
