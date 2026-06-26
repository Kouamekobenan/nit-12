import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'N12-IT — Ingénierie Logicielle & Solutions',
    short_name: 'N12-IT',
    description: "Solutions logicielles pour PME et commerces en Côte d'Ivoire",
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0f19',
    theme_color: '#0052ff',
    icons: [
      { src: '/images/logo.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/images/logo.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
