import React from 'react';
import { GraduationCap, Trophy, Award, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { timelineItems } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const typeIcons = {
  education: GraduationCap,
  hackathon: Trophy,
  achievement: Award,
};

export function Journey() {
  return (
    <section id="journey" className="section-padding scroll-mt-16" aria-labelledby="journey-heading">
      <div className="container-custom">
        <SectionHeader
          id="journey-heading"
          eyebrow="Chronicle"
          title="Academic Path &"
          titleHighlight="Milestones"
          description="Verified academic checkpoints and technical growth along my journey as a computer science engineer."
          align="center"
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Glowing Connector Line */}
          <div
            className="absolute left-4 sm:left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald via-emerald/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <ol className="space-y-8 sm:space-y-10" aria-label="Education and journey timeline">
            {timelineItems.map((item, i) => {
              const Icon = typeIcons[item.type] || GraduationCap;

              return (
                <Reveal key={item.id} delay={i * 90}>
                  <li className="relative flex items-start gap-4 sm:gap-6 pl-10 sm:pl-16">
                    {/* Node Dot / Icon */}
                    <div className="absolute left-0 top-1 flex items-center justify-center">
                      <div
                        className={`w-9 h-9 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                          item.highlight
                            ? 'bg-emerald/20 border-emerald/60 text-emerald shadow-glow-emerald'
                            : 'bg-card border-white/10 text-emerald'
                        }`}
                        aria-hidden="true"
                      >
                        <Icon size={18} className="sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Timeline Item Card */}
                    <div
                      className={`flex-1 p-5 sm:p-6 rounded-2xl bg-card border transition-all duration-300 glass-hover ${
                        item.highlight
                          ? 'border-emerald/40 shadow-glow-emerald/40'
                          : 'border-white/5'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-slate-primary font-bold text-base sm:text-lg">
                              {item.title}
                            </h3>
                            {item.highlight && (
                              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-light bg-emerald/10 px-2 py-0.5 rounded-md border border-emerald/20">
                                <Sparkles size={11} /> Current
                              </span>
                            )}
                          </div>
                          <p className="text-emerald text-xs sm:text-sm font-medium mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-slate-muted w-fit">
                          <Calendar size={12} className="text-emerald" />
                          {item.date}
                        </span>
                      </div>

                      <p className="text-slate-muted text-xs sm:text-sm leading-relaxed mt-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}

            {/* Next Chapter Placeholder */}
            <Reveal delay={timelineItems.length * 90}>
              <li className="relative flex items-start gap-4 sm:gap-6 pl-10 sm:pl-16">
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div
                    className="w-9 h-9 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-dashed border-white/20 bg-card/40 text-slate-muted"
                    aria-hidden="true"
                  >
                    <CheckCircle size={18} className="sm:w-5 sm:h-5 text-emerald/50" />
                  </div>
                </div>

                <div className="flex-1 p-5 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
                  <p className="text-slate-muted text-xs sm:text-sm flex items-center gap-2">
                    <span className="text-emerald font-mono">Next up:</span>
                    Software Engineering Internships, open-source contributions, and university hackathons.
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
