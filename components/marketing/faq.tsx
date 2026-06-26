'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Est-ce que vos solutions fonctionnent sans connexion internet ?",
    a: "Oui. StockPro est construit sur une architecture Offline-First : toutes les opérations (ventes, stocks, entrées) fonctionnent normalement sans internet. Les données se synchronisent automatiquement dès que la connexion est rétablie. C'est l'un de nos avantages clés pour le marché ivoirien.",
  },
  {
    q: "Combien de temps faut-il pour livrer un projet ?",
    a: "Cela dépend de la complexité. Un site vitrine professionnel est livré en 2 à 4 semaines. Une application métier complète prend généralement 6 à 12 semaines. Nous travaillons en itérations : vous voyez et validez chaque étape avant la suivante.",
  },
  {
    q: "Vous formez nos équipes à utiliser les outils ?",
    a: "Absolument. La formation est incluse dans chaque projet. Nous formons vos équipes jusqu'à l'autonomie complète — de la prise en main basique jusqu'à l'administration de l'outil. La documentation est fournie en français et un support continu est disponible après le lancement.",
  },
  {
    q: "Comment se passe la tarification ?",
    a: "Chaque projet est tarifé sur mesure après un audit gratuit de vos besoins. Nous proposons des formules adaptées aux budgets des PME ivoiriennes, avec possibilité de paiement échelonné. Contactez-nous pour un devis sans engagement — réponse sous 24h.",
  },
  {
    q: "Mes données et celles de mes clients sont-elles sécurisées ?",
    a: "Oui. Toutes nos applications respectent les standards de sécurité de l'industrie : chiffrement des données, authentification sécurisée, sauvegardes automatiques et hébergement sur infrastructure Cloud fiable. Vos données ne sont jamais revendues ni partagées.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 border-t border-card-border">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Vos questions,{' '}
            <span className="text-foreground/40">nos réponses</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bento-card overflow-hidden"
                style={isOpen ? { borderColor: 'rgba(0,82,255,0.45)' } : undefined}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold leading-snug text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="mt-0.5 h-5 w-5 shrink-0 text-foreground/40 transition-transform duration-200"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <div className="mb-4 h-px bg-card-border" />
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
