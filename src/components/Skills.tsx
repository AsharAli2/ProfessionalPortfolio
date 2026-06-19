import React from "react";

const skillCategories = [
  { name: "Languages", skills: ["JavaScript", "TypeScript", "Python", "C++"] },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
  },
  {
    name: "Tools & Systems",
    skills: ["Git", "Socket.io", "MQTT", "Distributed Systems"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-7">
          <span className="font-mono text-[11px] tracking-[0.14em] text-paprika">04</span>
          <span className="eyebrow">Skills</span>
        </div>

        <h2 className="font-serif font-normal text-ink tracking-[-0.022em] leading-[1.0] text-3xl sm:text-4xl lg:text-[3.25rem] max-w-[920px] mb-12">
          Tools I reach for{" "}
          <em className="italic text-paprika">every day.</em>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-ink">
          {skillCategories.map((category, i) => (
            <div
              key={category.name}
              className={
                "py-8 sm:px-6 first:pl-0 flex flex-col gap-4 border-b border-rule lg:border-b-0 " +
                (i < skillCategories.length - 1 ? "lg:border-r border-rule" : "")
              }
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paprika">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl tracking-[-0.01em] text-ink">
                  {category.name}
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[15px] text-ash flex items-center gap-2.5"
                  >
                    <span className="h-px w-3 bg-paprika/70" />
                    {skill}
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
