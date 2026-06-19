import React from "react";

interface Role {
  company: string;
  title: string;
  period: string;
  location?: string;
  current?: boolean;
  points?: string[];
}

const experience: Role[] = [
  {
    company: "Geeks of Kolachi",
    title: "Associate Software Engineer",
    period: "Dec 2025 — Present",
    location: "Karachi, PK",
    current: true,
  },
  {
    company: "Finqalab",
    title: "Associate Software Engineer",
    period: "Aug 2025 — Dec 2025",
    points: [
      "Engineered an internal ticketing system for the trading platform, giving users a centralized interface to submit and track support requests.",
      "Built a secure admin feature to unblock user accounts, reducing manual intervention and improving resolution time.",
      "Integrated custom support tools directly into the core trading workflow for seamless collaboration between technical and support teams.",
    ],
  },
  {
    company: "Asani.io",
    title: "Software Engineer",
    period: "Mar 2024 — Aug 2024",
    location: "Karachi, PK",
    points: [
      "Built a React Native + Firebase mobile app for power & water management, temperature monitoring, and motor control as part of Asani's IoT automation suite.",
      "Integrated real-time MQTT and Firebase data into an interactive dashboard surfacing power, water, temperature, and humidity metrics.",
    ],
  },
  {
    company: "NCAI — NEDUET, Smart City Lab",
    title: "Machine Learning Intern",
    period: "Mar 2023 — Sep 2023",
    location: "Karachi, PK",
    points: [
      "Worked on self-driving car systems — hardware, the autonomous software stack, vehicle modeling & control, and safety frameworks.",
    ],
  },
  {
    company: "Interns Pakistan",
    title: "Front-end Developer Intern",
    period: "Dec 2022 — Jan 2023",
    location: "Karachi, PK",
    points: [
      "Built responsive interfaces with WordPress, jQuery, PHP, HTML, CSS, Bootstrap, and JavaScript.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-7">
          <span className="font-mono text-[11px] tracking-[0.14em] text-paprika">02</span>
          <span className="eyebrow">Experience</span>
        </div>

        <h2 className="font-serif font-normal text-ink tracking-[-0.022em] leading-[1.0] text-3xl sm:text-4xl lg:text-[3.25rem] max-w-[920px] mb-12">
          Where I&apos;ve <em className="italic text-paprika">built things.</em>
        </h2>

        {/* Timeline */}
        <div className="border-t border-ink">
          {experience.map((role) => (
            <div
              key={role.company + role.period}
              className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-7 border-b border-rule"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={
                    "h-2 w-2 rounded-full shrink-0 " +
                    (role.current ? "bg-paprika" : "bg-ink/30")
                  }
                />
                <span className="font-mono text-[11px] tracking-[0.06em] text-ink/60">
                  {role.period}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-serif text-2xl tracking-[-0.015em] text-ink">
                    {role.title}
                  </h3>
                  {role.current && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paprika">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[15px] font-medium text-ash">
                  {role.company}
                  {role.location && (
                    <span className="font-normal text-ink/40"> · {role.location}</span>
                  )}
                </p>
                {role.points && (
                  <ul className="mt-3 space-y-2 text-[15px] leading-[1.55] text-ash max-w-[640px]">
                    {role.points.map((point, i) => (
                      <li key={i} className="relative pl-5">
                        <span className="absolute left-0 top-2.5 h-px w-3 bg-paprika" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 pt-10">
          <span className="eyebrow">Education</span>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 max-w-[640px]">
            <div>
              <h3 className="font-serif text-xl tracking-[-0.01em] text-ink">
                NED University of Engineering &amp; Technology
              </h3>
              <p className="text-[15px] text-ash">
                B.E. Electrical &amp; Computer Engineering
              </p>
            </div>
            <span className="font-mono text-[11px] tracking-[0.06em] text-ink/60">
              2021 — 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
