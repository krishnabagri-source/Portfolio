import { ArrowUpRight, Github } from 'lucide-react';
import { personal } from '../../data/portfolio';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/10" role="contentinfo">
      <div className="container-custom py-8 sm:py-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#hero" aria-label="Back to top" className="group flex w-fit items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet/20 bg-violet/[0.08] font-mono text-xs text-violet-light">KB.</span>
            <span><span className="block text-sm font-medium text-white">{personal.name}</span><span className="block text-[10px] text-slate-muted">Computer Science · MAIT Delhi</span></span>
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => <a key={link.href} href={link.href} className="text-xs text-slate-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">{link.label}</a>)}
          </nav>

          <div className="flex items-center justify-between gap-5 sm:justify-end">
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex items-center gap-2 text-xs text-slate-muted transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a>
            <p className="text-[10px] text-slate-muted">© {new Date().getFullYear()} {personal.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
