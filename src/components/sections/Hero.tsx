import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { personal } from '../../data/portfolio';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="hero-shell relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-24 lg:min-h-[760px] lg:pb-20 lg:pt-32" aria-labelledby="hero-title">
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-orbit pointer-events-none absolute -right-36 top-20 h-[560px] w-[560px] rounded-full" aria-hidden="true" />
      <div className="container-custom relative z-10 grid w-full items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-6 lg:gap-10">
        <div className="relative z-10 max-w-3xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-muted sm:text-xs">
            <span className="h-px w-8 bg-emerald" />
            Computer science · MAIT, Delhi
          </motion.div>
          <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="max-w-4xl font-sans text-[clamp(4.2rem,10vw,8.6rem)] font-medium leading-[0.82] tracking-[-0.085em] text-slate-primary">
            Krishna<br />
            <span className="hero-name-accent">Bagri<span className="text-emerald">.</span></span>
          </motion.h1>
          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-9 grid max-w-2xl gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <p className="max-w-lg text-base leading-7 text-slate-muted sm:text-lg sm:leading-8">I build thoughtful software at the intersection of <span className="text-slate-primary">engineering, AI, and the web.</span></p>
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-muted"><MapPin size={13} className="text-emerald" aria-hidden="true" /> New Delhi, India</p>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="hero-primary group inline-flex min-h-12 items-center gap-3 rounded-full px-5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald">Explore selected work <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
            <a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 px-5 text-sm text-slate-primary transition-colors hover:border-white/25 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald">Get in touch <ArrowUpRight size={14} className="text-slate-muted" /></a>
            <div className="ml-1 flex items-center gap-1 border-l border-white/10 pl-3">
              <a href={personal.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-full p-3 text-slate-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald"><Github size={17} /></a>
              <a href={personal.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-full p-3 text-slate-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald"><Linkedin size={17} /></a>
            </div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="mt-16 flex items-center gap-4 border-t border-white/[0.08] pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-muted sm:mt-20">
            <span className="text-emerald">01</span><span>Curiosity into craft</span><span className="hidden h-px w-12 bg-white/15 sm:block" /><span className="hidden sm:block">Scroll to explore</span><ArrowDown size={13} className="animate-bounce text-slate-muted sm:hidden" />
          </motion.div>
        </div>

        <motion.figure initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2 }} className="hero-portrait-wrap relative mx-auto w-full max-w-[300px] sm:max-w-[360px] md:max-w-[320px] lg:mt-10 lg:max-w-[440px]">
          <div className="hero-portrait-glow pointer-events-none absolute inset-x-[8%] bottom-[8%] top-[12%]" aria-hidden="true" />
          <img src="/images/krishna-portrait.png" alt="Krishna Bagri, standing in a blue striped shirt" width="1086" height="1448" loading="eager" fetchPriority="high" decoding="async" className="relative z-10 block h-auto w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.3)]" />
        </motion.figure>
      </div>
    </section>
  );
}
