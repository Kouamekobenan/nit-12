import Image from 'next/image';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const WHATSAPP =
  'https://wa.me/2250506832678?text=Bonjour%20N12-IT%2C%20je%20souhaite%20discuter%20d%27un%20projet.';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">

      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,82,255,0.12), transparent)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,41,59,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.3) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Logo */}
      <a href="/" className="mb-10 flex items-center gap-2.5">
        <Image
          src="/images/logo.png"
          alt="N12-IT logo"
          width={44}
          height={44}
          className="rounded-lg"
        />
        <span className="text-xl font-bold tracking-tight text-foreground">
          N12<span className="text-primary">-IT</span>
        </span>
      </a>

      {/* 404 number */}
      <p
        className="select-none text-[10rem] font-black leading-none tracking-tighter md:text-[14rem]"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0052ff 0%, #60a5fa 50%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </p>

      {/* Message */}
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-foreground/60">
        Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil
        ou contactez-nous directement.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition-colors"
          style={{ boxShadow: '0 8px 24px -6px rgba(0,82,255,0.4)' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-[#25D366] hover:text-[#25D366] transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Nous contacter
        </a>
      </div>
    </main>
  );
}
