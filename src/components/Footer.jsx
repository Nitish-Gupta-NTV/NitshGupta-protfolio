import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-carbon-900 border-t border-carbon-700 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display font-bold text-xl">
            <span className="text-acid">&lt;</span>
            <span className="text-white">Dev</span>
            <span className="text-acid">/&gt;</span>
          </div>

          {/* Text */}
          <p className="font-mono text-xs text-gray-600 tracking-widest text-center">
            BUILT WITH REACT + TAILWIND · © {new Date().getFullYear()} Nitish Gupta
          </p>

          {/* Social icons + scroll top */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/Nitishgupta-NTV' },
              { icon: Linkedin, href: 'https://linkedin.com/nitish-gupta-066240273' },
              { icon: Mail, href: 'mailto:nitishgupta7604@email.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-acid transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
            <button
              onClick={scrollTop}
              className="w-8 h-8 border border-carbon-600 hover:border-acid flex items-center justify-center text-gray-500 hover:text-acid transition-all duration-200 clip-corner ml-2"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
