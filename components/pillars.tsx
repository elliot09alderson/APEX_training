import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section
      id="training"
      aria-labelledby="training-heading"
      className="bg-ink-2 scroll-mt-24 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <h2
            id="training-heading"
            className="display text-bone max-w-[16ch] text-[clamp(2.5rem,6vw,4.75rem)]"
          >
            What you actually train
          </h2>
          <p className="text-ash mt-6 max-w-[62ch] leading-relaxed">
            APX Training is online physique coaching built on a combat athlete&apos;s
            programme. Every member trains five pillars: barbell strength, combat
            conditioning, nutrition around Indian home food, weekly form review,
            and the mobility work that keeps you training for years.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[248px] lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const isAccent = "accent" in pillar && pillar.accent;
            const hasImage = "image" in pillar && pillar.image;

            return (
              <Reveal
                key={pillar.title}
                delay={index * 0.05}
                className={`${pillar.span} ${hasImage ? "min-h-[320px] lg:min-h-0" : ""}`}
              >
                <article
                  className={`relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden p-7 lg:p-8 ${
                    isAccent
                      ? "bg-ember text-ink"
                      : hasImage
                        ? "text-bone"
                        : "bg-ink border-bone/10 text-bone border"
                  }`}
                >
                  {hasImage ? (
                    <>
                      <Image
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="object-cover contrast-125 grayscale"
                      />
                      <div className="from-ink via-ink/70 absolute inset-0 bg-gradient-to-t to-transparent" />
                    </>
                  ) : null}

                  <div className="relative">
                    <h3
                      className={`display text-3xl lg:text-4xl ${
                        isAccent ? "text-ink" : "text-bone"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-[42ch] text-sm leading-relaxed ${
                        isAccent ? "text-ink/80" : "text-ash"
                      }`}
                    >
                      {pillar.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
