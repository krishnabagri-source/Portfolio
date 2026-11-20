import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Github, MoveUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';

const projectIndex = ['01', '02', '03', '04'];

function ProjectArtwork({ id, title }: { id: string; title: string }) {
  return (
    <div className={`artwork artwork-${id === 'languistic' ? 'language' : id === 'solarsim' ? 'solar' : id} relative flex min-h-[270px] items-center justify-center overflow-hidden p-5 sm:min-h-[350px] sm:p-8`} role="img" aria-label={`${title} abstract visual concept, not a product screenshot`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,0.12),transparent_65%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-40 w-40 rounded-full bg-cyan/10 blur-[80px]" aria-hidden="true" />

      {id === 'travelpilot' && (
        <div className="relative flex w-full max-w-[500px] flex-col items-center gap-7 py-8 sm:gap-10">
          <div className="flex w-full items-center justify-between px-2 sm:px-8">
            {['Generate', 'Schedule', 'Replan'].map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-3 text-center">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full border font-mono text-xs ${index === 1 ? 'border-cyan/40 bg-cyan/10 text-cyan' : 'border-white/15 bg-white/[0.035] text-slate-muted'}`}>0{index + 1}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-muted sm:text-[10px]">{step}</span>
              </div>
            ))}
          </div>
          <div className="relative h-px w-[70%] bg-gradient-to-r from-transparent via-cyan/50 to-transparent" aria-hidden="true"><span className="absolute left-[17%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_14px_rgba(56,189,248,.7)]" /><span className="absolute right-[17%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-light shadow-[0_0_14px_rgba(167,139,250,.7)]" /></div>
        </div>
      )}

      {id === 'cerebro' && (
        <div className="relative grid w-full max-w-[510px] grid-cols-3 items-center gap-2 sm:gap-5">
          {[
            { label: 'Assess', detail: 'Understand the learner' },
            { label: 'Recommend', detail: 'Personalize next steps' },
            { label: 'Track', detail: 'Follow progress' },
          ].map((step, index) => (
            <div key={step.label} className="relative flex min-h-[125px] flex-col justify-between rounded-2xl border border-white/10 bg-[#12111b]/85 p-3 backdrop-blur-sm sm:min-h-[160px] sm:p-5">
              <span className="font-mono text-[9px] text-violet-light/70">0{index + 1}</span>
              <div><p className="text-xs font-medium text-white sm:text-sm">{step.label}</p><p className="mt-1 text-[9px] leading-4 text-slate-muted sm:text-[10px]">{step.detail}</p></div>
              {index < 2 && <span className="absolute -right-2 top-1/2 z-10 h-1.5 w-1.5 rounded-full bg-violet-light" aria-hidden="true" />}
            </div>
          ))}
        </div>
      )}

      {id === 'solarsim' && (
        <div className="relative w-full max-w-[500px] rounded-2xl border border-white/10 bg-[#0b111b]/65 p-5 sm:p-7">
          <div className="flex items-center justify-between gap-4"><span className="font-mono text-[9px] uppercase tracking-[0.17em] text-cyan-light/70">Numerical integration</span><span className="font-mono text-[9px] text-slate-muted">Energy analysis</span></div>
          <div className="relative mt-6 h-36 overflow-hidden border-b border-l border-white/10 sm:h-44">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true" />
            <svg viewBox="0 0 460 150" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true"><path d="M0 125 C42 120 46 96 88 100 S142 112 178 80 S225 83 264 56 S323 70 354 42 S410 48 460 18" fill="none" stroke="rgba(103,232,249,.78)" strokeWidth="2" /><path d="M0 125 C42 120 46 96 88 100 S142 112 178 80 S225 83 264 56 S323 70 354 42 S410 48 460 18 L460 150 L0 150Z" fill="url(#solar-area)" opacity=".18" /><defs><linearGradient id="solar-area" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#67e8f9"/><stop offset="1" stopColor="#67e8f9" stopOpacity="0"/></linearGradient></defs></svg>
          </div>
          <div className="mt-3 flex justify-between font-mono text-[8px] uppercase tracking-wider text-slate-muted/70"><span>Model input</span><span>Calculated output</span></div>
        </div>
      )}

      {id === 'languistic' && (
        <div className="relative w-full max-w-[440px] space-y-3">
          <div className="mr-8 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.045] p-4 sm:mr-16 sm:p-5"><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-muted">Intent</span><div className="mt-3 h-2 w-3/4 rounded-full bg-white/20" /><div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" /></div>
          <div className="ml-8 rounded-2xl rounded-br-sm border border-cyan/15 bg-cyan/[0.07] p-4 sm:ml-16 sm:p-5"><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-cyan/80">Clear, considerate language</span><div className="mt-3 h-2 w-4/5 rounded-full bg-cyan/25" /><div className="mt-2 h-2 w-2/3 rounded-full bg-cyan/15" /></div>
        </div>
      )}

      <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/25 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-white/55 backdrop-blur-sm sm:left-6 sm:top-6">Visual concept · not a product screenshot</span>
      <span className="absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">{projectIndex[projects.findIndex((project) => project.id === id)]} / 04</span>
    </div>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="projects-section section-padding scroll-mt-16" aria-labelledby="projects-heading">
      <div className="container-custom">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 border-b border-white/[0.09] pb-7 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan"><span className="h-px w-7 bg-cyan" />Selected work · Visual concepts</p><h2 id="projects-heading" className="max-w-xl text-4xl font-medium tracking-[-0.055em] text-slate-primary sm:text-6xl">Projects with a point of view<span className="text-violet-light">.</span></h2></div>
            <p className="max-w-xs text-sm leading-6 text-slate-muted sm:pb-1">Experiments in intelligent tools, connected ideas, and interactive analysis.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-14">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70} className={index % 2 === 1 ? 'lg:mt-14' : ''}>
              <motion.article whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="group h-full">
                <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.02] transition-colors duration-500 group-hover:border-white/[0.18]">
                  <ProjectArtwork id={project.id} title={project.title} />
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 font-mono text-[9px] text-white/55 backdrop-blur-sm">{projectIndex[index]} <span className="text-white/30">/ 04</span></span>
                </div>
                <div className="px-1 pt-5 sm:px-2 sm:pt-6">
                  <div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-violet-light">{project.tagline}</p><h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">{project.title}</h3></div><a href={project.githubUrl || '#contact'} aria-label={project.githubUrl ? `View ${project.title} source on GitHub` : `Ask about ${project.title}`} className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-muted transition-all hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">{project.githubUrl ? <Github size={16} /> : <ArrowUpRight size={16} />}</a></div>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.09] px-2.5 py-1 font-mono text-[9px] text-slate-muted">{tag}</span>)}</div>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs text-cyan hover:text-white">Live project <MoveUpRight size={13} /></a>}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
