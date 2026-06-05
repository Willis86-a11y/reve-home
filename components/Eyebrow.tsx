import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Small uppercase label that sits above section headings. */
export default function Eyebrow({
  children,
  tone = 'light',
  className,
}: {
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-xs font-medium uppercase tracking-label',
        tone === 'dark' ? 'text-sand' : 'text-muted',
        className,
      )}
    >
      {children}
    </p>
  );
}
