import Button from './Button';
import { site } from '@/lib/site';
import { cn } from '@/lib/cn';

/**
 * The two site-wide actions, rendered together.
 * Primary = "Book et møde" (solid), secondary = "Indhent et tilbud" (quieter).
 * Both pull their labels + destinations from lib/site.ts.
 */
export default function CTAButtons({
  tone = 'light',
  size = 'md',
  align = 'start',
  secondaryVariant = 'outline',
  className,
}: {
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md';
  align?: 'start' | 'center';
  secondaryVariant?: 'outline' | 'link';
  className?: string;
}) {
  const { primary, secondary } = site.cta;

  return (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4',
        align === 'center' ? 'sm:justify-center' : 'sm:justify-start',
        className,
      )}
    >
      <Button href={primary.href} tone={tone} size={size} variant="solid">
        {primary.label}
      </Button>
      <Button href={secondary.href} tone={tone} size={size} variant={secondaryVariant}>
        {secondary.label}
        {secondaryVariant === 'link' && <span aria-hidden="true">→</span>}
      </Button>
    </div>
  );
}
