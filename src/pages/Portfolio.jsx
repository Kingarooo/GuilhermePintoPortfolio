import React from "react";
import ContactSection from "@/components/ContactSection";
import WorkShowcase from "@/components/WorkShowcase";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import { useTranslation } from 'react-i18next'
const Portfolio = () => {
  const { t } = useTranslation()
  return (
    <main>
  <h1 className="sr-only">Guilherme Pinto Portfolio - Software Engineer @ Deel (https://www.deel.com)</h1>
      <Header />
      <section className="py-16 px-6">
        <div className="max-w-5xl flex flex-col mx-auto">
          <h2 className="text-6xl font-bold text-center">{t('hero.title', 'The website of my websites')}</h2>
          <p className="text-lg text-muted-foreground text-center mt-4 mb-12">{t('hero.description', "A selection of my favorite projects, no BS, just great work that's being used.")}</p>
          <WorkShowcase />
        </div>
      </section>
      <HeroSection />
      <ContactSection />
    </main>
  );
};

export default Portfolio;
