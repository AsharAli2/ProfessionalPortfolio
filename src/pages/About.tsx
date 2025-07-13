import React from "react";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gold-text-gradient">About Ashar Ali Khan</span>
            </h1>

            <div className="gold-card p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold text-gold-400 mb-4">
                Profile
              </h2>
              <p className="text-gray-300 mb-6">
                Passionate Software Engineer specializing in building custom
                software solutions. I help businesses and individuals bring
                their ideas to life through scalable web and mobile
                applications. Expert in modern technologies with a focus on
                creating efficient, user-friendly, and robust software systems.
                Strong problem-solving abilities with a passion for continuous
                learning and innovation.
              </p>

              <h2 className="text-2xl font-semibold text-gold-400 mb-4">
                Education
              </h2>
              <div className="mb-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">
                      B.E. Electrical Engineering - NED University of Science
                      and Technology
                    </h3>
                    <span className="text-gold-500">2021-2025</span>
                  </div>
                  <p className="text-sm text-gray-400">CGPA: 3.635/4.0</p>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">
                      Intermediate (Pre Engineering) - Adamjee Govt. Science
                      College- Karachi
                    </h3>
                    <span className="text-gold-500">2019-2021</span>
                  </div>
                  <p className="text-sm text-gray-400">Percentage: 94%</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">
                      Matriculation (Computer Science) - CAA Model School and
                      College
                    </h3>
                    <span className="text-gold-500">2017-2019</span>
                  </div>
                  <p className="text-sm text-gray-400">Percentage: 90%</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gold-400 mb-4">
                Experience
              </h2>
              <div className="mb-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">
                      Software Engineering Intern - Asani.io
                    </h3>
                    <span className="text-gold-500">
                      March 2024 - July 2024
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Developed a mobile application for power and water
                      management, temperature monitoring, and motor control
                      using React Native and Firebase.
                    </li>
                    <li>
                      Implemented a real-time dashboard displaying power, water,
                      temperature, and humidity metrics.
                    </li>
                    <li>
                      Implemented a smart control feature, allowing users to
                      remotely turn on/off the power and off the app for
                      improved efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
