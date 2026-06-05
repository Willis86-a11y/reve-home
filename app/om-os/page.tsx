import type { Metadata } from 'next';
import Container from '@/components/Container';
import Eyebrow from '@/components/Eyebrow';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import ClosingCta from '@/components/ClosingCta';
import { about } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Om os',
  description: about.paragraphs[0],
  alternates: { canonical: '/om-os' },
  openGraph: {
    title: `Om os · ${site.name}`,
    description: about.paragraphs[0],
    url: '/om-os',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-24">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h1 className="mt-4 whitespace-pre-line font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {about.heading}
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <ImageFrame
                  src={about.image}
                  alt={about.imageAlt}
                  ratio="aspect-[4/5]"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:pt-4">
              <Reveal delay={100} className="space-y-5">
                {about.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta heading={about.closing.heading} support={about.closing.support} />
    </>
  );
}
