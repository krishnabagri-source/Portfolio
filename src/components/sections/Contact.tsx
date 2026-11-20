import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  return (
    <section id="contact" className="section-padding scroll-mt-16" aria-labelledby="contact-heading">
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#11111b] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-violet/[0.12] blur-[100px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-36 left-[35%] h-72 w-72 rounded-full bg-cyan/[0.06] blur-[100px]" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan"><span className="h-px w-7 bg-cyan" /> Open to meaningful conversations</p>
                <h2 id="contact-heading" className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.06em] text-white sm:text-6xl">Let&apos;s build something <span className="text-violet-light">meaningful.</span></h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-muted sm:text-base">Have a project idea, a technical question, or an opportunity to share? I&apos;d be glad to connect.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-[#09090f] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">
                  <Github size={16} /> Find me on GitHub <ArrowUpRight size={14} />
                </a>
                <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm text-slate-primary transition-colors hover:border-violet/50 hover:bg-violet/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">
                  <Download size={15} /> Download resume
                </a>
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-muted">Prefer a direct note? Contact details:</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs">
                {personal.email ? (
                  <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 text-slate-primary transition-colors hover:text-cyan"><Mail size={14} />{personal.email}</a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-slate-muted"><Mail size={14} />Email address coming soon</span>
                )}
                {personal.linkedinUrl ? (
                  <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-primary transition-colors hover:text-cyan"><Linkedin size={14} />LinkedIn</a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-slate-muted"><Linkedin size={14} />LinkedIn profile coming soon</span>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
