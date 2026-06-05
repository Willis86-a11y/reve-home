import Container from './Container';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { home } from '@/lib/content';

export default function HowItWorks() {
  const { howItWorks } = home;

  return (
    <section className="bg-cream-soft py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {howItWorks.heading}
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-line sm:mt-16">
          {howItWorks.steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 60}>
              <div className="grid grid-cols-1 gap-2 border-b border-line py-7 sm:grid-cols-12 sm:gap-6 sm:py-8">
                <div className="sm:col-span-2">
                  <span className="font-serif text-3xl text-taupe">{s.step}</span>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="max-w-xl text-sm leading-relaxed text-body sm:text-base">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
