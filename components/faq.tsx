"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "@phosphor-icons/react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <h2
          id="faq-heading"
          className="display text-bone text-[clamp(2.5rem,6vw,4.5rem)] lg:col-span-4"
        >
          Before you join
        </h2>

        <div className="lg:col-span-8">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="border-bone/10 border-b">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-bone text-lg font-semibold lg:text-xl">
                      {item.q}
                    </span>
                    <span className="text-ember shrink-0">
                      {isOpen ? (
                        <Minus size={20} weight="bold" />
                      ) : (
                        <Plus size={20} weight="bold" />
                      )}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-ash max-w-[68ch] pb-7 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
