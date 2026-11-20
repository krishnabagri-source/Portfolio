import { ArrowUpRight, BrainCircuit, Code2, GraduationCap } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const interests = [
  { number: '01', icon: Code2, title: 'Software engineering', text: 'Turning a clear idea into practical, well-structured software.' },
  { number: '02', icon: GraduationCap, title: 'Problem solving', text: 'Building a strong foundation in algorithms, data structures, and C++.' },
  { number: '03', icon: BrainCircuit, title: 'AI & machine learning', text: 'Exploring how intelligent systems can make useful products better.' },
];

export function About() {
  return (
    <section id="about" className="section-padding scroll-mt-16" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeader
          id="about-heading"
          eyebrow="A little about me"
          title="Curiosity, then"
          titleHighlight="craft."
          description="A computer science student drawn to the space between sound fundamentals and useful things people can build with them."
          align="left"
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="left">
            <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#11111b] p-6 sm:min-h-[360px] sm:p-9">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/10 blur-[85px]" aria-hidden="true" />
              <div className="relative flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-muted">
                <span className="h-px w-7 bg-cyan" /> Based in New Delhi
              </div>
              <div className="relative mt-12">
                <p className="font-mono text-xs text-violet-light">{personal.name}</p>
                <h3 className="mt-3 max-w-md text-3xl font-medium leading-tight tracking-[-0.055em] text-white sm:text-4xl">
                  Learning the fundamentals. Building things that put them to work.
                </h3>
              </div>
              <div className="relative mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="text-sm font-medium text-slate-primary">{personal.title}</p>
                  <p className="mt-1 text-xs text-slate-muted">{personal.bioPoints[0]}</p>
                </div>
                <a href="#projects" aria-label="Explore selected projects" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-muted transition-colors hover:border-cyan/40 hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal direction="right" delay={80}>
              <p className="max-w-2xl text-lg leading-8 text-slate-primary/90 sm:text-xl sm:leading-9">{personal.bio}</p>
              <ul className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]" aria-label="Areas of interest">
                {interests.map(({ number, icon: Icon, title, text }) => (
                  <li key={number} className="group flex gap-4 py-5 sm:gap-6">
                    <span className="pt-1 font-mono text-[10px] text-cyan/70">{number}</span>
                    <Icon size={17} className="mt-1 shrink-0 text-violet-light" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-white sm:text-base">{title}</h3>
                      <p className="mt-1.5 max-w-lg text-xs leading-6 text-slate-muted sm:text-sm">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
