import { Search, PenLine, Code2, GraduationCap } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Audit & Analyse',
    description:
      "Nous étudions votre activité, vos besoins réels et vos contraintes terrain avant d'écrire la moindre ligne de code.",
    color: '#0052ff',
  },
  {
    num: '02',
    icon: PenLine,
    title: 'Conception & Design',
    description:
      'Maquettes UI/UX validées ensemble et architecture technique choisie pour durer et évoluer avec votre activité.',
    color: '#8b5cf6',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Développement & Tests',
    description:
      'Code propre, testé et livré en itérations courtes. Vous voyez et validez chaque avancement.',
    color: '#0052ff',
  },
  {
    num: '04',
    icon: GraduationCap,
    title: 'Formation & Suivi',
    description:
      "Vos équipes formées jusqu'à l'autonomie complète. Nous restons disponibles bien après le lancement.",
    color: '#10b981',
  },
];

export default function Process() {
  return (
    /* id="services" corrige le lien #services de la navbar */
    <section id="services" className="py-24 md:py-32 border-t border-card-border">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Notre Méthode
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Comment nous travaillons
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-foreground/60 leading-relaxed">
            Un processus clair et transparent — vous savez toujours où en est votre projet.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">

          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-card-border" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 flex flex-col items-center text-center gap-5"
              >
                {/* Icon bubble */}
                <div className="relative">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-card-border bg-card"
                    style={{ boxShadow: `0 0 0 5px var(--background), 0 0 20px ${step.color}30` }}
                  >
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.5}
                      style={{ color: step.color }}
                    />
                  </div>
                  {/* Step number badge */}
                  <span
                    className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-black text-white"
                    style={{ background: step.color }}
                  >
                    {parseInt(step.num)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
