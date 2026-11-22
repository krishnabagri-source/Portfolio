import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Github, Linkedin, Download, ArrowRight, MapPin, Sparkles, Terminal } from 'lucide-react';
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

      {/* Atmospheric ambient glows */}
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
            {/* Location & Institution Meta Bar (Moved closer to introduction) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5 text-xs font-mono"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald/30 bg-emerald/10 text-emerald-light shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" aria-hidden="true" />
                <span>B.Tech CSE @ MAIT (2025–2029)</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-slate-muted">
                <MapPin size={12} className="text-emerald flex-shrink-0" />
                <span>{personal.location}</span>
              </span>
            </motion.div>

            {/* Oversized Name Heading */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-primary leading-[1.02] mb-3"
            >
              KRISHNA BAGRI
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
              className="text-sm sm:text-base font-mono text-slate-muted mb-5 h-8 flex items-center justify-center lg:justify-start gap-2"
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

            {/* Refined Supporting Narrative */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="text-slate-muted text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-normal"
            >
              Computer Science undergraduate at <span className="text-slate-primary font-medium">MAIT, Delhi</span> (2025–2029). 
              Dedicated to engineering robust software with strong foundations in <span className="text-emerald-light font-mono font-medium">C++</span>, 
              Data Structures &amp; Algorithms (<span className="text-emerald-light font-mono font-medium">DSA</span>), 
              and practical exploration of <span className="text-slate-primary font-medium">AI/ML</span> architectures.
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
                <p className="text-lg sm:text-xl font-bold text-emerald font-mono">C++ · DSA</p>
                <p className="text-[11px] font-mono text-slate-muted uppercase tracking-wider">Core Focus</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-primary font-mono">MAIT</p>
                <p className="text-[11px] font-mono text-slate-muted uppercase tracking-wider">CSE 2025–29</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Personal Portrait with Refined Emerald Atmospheric Glow */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[400px]"
            >
              {/* Refined Emerald Atmospheric Glow */}
              <div
                className="hero-portrait-glow pointer-events-none absolute -inset-4 sm:-inset-6 rounded-full"
                aria-hidden="true"
              />

              {/* Ambient Glass Frame Behind Portrait */}
              <div
                className="absolute inset-x-6 bottom-4 top-8 rounded-3xl border border-emerald/20 bg-gradient-to-b from-emerald/10 via-card/40 to-card/90 backdrop-blur-sm -z-0"
                aria-hidden="true"
              />

              {/* Transparent Portrait Image */}
              <img
                src="/images/krishna-portrait.png"
                alt="Krishna Bagri"
                width={1086}
                height={1448}
                loading="eager"
                decoding="async"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />

              {/* Comic-Style Speech Bubble */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        type: 'spring',
                        stiffness: 380,
                        damping: 22,
                        delay: 0.85,
                      }
                }
                className="absolute top-[16%] -left-1 sm:-left-2 md:top-[8%] md:-left-6 lg:-left-10 z-20 select-none pointer-events-auto"
                aria-label="Krishna says: Hey, What's up? ✌️"
              >
                <div className="relative bg-[#F1F5F9] text-[#111827] px-2 py-1.5 sm:px-3 md:px-4 md:py-2 rounded-2xl border border-emerald/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] flex items-center gap-1 md:gap-1.5 w-[76px] sm:w-[86px] md:w-auto whitespace-normal md:whitespace-nowrap">
                  <span className="font-sans font-bold text-[9.5px] sm:text-xs md:text-sm tracking-tight text-[#111827] leading-tight block md:inline">
                    Hey, <span className="block md:inline">What's up?</span>
                  </span>
                  <span className="text-xs md:text-base leading-none self-end md:self-auto mb-0.5 md:mb-0" role="img" aria-label="peace sign">
                    ✌️
                  </span>

                  {/* Desktop Tail pointing down-right toward mouth (md: and up) */}
                  <svg
                    className="hidden md:block absolute -bottom-3 right-4 w-6 h-5 overflow-visible pointer-events-none"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 0 L 22 18 L 14 0 Z"
                      fill="#F1F5F9"
                    />
                    <path
                      d="M 2 0 L 22 18 L 14 0"
                      stroke="#10B981"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-50"
                    />
                    <line x1="2" y1="0" x2="14" y2="0" stroke="#F1F5F9" strokeWidth="2.5" />
                  </svg>

                  {/* Mobile Tail pointing right across the gap toward lips (below md) */}
                  <svg
                    className="block md:hidden absolute left-full top-[14px] w-[52px] h-[26px] overflow-visible pointer-events-none"
                    viewBox="0 0 52 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 0 0 L 52 22 L 0 10 Z"
                      fill="#F1F5F9"
                    />
                    <path
                      d="M 0 0 L 52 22 L 0 10"
                      stroke="#10B981"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-50"
                    />
                    <line x1="0" y1="0" x2="0" y2="10" stroke="#F1F5F9" strokeWidth="2.5" />
                  </svg>
                </div>
              </motion.div>

              {/* Floating Status Badge */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 z-20 px-3.5 py-2 rounded-xl bg-card/95 border border-emerald/30 shadow-card backdrop-blur-md flex items-center gap-2.5 whitespace-nowrap"
              >
                <div className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                <span className="text-xs font-mono font-medium text-slate-primary">
                  CSE Undergrad @ MAIT (2025–2029)
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
