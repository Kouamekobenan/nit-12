import { Shield, Layers, GraduationCap } from 'lucide-react';

const features = [
  {
    num: '01',
    icon: Shield,
    title: 'Performance & Sécurité',
    description:
      "Audits de code stricts, tests automatisés et architectures Cloud scalables. Vos données et celles de vos clients sont protégées par les standards de l'industrie.",
    metric: '99.9%',
    metricLabel: 'disponibilité garantie',
    points: [
      'Audit de code & revue sécurité',
      'Infrastructure Cloud scalable',
      'Pipeline CI/CD automatisé',
    ],
    accent: '#0052ff',
    accentLight: '#60a5fa',
    glow: 'rgba(0,82,255,0.22)',
    iconColor: '#0052ff',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Solutions Sur-Mesure',
    description:
      'Sites vitrines, applications métiers, marketplaces — chaque solution est architecturée pour vos processus et conçue pour évoluer avec votre activité.',
    metric: '100%',
    metricLabel: 'adapté à vos besoins',
    points: [
      'Analyse approfondie de vos besoins',
      'Design UI/UX professionnel',
      'Livraison itérative et agile',
    ],
    accent: '#8b5cf6',
    accentLight: '#c4b5fd',
    glow: 'rgba(139,92,246,0.22)',
    iconColor: '#8b5cf6',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'Accompagnement & Formation',
    description:
      "Nous levons toutes les barrières techniques. De l'apprentissage de l'ordinateur au déploiement de vos outils, vos équipes sont formées et autonomes.",
    metric: '0',
    metricLabel: 'barrière technique',
    points: [
      'Formation individuelle ou en groupe',
      'Documentation complète en français',
      'Support continu post-lancement',
    ],
    accent: '#10b981',
    accentLight: '#6ee7b7',
    glow: 'rgba(16,185,129,0.22)',
    iconColor: '#10b981',
  },
];

export default function Features() {
  return (
    <section id="engagement" className="py-24 md:py-32 border-t border-card-border">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Notre Engagement
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            La rigueur de l&apos;ingénierie,{' '}
            <br className="hidden md:block" />
            <span className="text-foreground/40">au service de votre réussite</span>
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-foreground/60 leading-relaxed">
            Nous ne livrons pas seulement du code — nous construisons des partenariats
            durables fondés sur la confiance et la transparence.
          </p>
        </div>

        {/* ── Cards ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              /* Gradient-border wrapper */
              <div
                key={feature.title}
                className="group rounded-2xl p-px transition-all duration-300 hover:scale-[1.015]"
                style={{
                  background: `linear-gradient(135deg, ${feature.accent}, ${feature.accentLight}40, var(--card-border))`,
                  boxShadow: `0 0 0 0 ${feature.glow}`,
                }}
              >
                {/* Inner card */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card px-7 py-8">

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${feature.accent}, ${feature.accentLight})`,
                    }}
                  />

                  {/* Faded background number */}
                  <span
                    className="pointer-events-none absolute -top-5 right-3 select-none text-[9rem] font-black leading-none"
                    style={{ color: feature.accent, opacity: 0.06 }}
                  >
                    {feature.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      background: `${feature.accent}18`,
                      boxShadow: `0 0 24px ${feature.glow}`,
                    }}
                  >
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.5}
                      style={{ color: feature.iconColor }}
                    />
                  </div>

                  {/* Title + description */}
                  <div className="relative z-10 flex flex-col gap-2 mb-5">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Metric chip */}
                  <div
                    className="relative z-10 mb-6 inline-flex w-fit items-baseline gap-2 rounded-xl px-4 py-2.5"
                    style={{
                      background: `${feature.accent}12`,
                      border: `1px solid ${feature.accent}30`,
                    }}
                  >
                    <span
                      className="text-2xl font-black tracking-tight"
                      style={{ color: feature.accent }}
                    >
                      {feature.metric}
                    </span>
                    <span className="text-xs font-medium text-foreground/50">
                      {feature.metricLabel}
                    </span>
                  </div>

                  {/* Separator */}
                  <div className="relative z-10 mb-5 h-px bg-card-border" />

                  {/* Points */}
                  <ul className="relative z-10 mt-auto flex flex-col gap-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-foreground/70">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: feature.accent }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
