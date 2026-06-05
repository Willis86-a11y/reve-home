import Container from './Container';
import Eyebrow from './Eyebrow';
import CTAButtons from './CTAButtons';
import ImageFrame from './ImageFrame';
import Reveal from './Reveal';
import { home } from '@/lib/content';

export default function Hero() {
  const { hero } = home;

  return (
    <section className="pt-10 sm:pt-14 lg:pt-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 className="mt-5 whitespace-pre-line font-serif text-[2.75rem] leading-[1.05] text-ink sm:text-6xl lg:text-[4.25rem]">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-body sm:text-lg">
                {hero.support}
              </p>
              <CTAButtons className="mt-9" />
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <ImageFrame
                src={hero.image}
                alt={hero.imageAlt}
                ratio="aspect-[4/5]"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
