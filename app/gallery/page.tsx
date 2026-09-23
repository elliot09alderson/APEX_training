import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { GalleryGrid } from "@/components/gallery-grid";
import Image from "next/image";
import { galleryBanner, galleryItems, joinCta, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and clips from inside APX Training. Physique work, gym sessions, outdoor conditioning and members training together.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    url: `${site.url}/gallery`,
    title: `Gallery | ${site.name}`,
    description:
      "Training, competition and community photos from APX Training.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Gallery",
          item: `${site.url}/gallery`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      name: `${site.name} gallery`,
      url: `${site.url}/gallery`,
      about: "Physique training, conditioning and community sessions at APX Training",
      hasPart: galleryItems.map((item) =>
        item.type === "video"
          ? {
              "@type": "VideoObject",
              name: item.title,
              description: item.alt,
              contentUrl: `${site.url}${item.src}`,
              thumbnailUrl: `${site.url}${item.poster}`,
              uploadDate: "2026-09-23",
            }
          : {
              "@type": "ImageObject",
              name: item.title,
              description: item.alt,
              contentUrl: `${site.url}${item.src}`,
            },
      ),
    },
  ],
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-32 pb-24 sm:px-6 lg:px-10 lg:pt-40 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1 className="display text-bone max-w-[14ch] text-[clamp(2.75rem,8vw,6rem)]">
        The work, on camera
      </h1>
      <p className="text-ash mt-6 max-w-[54ch] leading-relaxed">
        Sessions, posing practice and conditioning work from inside APX. Filter
        by what you want to see, and tap anything to open it full screen.
      </p>

      <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden sm:mt-12 sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src={galleryBanner.image}
          alt={galleryBanner.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top contrast-110 grayscale"
        />
        <div className="from-ink absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <div className="mt-12">
        <GalleryGrid />
      </div>

      <div className="border-bone/10 mt-20 border-t pt-10">
        <p className="display text-bone max-w-[18ch] text-[clamp(1.75rem,4vw,3rem)]">
          Your session goes up here next
        </p>
        <Link
          href={joinCta.href}
          className="bg-ember text-ink group mt-7 inline-flex items-center gap-2 px-7 py-4 text-sm font-bold tracking-wide uppercase transition-transform active:translate-y-px"
        >
          {joinCta.label}
          <ArrowRight
            size={17}
            weight="bold"
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
