import type { Metadata, Viewport } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/content";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Online Physique Coaching in India`,
    template: `%s | ${site.name}`,
  },
  description:
    "Online physique coaching from Aditya Janghel, international kickboxing and wushu athlete with 40+ golds. Monthly training blocks, weekly form review, live sessions.",
  applicationName: site.name,
  authors: [{ name: "Pratik Verma" }, { name: "Aditya Janghel" }],
  creator: site.name,
  keywords: [
    "online fitness coaching India",
    "physique transformation coach",
    "kickboxing strength training",
    "wushu athlete coach",
    "aesthetic physique programme",
    "subscription fitness community",
    "personal training online India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Online Physique Coaching in India`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Online Physique Coaching in India`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      sameAs: [site.instagram],
      email: site.email,
      founder: [
        { "@type": "Person", name: "Pratik Verma" },
        { "@id": `${site.url}/#aadi` },
      ],
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#aadi`,
      name: "Aditya Janghel",
      alternateName: "Aadi",
      jobTitle: "Head coach",
      worksFor: { "@id": `${site.url}/#organization` },
      description:
        "International kickboxing and wushu athlete with 40+ national and state gold medals, and a former Sports Authority of India Elite athlete.",
      knowsAbout: [
        "Kickboxing",
        "Wushu",
        "Strength and conditioning",
        "Physique training",
      ],
    },
    {
      "@type": "Service",
      "@id": `${site.url}/#membership`,
      name: "APX Training membership",
      serviceType: "Online fitness coaching",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: "IN",
      description:
        "Subscription coaching membership with structured training blocks, weekly video form review and nutrition guidance.",
      offers: [
        {
          "@type": "Offer",
          name: "Community",
          price: "999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          name: "Coached",
          price: "2499",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          name: "One to one",
          price: "7999",
          priceCurrency: "INR",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="bg-ink text-bone flex min-h-full flex-col">
        <a
          href="#main"
          className="bg-ember text-ink sr-only px-4 py-2 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
