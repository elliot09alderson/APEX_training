"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { proof } from "@/lib/content";

function MedalCount({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const count = useMotionValue(reduce ? target : 0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(count, target, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, count, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function ProofBand() {
  return (
    <section
      id="record"
      aria-label="Coaching credentials"
      className="border-bone/10 scroll-mt-20 border-y"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-bone/10 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
        {proof.map((item) => (
          <div key={item.label} className="py-10 md:px-8 md:first:pl-0 md:last:pr-0">
            <p className="display text-ember text-6xl lg:text-7xl">
              {"countTo" in item && item.countTo ? (
                <MedalCount target={item.countTo} suffix={item.suffix ?? ""} />
              ) : (
                item.value
              )}
            </p>
            <p className="text-ash mt-4 max-w-[28ch] text-sm leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
