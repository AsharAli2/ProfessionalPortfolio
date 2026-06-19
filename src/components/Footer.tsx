import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-paprika/[0.07] py-9">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-[-0.01em] text-ink max-w-[320px] leading-snug">
              Building <em className="italic text-paprika">products</em> worth
              shipping.
            </p>
            <p className="font-mono text-[11px] tracking-[0.08em] text-ink/55 mt-5">
              © {currentYear} ASHAR ALI KHAN
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
              Elsewhere
            </span>
            <div className="flex gap-6">
              <a
                href="https://github.com/AsharAli2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink hover:text-paprika transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashar-ali-khan-971633251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink hover:text-paprika transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:kkhan.ashar11@gmail.com"
                className="text-sm text-ink hover:text-paprika transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
