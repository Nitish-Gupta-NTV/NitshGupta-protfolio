import React, { useState } from 'react';
import { ExternalLink, Github, Cpu, Globe, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'FullStack',
    title: 'URL-Shortner ',
    description:
      'An AI tutor that ingests PDFs and answers student questions using RAG (Retrieval-Augmented Generation). Built with LangChain, GPT-4, and a React frontend with real-time streaming.',
    tags: ['LangChain', 'GPT-4', 'FastAPI', 'React', 'Pinecone', 'WebSocket'],
    icon: Cpu,
    color: '#a78bfa',
   // live: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
 
  {
    id: 3,
    category: 'AI/ML',
    title: 'Sentiment Analytics Dashboard',
    description:
      'Real-time sentiment analysis on social media and product reviews using fine-tuned BERT. Interactive dashboard with charts, filters, and CSV export.',
    tags: ['PyTorch', 'BERT', 'FastAPI', 'React', 'Recharts', 'MongoDB'],
    icon: Zap,
    color: '#c8ff00',
   // live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    category: 'Full Stack',
    title: 'Developer protoploio Generator ',
    description:
      'Multi-vendor e-commerce platform with Stripe payments, inventory management, admin dashboard, and AI-powered product recommendations.',
    tags: ['React', 'Spring framework', 'PostgreSql',  'Web-socket'],
    icon: Globe,
    color: '#00ff88',
   // live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  
  
  {
    id: 6,
    category: 'Full Stack',
    title: 'Real-time Chat Application',
    description:
      'Scalable chat app with rooms, file sharing, message reactions, end-to-end encryption, and AI moderation for toxic content filtering.',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'OpenAI', 'Vercel'],
    icon: Zap,
    color: '#c8ff00',
   // live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
   {
    id: 5,
    category: 'AI/ML',
    title: 'Stock Market Trend Anlayis ',
    description:
      'A full-featured project for the stock market trend analysis, . Built with streamlit , Flask ,Skit-learn and MONODB.',
    tags: ['Next.js', 'Flask','Skit-learn', 'MonogoDB'  ],
    icon: Globe,
    color: '#00ff88',
    //live: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
];

const filters = ['All', 'AI/ML', 'Full Stack'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 bg-carbon-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-plasma/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-acid text-sm tracking-widest mb-3">03. PROJECTS</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white">
              Selected <span className="text-acid">Work</span>
            </h2>
            <div className="w-16 h-1 bg-acid mt-4"></div>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-xs tracking-widest px-4 py-2 border clip-corner transition-all duration-200 ${
                  filter === f
                    ? 'bg-acid text-carbon-950 border-acid font-bold'
                    : 'border-carbon-600 text-gray-400 hover:border-acid/50 hover:text-acid'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-carbon-800 border border-carbon-600 hover:border-acid/40 transition-all duration-300 clip-corner relative overflow-hidden flex flex-col"
              >
                {/* Top accent */}
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: project.color }}
                ></div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center border clip-corner"
                      style={{ borderColor: project.color + '50', backgroundColor: project.color + '10' }}
                    >
                      <Icon size={18} style={{ color: project.color }} />
                    </div>
                    <span
                      className="font-mono text-xs tracking-widest px-2 py-1 border clip-corner"
                      style={{ color: project.color, borderColor: project.color + '30' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-acid transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 bg-carbon-700 text-gray-500 border border-carbon-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-acid transition-colors duration-200"
                    >
                      <Github size={14} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-acid transition-colors duration-200"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-bold text-sm tracking-widest border border-acid/50 text-acid px-8 py-3 clip-corner hover:bg-acid/10 transition-colors duration-200"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
/*
{
    id: 5,
    category: 'AI/ML',
    title: 'AI Image Captioning API',
    description:
      'REST API that generates descriptive captions for images using a fine-tuned vision-language model. Supports batch processing and caching.',
    tags: ['Python', 'Hugging Face', 'FastAPI', 'Redis', 'Docker', 'GCP'],
    icon: Cpu,
    color: '#a78bfa',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    category: 'Full Stack',
    title: 'E-Commerce Platform',
    description:
      'Multi-vendor e-commerce platform with Stripe payments, inventory management, admin dashboard, and AI-powered product recommendations.',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'Redux', 'AWS S3'],
    icon: Globe,
    color: '#00ff88',
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },*/ 