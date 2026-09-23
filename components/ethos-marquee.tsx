import { ethos } from "@/lib/content";

/** One kinetic band on the page. It carries the training principles as a moving
 *  strip so the closing section lands with momentum instead of a cold stop. */
export function EthosMarquee() {
  const strip = [...ethos, ...ethos];

  return (
    <section aria-label="Training principles" className="border-bone/10 border-y py-8 lg:py-10">
      <div className="flex overflow-hidden">
        <div className="apx-marquee-track flex shrink-0 items-center gap-10 pr-10">
          {strip.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="display text-bone/70 flex shrink-0 items-center gap-10 text-4xl lg:text-6xl"
            >
              {word}
              <span aria-hidden className="bg-ember block h-2.5 w-2.5" />
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="apx-marquee-track flex shrink-0 items-center gap-10 pr-10"
        >
          {strip.map((word, index) => (
            <span
              key={`ghost-${word}-${index}`}
              className="display text-bone/70 flex shrink-0 items-center gap-10 text-4xl lg:text-6xl"
            >
              {word}
              <span className="bg-ember block h-2.5 w-2.5" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
