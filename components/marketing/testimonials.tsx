import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Koffi Assemien',
    role: 'Gérant',
    company: 'Électronique Plus, Adjamé',
    initials: 'KA',
    color: '#0052ff',
    product: 'NoBoutik',
    text: "Depuis que nous utilisons NoBoutik, nos ventes en ligne ont vraiment décollé. Les clients commandent directement depuis leur téléphone. L'équipe N12-IT nous a tout expliqué étape par étape, sans jargon technique.",
  },
  {
    name: 'Aminata Bamba',
    role: 'Directrice',
    company: 'Supérette du Plateau, Abidjan',
    initials: 'AB',
    color: '#8b5cf6',
    product: 'StockPro',
    text: "StockPro a révolutionné notre gestion de stock. Même pendant les coupures d'internet, tout fonctionne. On ne perd plus aucune vente à cause d'un manque de visibilité sur nos produits.",
  },
  {
    name: 'Seydou Konaté',
    role: "Organisateur d'événements",
    company: 'Events CI, Cocody',
    initials: 'SK',
    color: '#10b981',
    product: 'TicketPass',
    text: "La billetterie numérique a complètement changé nos événements. Plus de files d'attente, les entrées sont scannées en quelques secondes. N12-IT a livré exactement ce qu'ils avaient promis, dans les délais.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-card-border">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Ce que disent{' '}
            <span className="text-foreground/40">nos clients</span>
          </h2>
          <p className="mt-5 mx-auto max-w-lg text-foreground/60 leading-relaxed">
            Des retours réels de chefs d&apos;entreprise ivoiriens qui utilisent nos solutions au quotidien.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="bento-card flex flex-col gap-5 p-7">

              {/* Stars + product badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: `${t.color}18`, color: t.color }}
                >
                  {t.product}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm italic leading-relaxed text-foreground/70">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-card-border pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/50">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
