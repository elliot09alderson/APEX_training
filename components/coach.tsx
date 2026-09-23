import { AutoVideo } from "@/components/auto-video";
import { Reveal } from "@/components/reveal";
import { coach } from "@/lib/content";

export function Coach() {
  return (
    <section
      id="coach"
      aria-labelledby="coach-heading"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] w-full">
              <AutoVideo
                src={coach.video}
                poster={coach.poster}
                label={coach.portraitAlt}
                className="h-full w-full object-cover contrast-110 grayscale"
              />
              <div className="bg-ember text-ink absolute bottom-0 left-0 px-4 py-2 text-[11px] font-bold tracking-[0.2em] uppercase">
                {coach.role}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <p className="text-ember text-[11px] font-bold tracking-[0.28em] uppercase">
              The person writing your programme
            </p>
            <h2
              id="coach-heading"
              className="display text-bone mt-5 text-[clamp(2.75rem,7vw,5.5rem)]"
            >
              {coach.name}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {coach.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.12 + index * 0.06}>
                <p className="text-ash max-w-[62ch] leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {coach.record.map((group, index) => (
              <Reveal key={group.heading} delay={0.16 + index * 0.06}>
                <div className="border-bone/15 border-t pt-5">
                  <h3 className="text-bone text-xs font-bold tracking-[0.2em] uppercase">
                    {group.heading}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-ash text-sm leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
