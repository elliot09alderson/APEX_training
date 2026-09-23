import Link from "next/link";
import {
  ArrowUpRight,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export function JoinCta() {
  return (
    <section
      id="join"
      aria-labelledby="join-heading"
      className="bg-ember text-ink scroll-mt-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <h2
            id="join-heading"
            className="display text-ink max-w-[16ch] text-[clamp(2.75rem,8vw,6.5rem)]"
          >
            Your first block starts this week
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-ink/80 mt-7 max-w-[52ch] text-lg leading-relaxed">
            Not sure which plan fits? Send your age, training history and what
            you want to look like. Aadi replies with a straight answer.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-ink text-bone group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase transition-transform active:translate-y-px"
            >
              Message Aadi
              <ArrowUpRight
                size={17}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hi Aadi, I want to know more about APX Training.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="text-ink border-ink/30 hover:border-ink inline-flex items-center gap-2 border-b-2 pb-2.5 text-sm font-bold tracking-wide uppercase transition-colors"
            >
              <WhatsappLogo size={18} weight="bold" />
              WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-ink border-ink/30 hover:border-ink inline-flex items-center gap-2 border-b-2 pb-2.5 text-sm font-bold tracking-wide uppercase transition-colors"
            >
              <InstagramLogo size={18} weight="bold" />
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
