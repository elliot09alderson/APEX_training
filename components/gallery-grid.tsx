"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Play, X } from "@phosphor-icons/react";
import { AutoVideo } from "@/components/auto-video";
import { galleryCategories, galleryItems } from "@/lib/content";

type Item = (typeof galleryItems)[number];

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Item | null>(null);
  const reduce = useReducedMotion();

  const shown =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2">
        {galleryCategories.map((category) => {
          const selected = filter === category;
          const count =
            category === "All"
              ? galleryItems.length
              : galleryItems.filter((item) => item.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={selected}
              className={`px-5 py-2.5 text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                selected
                  ? "bg-ember text-ink"
                  : "border-bone/20 text-ash hover:text-bone hover:border-bone/50 border"
              }`}
            >
              {category}
              <span className={selected ? "text-ink/60 ml-2" : "text-ash/50 ml-2"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActive(item)}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.04, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[9/16] w-full overflow-hidden text-left"
              aria-label={`${item.type === "video" ? "Play" : "Open"} ${item.title}`}
            >
              {item.type === "video" ? (
                <AutoVideo
                  src={item.src}
                  poster={item.poster}
                  label={item.alt}
                  decorative
                  className="h-full w-full object-cover contrast-110 grayscale transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover contrast-110 grayscale transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}
              <div className="from-ink/90 absolute inset-0 bg-gradient-to-t to-transparent" />

              {item.type === "video" ? (
                <span className="bg-ember/90 text-ink absolute top-4 right-4 flex h-9 w-9 items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Play size={15} weight="fill" />
                </span>
              ) : null}

              <span className="absolute bottom-4 left-4 flex flex-col gap-1">
                <span className="text-ember text-[10px] font-bold tracking-[0.22em] uppercase">
                  {item.category}
                </span>
                <span className="text-bone text-sm font-semibold">{item.title}</span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="bg-ink/95 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="text-bone absolute top-5 right-5"
            >
              <X size={26} weight="bold" />
            </button>

            <motion.figure
              initial={reduce ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-full flex-col items-center"
            >
              {active.type === "video" ? (
                <video
                  src={active.src}
                  poster={active.poster}
                  controls
                  autoPlay
                  loop
                  playsInline
                  aria-label={active.alt}
                  className="max-h-[76vh] w-auto"
                />
              ) : (
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1200}
                  height={1600}
                  sizes="100vw"
                  className="max-h-[76vh] w-auto object-contain"
                />
              )}
              <figcaption className="text-ash mt-4 text-sm">
                <span className="text-ember font-bold tracking-[0.18em] uppercase">
                  {active.category}
                </span>
                <span className="text-bone ml-3 font-semibold">{active.title}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
