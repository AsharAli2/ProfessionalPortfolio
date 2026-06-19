import React from "react";

const chips = [
  { k: "Now", v: <>Geeks of <em className="italic text-paprika">Kolachi</em></> },
  { k: "Focus", v: <>Backend &amp; <em className="italic text-paprika">distributed</em> systems</> },
  { k: "Based in", v: <>Karachi, <em className="italic text-paprika">Pakistan</em></> },
  { k: "Open to", v: <>Startup <em className="italic text-paprika">opportunities</em></> },
];

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Eyebrow row */}
        <div className="flex items-center gap-4 mb-9">
          <span className="h-2 w-2 rounded-full bg-paprika" />
          <span className="eyebrow">Software Engineer · Karachi, PK</span>
        </div>

        {/* Display headline */}
        <h1 className="font-serif font-normal text-ink tracking-[-0.028em] leading-[0.98] text-[2rem] sm:text-4xl lg:text-5xl xl:text-[3.75rem] max-w-[860px] mb-9">
          Building reliable <em className="italic text-paprika">backend</em> &amp;
          distributed systems for <em className="italic text-paprika">products</em> that scale.
        </h1>

        {/* Sub row with hairline */}
        <div className="border-t border-rule pt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="font-sans text-lg sm:text-xl leading-relaxed text-ink max-w-2xl">
            I&apos;m <strong className="font-bold">Ashar Ali Khan</strong> — a software
            engineer passionate about building products, solving problems, and
            exploring startup ideas across backend architecture, automation, and AI.
          </p>

          <div className="flex flex-col items-start gap-3 shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="gold-button">
                Get in touch
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ashar-ali-khan-971633251/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-rule px-[18px] py-[10px] text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                View LinkedIn ↗
              </a>
            </div>
            <span className="font-mono text-[11px] tracking-[0.08em] text-ink/55">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* Overlay chips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-14">
          {chips.map((chip, i) => (
            <div key={i} className="border border-rule rounded px-4 py-3.5 flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55">
                {chip.k}
              </span>
              <span className="font-serif text-lg leading-tight tracking-[-0.01em]">
                {chip.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
