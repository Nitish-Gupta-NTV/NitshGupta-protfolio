import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'React Developer',
  'Python',
  
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center grid-bg noise-bg overflow-hidden"
    >
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-acid/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-plasma/10 blur-3xl pointer-events-none"></div>

      {/* Animated corner brackets */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t-2 border-l-2 border-acid/30 animate-pulse2"></div>
      <div className="absolute top-24 right-8 w-12 h-12 border-t-2 border-r-2 border-acid/30 animate-pulse2 delay-300"></div>
      <div className="absolute bottom-12 left-8 w-12 h-12 border-b-2 border-l-2 border-acid/30 animate-pulse2 delay-600"></div>
      <div className="absolute bottom-12 right-8 w-12 h-12 border-b-2 border-r-2 border-acid/30 animate-pulse2 delay-300"></div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 border border-acid/30 bg-acid/5 px-4 py-2 rounded-none clip-corner">
              <span className="w-2 h-2 rounded-full bg-acid animate-pulse2"></span>
              <span className="font-mono text-acid text-xs tracking-widest">AVAILABLE FOR WORK</span>
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <p className="font-mono text-gray-500 text-sm tracking-widest">// Hello World, I'm</p>
              <h1 className="font-display font-black text-5xl md:text-7xl leading-none tracking-tight">
                <span className="text-white">Nitish</span>
                <br />
                <span className="text-acid glow-text-acid">Gupta</span>
                <span className="text-white"> Here</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="font-display text-2xl md:text-3xl text-gray-300 font-medium">
              <span className="text-gray-500">{'> '}</span>
              <span>{displayed}</span>
              <span className="border-r-2 border-acid animate-pulse ml-0.5">&nbsp;</span>
            </div>

            {/* Bio */}
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-lg">
              I build fullstack , scalable web applications by merging modern full-stack engineering
              with AI/ML. From ML-powered apps to real-time APIs — I craft systems that think and perform.
            </p>

           

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="clip-corner bg-acid text-carbon-950 font-display font-bold px-8 py-3 hover:bg-volt transition-colors duration-200 glow-acid"
              >
                View Projects →
              </button>
                          <div className="flex gap-4">
  <a
    href="https://drive.google.com/file/d/1PnD_W8_zjluPn7XNsKVeJXnMa0FXcmqW/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  className="clip-corner border border-acid/50 text-acid font-display font-bold px-8 py-3 hover:bg-acid/10 transition-colors duration-200 flex items-center gap-2"
  >
    View Resume
  </a>

              <a
    href="/resume.pdf"
    download="Nitish_Gupta_Resume.pdf"
 className="clip-corner border border-acid/50 text-acid font-display font-bold px-8 py-3 hover:bg-acid/10 transition-colors duration-200 flex items-center gap-2"
  >
    Download Resume
  </a>
 </div>
              
              
            </div>

            {/* Socials */}
            <div className="flex gap-5 pt-2">
              {[
                { icon: Github, href: 'https://github.com/nitish-gupta-ntv', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/nitish-gupta-066240273', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:nitishgupta7604@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-carbon-600 flex items-center justify-center text-gray-400 hover:text-acid hover:border-acid transition-all duration-200 hover:glow-acid"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar card */}
      <div className="flex justify-center items-center relative mt-10 lg:mt-0">
            <div className="relative animate-float">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-acid/20 animate-spin-slow scale-110"></div>

              {/* Main card */}
              <div className="relative w-72 h-72 clip-corner bg-carbon-800 border border-carbon-600 overflow-hidden">
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-acid/5 to-transparent animate-scan-line pointer-events-none z-10"></div>

                {/* Placeholder avatar */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-carbon-800 to-carbon-700">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-acid/40 shadow-xl shadow-acid/20">
  <img
    src="/personal.jpg"
    alt="Nitish Gupta"
    className="w-full h-full object-cover object-center hover:scale-605 transition-all duration-500"
  />
</div>
                  <p className="font-mono text-acid text-xs tracking-widest">FULL STACK + AI/ML</p>
                  <p className="font-mono text-gray-500 text-xs mt-1 tracking-wider">Java DEVELOPER</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-carbon-800 border border-acid/40 px-3 py-1.5 clip-corner">
                <span className="font-mono text-acid text-xs">React • Spring framework</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-carbon-800 border border-plasma/40 px-3 py-1.5 clip-corner">
                <span className="font-mono text-purple-400 text-xs">AI/ML</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-20 gap-2 animate-bounce">
          <span className="font-mono text-gray-600 text-xs tracking-widest">SCROLL</span>
          <ArrowDown size={16} className="text-acid" />
        </div>
      </div>
    </section>
  );
}
/*
 
            <div className="flex gap-8">
            {[['2+', 'Years Exp.'], ['5+', 'Projects'], ['10+', 'AI Models']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display font-black text-3xl text-acid">{val}</div>
                  <div className="font-mono text-xs text-gray-500 tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
*/
/*
<a
                href="/resume.pdf"
                download
                className="clip-corner border border-acid/50 text-acid font-display font-bold px-8 py-3 hover:bg-acid/10 transition-colors duration-200 flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>*/ 
