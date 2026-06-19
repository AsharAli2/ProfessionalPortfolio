import React from "react";

const socials = [
  {
    label: "Email",
    value: "kkhan.ashar11@gmail.com",
    href: "mailto:kkhan.ashar11@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/AsharAli2",
    href: "https://github.com/AsharAli2",
  },
  {
    label: "LinkedIn",
    value: "in/ashar-ali-khan",
    href: "https://www.linkedin.com/in/ashar-ali-khan-971633251/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-rule bg-paprika/[0.05]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-7">
          <span className="font-mono text-[11px] tracking-[0.14em] text-paprika">05</span>
          <span className="eyebrow">Contact</span>
        </div>

        <h2 className="font-serif font-normal text-ink tracking-[-0.022em] leading-[1.02] text-4xl sm:text-5xl lg:text-[4rem] max-w-[920px] mb-5">
          Let&apos;s build something{" "}
          <em className="italic text-paprika">worth shipping.</em>
        </h2>

        <p className="font-sans text-lg text-ash max-w-[560px] mb-12">
          Open to startup opportunities and interesting problems. The fastest way
          to reach me is email.
        </p>

        <div className="border-t border-ink max-w-[720px]">
          {socials.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5 border-b border-rule transition-colors"
            >
              <span className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paprika w-16 shrink-0">
                  {label}
                </span>
                <span className="font-serif text-xl sm:text-2xl text-ink tracking-[-0.01em] group-hover:text-paprika transition-colors">
                  {value}
                </span>
              </span>
              <span className="text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-paprika">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
