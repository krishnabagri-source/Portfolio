import React from 'react';
import { Github, ExternalLink, Compass, Network, Orbit, MessageSquare, Sparkles } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

// Mock UI previews for each project to give recruiter-friendly visual punch
function ProjectVisualPreview({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'travelpilot':
      return (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#12142B] via-[#0C1226] to-[#0A0D1F] select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan/90 border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Compass size={13} className="text-cyan animate-spin" style={{ animationDuration: '10s' }} />
              TravelPilot AI Planner
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan/10 border border-cyan/25">v1.2</span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[10px] min-[380px]:text-[11px] font-mono flex items-center justify-between gap-1 overflow-hidden">
              <span className="text-slate-muted flex-shrink-0">Prompt:</span>
              <span className="text-violet-light font-medium truncate">"5-day Kyoto Itinerary"</span>
            </div>
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center text-[9px] min-[380px]:text-[10px] font-mono">
              <div className="p-1 sm:p-1.5 rounded bg-violet/10 border border-violet/20 text-violet-light truncate">
                Day 1: Temples
              </div>
              <div className="p-1 sm:p-1.5 rounded bg-cyan/10 border border-cyan/20 text-cyan-light truncate">
                Day 2: Arashiyama
              </div>
              <div className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/10 text-slate-muted truncate">
                Day 3: Gion Food
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-1">
            <span>FastAPI + OpenAI Backend</span>
            <span className="text-cyan flex items-center gap-1">
              <Sparkles size={10} /> Optimized Routes
            </span>
          </div>
        </div>
      );

    case 'cerebro':
      return (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#1B0F2E] via-[#100D24] to-[#090815] select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-violet-light border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Network size={13} className="text-violet" />
              CereBro Knowledge Engine
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-violet/10 border border-violet/25">Vector DB</span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="relative p-2 sm:p-2.5 rounded-lg bg-black/40 border border-violet/30 text-[10px] min-[380px]:text-[11px] font-mono overflow-x-auto no-scrollbar">
              <div className="text-[10px] text-slate-muted mb-1">Semantic Embedding Query:</div>
              <div className="text-cyan font-medium whitespace-nowrap">cosine_sim("dist_systems", doc_nodes)</div>
            </div>
            <div className="flex items-center justify-around text-[10px] font-mono gap-1">
              <span className="px-2 py-0.5 rounded-full bg-violet/20 text-violet-light border border-violet/30 truncate">
                ● 98.4% Match
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan/20 text-cyan-light border border-cyan/30 truncate">
                ● Linked 14 Notes
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-1">
            <span>Retrieval Augmented Gen</span>
            <span className="text-violet-light">Latency: 12ms</span>
          </div>
        </div>
      );

    case 'solarsim':
      return (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#061122] via-[#040C1A] to-[#02050E] select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Orbit size={13} className="text-cyan" />
              SolarSim 3D Engine
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan/10 border border-cyan/25">WebGL</span>
          </div>

          <div className="relative my-auto flex items-center justify-center h-20">
            {/* Concentric orbital rings */}
            <div className="absolute w-24 h-24 rounded-full border border-cyan/20 animate-spin" style={{ animationDuration: '24s' }} />
            <div className="absolute w-16 h-16 rounded-full border border-violet/30" />
            <div className="w-6 h-6 rounded-full bg-amber-400 shadow-glow-cyan" />
            <div className="absolute top-2 right-12 w-2.5 h-2.5 rounded-full bg-cyan shadow-sm" />
            <div className="absolute bottom-3 left-14 w-2 h-2 rounded-full bg-violet-light" />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-1">
            <span>Real Physics Mechanics</span>
            <span className="text-cyan">60 FPS Simulation</span>
          </div>
        </div>
      );

    case 'languistic':
      return (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0C1B24] via-[#09151C] to-[#060D12] select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-teal-300 border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <MessageSquare size={13} className="text-teal-400" />
              Languistic Adaptive Tutor
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-teal-400/10 border border-teal-400/25">Interactive</span>
          </div>

          <div className="space-y-1.5 my-auto text-[11px] font-mono">
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-muted">
              <span className="text-teal-300 font-medium">Tutor: </span>
              "¿Cómo estuvo tu día hoy?"
            </div>
            <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-slate-primary">
              <span className="text-cyan font-medium">Learner: </span>
              "Estuvo muy bueno, practiqué programación."
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-muted pt-1">
            <span>Grammar & Fluency Feedback</span>
            <span className="text-teal-300">Level: B2</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Reveal delay={index * 90}>
      <article
        className="group h-full flex flex-col rounded-2xl bg-card border border-white/5 overflow-hidden shadow-card glass-hover transition-all duration-300 hover:border-violet/30 hover:-translate-y-1.5"
        aria-label={`Project: ${project.title}`}
      >
        {/* Mock Window Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/50 border-b border-white/5 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-muted truncate max-w-[200px]">
            {project.id}.local
          </div>
          <div className="w-8" />
        </div>

        {/* Visual Preview Container */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden flex-shrink-0 border-b border-white/5">
          <ProjectVisualPreview projectId={project.id} />
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-1 p-6">
          <div className="mb-3">
            <h3 className="text-slate-primary font-bold text-xl mb-1 group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <p className="text-violet-light text-xs font-mono tracking-wide">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-3 mb-5 flex-1 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-muted block mb-1">
                The Problem
              </span>
              <p className="text-slate-muted leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-3 rounded-xl bg-violet/[0.03] border border-violet/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan block mb-1">
                The Solution
              </span>
              <p className="text-slate-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6" role="list" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="neutral" role="listitem">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 mt-auto pt-2 border-t border-white/5">
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
                Code
              </Button>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-muted border border-white/5 bg-white/[0.02]"
                title="Code repository URL placeholder"
              >
                <Github size={13} />
                Repo TBA
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-muted border border-white/5 bg-white/[0.02]"
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
          description="A showcase of full-stack, AI, and graphics systems I've designed and implemented."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-12 text-center">
            <p className="text-slate-muted text-sm mb-4">
              Looking for more exploratory scripts, DSA solutions, and experiments?
            </p>
            <Button
              as="a"
              href="https://github.com/krishnabagri"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
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
