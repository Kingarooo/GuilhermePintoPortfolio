import React from "react";
import ContactSection from "@/components/ContactSection";
import WorkShowcase from "@/components/WorkShowcase";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
const Portfolio = () => {
  return (
    <main>
      <div className="fixed top-0 left-0 z-50 p-6 md:p-8">
              <ThemeToggle />
            </div>
      <h1 className="sr-only">Guilherme Pinto Portfolio Web Developer</h1>
      <Header />
      <section className="py-16 px-6">
        <div className="max-w-4xl flex flex-col mx-auto">
          <h2 className="text-6xl font-bold text-center">The website of my websites</h2>
          <p className="text-lg text-muted-foreground text-center mt-4 mb-12">
            A selection of my favorite projects, no BS, just great work that's being used.
          </p>
          <WorkShowcase />
        </div>
      </section>
      <HeroSection />
      <ContactSection />
    </main>
  );
};

export default Portfolio;
