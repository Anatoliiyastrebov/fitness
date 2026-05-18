import Link from "next/link";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-2xl font-bold">
              {SITE.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-muted text-sm leading-relaxed">
              {SITE.tagline} in {SITE.city}. Individuelles Training für nachhaltige
              Ergebnisse.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-4">Rechtliches</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/impressum" className="hover:text-accent transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-accent transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm hover:text-accent transition-colors"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.</p>
          <p className="max-w-md">
            Dies ist ein Design- und Entwicklungsbeispiel für mein Portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}
