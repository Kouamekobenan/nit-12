import { Layers, Users, Calendar, Star } from 'lucide-react';

const stats = [
  {
    icon: Layers,
    value: '3',
    label: 'Logiciels en production',
    sub: 'NoBoutik · StockPro · TicketPass',
    color: '#0052ff',
  },
  {
    icon: Users,
    value: '+10',
    label: 'Clients accompagnés',
    sub: 'PME & commerces en Côte d\'Ivoire',
    color: '#8b5cf6',
  },
  {
    icon: Calendar,
    value: '2 ans',
    label: "D'expérience terrain",
    sub: 'Projets livrés en production',
    color: '#10b981',
  },
  {
    icon: Star,
    value: '100%',
    label: 'Taux de satisfaction',
    sub: 'Basé sur les retours clients',
    color: '#f59e0b',
  },
];

export default function Stats() {
  return (
    <section className="border-y border-card-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, sub, color }, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              {/* Vertical divider (desktop) */}
              {i !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-card-border" />
              )}

              {/* Icon */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: `${color}18` }}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} style={{ color }} />
              </div>

              {/* Number */}
              <div>
                <p
                  className="text-4xl font-black tracking-tight md:text-5xl"
                  style={{ color }}
                >
                  {value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-foreground">
                  {label}
                </p>
                <p className="mt-0.5 text-xs text-foreground/40">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
