import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import { site } from '@/lib/site';

/** Quiet, minimal footer. The loud closing CTA lives in <ClosingCta/> above it. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.description}</p>
          </div>

          <nav aria-label="Sidefod menu">
            <p className="eyebrow">Menu</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-body transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={site.cta.primary.href} className="text-body transition-colors hover:text-ink">
                  {site.cta.primary.label}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Kontakt</p>
            <ul className="mt-4 space-y-2.5 text-sm text-body">
              <li>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-ink">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="transition-colors hover:text-ink">
                  {site.contact.phone}
                </a>
              </li>
              <li className="text-muted">{site.contact.address.line1}</li>
              <li className="text-muted">{site.contact.address.line2}</li>
            </ul>
            {site.social.length > 0 && (
              <ul className="mt-4 flex gap-4 text-sm">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-body transition-colors hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Alle rettigheder forbeholdes.
          </p>
          <p>{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
