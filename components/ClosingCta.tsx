import Container from './Container';
import CTAButtons from './CTAButtons';
import Reveal from './Reveal';

/** Dark closing band that ends every page with both actions (primary = book). */
export default function ClosingCta({ heading, support }: { heading: string; support?: string }) {
  return (
    <section className="bg-ink text-on-dark">
      <Container className="py-20 sm:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-on-dark sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {support && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-on-dark/70">{support}</p>
          )}
          <CTAButtons tone="dark" align="center" className="mt-9" />
        </Reveal>
      </Container>
    </section>
  );
}
