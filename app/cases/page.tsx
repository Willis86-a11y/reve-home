import type { Metadata } from 'next';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import CaseCard from '@/components/CaseCard';
import ClosingCta from '@/components/ClosingCta';
import { cases } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cases',
  description: cases.intro,
  alternates: { canonical: '/cases' },
  openGraph: {
    title: `Cases · ${site.name}`,
    description: cases.intro,
    url: '/cases',
  },
};

export default function CasesPage() {
  return (
    <>
      <section className="pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-24">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{cases.eyebrow}</Eyebrow>
            <h1 className="mt-4 whitespace-pre-line font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {cases.heading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">{cases.intro}</p>
          </Reveal>

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {cases.items.map((item, i) => (
              <Reveal key={`${item.title}-${i}`} delay={(i % 3) * 90}>
                <CaseCard item={item} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta heading={cases.closing.heading} support={cases.closing.support} />
    </>
  );
}
