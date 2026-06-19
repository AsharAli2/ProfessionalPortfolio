import React from "react";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="text-neutral-600 mt-4 max-w-2xl">
            Explore my portfolio of projects ranging from web applications to
            mobile apps. Each project demonstrates different skills and
            technologies from my stack.
          </p>
        </div>
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
