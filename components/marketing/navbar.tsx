'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Solutions',  href: '#solutions'  },
  { label: 'Services',   href: '#services'   },
  { label: 'Engagement', href: '#engagement' },
];

const SECTION_IDS = ['solutions', 'services', 'engagement'];

const WHATSAPP =
  'https://wa.me/2250506832678?text=Bonjour%20N12-IT%2C%20je%20souhaite%20discuter%20d%27un%20projet.';

export default function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');

  /* ── Effet navbar au scroll ────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Détection de la section visible ──────────────────────────── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-80px 0px -45% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* ── Thème sombre / clair ──────────────────────────────────────── */
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark',  isDark);
    document.documentElement.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  function toggleTheme() { setIsDark((prev) => !prev); }

  return (
    <header
      className="glass-effect fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={scrolled ? { boxShadow: '0 4px 24px rgba(0,0,0,0.12)', backdropFilter: 'blur(20px)' } : undefined}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="N12-IT logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            N12<span className="text-primary">-IT</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative pb-0.5 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-primary'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-card text-foreground/60 hover:text-foreground hover:border-primary/50 transition-colors duration-150"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150"
          >
            <MessageCircle className="h-4 w-4" />
            05 06 83 26 78
          </a>
        </div>

        {/* Mobile: theme toggle + burger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Mode clair' : 'Mode sombre'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-card text-foreground/60 hover:text-foreground transition-colors"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="p-1 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-card-border bg-card px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            05 06 83 26 78
          </a>
        </div>
      )}
    </header>
  );
}
