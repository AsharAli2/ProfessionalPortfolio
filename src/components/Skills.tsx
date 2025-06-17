import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
    },
    {
      name: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "Material-UI",
        "Tailwind CSS",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "GitHub", "Socket.io", "MQTT", "Clerk"],
    },
  ];

  return (
    <section className="" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gold-text-gradient">My Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="gold-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gold-400">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
