import ImageFrame from './ImageFrame';
import type { CaseItem } from '@/lib/content';

/** A single case-study tile: image + title + one line. */
export default function CaseCard({ item, priority = false }: { item: CaseItem; priority?: boolean }) {
  return (
    <article className="group">
      <ImageFrame
        src={item.image}
        alt={`${item.title} — ${item.meta}`}
        ratio="aspect-[4/5]"
        sizes="(min-width: 768px) 33vw, 100vw"
        priority={priority}
        imageClassName="transition-transform duration-700 ease-calm group-hover:scale-[1.04]"
      />
      <div className="mt-4">
        <h3 className="font-serif text-xl text-ink">{item.title}</h3>
        <p className="mt-1 text-sm text-muted">{item.meta}</p>
      </div>
    </article>
  );
}
