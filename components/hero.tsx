"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MouseScroll } from "@phosphor-icons/react";
import { AutoVideo } from "@/components/auto-video";
import { heroMedia, joinCta } from "@/lib/content";

const lines = ["Built by a fighter.", "Not a template."];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16 lg:pt-24 lg:pb-0"
    >
      <div className="absolute inset-0 lg:left-auto lg:w-[46%]">
        <motion.div
          className="relative h-full w-full"
          initial={reduce ? false : { scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <AutoVideo
            src={heroMedia.video}
            poster={heroMedia.poster}
            label={heroMedia.alt}
            decorative
            className="h-full w-full object-cover contrast-125 grayscale"
          />
        </motion.div>
        <div className="from-ink via-ink/85 to-ink/35 absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r lg:from-ink lg:via-ink/40 lg:to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <h1
            id="hero-heading"
            className="display text-bone text-[clamp(2.25rem,6.6vw,5.75rem)] leading-[0.88]"
          >
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block whitespace-nowrap"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {index === 1 ? (
                    <>
                      Not a <span className="text-ember">template.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="text-ash mt-7 max-w-[46ch] text-base leading-relaxed sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            Coaching from Aditya Janghel, international kickboxing and wushu athlete
            with 40+ golds. Aesthetic physique work, built on real training.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={joinCta.href}
              className="bg-ember text-ink group inline-flex items-center gap-2 px-7 py-4 text-sm font-bold tracking-wide uppercase transition-transform active:translate-y-px"
            >
              {joinCta.label}
              <ArrowRight
                size={17}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#method"
              className="border-bone/25 text-bone hover:border-bone inline-flex items-center px-7 py-4 text-sm font-bold tracking-wide uppercase transition-colors"
            >
              How it runs
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#record"
        aria-label="Scroll to the next section"
        className="text-ash hover:text-bone absolute bottom-7 left-1/2 hidden -translate-x-1/2 transition-colors sm:block"
        initial={reduce ? false : { opacity: 0 }}
        animate={
          reduce ? { opacity: 1 } : { opacity: 1, y: [0, 9, 0] }
        }
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
      >
        <MouseScroll size={30} weight="light" />
      </motion.a>
    </section>
  );
}
