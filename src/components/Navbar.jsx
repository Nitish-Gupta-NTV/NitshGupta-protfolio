import React, { useState, useEffect } from 'react';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-carbon-900/90 backdrop-blur-xl border-b border-carbon-600/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-display font-bold text-xl tracking-tight">
          <span className="text-acid">&lt;</span>
          <span className="text-white">Dev</span>
          <span className="text-acid">/&gt;</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`font-body text-sm tracking-widest uppercase transition-all duration-200 hover:text-acid relative group ${
                active === link ? 'text-acid' : 'text-gray-400'
              }`}
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-acid transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('Contact'); }}
            className="clip-corner bg-acid text-carbon-950 font-display font-semibold text-sm px-5 py-2 hover:bg-volt transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-acid transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-acid transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-acid transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-carbon-900/95 backdrop-blur-xl border-t border-carbon-600/30 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left font-body text-sm tracking-widest uppercase text-gray-400 hover:text-acid transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
