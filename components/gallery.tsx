import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AutoVideo } from "@/components/auto-video";
import { Reveal } from "@/components/reveal";
import { galleryItems } from "@/lib/content";

const strip = galleryItems.filter((item) => item.type === "video").slice(0, 4);

export function Gallery() {
  return (
    <section aria-labelledby="gallery-heading" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              id="gallery-heading"
              className="display text-bone max-w-[14ch] text-[clamp(2.5rem,6vw,4.75rem)]"
            >
              Inside the week
            </h2>
            <Link
              href="/gallery"
              className="text-bone border-bone/30 hover:border-ember inline-flex items-center gap-2 border-b-2 pb-2 text-sm font-bold tracking-wide uppercase transition-colors"
            >
              See the full gallery
              <ArrowRight size={16} weight="bold" className="text-ember" />
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-10">
        {strip.map((clip) => (
          <figure
            key={clip.title}
            className="relative aspect-[9/16] w-[72vw] shrink-0 snap-start overflow-hidden sm:w-[42vw] lg:w-[24vw]"
          >
            <AutoVideo
              src={clip.src}
              poster={clip.poster}
              label={clip.alt}
              className="h-full w-full object-cover contrast-110 grayscale"
            />
            <div className="from-ink/90 absolute inset-0 bg-gradient-to-t to-transparent" />
            <figcaption className="text-bone absolute bottom-5 left-5 text-sm font-bold tracking-[0.2em] uppercase">
              {clip.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
