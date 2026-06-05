import Container from './Container';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { home } from '@/lib/content';

export default function WhatWeDo() {
  const { whatWeDo } = home;

  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{whatWeDo.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {whatWeDo.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-16 sm:grid-cols-3">
          {whatWeDo.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="bg-cream p-8 lg:p-10">
              <span className="font-serif text-2xl text-taupe-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
