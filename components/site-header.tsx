"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { joinCta, nav, site } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/85 border-b border-bone/10 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="display text-bone text-2xl lg:text-[28px]">
            {site.short}
          </span>
          <span className="text-ash hidden text-[10px] font-semibold tracking-[0.3em] uppercase sm:block">
            Training
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ash hover:text-bone text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={joinCta.href}
            className="bg-ember text-ink px-5 py-2.5 text-sm font-bold tracking-wide uppercase transition-transform active:translate-y-px"
          >
            {joinCta.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-bone lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="bg-ink border-bone/10 overflow-hidden border-b lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col px-4 pb-5 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-bone/10 text-bone border-b py-4 text-base font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={joinCta.href}
                onClick={() => setOpen(false)}
                className="bg-ember text-ink mt-5 px-5 py-3 text-center text-sm font-bold tracking-wide uppercase"
              >
                {joinCta.label}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
