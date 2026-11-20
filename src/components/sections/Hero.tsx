import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, MapPin } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const currentRole = useTypewriter(personal.roles, 72, 1500);

  return (
    <section id="hero" className="hero-shell relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-24 lg:min-h-[760px] lg:pb-20 lg:pt-32" aria-labelledby="hero-title">
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-orbit pointer-events-none absolute -right-36 top-20 h-[560px] w-[560px] rounded-full" aria-hidden="true" />
      <div className="container-custom relative z-10 grid w-full items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-6 lg:gap-10">
        <div className="relative z-10 max-w-3xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-muted sm:text-[11px]">
            <span className="h-px w-8 bg-cyan" /> CSE student at MAIT · Software engineering · AI/ML
          </motion.div>
          <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="max-w-4xl font-sans text-[clamp(3.6rem,9.4vw,7.8rem)] font-medium leading-[0.83] tracking-[-0.085em] text-slate-primary">
            Hi, I&apos;m<br />Krishna<br /><span className="hero-name-accent">Bagri<span className="text-cyan">.</span></span>
          </motion.h1>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-7">
            <p className="text-base font-medium tracking-tight text-white sm:text-lg">{personal.title}</p>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-muted sm:text-base sm:leading-7">I enjoy solving complex problems, building useful software, and exploring intelligent systems through programming and AI.</p>
          </motion.div>
          <div className="mt-5 flex min-h-6 items-center gap-2 font-mono text-xs text-cyan sm:text-sm" aria-live="polite" aria-atomic="true">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            <span className="sr-only">Currently exploring:</span>{currentRole || personal.roles[0]}
            <span className="h-4 w-px animate-pulse bg-cyan/70" aria-hidden="true" />
          </div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35 }} className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="hero-primary group inline-flex min-h-12 items-center gap-3 rounded-full px-5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">View my work <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 px-5 text-sm text-slate-primary transition-colors hover:border-white/25 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">Download resume <ArrowUpRight size={14} className="text-slate-muted" /></a>
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-full p-3 text-slate-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"><Github size={17} /></a>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="mt-12 flex items-center gap-4 border-t border-white/[0.08] pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-muted sm:mt-16">
            <span className="text-cyan">01</span><span>Curiosity into craft</span><span className="hidden h-px w-12 bg-white/15 sm:block" /><span className="hidden sm:block">Scroll to explore</span><ArrowDown size={13} className="animate-bounce text-slate-muted sm:hidden" />
          </motion.div>
        </div>

        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="hero-portrait-wrap relative mx-auto w-full max-w-[300px] md:max-w-[320px] lg:mt-10 lg:max-w-[430px]">
          <div className="hero-portrait-frame relative aspect-[0.82] overflow-hidden rounded-[46%_46%_12px_12px] border border-white/10 bg-[#11131d]">
            <img src="/krishna-photo.jpg" alt="Krishna Bagri" className="h-full w-full object-cover object-[center_24%] grayscale-[18%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090f]/85 via-transparent to-[#09090f]/10" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">Currently</p><p className="mt-1 text-sm text-white">Learning by building</p></div>
              <MapPin size={15} className="mb-1 text-cyan" aria-label="Based in New Delhi, India" />
            </div>
          </div>
          <div className="absolute -left-5 top-[25%] hidden rounded-2xl border border-white/10 bg-[#11121a]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-slate-muted">Focus</span><span className="mt-1 block text-xs text-slate-primary">Software · AI/ML</span>
          </div>
          <div className="absolute -right-4 bottom-[19%] hidden rounded-2xl border border-white/10 bg-[#11121a]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-slate-muted">Studying</span><span className="mt-1 block text-xs text-slate-primary">Computer Science · MAIT</span>
          </div>
          <span className="absolute -right-6 top-10 h-20 w-20 rounded-full border border-cyan/20" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
