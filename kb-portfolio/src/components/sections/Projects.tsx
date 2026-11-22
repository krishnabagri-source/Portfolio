import React from 'react';
import {
  Github,
  ExternalLink,
  Compass,
  Network,
  Orbit,
  MessageSquare,
  Sparkles,
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  Activity,
  Sliders,
  ChevronRight,
  Brain,
} from 'lucide-react';
import { projects } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

// High-fidelity UI mockups simulating real product screens
function ProjectScreenshot({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'travelpilot':
      return (
        <div className="relative w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#0c131a] via-[#091017] to-[#060a0f] text-slate-primary select-none font-sans">
          {/* App Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald/20 text-emerald flex items-center justify-center">
                <Compass size={14} />
              </div>
              <span className="font-semibold text-xs text-white">TravelPilot AI</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/5 text-[11px] text-slate-muted max-w-[220px] truncate">
              <Search size={11} className="text-emerald" />
              <span>Kyoto, Japan — 5 Days</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald/10 text-emerald-light border border-emerald/30">
              AI Optimized
            </span>
          </div>

          {/* Main Dashboard Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 my-auto py-2">
            {/* Itinerary Stream */}
            <div className="sm:col-span-7 space-y-2">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-emerald-light flex items-center gap-1.5">
                    <Calendar size={12} /> Day 2: Arashiyama Bamboo Grove
                  </span>
                  <span className="text-slate-muted text-[10px] font-mono">09:00 AM</span>
                </div>
                <p className="text-[11px] text-slate-muted leading-relaxed">
                  Scenic morning walk through Tenryu-ji gardens. AI suggested departing before 10 AM to avoid crowds.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[10px] font-mono text-slate-muted">
                  <span className="text-emerald">Transit: 18 min train</span>
                  <span>•</span>
                  <span>Est. Cost: ¥1,200</span>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-emerald/5 border border-emerald/20 text-[11px] flex items-center justify-between">
                <span className="text-slate-primary text-xs flex items-center gap-1.5">
                  <Sparkles size={12} className="text-emerald" /> Afternoon: Kinkaku-ji (Golden Pavilion)
                </span>
                <span className="text-[10px] text-emerald-light font-mono">★ 4.9</span>
              </div>
            </div>

            {/* AI Assistant Output Card */}
            <div className="sm:col-span-5 hidden sm:flex flex-col justify-between p-2.5 rounded-xl bg-black/40 border border-emerald/20 text-[11px]">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald tracking-wider block mb-1">
                  AI Travel Assistant
                </span>
                <p className="text-slate-muted text-[11px] leading-relaxed">
                  "Weather forecast shows clear skies. Route rearranged to maximize daylight photography."
                </p>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-muted">
                <span>FastAPI + LLM</span>
                <span className="text-emerald">Budget: $840/$1000</span>
              </div>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-2 border-t border-white/5">
            <span>Adaptive Routing Engine</span>
            <span className="text-emerald-light">5 Days • 14 POIs • Route Synced</span>
          </div>
        </div>
      );

    case 'cerebro':
      return (
        <div className="relative w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#101018] via-[#0d0d14] to-[#07070b] text-slate-primary select-none font-sans">
          {/* App Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald/20 text-emerald flex items-center justify-center">
                <Brain size={14} />
              </div>
              <span className="font-semibold text-xs text-white">CereBro Adaptive Platform</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald bg-emerald/10 border border-emerald/30 px-2.5 py-0.5 rounded-full">
              <span>Diagnostic Active</span>
            </div>
          </div>

          {/* Main Workspace Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 my-auto py-2">
            {/* Concept Mastery Tracker */}
            <div className="sm:col-span-7 space-y-2">
              <div className="p-2.5 rounded-xl bg-black/40 border border-emerald/30 font-mono text-[11px] space-y-1.5">
                <div className="text-[10px] text-slate-muted flex items-center justify-between">
                  <span>Concept Mastery Progress</span>
                  <span className="text-emerald">Avg: 92%</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-200">DSA: Recursion & Backtracking</span>
                    <span className="text-emerald-light">94%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald h-full w-[94%]" />
                  </div>
                </div>
              </div>

              {/* Spaced Repetition Due Card */}
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-primary font-medium text-xs">Diagnostic Quiz: Stacks & Queues</span>
                  <span className="text-[10px] font-mono text-emerald">Score: 9.5/10</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-muted text-xs">Spaced Repetition Review</span>
                  <span className="text-[10px] font-mono text-slate-muted">Scheduled Today</span>
                </div>
              </div>
            </div>

            {/* Recommendations Panel */}
            <div className="sm:col-span-5 hidden sm:flex flex-col justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-mono uppercase text-slate-muted tracking-wider">
                Adaptive Workflow
              </span>
              <div className="space-y-1.5 my-auto">
                <span className="text-[10px] text-emerald font-mono block">Recommended Next:</span>
                <p className="text-[11px] text-slate-200 leading-tight font-medium">
                  Binary Search Boundary Invariants
                </p>
                <span className="text-[9px] text-slate-muted block font-mono">
                  Personalized based on diagnostic telemetry
                </span>
              </div>
              <div className="text-[10px] font-mono text-emerald pt-1 border-t border-white/5">
                Mastery Goal: 95%+
              </div>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-2 border-t border-white/5">
            <span>AI-Assisted Educational Prototype</span>
            <span className="text-emerald">Learner Analytics Synced</span>
          </div>
        </div>
      );

    case 'solarsim':
      return (
        <div className="relative w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#060b14] via-[#03060c] to-[#010205] text-slate-primary select-none font-sans">
          {/* App Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald/20 text-emerald flex items-center justify-center">
                <Sliders size={14} />
              </div>
              <span className="font-semibold text-xs text-white">SolarSim Energy Analyzer</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-muted">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">C++ Engine</span>
              <span className="px-2 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/30">Verified</span>
            </div>
          </div>

          {/* Numerical Integration Comparison Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 my-auto py-2">
            {/* Energy Curve & Numerical Estimates */}
            <div className="sm:col-span-7 space-y-2">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-emerald-light">Composite Simpson's 1/3 Rule</span>
                  <span className="text-emerald font-mono font-bold text-xs">48.32 kWh</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald h-full w-[82%]" />
                </div>
                <p className="text-[10px] text-slate-muted leading-tight">
                  High-order parabolic approximation across 24h discrete solar generation intervals.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-medium text-slate-300">Trapezoidal Rule Estimate</span>
                  <span className="text-slate-300 font-mono text-xs">47.85 kWh</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-slate-400 h-full w-[79%]" />
                </div>
              </div>
            </div>

            {/* Numerical Telemetry Box */}
            <div className="sm:col-span-5 hidden sm:flex flex-col justify-between p-2.5 rounded-xl bg-black/40 border border-emerald/20 text-[11px]">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald tracking-wider block mb-1">
                  Simulation Metrics
                </span>
                <p className="text-slate-muted text-[11px] leading-relaxed">
                  Discrete solar data evaluated with quadratic curvature correction.
                </p>
              </div>
              <div className="space-y-1 pt-2 border-t border-white/5 text-[10px] font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-muted">Error Margin:</span>
                  <span className="text-emerald">&lt; 0.05%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-muted">Live Demo:</span>
                  <span className="text-emerald-light truncate">solarsim-ruddy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-2 border-t border-white/5">
            <span>C++ Numerical Methods + AI-Assisted Web</span>
            <span className="text-emerald">Energy Yield Integration</span>
          </div>
        </div>
      );

    case 'languistic':
      return (
        <div className="relative w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#0c1815] via-[#081210] to-[#040908] text-slate-primary select-none font-sans">
          {/* App Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald/20 text-emerald flex items-center justify-center">
                <MessageSquare size={14} />
              </div>
              <span className="font-semibold text-xs text-white">Languistic Empathy Engine</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/30">Friction Score: -78%</span>
            </div>
          </div>

          {/* Active Conversation Rephrasing Drill */}
          <div className="space-y-2.5 my-auto py-2">
            {/* Input Message */}
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs space-y-1">
              <div className="flex items-center justify-between text-[10px] text-slate-muted font-mono">
                <span>Original Message (High Friction)</span>
                <span className="text-rose-400">Blunt Tone</span>
              </div>
              <p className="text-slate-primary text-xs">
                "Your pull request broke the module and needs immediate fixing."
              </p>
            </div>

            {/* Empathetic & Clear Rephrasing */}
            <div className="p-2.5 rounded-xl bg-emerald/10 border border-emerald/30 text-xs space-y-1 ml-3 sm:ml-6">
              <div className="flex items-center justify-between text-[10px] text-emerald font-mono">
                <span>Empathetic Rephrase</span>
                <span className="text-emerald flex items-center gap-1">
                  <CheckCircle2 size={11} /> Clarity & Empathy Verified
                </span>
              </div>
              <p className="text-slate-primary text-xs leading-relaxed">
                "Could you take a look at the recent changes in the module? It appears to be running into an unexpected issue, and your insight would be super helpful."
              </p>
            </div>
          </div>

          {/* Psychological Barrier Metrics */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-2 border-t border-white/5">
            <span>Human-Centered AI Prototype</span>
            <span className="text-emerald">github.com/krishnabagri-source/languistic</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article
        className="group h-full flex flex-col rounded-2xl bg-card border border-white/10 overflow-hidden shadow-card glass-hover transition-all duration-300 hover:border-emerald/40 hover:-translate-y-1.5"
        aria-label={`Project: ${project.title}`}
      >
        {/* Mock Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a0b12] border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald/80" />
          </div>
          <div className="px-3 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[11px] text-slate-muted truncate max-w-[200px]">
            {project.id}.app/preview
          </div>
          <div className="w-8" />
        </div>

        {/* Larger High-Fidelity UI Preview Container */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden flex-shrink-0 border-b border-white/10">
          <ProjectScreenshot projectId={project.id} />
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-6 sm:p-7">
          <div className="mb-4">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h3 className="text-slate-primary font-bold text-xl sm:text-2xl group-hover:text-emerald transition-colors">
                {project.title}
              </h3>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-muted border border-white/10">
                0{index + 1}
              </span>
            </div>
            <p className="text-emerald-light text-xs sm:text-sm font-mono font-medium">
              {project.tagline}
            </p>
          </div>

          <p className="text-slate-muted text-xs sm:text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Case Study Structured Breakdown: Problem & Solution */}
          <div className="space-y-3 mb-6 flex-1 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-muted block mb-1">
                The Problem
              </span>
              <p className="text-slate-muted text-xs leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald/[0.03] border border-emerald/15">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald block mb-1">
                Architectural Solution
              </span>
              <p className="text-slate-muted text-xs leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="neutral" role="listitem">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-auto pt-3 border-t border-white/5">
            {project.githubUrl ? (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                leftIcon={<Github size={14} />}
              >
                Source Code
              </Button>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-muted border border-white/5 bg-white/[0.02]"
                title="Code repository URL placeholder"
              >
                <Github size={13} />
                Repo Coming Soon
              </span>
            )}

            {project.liveUrl ? (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                rightIcon={<ExternalLink size={13} />}
              >
                Live Demo
              </Button>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-muted border border-white/5 bg-white/[0.02]"
                title="Live deployment URL placeholder"
              >
                <ExternalLink size={13} />
                Live Demo TBA
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding scroll-mt-16" aria-labelledby="projects-heading">
      <div className="container-custom">
        <SectionHeader
          id="projects-heading"
          eyebrow="Featured Projects"
          title="Engineered with"
          titleHighlight="Purpose"
          description="Case studies of full-stack web applications, AI systems, and interactive simulations I've architected and implemented."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-14 sm:mt-16 text-center p-8 rounded-2xl bg-card border border-white/5 max-w-2xl mx-auto">
            <h4 className="text-slate-primary font-bold text-base sm:text-lg mb-2">
              Interested in seeing more code & experiments?
            </h4>
            <p className="text-slate-muted text-xs sm:text-sm mb-5 leading-relaxed">
              Explore my GitHub for competitive programming solutions, algorithmic benchmarks, and ongoing development work.
            </p>
            <Button
              as="a"
              href="https://github.com/krishnabagri"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              leftIcon={<Github size={16} />}
            >
              Explore GitHub Profile
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
