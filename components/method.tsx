"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { method } from "@/lib/content";

/** The card stack only pins from sm up, so the shrink effect stays off phones. */
function useStackable() {
  const [stackable, setStackable] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const update = () => setStackable(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return stackable;
}

function MethodCard({
  item,
  index,
  isLast,
}: {
  item: (typeof method)[number];
  index: number;
  isLast: boolean;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const stackable = useStackable();
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start 120px", "end 120px"],
  });

  // Cards shrink as the next one slides over them, so the stack reads as depth, not a list.
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.45]);

  return (
    <div
      ref={wrapper}
      className={isLast ? "" : "mb-4 sm:h-[46vh] lg:h-[44vh]"}
    >
      <motion.article
        style={reduce || !stackable ? undefined : { scale, opacity }}
        className="bg-ink-3 border-bone/10 relative flex flex-col justify-between border p-6 sm:sticky sm:top-24 sm:min-h-[40vh] sm:p-7 lg:top-28 lg:p-10"
      >
        <div>
          <h3 className="display text-bone text-[clamp(2rem,4.4vw,3.25rem)]">
            {item.label}
          </h3>
          <p className="text-ash mt-5 max-w-[52ch] leading-relaxed lg:text-lg">
            {item.body}
          </p>
        </div>
        <div
          aria-hidden
          className="bg-ember mt-10 h-1 w-full origin-left"
          style={{ transform: `scaleX(${(index + 1) / method.length})` }}
        />
      </motion.article>
    </div>
  );
}

export function Method() {
  return (
    <section
      id="method"
      aria-labelledby="method-heading"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2
              id="method-heading"
              className="display text-bone text-[clamp(2.5rem,6vw,4.5rem)]"
            >
              How it runs
            </h2>
            <p className="text-ash mt-6 max-w-[38ch] leading-relaxed">
              Four weeks at a time, reviewed every week. You always know what the
              next session is and why it changed.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          {method.map((item, index) => (
            <MethodCard
              key={item.label}
              item={item}
              index={index}
              isLast={index === method.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
