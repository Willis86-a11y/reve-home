import Container from './Container';
import Reveal from './Reveal';
import { HouseIcon, PencilIcon, StarIcon } from './icons';
import { home } from '@/lib/content';
import type { MetricIcon } from '@/lib/content';

const ICONS: Record<MetricIcon, typeof HouseIcon> = {
  home: HouseIcon,
  design: PencilIcon,
  recommend: StarIcon,
};

/** Slim trust bar shown right under the hero — high on the page for conversion. */
export default function TrustStrip() {
  const { proof } = home;

  return (
    <section className="pt-14 sm:pt-20 lg:pt-24">
      <Container>
        <Reveal>
          <div className="border-t border-line pt-8 sm:pt-10">
            <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {proof.metrics.map((m) => {
                const Icon = ICONS[m.icon];
                return (
                  <div
                    key={m.label}
                    className="flex items-center gap-4 py-6 first:pt-0 last:pb-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
                  >
                    <Icon className="h-8 w-8 shrink-0 text-taupe-deep sm:h-9 sm:w-9" />
                    <div>
                      <dt className="font-serif text-4xl leading-none text-ink sm:text-5xl">
                        {m.value}
                      </dt>
                      <dd className="mt-2 text-sm text-muted">{m.label}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
