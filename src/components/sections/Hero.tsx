import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Github, Linkedin, Download, ArrowRight, ChevronDown, Terminal, Sparkles } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Button } from '../ui/Button';

export function Hero() {
  const typedRole = useTypewriter(personal.roles, 75, 1800);
  const shouldReduceMotion = useReducedMotion();

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 bg-gradient-hero pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      {/* Ambient ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/5 w-72 h-72 rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #38BDF8, transparent)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Availability badge */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet/25 bg-violet/10 text-xs font-mono text-violet-light mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
          <span>CSE Student @ MAIT</span>
          <span className="text-white/20">|</span>
          <span className="text-slate-muted">Open to Internships</span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-primary mb-3"
        >
          Hi, I'm <span className="text-gradient">Krishna Bagri</span>
        </motion.h1>

        {/* Subtitle 1: Software Engineer in the Making */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg min-[380px]:text-xl sm:text-2xl md:text-3xl font-medium text-slate-primary/90 mb-3"
        >
          {personal.title}
        </motion.p>

        {/* Animated typed role */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm min-[380px]:text-base sm:text-xl font-mono text-slate-muted mb-6 h-9 flex items-center justify-center gap-2"
          aria-live="polite"
          aria-label={`Current focus: ${typedRole}`}
        >
          <span className="text-slate-muted text-xs sm:text-sm uppercase tracking-widest">Focus:</span>
          <span className="text-cyan font-semibold truncate max-w-[200px] min-[380px]:max-w-none">{typedRole}</span>
          <span
            className="inline-block w-0.5 h-4 sm:h-5 bg-violet flex-shrink-0"
            style={{ animation: 'blink 1s step-end infinite' }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-muted text-base sm:text-lg max-w-xl mb-9 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
        >
          <Button
            as="a"
            href="#projects"
            onClick={scrollToProjects}
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight size={16} />}
          >
            View Projects
          </Button>

          <Button
            as="a"
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            leftIcon={<Download size={16} />}
          >
            Download Resume
          </Button>

          <Button
            as="a"
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
            leftIcon={<Github size={16} />}
          >
            GitHub
          </Button>

          <Button
            as="a"
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
            leftIcon={<Linkedin size={16} />}
          >
            LinkedIn
          </Button>
        </motion.div>

        {/* Interactive Developer Terminal Widget */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-lg mx-auto rounded-xl bg-card/90 border border-white/10 shadow-card overflow-hidden text-left font-mono text-xs"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-muted/70 text-[11px]">
              <Terminal size={12} className="text-violet" />
              <span>krishna@dev:~</span>
            </div>
            <div className="w-10" />
          </div>

          {/* Terminal Content */}
          <div className="p-3 sm:p-4 space-y-2 text-slate-muted overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <span className="text-cyan">➜</span>
              <span className="text-violet-light font-medium">status</span>
              <span className="text-slate-muted/60">--active</span>
            </div>
            <div className="pl-3 sm:pl-4 py-1 space-y-1 text-slate-primary/90 border-l border-violet/30 text-[11px] sm:text-xs break-words">
              <p>
                <span className="text-violet">education:</span> "B.Tech CSE (2023-2027) @ MAIT, Delhi"
              </p>
              <p>
                <span className="text-violet">languages:</span> ["C++", "Python", "TypeScript"]
              </p>
              <p>
                <span className="text-violet">interests:</span> ["Software Engineering", "DSA", "AI/ML"]
              </p>
              <p className="flex items-center gap-1.5 flex-wrap">
                <span className="text-violet">seeking:</span>
                <span className="text-cyan">Software Engineering Internships</span>
                <Sparkles size={11} className="text-cyan animate-pulse flex-shrink-0" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="mt-12 flex flex-col items-center gap-1 text-slate-muted hover:text-violet transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet rounded-md p-1 cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase opacity-60">Explore</span>
        <ChevronDown size={18} className="animate-bounce text-violet" />
      </button>
    </section>
  );
}
