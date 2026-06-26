import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks: Record<string, { label: string; href: string; external?: boolean }[]> = {
  Solutions: [
    { label: 'NoBoutik',  href: 'https://noboutik.vercel.app/users/ui/login', external: true },
    { label: 'StockPro',  href: 'https://stockpro-delta.vercel.app/',          external: true },
    { label: 'TicketPass', href: 'https://brassivoire.api.banian-group.cloud', external: true },
  ],
  Services: [
    { label: 'Site Vitrine',       href: '#engagement' },
    { label: 'Application Métier', href: '#engagement' },
    { label: 'Audit & Conseil',    href: '#contact'    },
  ],
  Entreprise: [
    { label: 'Notre Vision', href: '#engagement' },
    { label: 'Formation',    href: '#engagement' },
    { label: 'Contact',      href: '#contact'    },
  ],
};

const WHATSAPP =
  'https://wa.me/2250506832678?text=Bonjour%20N12-IT%2C%20je%20souhaite%20discuter%20d%27un%20projet.';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-card-border">

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <div className="border-b border-card-border">
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Prêt à transformer votre business ?
            </h3>
            <p className="mt-2 text-foreground/60 max-w-md">
              Un audit gratuit pour identifier vos besoins réels. Réponse sous 24h.
              Sans engagement.
            </p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors duration-150"
            style={{ boxShadow: '0 8px 32px -8px rgba(0,82,255,0.4)' }}
          >
            Contacter notre équipe <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ── Main Footer ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="N12-IT logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                N12<span className="text-primary">-IT</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Ingénierie logicielle et solutions informatiques pour les PME et
              commerces de Côte d&apos;Ivoire.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+2250506832678"
                className="flex items-center gap-2 text-xs text-foreground/50 hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                +225 05 06 83 26 78
              </a>
              <a
                href="mailto:nit70191@gmail.com"
                className="flex items-center gap-2 text-xs text-foreground/50 hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                nit70191@gmail.com
              </a>
              <span className="flex items-center gap-2 text-xs text-foreground/50">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Abidjan, Côte d&apos;Ivoire
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-card-border pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} N12-IT. Tous droits réservés.
          </p>
          <p className="text-xs text-foreground/40">
            Conçu avec rigueur à Abidjan, Côte d&apos;Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
}
