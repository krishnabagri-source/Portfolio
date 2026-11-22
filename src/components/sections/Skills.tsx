import React, { useState } from 'react';
import {
  Code2,
  Layers,
  Wrench,
  BrainCircuit,
  Database,
  FileCode2,
  Zap,
  Palette,
  Binary,
  Table,
  GitBranch,
  Github,
  Terminal,
  Send,
  Network,
  Box,
  Globe2,
  Brain,
  CheckCircle2,
  Sparkles,
  Search,
  Sliders,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillCategories } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

// Icon mapping for specific technologies
const skillIconMap: Record<string, LucideIcon> = {
  C: Code2,
  'C++': Code2,
  Python: FileCode2,
  'Data Structures & Algorithms (DSA)': Network,
  'Object-Oriented Programming (OOP)': Box,
  'Numerical Methods': Binary,
  'Computational Logic': BrainCircuit,
  Arrays: Table,
  Strings: FileCode2,
  'Linked Lists': GitBranch,
  Stacks: Layers,
  Queues: Layers,
  Hashing: Database,
  Sorting: Sliders,
  Searching: Search,
  Recursion: Zap,
  Git: GitBranch,
  GitHub: Github,
  'Visual Studio Code': Code2,
  'Machine Learning': Brain,
  'Artificial Intelligence': Sparkles,
  'Software Development': Terminal,
  'AI-Assisted Development': BrainCircuit,
};

const categoryIcons: Record<string, LucideIcon> = {
  'Programming Languages': Code2,
  'Core Computer Science': BrainCircuit,
  'DSA Topics': Network,
  'Developer Tools': Wrench,
  'Interests & Exploration': Brain,
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
          eyebrow="Technical Arsenal"
          title="Skills &"
          titleHighlight="Technologies"
          description="A categorized directory of my verified technical proficiencies, grounded in computer science fundamentals without arbitrary rating bars."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', ...skillCategories.map((c) => c.name)].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-emerald text-black font-semibold shadow-glow-emerald'
                  : 'bg-card border border-white/5 text-slate-muted hover:text-slate-primary hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {categoriesToDisplay.map((category, catIdx) => {
            const HeaderIcon = categoryIcons[category.name] || Terminal;

            return (
              <Reveal key={category.name} delay={catIdx * 70}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-card border border-white/10 shadow-card glass-hover transition-all duration-300 hover:border-emerald/30 flex flex-col justify-between">
                  <div>
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald">
                          <HeaderIcon size={18} />
                        </div>
                        <div>
                          <h3 className="text-slate-primary font-bold text-base sm:text-lg">
                            {category.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-muted">
                            {category.skills.length} verified competencies
                          </span>
                        </div>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                    </div>

                    {/* Skill Cards with Icons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5" role="list">
                      {category.skills.map((skill) => {
                        const Icon = skillIconMap[skill] || CheckCircle2;
                        const isPrimary = ['C++', 'Python', 'React', 'TypeScript', 'FastAPI', 'Data Structures & Algorithms'].includes(skill);

                        return (
                          <div
                            key={skill}
                            role="listitem"
                            className={`group flex items-center gap-2.5 p-3 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-default ${
                              isPrimary
                                ? 'bg-emerald/[0.06] border border-emerald/25 text-slate-primary hover:border-emerald/50 hover:bg-emerald/[0.12]'
                                : 'bg-white/[0.03] border border-white/5 text-slate-muted hover:border-white/20 hover:text-slate-primary hover:bg-white/[0.06]'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg ${isPrimary ? 'bg-emerald/10 text-emerald' : 'bg-white/5 text-slate-muted group-hover:text-emerald'}`}>
                              <Icon size={13} />
                            </div>
                            <span className="truncate">{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category Footer Note */}
                  <div className="mt-7 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-muted">
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={11} className="text-emerald" /> Tested in Codebases
                    </span>
                    <span className="text-emerald-light">Production Standards</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Growth & Roadmap Banner */}
        <Reveal delay={240}>
          <div className="mt-12 p-6 rounded-2xl border border-emerald/20 bg-gradient-to-r from-emerald/[0.05] via-emerald/[0.02] to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-ping flex-shrink-0" />
              <div>
                <p className="text-xs font-mono text-emerald uppercase tracking-wider font-semibold">
                  Active Continuous Learning
                </p>
                <p className="text-xs sm:text-sm text-slate-muted">
                  Deepening expertise in distributed systems, vector database indexing, and C++ template metaprogramming.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald bg-emerald/10 px-3.5 py-1.5 rounded-xl border border-emerald/30 whitespace-nowrap">
              Target: SWE 2026/27
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
