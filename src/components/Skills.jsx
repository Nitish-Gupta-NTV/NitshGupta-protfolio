import React, { useState } from 'react';

const categories = [
  {
    label: 'Frontend',
    color: '#00ff88',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux', level: 78 },
    ],
  },
  {
    label: 'Backend',
    color: '#c8ff00',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      //{ name: 'Python / FastAPI', level: 88 },
      { name: 'REST APIs', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      {name:'MySql',level:80}
    ],
  },
  {
    label: 'AI / ML',
    color: '#a78bfa',
    skills: [
     // { name: 'PyTorch / TensorFlow', level: 82 },
     // { name: 'LangChain / LlamaIndex', level: 85 },
      { name: 'Numpy/pandas', level: 85 },
       { name: 'mathplotlib/seabrn', level: 85 },
      { name: 'OpenAI / Gemini APIs', level: 90 },
      { name: 'Scikit-learn', level: 78 },
      { name: 'Hugging Face', level: 80 },
    ],
  },
  {
    label: 'DevOps & Tools',
    color: '#38bdf8',
    skills: [
      { name: 'Docker ', level: 72 },
      { name: '  Vercel', level: 78 },
      { name: 'Git / GitHub Actions', level: 90 },
     // { name: 'Redis / Queues', level: 70 },
      { name: ' Firebase', level: 80 },
    ],
  },
];

const techBadges = [
  'React', 'Next.js', 'Node.js', 'Python',  'TypeScript',
  'MongoDB', 'PostgreSQL', 'Docker',   
  'OpenAI API',   'Tailwind', 'Vercel', 'Git','Postman',
  'Hugging Face', 'TensorFlow',  'Supabase',,
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const active = categories[activeTab];

  return (
    <section id="skills" className="py-28 bg-carbon-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-acid/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-acid text-sm tracking-widest mb-3">02. SKILLS</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            Tech <span className="text-acid">Arsenal</span>
          </h2>
          <div className="w-16 h-1 bg-acid mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Tabbed skill bars */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  className={`font-mono text-xs tracking-widest px-4 py-2 border transition-all duration-200 clip-corner ${
                    activeTab === i
                      ? 'bg-acid text-carbon-950 border-acid font-bold'
                      : 'border-carbon-600 text-gray-400 hover:border-acid/50 hover:text-acid'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-5">
              {active.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-gray-300 text-sm font-medium">{skill.name}</span>
                    <span className="font-mono text-xs" style={{ color: active.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-carbon-700 rounded-none overflow-hidden">
                    <div
                      className="h-full transition-all duration-700 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: active.color,
                        boxShadow: `0 0 8px ${active.color}60`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tech badge cloud */}
          <div>
            <p className="font-mono text-gray-500 text-xs tracking-widest mb-6">// ALL TECHNOLOGIES</p>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-2 border border-carbon-600 text-gray-400 hover:border-acid hover:text-acid transition-all duration-200 cursor-default clip-corner hover:bg-acid/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div className="mt-10 bg-carbon-800 border border-carbon-600 p-5 clip-corner font-mono text-xs text-gray-500 leading-relaxed">
              <div className="text-acid mb-1">{'// My approach'}</div>
              <div><span className="text-purple-400">const</span> <span className="text-sky-400">buildSolution</span> = <span className="text-purple-400">(problem)</span> {'=>'} {'{'}</div>
              <div className="pl-4 text-gray-400">
                <div><span className="text-volt">analyze</span>(problem);</div>
                <div><span className="text-volt">design</span>(architecture);</div>
                <div><span className="text-volt">implement</span>({'{ ai: true, scale: true }'})</div>
                <div><span className="text-volt">ship</span>(solution);</div>
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
