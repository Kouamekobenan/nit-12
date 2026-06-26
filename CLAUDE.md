@AGENTS.md
Voici l'architecture technique stricte de mon projet Next.js 15+ (App Router) utilisant Tailwind CSS v4. Prends-la en compte pour formater et découper ton code afin que je puisse l'intégrer facilement.

La structure globale attendue pour mon projet est la suivante :

src/
├── app/
│   ├── layout.tsx         # Layout principal (contient html, body, providers)
│   ├── page.tsx           # Page d'accueil principale (Landing Page)
│   └── globals.css        # Déjà configuré avec mes variables CSS variables v4
├── components/
│   ├── ui/                # Composants atomiques de base (Boutons, Cards)
│   └── marketing/         # Sections de la page d'accueil
│       ├── navbar.tsx     # Navigation avec effet Glassmorphism
│       ├── hero.tsx       # Section d'accroche principale
│       ├── products.tsx   # Grille de nos solutions (NoBoutik, StockPro, Billetterie)
│       ├── features.tsx   # Section réassurance et engagement ingénieur
│       └── footer.tsx     # Pied de page pro
└── lib/
    └── utils.ts           # Fonction cn() pour fusionner les classes Tailwind

Consignes pour la génération du code :

1. Utilise les variables sémantiques de ma configuration Tailwind v4 déjà en place :
   - Fond : `bg-background` / Texte : `text-foreground`
   - Cartes : `bg-card` avec bordures `border-card-border`
   - Actions (Bleu Pur) : `bg-primary` / `text-primary` / `hover:bg-primary-hover`
   - Classes utilitaires prêtes : `.glass-effect` pour la navbar et `.bento-card` pour les cartes de produits.

2. Découpe ton rendu en me fournissant DISTINCTEMENT le code pour chaque fichier clé de la Landing Page, notamment :
   - src/components/marketing/navbar.tsx
   - src/components/marketing/hero.tsx
   - src/components/marketing/products.tsx
   - src/components/marketing/features.tsx
   - src/components/marketing/footer.tsx
   - src/app/page.tsx (qui assemble le tout)

3. Utilise exclusivement 'lucide-react' pour les icônes. Tout le code doit être en TypeScript propre, typé et prêt pour la production.

Génère maintenant les différents fichiers de cette structure en commençant par les sections marketing.