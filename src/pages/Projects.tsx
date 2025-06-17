import React from "react";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-32">
        <div className="container mx-auto px-4 ">
          <h1 className="text-5xl font-bold">
            <span className="gold-text-gradient">My Projects</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
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
