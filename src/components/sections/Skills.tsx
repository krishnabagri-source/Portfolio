import React, { useState } from 'react';
import { Code2, Layers, Wrench, BrainCircuit, Check, Terminal } from 'lucide-react';
import { skillCategories } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const categoryIcons = {
  Languages: Code2,
  'Frameworks & Libraries': Layers,
  'Tools & Platforms': Wrench,
  Concepts: BrainCircuit,
};

// Distinct styling for key verified skills
const skillBadgeDetails: Record<
  string,
  { label: string; highlight?: boolean; note?: string }
> = {
  'C++': { label: 'C++', highlight: true, note: 'Primary DSA language' },
  Python: { label: 'Python', highlight: true, note: 'AI/ML & Automation' },
  React: { label: 'React', highlight: true, note: 'Frontend UI' },
  TypeScript: { label: 'TypeScript', highlight: true, note: 'Type-safe web' },
  FastAPI: { label: 'FastAPI', highlight: true, note: 'High-speed APIs' },
  'Data Structures & Algorithms': { label: 'Data Structures & Algorithms', highlight: true, note: 'Core focus' },
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categoriesToDisplay =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === activeTab);

  return (
    <section id="skills" className="section-padding scroll-mt-16" aria-labelledby="skills-heading">
      <div className="container-custom">
        <SectionHeader
          id="skills-heading"
          eyebrow="Technical Stack"
          title="Skills &"
          titleHighlight="Competencies"
          description="Verified toolset grounded in core computer science principles — categorized honestly with no arbitrary percentage bars."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {['All', ...skillCategories.map((c) => c.name)].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-violet text-white shadow-glow-violet'
                  : 'bg-card border border-white/5 text-slate-muted hover:text-slate-primary hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesToDisplay.map((category, catIdx) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons] || Terminal;

            return (
              <Reveal key={category.name} delay={catIdx * 70}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-card border border-white/5 shadow-card glass-hover transition-all duration-300 hover:border-violet/20 flex flex-col justify-between">
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2 rounded-xl bg-violet/10 border border-violet/20 text-violet">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-slate-primary font-bold text-base">
                          {category.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-muted">
                          {category.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2.5" role="list">
                      {category.skills.map((skill) => {
                        const meta = skillBadgeDetails[skill];

                        return (
                          <div
                            key={skill}
                            role="listitem"
                            className={`group relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-default ${
                              meta?.highlight
                                ? 'bg-violet/10 border border-violet/30 text-violet-light shadow-sm hover:border-violet/60 hover:bg-violet/15'
                                : 'bg-white/5 border border-white/5 text-slate-primary/90 hover:border-white/20 hover:bg-white/10'
                            }`}
                          >
                            <Check
                              size={12}
                              className={meta?.highlight ? 'text-cyan' : 'text-slate-muted'}
                            />
                            <span>{skill}</span>

                            {meta?.note && (
                              <span className="hidden sm:inline-block text-[10px] text-slate-muted font-normal ml-1 border-l border-white/10 pl-1.5 opacity-70 group-hover:opacity-100">
                                {meta.note}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category Accent Line */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-muted">
                    <span>Clean Code & Modularity</span>
                    <span className="text-cyan">Production-Ready</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Learning Focus Callout */}
        <Reveal delay={300}>
          <div className="mt-10 p-5 rounded-2xl border border-cyan/20 bg-gradient-to-r from-cyan/5 via-violet/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-ping flex-shrink-0" />
              <div>
                <p className="text-xs font-mono text-cyan uppercase tracking-wider">
                  Active Continuous Learning
                </p>
                <p className="text-sm text-slate-primary">
                  Currently advancing deep learning architectures, transformer models, and scalable system design.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-violet-light bg-violet/10 px-3 py-1.5 rounded-lg border border-violet/20 flex-shrink-0">
              Target: SWE 2026/2027
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
