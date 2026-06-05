import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * next/image wrapper with a fixed aspect ratio.
 * Pass a real photo path to `src` (see /public/images) — it crops to fill.
 */
export default function ImageFrame({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  priority = false,
  sizes = '100vw',
  rounded = 'rounded-2xl',
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden bg-cream-soft', ratio, rounded, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn('object-cover', imageClassName)}
      />
    </div>
  );
}
