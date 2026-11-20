import { ArrowUpRight, GraduationCap, Trophy, Code2, CalendarDays } from 'lucide-react';
import { timelineItems } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const typeIcons = {
  education: GraduationCap,
  hackathon: Trophy,
  achievement: Code2,
};

export function Journey() {
  return (
    <section id="journey" className="section-padding scroll-mt-16" aria-labelledby="journey-heading">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeader
              id="journey-heading"
              eyebrow="The path so far"
              title="Study, build,"
              titleHighlight="repeat."
              description="A few real markers of the work and learning behind this portfolio."
              align="left"
            />
            <Reveal delay={120}>
              <a href="#projects" className="group inline-flex items-center gap-2 border-b border-white/15 pb-2 text-xs font-mono uppercase tracking-[0.12em] text-slate-muted transition-colors hover:border-cyan/60 hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
                See selected projects <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <ol className="relative" aria-label="Education and project milestones">
            <div className="absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-violet/70 via-white/15 to-transparent" aria-hidden="true" />
            {timelineItems.map((item, index) => {
              const Icon = typeIcons[item.type];
              return (
                <Reveal key={item.id} delay={index * 70}>
                  <li className="relative flex gap-5 border-b border-white/[0.08] py-6 first:pt-0 last:border-0 sm:gap-7 sm:py-7">
                    <span className={`relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${item.highlight ? 'border-violet/40 bg-violet/10 text-violet-light' : 'border-white/10 bg-[#11111b] text-slate-muted'}`} aria-hidden="true">
                      <Icon size={15} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3 className="text-base font-medium tracking-tight text-white sm:text-lg">{item.title}</h3>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-muted"><CalendarDays size={11} />{item.date}</span>
                      </div>
                      <p className="mt-1 text-xs text-cyan sm:text-sm">{item.subtitle}</p>
                      <p className="mt-3 max-w-xl text-xs leading-6 text-slate-muted sm:text-sm">{item.description}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
