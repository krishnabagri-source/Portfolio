import React from 'react';
import { MapPin, GraduationCap, Cpu, Brain, Award, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const engineeringPillars = [
  {
    icon: Cpu,
    title: 'Software Engineering & Architecture',
    desc: 'Designing clean, maintainable systems with modular boundaries, scalable REST API patterns, and type-safe frontends.',
    tags: ['System Architecture', 'Clean Code', 'API Design'],
  },
  {
    icon: Brain,
    title: 'AI & Intelligent Systems',
    desc: 'Exploring modern machine learning paradigms, vector embeddings, semantic search, and retrieval-augmented generation (RAG).',
    tags: ['Vector DBs', 'LLMs', 'Semantic Search'],
  },
  {
    icon: GraduationCap,
    title: 'Algorithmic Problem Solving',
    desc: 'Deep theoretical and hands-on practice in Data Structures and Algorithms using C++ to cultivate asymptotic optimization intuition.',
    tags: ['DSA in C++', 'Optimization', 'Complexity Analysis'],
  },
];

export function About() {
  return (
    <section id="about" className="section-padding scroll-mt-16" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeader
          id="about-heading"
          eyebrow="Profile & Philosophy"
          title="Engineering Mindset &"
          titleHighlight="Academic Foundation"
          description="A look into my background at MAIT, technical philosophy, and dedication to building reliable software."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Academic Credentials & Executive Card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left">
              <div className="p-6 sm:p-7 rounded-2xl bg-card border border-white/10 shadow-card glass-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-emerald tracking-widest block mb-1">
                      Candidate Profile
                    </span>
                    <h3 className="text-slate-primary font-bold text-xl sm:text-2xl">
                      {personal.name}
                    </h3>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald/10 border border-emerald/25 text-emerald">
                    <Terminal size={18} />
                  </div>
                </div>

                <p className="text-slate-muted text-xs sm:text-sm leading-relaxed mb-6">
                  Undergraduate in Computer Science & Engineering at Maharaja Agrasen Institute of Technology. Driven by first-principles thinking and practical software implementation.
                </p>

                {/* Verified Academic Credentials */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-slate-muted flex items-center gap-2">
                      <GraduationCap size={15} className="text-emerald" />
                      MAIT Delhi (B.Tech CSE)
                    </span>
                    <span className="text-emerald-light font-medium">2025–2029 (Expected)</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-slate-muted flex items-center gap-2">
                      <Award size={15} className="text-emerald" />
                      CBSE Class XII (2025)
                    </span>
                    <span className="text-slate-primary font-medium">83.2%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-slate-muted flex items-center gap-2">
                      <Award size={15} className="text-emerald" />
                      CBSE Class X (2023)
                    </span>
                    <span className="text-slate-primary font-medium">88.2%</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-muted">
                  <MapPin size={13} className="text-emerald flex-shrink-0" />
                  <span>Based in {personal.location}</span>
                </div>
              </div>
            </Reveal>

            {/* Quick Core Strengths Box */}
            <Reveal delay={120} direction="left">
              <div className="p-5 rounded-2xl border border-emerald/20 bg-emerald/[0.03] flex items-start gap-3.5">
                <Sparkles size={18} className="text-emerald flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-medium text-emerald uppercase tracking-wider">
                    Core Technical Pillars
                  </h4>
                  <p className="text-xs text-slate-muted leading-relaxed">
                    Proficient in algorithmic problem solving with C++, backend development with Python/FastAPI, and modern React interfaces.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Engineering Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={80} direction="right">
              <div className="p-6 sm:p-7 rounded-2xl bg-card border border-white/10 shadow-card space-y-4">
                <h3 className="text-slate-primary font-bold text-lg flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
                  Building Software That Scales
                </h3>
                <p
                  style={{ color: '#E2E8F0' }}
                  className="leading-relaxed text-sm sm:text-base"
                >
                  {personal.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {personal.bioPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Deep-dive Focus Cards */}
            <div className="space-y-3.5">
              {engineeringPillars.map(({ icon: Icon, title, desc, tags }, i) => (
                <Reveal key={title} delay={160 + i * 80} direction="right">
                  <div className="group p-5 rounded-2xl bg-card border border-white/10 glass-hover transition-all duration-300 hover:border-emerald/30">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald flex-shrink-0 group-hover:bg-emerald/20 group-hover:border-emerald/40 transition-colors">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-emerald transition-colors">
                          {title}
                        </h4>
                        <p className="text-slate-muted text-xs sm:text-sm leading-relaxed mb-3">
                          {desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-muted border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
