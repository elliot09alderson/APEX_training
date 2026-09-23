import { Hero } from "@/components/hero";
import { ProofBand } from "@/components/proof-band";
import { Coach } from "@/components/coach";
import { Pillars } from "@/components/pillars";
import { Method } from "@/components/method";
import { Gallery } from "@/components/gallery";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { EthosMarquee } from "@/components/ethos-marquee";
import { JoinCta } from "@/components/join-cta";
import { faqs } from "@/lib/content";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBand />
      <Coach />
      <Pillars />
      <Method />
      <Gallery />
      <Pricing />
      <Faq />
      <EthosMarquee />
      <JoinCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
