import { Braces, Code2, Cpu, Layers3, Wrench } from 'lucide-react';
import { skillCategories } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const categoryDetails: Record<string, { icon: typeof Code2; note: string }> = {
  'Programming Languages': { icon: Code2, note: 'Languages I use to think and build' },
  Frontend: { icon: Layers3, note: 'Interfaces for the web' },
  Backend: { icon: Cpu, note: 'Services and APIs' },
  Tools: { icon: Wrench, note: 'Everyday development tools' },
  'Core Concepts': { icon: Braces, note: 'Foundations I keep strengthening' },
};

export function Skills() {
  return (
    <section id="skills" className="section-padding scroll-mt-16" aria-labelledby="skills-heading">
      <div className="container-custom">
        <SectionHeader
          id="skills-heading"
          eyebrow="Tools & foundations"
          title="A toolkit in"
          titleHighlight="progress."
          description="A practical snapshot of the languages, tools, and concepts I’m working with—without made-up ratings or proficiency scores."
          align="left"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((category, index) => {
            const detail = categoryDetails[category.name];
            const Icon = detail.icon;
            const isWide = index === 4;

            return (
              <Reveal key={category.name} delay={index * 65} className={isWide ? 'sm:col-span-2 lg:col-span-2' : 'sm:col-span-1 lg:col-span-2'}>
                <article className="group h-full rounded-[18px] border border-white/[0.08] bg-[#11111b] p-5 transition-colors duration-300 hover:border-violet/30 hover:bg-[#14141f] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet/15 bg-violet/[0.08] text-violet-light transition-colors group-hover:border-violet/30 group-hover:bg-violet/15">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] text-slate-muted/60">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-base font-medium tracking-tight text-white">{category.name}</h3>
                  <p className="mt-1 text-xs text-slate-muted">{detail.note}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${category.name} skills`}>
                    {category.skills.map((skill) => (
                      <li key={skill} className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-slate-primary/85 transition-colors group-hover:border-white/[0.14] sm:text-[11px]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-5 flex flex-col gap-3 rounded-[18px] border border-white/[0.08] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="max-w-xl text-sm leading-6 text-slate-muted">The common thread: learn the underlying idea, then put it to use in a project.</p>
            <span className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan"><span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Always learning</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
