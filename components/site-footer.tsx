import Link from "next/link";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-bone/10 border-t">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display text-bone text-4xl">{site.name}</p>
            <p className="text-ash mt-4 max-w-[34ch] text-sm leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ash hover:text-bone text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-bone inline-flex items-center gap-2 text-sm font-semibold"
            >
              <InstagramLogo size={18} weight="bold" className="text-ember" />
              {site.instagramHandle}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-bone mt-4 inline-flex items-center gap-2 text-sm font-semibold"
            >
              <WhatsappLogo size={18} weight="bold" className="text-ember" />
              {site.whatsappDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-ash hover:text-bone mt-4 block text-sm transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>

        <p className="text-ash/70 border-bone/10 mt-12 border-t pt-6 text-xs">
          {new Date().getFullYear()} {site.name}. Coaching by {site.founders[1]}.
        </p>
      </div>
    </footer>
  );
}
