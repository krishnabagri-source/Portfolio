import React from 'react';
import { GraduationCap, Award, Calendar, Sparkles, Milestone, ArrowUpRight } from 'lucide-react';
import { timelineItems } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

export function Journey() {
  return (
    <section id="journey" className="section-padding scroll-mt-16" aria-labelledby="journey-heading">
      <div className="container-custom">
        <SectionHeader
          id="journey-heading"
          eyebrow="Chronicle"
          title="Academic Path &"
          titleHighlight="Key Milestones"
          description="Verified academic checkpoints and engineering development along my journey as a computer science undergraduate."
          align="center"
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Glowing Connector Line */}
          <div
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald via-emerald/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <ol className="space-y-8 sm:space-y-10" aria-label="Education and journey timeline">
            {timelineItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 90}>
                <li className="relative flex items-start gap-4 sm:gap-7 pl-10 sm:pl-20">
                  {/* Timeline Node Badge */}
                  <div className="absolute left-0 top-1 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                        item.highlight
                          ? 'bg-emerald/15 border-emerald/50 text-emerald shadow-glow-emerald'
                          : 'bg-card border-white/10 text-emerald-light'
                      }`}
                      aria-hidden="true"
                    >
                      {item.type === 'education' ? (
                        <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                      ) : (
                        <Award size={20} className="sm:w-6 sm:h-6" />
                      )}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`flex-1 p-6 sm:p-7 rounded-2xl bg-card border transition-all duration-300 glass-hover ${
                      item.highlight
                        ? 'border-emerald/40 shadow-glow-emerald/30'
                        : 'border-white/10'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-slate-primary font-bold text-base sm:text-lg">
                            {item.title}
                          </h3>
                          {item.highlight && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald bg-emerald/10 px-2 py-0.5 rounded-full border border-emerald/30">
                              <Sparkles size={10} /> Active
                            </span>
                          )}
                        </div>
                        <p className="text-emerald-light text-xs sm:text-sm font-mono mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-muted w-fit">
                        <Calendar size={12} className="text-emerald" />
                        {item.date}
                      </span>
                    </div>

                    <p className="text-slate-muted text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}

            {/* Next Chapter Milestone */}
            <Reveal delay={timelineItems.length * 90}>
              <li className="relative flex items-start gap-4 sm:gap-7 pl-10 sm:pl-20">
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div
                    className="w-9 h-9 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border border-dashed border-emerald/30 bg-card/50 text-emerald"
                    aria-hidden="true"
                  >
                    <Milestone size={20} className="sm:w-6 sm:h-6 opacity-70" />
                  </div>
                </div>

                <div className="flex-1 p-5 sm:p-6 rounded-2xl border border-dashed border-emerald/20 bg-emerald/[0.02]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald">
                      Upcoming Horizons
                    </span>
                    <span className="text-xs font-mono text-slate-muted">2026 & Beyond</span>
                  </div>
                  <p className="text-slate-muted text-xs sm:text-sm leading-relaxed">
                    Preparing for Summer/Fall software engineering internships, technical hackathons, and high-impact open-source contributions.
                  </p>
                </div>
              </li>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  );
}
