import Container from './Container';
import Reveal from './Reveal';
import { home } from '@/lib/content';

export default function SocialProof() {
  const { testimonial } = home.proof;

  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <figure>
            <blockquote className="font-serif text-[1.75rem] leading-snug text-ink sm:text-3xl lg:text-[2.5rem] lg:leading-[1.3]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-muted">
              <span className="font-medium text-ink">{testimonial.name}</span> · {testimonial.detail}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
