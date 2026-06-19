import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-7">
          <span className="font-mono text-[11px] tracking-[0.14em] text-paprika">01</span>
          <span className="eyebrow">About</span>
        </div>

        <h2 className="font-serif font-normal text-ink tracking-[-0.022em] leading-[1.0] text-3xl sm:text-4xl lg:text-[3.25rem] max-w-[920px] mb-8">
          I love understanding how complex systems work{" "}
          <em className="italic text-paprika">under the hood.</em>
        </h2>

        <div className="max-w-[640px] space-y-5 text-[17px] leading-[1.6] text-ash">
          <p>
            I&apos;m a software engineer passionate about building products,
            solving problems, and exploring startup ideas. I enjoy creating
            software that makes people&apos;s lives easier — my interests span
            backend architecture, distributed systems, automation, and modern AI
            applications.
          </p>
          <p>
            Whether it&apos;s building a new product from scratch or scaling an
            existing workflow, I believe the best way to learn is by building,
            shipping, and continuously improving.
          </p>
          <p>
            Currently I&apos;m focused on growing as an engineer while looking for
            the right startup opportunity or problem worth solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
