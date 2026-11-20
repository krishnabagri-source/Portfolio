import React from 'react';
import { MapPin, GraduationCap, Cpu, Brain, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const interests = [
  {
    icon: Cpu,
    label: 'Software Engineering',
    desc: 'Designing modular, scalable applications, building robust backend APIs, and applying clean architecture principles.',
  },
  {
    icon: Brain,
    label: 'AI & Machine Learning',
    desc: 'Exploring deep learning fundamentals, vector search, LLMs, and integrating intelligent agents into real products.',
  },
  {
    icon: GraduationCap,
    label: 'Data Structures & Algorithms',
    desc: 'Solving challenging algorithmic problems in C++ to cultivate rigorous computational and optimization intuition.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding scroll-mt-16" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeader
          id="about-heading"
          eyebrow="About Me"
          title="Background &"
          titleHighlight="Core Philosophy"
          description="A glimpse into my academic foundation, technical passions, and drive to create impactful software."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card & Education highlights */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left">
              <div className="p-6 rounded-2xl bg-card border border-white/5 shadow-card glass-hover relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full blur-2xl pointer-events-none" />

                {/* Avatar and basic info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald/30 shadow-glow-emerald flex-shrink-0 bg-base">
                    <img
                      src="/krishna-photo.jpg"
                      alt="Krishna Bagri"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-slate-primary font-bold text-base sm:text-xl truncate">
                      {personal.name}
                    </h3>
                    <p className="text-emerald-light font-mono text-xs mb-1 truncate">
                      B.Tech CSE @ MAIT
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-muted">
                      <MapPin size={13} className="text-emerald flex-shrink-0" />
                      <span className="truncate">{personal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5">
                    <span className="text-slate-muted flex items-center gap-2">
                      <GraduationCap size={14} className="text-emerald" />
                      MAIT Delhi (CSE)
                    </span>
                    <span className="text-emerald font-medium">2023–2027</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5">
                    <span className="text-slate-muted flex items-center gap-2">
                      <Award size={14} className="text-emerald" />
                      CBSE Class XII (PCM)
                    </span>
                    <span className="text-slate-primary font-medium">83.4%</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5">
                    <span className="text-slate-muted flex items-center gap-2">
                      <Award size={14} className="text-emerald" />
                      CBSE Class X
                    </span>
                    <span className="text-slate-primary font-medium">88.2%</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Quick status pill */}
            <Reveal delay={150} direction="left">
              <div className="p-4 rounded-xl border border-emerald/15 bg-emerald/5 flex items-center gap-3">
                <Sparkles size={18} className="text-emerald flex-shrink-0" />
                <p className="text-xs text-slate-muted leading-relaxed">
                  Focusing on high-performance C++, core CS fundamentals, and generative AI systems.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Bio description & Area of Interests */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={100} direction="right">
              <div className="p-6 sm:p-7 rounded-2xl bg-card border border-white/5 shadow-card space-y-4">
                <h3 className="text-slate-primary font-semibold text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald" />
                  Engineering Mindset
                </h3>
                <p className="text-slate-muted leading-relaxed text-sm sm:text-base">
                  {personal.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {personal.bioPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-slate-muted">
                      <CheckCircle2 size={14} className="text-emerald flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Interests Cards */}
            <div className="space-y-3">
              {interests.map(({ icon: Icon, label, desc }, i) => (
                <Reveal key={label} delay={180 + i * 80} direction="right">
                  <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card border border-white/5 glass-hover transition-all duration-300">
                    <div className="p-2.5 rounded-lg bg-emerald/10 border border-emerald/15 flex-shrink-0 group-hover:bg-emerald/20 group-hover:border-emerald/30 transition-colors">
                      <Icon size={18} className="text-emerald" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-slate-primary font-semibold text-sm mb-1">{label}</h4>
                      <p className="text-slate-muted text-xs sm:text-sm leading-relaxed">{desc}</p>
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
