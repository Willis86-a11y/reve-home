import Container from './Container';
import ImageFrame from './ImageFrame';
import Reveal from './Reveal';
import { home } from '@/lib/content';

/** Two compact landscape shots under the trust metrics — a quick feel for the work. */
export default function WorkPreview() {
  const { images } = home.gallery;

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 100}>
              <ImageFrame
                src={img.src}
                alt={img.alt}
                ratio="aspect-[4/3]"
                sizes="(min-width: 1024px) 560px, 50vw"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
