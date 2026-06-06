import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import Button from './Button';
import MobileMenu from './MobileMenu';
import { site } from '@/lib/site';

/** Sticky, sparse top nav. Primary CTA is always visible — including on mobile. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-cream/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav aria-label="Hovedmenu" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-body transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={site.cta.secondary.href}
            className="text-sm text-body transition-colors hover:text-ink"
          >
            {site.cta.secondary.label}
          </Link>
          
            
          
        </div>

        <div className="flex items-center gap-1 md:hidden">
          
          
          
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
