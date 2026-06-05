import type { Metadata } from 'next';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import ContactForm from '@/components/ContactForm';
import { site, type ConversionType } from '@/lib/site';

const description =
  'Book et uforpligtende møde eller indhent et tilbud. Vi vender tilbage inden for én hverdag.';

export const metadata: Metadata = {
  title: 'Kontakt',
  description,
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: `Kontakt · ${site.name}`,
    description,
    url: '/kontakt',
  },
};

// The conversion destination. The header CTAs link here with ?type=moede|tilbud,
// which preselects the right option in the form.
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const initialType: ConversionType = type === 'tilbud' ? 'tilbud' : 'moede';

  return (
    <section className="pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Kontakt</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Lad os tale om
              <br />
              jeres hjem.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-body">
              Book et uforpligtende møde eller indhent et tilbud — vælg blot i formularen. Vi vender
              altid tilbage inden for én hverdag.
            </p>

            <dl className="mt-10 space-y-6 border-t border-line pt-8 text-sm">
              <div>
                <dt className="eyebrow">E-mail</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-ink transition-colors hover:text-taupe-deep"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Telefon</dt>
                <dd className="mt-2">
                  <a
                    href={site.contact.phoneHref}
                    className="text-ink transition-colors hover:text-taupe-deep"
                  >
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Showroom</dt>
                <dd className="mt-2 text-body">
                  {site.contact.address.line1}
                  <br />
                  {site.contact.address.line2}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Åbningstider</dt>
                <dd className="mt-2 text-body">{site.contact.hours}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <ContactForm initialType={initialType} />
          </div>
        </div>
      </Container>
    </section>
  );
}
