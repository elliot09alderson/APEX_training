"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

/** Plays only while on screen, so a page of clips does not run seven decoders at once. */
export function AutoVideo({
  src,
  poster,
  label,
  className,
  decorative = false,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  decorative?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduce) return;

    if (inView) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, reduce]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      className={className}
    />
  );
}
