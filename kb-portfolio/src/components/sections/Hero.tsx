import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Github, Linkedin, Download, ArrowRight, Sparkles, MapPin, Code2 } from 'lucide-react';
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

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 sm:pb-24 flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 bg-gradient-hero pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #10B981, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #059669, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Availability Pill */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald/30 bg-emerald/10 text-xs font-mono text-emerald-light mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" aria-hidden="true" />
              <span>B.Tech CSE @ MAIT Delhi</span>
              <span className="text-white/20">|</span>
              <span className="text-slate-muted">Open to Opportunities</span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-primary leading-[1.08] mb-3"
            >
              Hi, I'm <span className="text-gradient">Krishna Bagri</span>
            </motion.h1>

            {/* Role Subtitle */}
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-primary/95 mb-4"
            >
              {personal.title}
            </motion.h2>

            {/* Animated Role Switcher */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="text-sm sm:text-base font-mono text-slate-muted mb-6 h-8 flex items-center justify-center lg:justify-start gap-2"
              aria-live="polite"
              aria-label={`Specialization: ${typedRole}`}
            >
              <span className="text-slate-muted text-xs uppercase tracking-widest">Focus:</span>
              <span className="text-emerald-light font-semibold">{typedRole}</span>
              <span
                className="inline-block w-0.5 h-4 bg-emerald flex-shrink-0"
                style={{ animation: 'blink 1s step-end infinite' }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Narrative Tagline */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="text-slate-muted text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-normal"
            >
              {personal.tagline} Focused on core computer science foundations, clean architecture, and modern full-stack development.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-10 w-full"
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

              <div className="flex items-center gap-2">
                <Button
                  as="a"
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="md"
                  aria-label="GitHub profile"
                  leftIcon={<Github size={17} />}
                >
                  GitHub
                </Button>

                <Button
                  as="a"
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="md"
                  aria-label="LinkedIn profile"
                  leftIcon={<Linkedin size={17} />}
                >
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/5 w-full max-w-md"
            >
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-primary font-mono">4+</p>
                <p className="text-[11px] font-mono text-slate-muted uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-emerald font-mono">C++ · Py</p>
                <p className="text-[11px] font-mono text-slate-muted uppercase tracking-wider">Primary Stack</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-primary font-mono">MAIT</p>
                <p className="text-[11px] font-mono text-slate-muted uppercase tracking-wider">CSE 2023–27</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Personal Portrait with Atmospheric Emerald Glow */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]"
            >
              {/* Subtle Emerald Atmospheric Glow */}
              <div
                className="hero-portrait-glow pointer-events-none absolute -inset-4 sm:-inset-8 rounded-full"
                aria-hidden="true"
              />

              {/* Behind Portrait Ambient Ring */}
              <div
                className="absolute inset-x-8 bottom-6 top-10 rounded-3xl border border-emerald/20 bg-gradient-to-b from-emerald/10 via-card/40 to-card/80 backdrop-blur-sm -z-0"
                aria-hidden="true"
              />

              {/* The Actual Transparent Portrait Image */}
              <img
                src="/images/krishna-portrait.png"
                alt="Krishna Bagri"
                width={1086}
                height={1448}
                loading="eager"
                decoding="async"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />

              {/* Floating Badge (Bottom Corner) */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 z-20 px-3.5 py-2 rounded-xl bg-card/90 border border-emerald/30 shadow-card backdrop-blur-md flex items-center gap-2.5 whitespace-nowrap"
              >
                <div className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                <span className="text-xs font-mono font-medium text-slate-primary">
                  CSE Undergrad @ MAIT
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
