import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ── Remplace par ton domaine définitif quand il sera prêt ─────── */
const SITE_URL = "https://n12-it.ci";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "N12-IT — Ingénierie Logicielle & Solutions Informatiques",
    template: "%s | N12-IT",
  },
  description:
    "Conception de logiciels sur-mesure, applications métiers et solutions numériques pour les PME et commerces de Côte d'Ivoire. NoBoutik, StockPro, TicketPass.",
  keywords: [
    "ingénierie logicielle",
    "Côte d'Ivoire",
    "développement web",
    "application mobile",
    "e-commerce",
    "gestion de stock",
    "Abidjan",
    "PME",
    "solutions informatiques",
    "NoBoutik",
    "StockPro",
    "TicketPass",
  ],
  authors: [{ name: "N12-IT", url: SITE_URL }],
  creator: "N12-IT",
  publisher: "N12-IT",

  /* ── Open Graph ────────────────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: SITE_URL,
    siteName: "N12-IT",
    title: "N12-IT — Ingénierie Logicielle & Solutions Informatiques",
    description:
      "Logiciels sur-mesure, applications métiers et solutions numériques pour les PME et commerces de Côte d'Ivoire.",
    images: [
      {
        url: "/images/img-banniere.jpg",
        width: 1200,
        height: 630,
        alt: "N12-IT — Ingénierie Logicielle & Solutions Informatiques",
      },
    ],
  },

  /* ── Twitter / X Card ──────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "N12-IT — Ingénierie Logicielle & Solutions Informatiques",
    description:
      "Logiciels sur-mesure pour les PME et commerces de Côte d'Ivoire.",
    images: ["/images/img-banniere.jpg"],
  },

  /* ── Favicon ───────────────────────────────────────────────────── */
  icons: {
    icon:       "/images/logo.png",
    apple:      "/images/logo.png",
    shortcut:   "/images/logo.png",
  },

  /* ── Robots ────────────────────────────────────────────────────── */
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:              true,
      follow:             true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
};

/* ── JSON-LD Schema.org — LocalBusiness ────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "N12-IT",
  description:
    "Ingénierie logicielle et solutions informatiques pour les PME et commerces de Côte d'Ivoire.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: "+2250506832678",
  email: "nit70191@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressCountry: "CI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "5.3600",
    longitude: "-4.0083",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solutions Logicielles",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "NoBoutik",
          description: "Marketplace et e-commerce pour vendeurs locaux",
          url: "https://noboutik.vercel.app",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "StockPro",
          description: "Gestion de stock intelligente offline-first",
          url: "https://stockpro-delta.vercel.app",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "TicketPass",
          description: "Gestion d'événements et billetterie sécurisée",
          url: "https://brassivoire.api.banian-group.cloud",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
