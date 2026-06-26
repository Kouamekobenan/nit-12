import type { ReactNode } from 'react';
import {
  ShoppingBag,
  Package,
  Ticket,
  TrendingUp,
  Wifi,
  QrCode,
  ExternalLink,
} from 'lucide-react';

/* ─── Mini preview components ─────────────────────────────────────────── */

function MarketplacePreview() {
  return (
    <div className="rounded-xl border border-card-border bg-background/50 p-4 space-y-3">
      <div className="flex items-center gap-2 text-xs text-foreground/50">
        <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
        12 vendeurs en ligne
      </div>
      <div className="grid grid-cols-2 gap-2">
        {['Électronique', 'Mode', 'Alimentation', 'Maison'].map((cat) => (
          <div
            key={cat}
            className="rounded-lg border border-card-border bg-card px-3 py-2 text-xs font-medium text-foreground/60"
          >
            {cat}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-400">+34% ventes ce mois</span>
        </div>
        <span className="text-[10px] text-foreground/40">Mobile Money ✓</span>
      </div>
    </div>
  );
}

function StockPreview() {
  const items = [
    { label: 'Téléphones', pct: 80, color: 'bg-primary' },
    { label: 'Accessoires', pct: 45, color: 'bg-violet-500' },
    { label: 'Pièces', pct: 18, color: 'bg-amber-400' },
  ];
  return (
    <div className="rounded-xl border border-card-border bg-background/50 p-4 space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="text-foreground/50">Niveaux de stock</span>
        <span className="flex items-center gap-1 font-medium text-emerald-400">
          <Wifi className="h-3 w-3" /> Offline-First
        </span>
      </div>
      {items.map((item) => (
        <div key={item.label} className="space-y-1.5">
          <div className="flex justify-between text-xs text-foreground/60">
            <span>{item.label}</span>
            <span className="font-medium">{item.pct}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-card-border">
            <div
              className={`h-1.5 rounded-full ${item.color} transition-all`}
              style={{ width: `${item.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TicketPreview() {
  return (
    <div className="rounded-xl border border-card-border bg-background/50 p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-foreground">Gala d&apos;Abidjan 2025</p>
          <p className="text-[10px] text-foreground/50 mt-0.5">
            Palais de la Culture · 500 places
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-card">
          <QrCode className="h-4.5 w-4.5 text-primary" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-1">
        {[
          { val: '342', lbl: 'Vendus', style: 'border-card-border bg-card text-foreground' },
          { val: '158', lbl: 'Restants', style: 'border-card-border bg-card text-foreground' },
          { val: '68%', lbl: 'Rempli', style: 'border-primary/20 bg-primary/10 text-primary' },
        ].map((stat) => (
          <div
            key={stat.lbl}
            className={`rounded-lg border ${stat.style} p-2 text-center`}
          >
            <p className="text-sm font-bold">{stat.val}</p>
            <p className="text-[10px] text-foreground/50">{stat.lbl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Product data ─────────────────────────────────────────────────────── */

type Product = {
  icon: React.ElementType;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  preview: ReactNode;
  href: string;
};

const products: Product[] = [
  {
    icon: ShoppingBag,
    name: 'NoBoutik',
    tagline: 'Marketplace & E-Commerce',
    description:
      'Connectez vos vendeurs locaux à leurs clients avec une marketplace moderne. Catalogue produits, paiements Mobile Money, et gestion des commandes en temps réel.',
    gradient: 'from-blue-500 to-primary',
    preview: <MarketplacePreview />,
    href: 'https://noboutik.vercel.app/users/ui/login',
  },
  {
    icon: Package,
    name: 'StockPro',
    tagline: 'Gestion de stock intelligente',
    description:
      'Architecture Offline-First robuste : vos équipes continuent à travailler sans connexion Internet stable. Synchronisation automatique à la reconnexion.',
    gradient: 'from-violet-500 to-purple-600',
    preview: <StockPreview />,
    href: 'https://stockpro-delta.vercel.app/',
  },
  {
    icon: Ticket,
    name: 'TicketPass',
    tagline: 'Billetterie & Événements',
    description:
      "Organisez vos événements et générez des tickets numériques sécurisés. Contrôle d'accès par QR Code, vente en ligne et gestion des capacités en direct.",
    gradient: 'from-emerald-500 to-teal-600',
    preview: <TicketPreview />,
    href: 'https://brassivoire.api.banian-group.cloud',
  },
];

/* ─── Section ──────────────────────────────────────────────────────────── */

export default function Products() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Nos Solutions
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Des logiciels conçus pour{' '}
            <span className="text-foreground/40">le terrain ivoirien</span>
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-foreground/60 leading-relaxed">
            Chaque produit est né d&apos;un besoin concret, pensé pour fonctionner dans les
            conditions réelles du marché africain.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.name} className="bento-card p-6 flex flex-col gap-5">

                {/* Icon + badge */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient}`}
                  >
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                  </div>
                  <span className="rounded-full border border-card-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/50">
                    {product.tagline}
                  </span>
                </div>

                {/* Mini preview */}
                {product.preview}

                {/* Copy */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Link */}
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-150"
                >
                  Tester l&apos;application <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
