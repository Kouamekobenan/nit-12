import Image from 'next/image';
import {
  ArrowRight,
  Phone,
  Code2,
  Layers,
  GraduationCap,
  Globe,
  Mail,
  MessageCircle,
  Share2,
} from 'lucide-react';

const services = [
  'Sites Vitrines & Applications Web',
  'Applications Métiers Sur-Mesure',
  'Marketplace & E-Commerce',
  'Gestion de Stock (Offline-First)',
  'Formation & Accompagnement',
];

const socialLinks = [
  { icon: Globe,         href: '#', label: 'Site Web'  },
  { icon: Mail,          href: '#', label: 'Email'     },
  { icon: MessageCircle, href: '#', label: 'WhatsApp'  },
  { icon: Share2,        href: '#', label: 'Réseaux'   },
];

const stripItems = [
  { icon: Code2,          title: 'Architectures Robustes', sub: 'Code propre, testé & scalable'  },
  { icon: Layers,         title: '100% Sur-Mesure',        sub: 'Adapté à vos besoins métiers'   },
  { icon: GraduationCap,  title: 'Formation Incluse',      sub: 'Vos équipes autonomes'           },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">

      {/* ─── 3-column grid ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_24%_36%] items-stretch min-h-screen">

        {/* ── COL 1 · Developer image ─────────────────────────────── */}
        <div className="relative overflow-hidden min-h-[56vw] lg:min-h-0">
          <Image
            src="/images/img-banniere.jpg"
            alt="Développeur N12-IT au travail"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Blue brand tint */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(135deg, rgba(0,82,255,0.18) 0%, transparent 55%)' }}
          />
          {/* Fade right edge into next column */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to right, transparent 65%, var(--background) 100%)' }}
          />
          {/* Fade bottom on mobile */}
          <div
            className="absolute inset-0 z-10 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--background) 100%)' }}
          />
          {/* Blue orb — top left */}
          <div
            className="absolute top-28 left-6 z-20 h-20 w-20 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #60a5fa, #0052ff)',
              boxShadow: '0 0 50px 12px rgba(0,82,255,0.45)',
            }}
          />
          {/* Blue orb — bottom right */}
          <div
            className="absolute bottom-28 right-10 z-20 h-14 w-14 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #93c5fd, #0052ff)',
              boxShadow: '0 0 35px 8px rgba(0,82,255,0.35)',
              opacity: 0.8,
            }}
          />

          {/* Callout bubble */}
          <div className="absolute bottom-36 right-0 z-20 mr-4 lg:mr-0">
            <div className="relative rounded-xl bg-card border border-card-border px-4 py-3 shadow-2xl">
              <p className="text-xs font-medium text-foreground/60">Vous avez une idée</p>
              <p className="text-sm font-black tracking-tight text-primary">OU UN PROJET ?</p>
              {/* Arrow pointing right */}
              <span
                className="absolute -right-2 top-1/2 -translate-y-1/2 h-3 w-3 rotate-45 bg-card border-r border-t border-card-border"
              />
            </div>
          </div>
        </div>

        {/* ── COL 2 · Services ────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-8 py-8 lg:py-24 lg:border-x border-card-border/40">

          {/* Badge */}
          <span className="mb-5 self-start rounded bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
            Ce que nous faisons
          </span>

          {/* Services card */}
          <div className="overflow-hidden rounded-xl border-2 border-card-border">
            <div className="border-b border-card-border bg-card px-4 py-3">
              <h3 className="text-sm font-bold text-foreground">Nos Services</h3>
            </div>
            <div className="space-y-3 bg-background px-4 py-4">
              {services.map((service, i) => (
                <div key={service} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-xs font-black text-primary">{i + 1}</span>
                  <span className="text-xs leading-snug text-foreground/70">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COL 3 · Headline + CTAs ─────────────────────────────── */}
        <div className="flex flex-col justify-between px-8 lg:px-10 py-8 lg:py-20">

          {/* Social links — top right */}
          <div className="flex flex-col items-end gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40">
              Suivez-nous
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-card-border bg-card text-foreground/50 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Main headline */}
          <div className="my-auto flex flex-col gap-0.5 pt-10">
            <p className="text-lg font-light tracking-wide text-foreground/50">
              Nous Sommes
            </p>
            <p className="text-2xl font-semibold text-foreground">
              Votre Expert en
            </p>
            <h1
              className="text-6xl font-black leading-none tracking-tight lg:text-7xl"
              style={{ color: 'var(--primary)' }}
            >
              INGÉNIERIE
            </h1>
            <h1 className="text-5xl font-black leading-none tracking-tight text-foreground lg:text-6xl">
              NUMÉRIQUE
            </h1>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4">
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
              Discuter d&apos;un projet
            </a>

            <a
              href="tel:+2250506832678"
              className="flex flex-wrap items-center gap-2 group"
            >
              <div className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 group-hover:bg-primary transition-colors">
                <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                <span className="text-sm font-bold text-background group-hover:text-white transition-colors">Nous contacter :</span>
              </div>
              <div className="rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white group-hover:bg-primary-hover transition-colors">
                05 06 83 26 78
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* ─── Bottom blue strip ──────────────────────────────────────── */}
      <div className="bg-primary text-white">
        <div className="mx-auto max-w-7xl divide-y divide-white/20 px-6 sm:divide-x sm:divide-y-0">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {stripItems.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-4 px-6 py-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="text-xs text-white/70">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
