import React from "react";

const principles = [
  {
    num: "i",
    key: "Build to learn",
    body: "The best way to understand a system is to build it, ship it, and watch how it behaves under real load.",
  },
  {
    num: "ii",
    key: "Reliability first",
    body: "Backend and distributed systems should be predictable, observable, and resilient before they are clever.",
  },
  {
    num: "iii",
    key: "Products over features",
    body: "Engineering is a means to an end — solving a real problem for real people is what actually matters.",
  },
];

const Manifesto = () => {
  return (
    <section className="bg-ink text-white py-24 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-7">
          <span className="font-mono text-[11px] tracking-[0.14em] text-paprika">03</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
            Approach
          </span>
        </div>

        <h2 className="font-serif font-normal tracking-[-0.022em] leading-[1.05] text-3xl sm:text-4xl lg:text-[3.25rem] max-w-[920px]">
          I care about software that is <em className="italic text-paprika">simple,</em>{" "}
          reliable, and worth shipping.
        </h2>

        {/* Principles */}
        <div className="grid md:grid-cols-3 mt-14 border-t border-white/15">
          {principles.map((p, i) => (
            <div
              key={p.num}
              className={
                "py-8 md:py-10 md:px-8 flex flex-col gap-3.5 " +
                (i === 0 ? "md:pl-0" : "") +
                (i < principles.length - 1 ? " md:border-r border-white/15" : "")
              }
            >
              <div className="flex items-baseline gap-3.5">
                <span className="font-mono text-[11px] tracking-[0.14em] text-paprika">
                  {p.num}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
                  {p.key}
                </span>
              </div>
              <p className="text-[15px] leading-[1.55] text-white/85">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-14 border border-white/15 rounded p-8 sm:p-12 bg-white/[0.03]">
          <p className="font-serif italic text-2xl sm:text-3xl lg:text-[2.4rem] leading-[1.18] tracking-[-0.01em]">
            “Let&apos;s connect if you want to chat about{" "}
            <em className="text-paprika">startups, AI,</em> or building cool
            products.”
          </p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-white/55 mt-5">
            — ASHAR ALI KHAN
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
