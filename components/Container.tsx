import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Centered max-width wrapper used by every section (~1180px + gutters). */
export default function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn('mx-auto w-full max-w-content px-6 sm:px-8', className)}>{children}</Tag>;
}
