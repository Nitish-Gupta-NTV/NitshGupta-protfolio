import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message too short';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // Simulate API call — replace with EmailJS or your backend
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const inputClass = (field) =>
    `w-full bg-carbon-800 border ${
      errors[field] ? 'border-red-500' : 'border-carbon-600 focus:border-acid'
    } text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-600 clip-corner`;

  return (
    <section id="contact" className="py-28 bg-carbon-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-acid/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-plasma/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-acid text-sm tracking-widest mb-3">05. CONTACT</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            Let's <span className="text-acid">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-acid mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left: Info */}
          <div className="space-y-10">
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              I'm actively looking for exciting opportunities in Full Stack development and AI/ML.
              Whether you have a project idea, a role to fill, or just want to talk tech —
              my inbox is always open.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'nitishgupta7604@gmail.com', href: 'mailto:your.email@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'India (Open to Remote)', href: null },
                { icon: Linkedin, label: 'LinkedIn', value: 'LinkedinProfile', href: 'https://linkedin.com/in/nitish-gupta-06620273' },
                { icon: Github, label: 'GitHub', value: 'Github Profile', href: 'https://github.com/Nitish-Gupta-NTV' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-carbon-600 group-hover:border-acid flex items-center justify-center clip-corner transition-all duration-200 shrink-0">
                    <Icon size={16} className="text-gray-500 group-hover:text-acid transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 tracking-widest">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-gray-300 hover:text-acid transition-colors duration-200 text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-body text-gray-300 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability tag */}
            <div className="inline-flex items-center gap-3 border border-acid/30 bg-acid/5 px-5 py-3 clip-corner">
              <span className="w-2 h-2 rounded-full bg-acid animate-pulse2"></span>
              <span className="font-mono text-acid text-xs tracking-widest">
                AVAILABLE FOR FREELANCE & FULL-TIME
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-5 border border-acid/30 bg-acid/5 clip-corner p-12 text-center">
                <CheckCircle size={48} className="text-acid" />
                <h3 className="font-display font-bold text-2xl text-white">Message Sent!</h3>
                <p className="font-body text-gray-400">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="font-mono text-xs text-acid border border-acid/40 px-6 py-2 clip-corner hover:bg-acid/10 transition-colors duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="font-mono text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="font-mono text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass('subject')}
                  />
                  {errors.subject && <p className="font-mono text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className={inputClass('message') + ' resize-none'}
                  />
                  {errors.message && <p className="font-mono text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full clip-corner bg-acid text-carbon-950 font-display font-bold py-4 flex items-center justify-center gap-2 hover:bg-volt transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed glow-acid"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-carbon-950 border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
