import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    icon: Briefcase,
    period: '2026 – Present',
    title: 'Frontend   Developer ',
    company: 'Shirix',
    location: 'Remote ',
    color: '#00ff88',
    points: [
      'Built the Audit Managnment System for the Companies  40%.',
      'Developed a real-time analytics dashboard (React, Node.js, WebSocket) used by 500+ users.',
      ,
    ],
  },
 
  {
    type: 'education',
    icon: GraduationCap,
    period: '2023 – 2027',
    title: "B.Tech – Computer Science (AI/ML)",
    company: 'IMS Engineering Collge',
    location: 'India',
    color: '#a78bfa',
    points: [
      'Current  . CGPA: 7/10.',
      'Thesis: "Contextual Question Answering using Retrieval-Augmented Generation".',
      'Led AI club; organized 3 hackathons and 10+ workshops.',
    ],
  },
  {
    type: 'award',
    icon: Award,
    period: '2023',
    title: 'Hackathon Winner – TECH Spradh (College tech event)',
    company: 'Tech Event ',
    location: 'on campus',
    color: '#fb923c',
    points: [
      'Won 1st place among 500+ teams for an AI-powered grievance management system.',
      'Built the full product in 36 hours using React, FastAPI, and sentence-transformers.',
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="py-28 bg-carbon-900 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-volt/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-acid text-sm tracking-widest mb-3">04. EXPERIENCE</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            My <span className="text-acid">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-acid mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-acid via-carbon-600 to-transparent"></div>

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isOpen = expanded === i;

              return (
                <div key={i} className="relative pl-16 md:pl-24">
                  {/* Icon node */}
                  <div
                    className="absolute left-0 md:left-3 w-10 h-10 border-2 flex items-center justify-center bg-carbon-900 clip-corner z-10"
                    style={{ borderColor: item.color }}
                  >
                    <Icon size={16} style={{ color: item.color }} />
                  </div>

                  {/* Card */}
                  <div
                    className="bg-carbon-800 border border-carbon-600 hover:border-opacity-60 clip-corner transition-all duration-300 cursor-pointer"
                    style={{ '--hover-border': item.color }}
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    <div className="p-5 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                          <p className="font-body text-sm" style={{ color: item.color }}>
                            {item.company} · {item.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-gray-500 border border-carbon-600 px-3 py-1 clip-corner whitespace-nowrap">
                            {item.period}
                          </span>
                          <span
                            className="font-mono text-xs transition-transform duration-200"
                            style={{ color: item.color, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                          >
                            ▶
                          </span>
                        </div>
                      </div>

                      {/* Expandable details */}
                      <div
                        className={`overflow-hidden transition-all duration-400 ${
                          isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <ul className="space-y-2">
                          {item.points.map((pt, j) => (
                            <li key={j} className="flex gap-3 font-body text-sm text-gray-400 leading-relaxed">
                              <span style={{ color: item.color }} className="mt-1 shrink-0">▸</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Bottom accent bar */}
                    <div
                      className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
/*
 {
    type: 'work',
    icon: Briefcase,
    period: '2023 – 2024',
    title: 'Software Developer Intern',
    company: 'Previous Company',
    location: 'Noida, India',
    color: '#c8ff00',
    points: [
      'Developed React components and Node.js APIs for a B2B SaaS platform serving 200+ clients.',
      'Implemented automated ML pipeline for data classification, improving accuracy by 18%.',
      'Collaborated in Agile sprints, contributing to 3 major feature releases.',
    ],
  },*/ 