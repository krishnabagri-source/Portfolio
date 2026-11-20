import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Github, MoveUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';

const projectIndex = ['01', '02', '03', '04'];

function ProjectArtwork({ id }: { id: string }) {
  if (id === 'travelpilot') return (
    <div className="artwork artwork-travel relative flex h-full min-h-[270px] items-center justify-center overflow-hidden p-5 sm:min-h-[350px] sm:p-8" aria-label="Travel planning interface concept" role="img">
      <div className="travel-map-lines absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full bg-emerald/10 blur-[80px]" aria-hidden="true" />
      <div className="travel-window relative z-10 w-full max-w-[470px] rounded-xl border border-white/15 bg-[#10151a]/90 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="font-mono text-[10px] uppercase tracking-[0.17em] text-slate-primary">TravelPilot <span className="text-emerald">/ planner</span></span><span className="rounded-full border border-emerald/20 px-2 py-1 font-mono text-[9px] text-emerald">YOUR NEXT TRIP</span></div>
        <div className="grid grid-cols-[1fr_0.8fr] gap-4 pt-4">
          <div><span className="font-mono text-[9px] uppercase tracking-widest text-slate-muted">A city to wander</span><h3 className="mt-1 text-2xl tracking-tight text-white sm:text-3xl">Kyoto<span className="text-emerald">,</span> Japan</h3><p className="mt-2 max-w-[190px] text-[10px] leading-5 text-slate-muted">A little more temple time. A little less rushing.</p><div className="mt-4 flex gap-2"><span className="rounded-full bg-white/[0.07] px-2.5 py-1 font-mono text-[9px] text-slate-muted">5 days</span><span className="rounded-full bg-white/[0.07] px-2.5 py-1 font-mono text-[9px] text-slate-muted">Slow travel</span></div></div>
          <div className="flex flex-col justify-between rounded-lg border border-white/[0.08] bg-white/[0.035] p-3"><span className="font-mono text-[9px] uppercase tracking-widest text-slate-muted">Day one</span><div className="my-3 space-y-2 border-l border-emerald/25 pl-3"><p className="text-[10px] text-white">Fushimi Inari</p><p className="text-[9px] text-slate-muted">Walk the hillside paths</p></div><span className="h-px w-full bg-white/10" /><span className="mt-2 text-[9px] text-emerald">Open itinerary <MoveUpRight size={11} className="ml-1 inline" /></span></div>
        </div>
      </div>
      <span className="absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">01 / DESTINATION</span>
    </div>
  );
  if (id === 'cerebro') return (
    <div className="artwork artwork-cerebro relative flex h-full min-h-[270px] items-center justify-center overflow-hidden p-5 sm:min-h-[350px] sm:p-8" aria-label="Knowledge graph interface concept" role="img">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_45%,rgba(138,102,255,0.15),transparent_40%)]" aria-hidden="true" />
      <svg viewBox="0 0 500 300" className="absolute inset-0 h-full w-full" aria-hidden="true"><g stroke="rgba(171,152,255,.25)" strokeWidth="1"><path d="M250 145 117 83M250 145 177 236M250 145 364 72M250 145 392 203M177 236 82 197M364 72 424 105M117 83 82 197M392 203 424 105" /></g><g fill="rgba(167,139,250,.62)"><circle cx="117" cy="83" r="4"/><circle cx="177" cy="236" r="3"/><circle cx="364" cy="72" r="4"/><circle cx="392" cy="203" r="4"/><circle cx="82" cy="197" r="3"/><circle cx="424" cy="105" r="3"/></g></svg>
      <div className="relative z-10 grid w-full max-w-[470px] grid-cols-[1fr_150px] items-center gap-3 sm:grid-cols-[1fr_180px]">
        <div className="space-y-3"><div className="rounded-lg border border-emerald-light/20 bg-[#171322]/90 p-3 shadow-xl backdrop-blur-xl"><span className="font-mono text-[9px] uppercase tracking-widest text-emerald-light">A saved thought</span><p className="mt-1 text-xs text-white">Distributed systems</p></div><div className="ml-6 rounded-lg border border-white/10 bg-[#171322]/85 p-3 backdrop-blur-xl"><span className="font-mono text-[9px] uppercase tracking-widest text-slate-muted">Related note</span><p className="mt-1 text-xs text-white">Eventual consistency</p></div><div className="ml-2 rounded-lg border border-white/10 bg-[#171322]/85 p-3 backdrop-blur-xl"><span className="font-mono text-[9px] uppercase tracking-widest text-slate-muted">Web clipping</span><p className="mt-1 text-xs text-white">Designing data-intensive apps</p></div></div>
        <div className="relative flex aspect-square items-center justify-center rounded-full border border-emerald-light/20 bg-emerald-light/[0.04] shadow-[0_0_70px_rgba(139,92,246,0.14)]"><div className="absolute inset-4 rounded-full border border-emerald-light/10"/><div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-light/30 bg-[#30254c] font-serif text-2xl italic text-emerald-light shadow-lg">C</div></div>
      </div>
      <span className="absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">02 / CONNECTED KNOWLEDGE</span>
    </div>
  );
  if (id === 'solarsim') return (
    <div className="artwork artwork-solar relative flex h-full min-h-[270px] items-center justify-center overflow-hidden p-5 sm:min-h-[350px] sm:p-8" aria-label="Solar system orbital visualization concept" role="img">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_55%,rgba(42,132,255,.13),transparent_50%)]" aria-hidden="true" />
      <div className="solar-system relative flex aspect-square w-[290px] max-w-[82%] items-center justify-center" aria-hidden="true"><div className="absolute h-[95%] w-[95%] rounded-full border border-white/[0.08]"/><div className="absolute h-[73%] w-[73%] rounded-full border border-emerald-light/15"/><div className="absolute h-[51%] w-[51%] rounded-full border border-emerald-light/20"/><div className="absolute h-[28%] w-[28%] rounded-full border border-white/15"/><div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-100 via-amber-400 to-orange-500 shadow-[0_0_38px_rgba(251,191,36,.45)]"/><span className="absolute left-[13%] top-[28%] h-2 w-2 rounded-full bg-emerald-200 shadow-[0_0_16px_rgba(103,232,249,.7)]"/><span className="absolute right-[13%] top-[25%] h-3 w-3 rounded-full bg-emerald-light shadow-[0_0_18px_rgba(196,181,253,.7)]"/><span className="absolute bottom-[6%] left-[57%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(147,197,253,.7)]"/></div>
      <span className="absolute left-7 top-7 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-light/55">An orbital study</span><span className="absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">03 / SOLAR SYSTEM</span>
    </div>
  );
  return (
    <div className="artwork artwork-language relative flex h-full min-h-[270px] items-center justify-center overflow-hidden p-5 sm:min-h-[350px] sm:p-8" aria-label="Language practice interface concept" role="img">
      <div className="absolute -left-10 top-5 h-48 w-48 rounded-full bg-emerald/10 blur-[90px]" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-[450px] rounded-xl border border-white/10 bg-[#0b171b]/90 p-4 shadow-2xl backdrop-blur-xl sm:p-5"><div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="font-mono text-[10px] uppercase tracking-[0.17em] text-white">languistic <span className="text-teal-300">/ practice</span></span><span className="font-mono text-[9px] text-slate-muted">ESPAÑOL</span></div><div className="mt-5 space-y-3"><div className="max-w-[86%] rounded-xl rounded-tl-sm border border-white/10 bg-white/[0.045] p-3"><span className="font-mono text-[8px] uppercase tracking-widest text-teal-300">Conversation partner</span><p className="mt-1 text-xs text-white sm:text-sm">¿Qué te gusta hacer los fines de semana?</p></div><div className="ml-auto max-w-[82%] rounded-xl rounded-tr-sm border border-teal-300/15 bg-teal-300/[0.08] p-3"><span className="font-mono text-[8px] uppercase tracking-widest text-teal-200/60">Your reply</span><p className="mt-1 text-xs text-white sm:text-sm">Me gusta explorar lugares nuevos.</p></div><div className="flex items-center gap-2 pt-1 font-mono text-[9px] text-slate-muted"><span className="h-px flex-1 bg-white/10"/>Practice at your own pace<span className="h-px flex-1 bg-white/10"/></div></div></div>
      <span className="absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">04 / LANGUAGE PRACTICE</span>
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
            <div><p className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-emerald"><span className="h-px w-7 bg-emerald"/>Selected work · Visual concepts</p><h2 id="projects-heading" className="max-w-xl text-4xl font-medium tracking-[-0.055em] text-slate-primary sm:text-6xl">Projects with a point of view<span className="text-emerald-light">.</span></h2></div>
            <p className="max-w-xs text-sm leading-6 text-slate-muted sm:pb-1">Experiments in intelligent tools, connected ideas, and interactive worlds.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-14">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 70} className={i % 2 === 1 ? 'lg:mt-14' : ''}>
              <motion.article whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="group h-full">
                <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.02] transition-colors duration-500 group-hover:border-white/[0.18]"><ProjectArtwork id={project.id}/><span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[9px] tracking-wider text-white/60 backdrop-blur-sm">{projectIndex[i]} <span className="text-white/30">/ 04</span></span></div>
                <div className="px-1 pt-5 sm:px-2 sm:pt-6">
                  <div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-light">{project.tagline}</p><h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">{project.title}</h3></div><a href={project.githubUrl || '#contact'} aria-label={project.githubUrl ? `View ${project.title} source on GitHub` : `Ask about ${project.title}`} className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-muted transition-all hover:border-emerald/40 hover:bg-emerald/10 hover:text-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald">{project.githubUrl ? <Github size={16}/> : <ArrowUpRight size={16}/>}</a></div>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag)=><span key={tag} className="rounded-full border border-white/[0.09] px-2.5 py-1 font-mono text-[9px] text-slate-muted">{tag}</span>)}</div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
