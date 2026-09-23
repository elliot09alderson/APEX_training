import type { Metadata } from "next";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Aadi before you join APX Training. Send your training history and goal, and get a straight answer on which membership fits.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${site.url}/contact`,
    title: `Contact | ${site.name}`,
    description: "Talk to Aadi before you join APX Training.",
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
          name: "Contact",
          item: `${site.url}/contact`,
        },
      ],
    },
    {
      "@type": "ContactPage",
      url: `${site.url}/contact`,
      name: `Contact ${site.name}`,
      mainEntity: {
        "@type": "Organization",
        name: site.name,
        email: site.email,
        sameAs: [site.instagram],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Membership enquiries",
          telephone: `+${site.whatsapp}`,
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-32 pb-24 sm:px-6 lg:px-10 lg:pt-40 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <h1 className="display text-bone max-w-[12ch] text-[clamp(2.75rem,8vw,5.5rem)]">
            Talk before you pay
          </h1>
          <p className="text-ash mt-6 max-w-[42ch] leading-relaxed">
            Tell us where your training is right now. The form opens WhatsApp
            with your message ready, and Aadi answers with which plan fits, or
            tells you honestly if none of them do.
          </p>

          <div className="border-bone/10 mt-12 border-t pt-8">
            <p className="text-bone text-xs font-bold tracking-[0.18em] uppercase">
              Or reach us directly
            </p>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-ash hover:text-bone mt-4 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <WhatsappLogo size={17} weight="bold" className="text-ember" />
              {site.whatsappDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-ash hover:text-bone mt-3 block text-sm transition-colors"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-ash hover:text-bone mt-3 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <InstagramLogo size={17} weight="bold" className="text-ember" />
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
