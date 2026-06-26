import Navbar from '@/components/marketing/navbar';
import BackToTop from '@/components/ui/back-to-top';
import Hero from '@/components/marketing/hero';
import Stats from '@/components/marketing/stats';
import Products from '@/components/marketing/products';
import Process from '@/components/marketing/process';
import Features from '@/components/marketing/features';
import Testimonials from '@/components/marketing/testimonials';
import FAQ from '@/components/marketing/faq';
import Footer from '@/components/marketing/footer';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero visible immédiatement — pas d'animation au chargement */}
        <Hero />

        {/* Chiffres clés — juste après le Hero pour asseoir la crédibilité */}
        <AnimateOnScroll delay={0}>
          <Stats />
        </AnimateOnScroll>

        {/* Nos solutions */}
        <AnimateOnScroll delay={0}>
          <Products />
        </AnimateOnScroll>

        {/* Comment nous travaillons (ancre #services) */}
        <AnimateOnScroll delay={0}>
          <Process />
        </AnimateOnScroll>

        {/* Section réassurance / engagement */}
        <AnimateOnScroll delay={0}>
          <Features />
        </AnimateOnScroll>

        {/* Témoignages clients */}
        <AnimateOnScroll delay={0}>
          <Testimonials />
        </AnimateOnScroll>

        {/* FAQ */}
        <AnimateOnScroll delay={0}>
          <FAQ />
        </AnimateOnScroll>
      </main>

      <AnimateOnScroll delay={0}>
        <Footer />
      </AnimateOnScroll>

      <BackToTop />
    </>
  );
}
