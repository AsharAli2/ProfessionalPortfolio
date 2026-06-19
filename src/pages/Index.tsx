import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Manifesto from "@/components/Manifesto";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <Experience />
        <Manifesto />
        <Skills />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
