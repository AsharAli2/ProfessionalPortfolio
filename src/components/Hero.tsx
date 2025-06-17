import React from "react";
import { Link } from "react-router-dom";
import CloudinaryImage from "./CloudinaryImage";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16 pb-[20px]">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gold-text-gradient">Software Engineer</span>
          </h1>

          <p className="text-xl mb-8 text-gray-300 text-justify">
            Passionate Software Engineer specializing in building custom
            software solutions. I help businesses and individuals bring their
            ideas to life through scalable web and mobile applications. Expert
            in modern technologies with a focus on creating efficient,
            user-friendly, and robust software systems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link to="/projects" className="gold-button">
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-gold-500 text-gold-500 font-semibold px-4 py-2 rounded-md hover:bg-gold-500/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-black gold-border p-2 shimmer">
            <div className="w-full h-full rounded-full bg-black overflow-hidden">
              <CloudinaryImage
                imagePath="Profile-picure"
                alt="Ashar Ali Khan - Software Engineer"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="absolute -bottom-4 -right-0  bg-black gold-border px-4 py-2 rounded-lg">
            <span className="gold-text-gradient font-semibold">
              Currently available for work
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gold-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
