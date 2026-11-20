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
                <Network size={14} />
              </div>
              <span className="font-semibold text-xs text-white">CereBro Knowledge Engine</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald bg-emerald/10 border border-emerald/30 px-2.5 py-0.5 rounded-full">
              <span>Vector Search: 768-dim</span>
            </div>
          </div>

          {/* Main Workspace Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 my-auto py-2">
            {/* Semantic Query Console */}
            <div className="sm:col-span-7 space-y-2">
              <div className="p-2.5 rounded-xl bg-black/40 border border-emerald/30 font-mono text-[11px] space-y-1.5">
                <div className="text-[10px] text-slate-muted flex items-center justify-between">
                  <span>Semantic Vector Match:</span>
                  <span className="text-emerald">sim: 0.984</span>
                </div>
                <div className="text-slate-primary font-medium text-xs">
                  query: <span className="text-emerald-light">"distributed consensus & Raft leader election"</span>
                </div>
              </div>

              {/* Linked Knowledge Notes */}
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-primary font-medium">📄 Raft_Consensus_Protocol.md</span>
                  <span className="text-[10px] font-mono text-emerald">Linked (12 refs)</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-muted">📄 Byzantine_Fault_Tolerance.md</span>
                  <span className="text-[10px] font-mono text-slate-muted">92% similarity</span>
                </div>
              </div>
            </div>

            {/* Neural Graph Mock */}
            <div className="sm:col-span-5 hidden sm:flex flex-col justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-mono uppercase text-slate-muted tracking-wider">
                Graph Link Visualization
              </span>
              <div className="my-auto py-2 flex items-center justify-center">
                <div className="relative w-28 h-20 flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full border border-emerald/30 animate-pulse" />
                  <div className="w-5 h-5 rounded-full bg-emerald text-[9px] flex items-center justify-center text-black font-bold">
                    R
                  </div>
                  <div className="absolute -top-1 left-2 w-3.5 h-3.5 rounded-full bg-cyan/80 text-[8px] flex items-center justify-center text-black">
                    P
                  </div>
                  <div className="absolute bottom-0 right-2 w-4 h-4 rounded-full bg-emerald-light/80 text-[8px] flex items-center justify-center text-black">
                    V
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-muted text-center">
                342 Nodes • 890 Edges
              </div>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-2 border-t border-white/5">
            <span>FastAPI + ChromaDB</span>
            <span className="text-emerald">Retrieval Latency: 14ms</span>
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
                <Orbit size={14} />
              </div>
              <span className="font-semibold text-xs text-white">SolarSim 3D Engine</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-muted">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Epoch: J2000.0</span>
              <span className="px-2 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/30">60 FPS</span>
            </div>
          </div>

          {/* 3D Visualizer Simulation Mock */}
          <div className="relative my-auto py-3 flex items-center justify-center min-h-[120px]">
            {/* Concentric planetary orbits */}
            <div className="absolute w-44 h-44 rounded-full border border-dashed border-emerald/20" />
            <div className="absolute w-32 h-32 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute w-20 h-20 rounded-full border border-cyan/20 animate-spin" style={{ animationDuration: '12s' }} />

            {/* Central Sun */}
            <div className="relative z-10 w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 shadow-[0_0_24px_rgba(251,191,36,0.6)] flex items-center justify-center text-[8px] font-bold text-amber-950">
              SUN
            </div>

            {/* Earth & Orbiting Moon */}
            <div className="absolute top-4 right-14 flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
              <span className="text-[9px] font-mono text-slate-muted">Earth</span>
            </div>

            {/* Mars */}
            <div className="absolute bottom-6 left-12 flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.7)]" />
              <span className="text-[9px] font-mono text-slate-muted">Mars</span>
            </div>
          </div>

          {/* Telemetry HUD */}
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div>
              <span className="text-slate-muted block">Velocity</span>
              <span className="text-emerald font-semibold">29.78 km/s</span>
            </div>
            <div>
              <span className="text-slate-muted block">Semi-Major Axis</span>
              <span className="text-slate-primary">1.000 AU</span>
            </div>
            <div>
              <span className="text-slate-muted block">Eccentricity</span>
              <span className="text-slate-primary">0.0167</span>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-2 border-t border-white/5">
            <span>TypeScript + Three.js + WebGL</span>
            <span className="text-emerald">N-Body Kepler Mechanics</span>
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
              <span className="font-semibold text-xs text-white">Languistic AI Tutor</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-muted">Spanish</span>
              <span className="px-2 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/30">Level: B2</span>
            </div>
          </div>

          {/* Active Conversation Drill */}
          <div className="space-y-2.5 my-auto py-2">
            {/* AI Tutor Bubble */}
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs space-y-1">
              <div className="flex items-center justify-between text-[10px] text-emerald-light font-mono">
                <span>AI Tutor</span>
                <span>Audio 0:04</span>
              </div>
              <p className="text-slate-primary text-xs">
                "¡Hola Krishna! ¿Cuál fue el mayor reto técnico que tuviste esta semana?"
              </p>
            </div>

            {/* Learner Bubble with AI Grammar Evaluation */}
            <div className="p-2.5 rounded-xl bg-emerald/10 border border-emerald/30 text-xs space-y-1 ml-4 sm:ml-8">
              <div className="flex items-center justify-between text-[10px] text-emerald font-mono">
                <span>You (Learner)</span>
                <span className="text-emerald flex items-center gap-1">
                  <CheckCircle2 size={11} /> 96% Accuracy
                </span>
              </div>
              <p className="text-slate-primary text-xs">
                "Implementé un algoritmo para optimizar la latencia de las consultas en la base de datos."
              </p>
              <div className="text-[10px] text-emerald-light/90 pt-1 border-t border-emerald/20 font-mono">
                Tip: Excellent subjunctive verb usage and vocabulary precision!
              </div>
            </div>
          </div>

          {/* Adaptive Proficiency Metrics */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-2 border-t border-white/5">
            <span>React + FastAPI + Whisper API</span>
            <span className="text-emerald">Daily Streak: 14 Days</span>
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
