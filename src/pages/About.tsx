import React from "react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
        <Experience />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default About;
