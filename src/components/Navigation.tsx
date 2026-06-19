import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

const LINKEDIN = "https://www.linkedin.com/in/ashar-ali-khan-971633251/";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-[22px] leading-none tracking-tight text-ink">
            Ashar Ali Khan
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="gold-button">
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-ink focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-rule bg-paper">
          <nav className="max-w-[1240px] mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
