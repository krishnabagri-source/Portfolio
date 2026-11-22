import React from 'react';
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from 'lucide-react';
import { personal } from '../../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-black/40" role="contentinfo">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <Code2 size={16} className="text-emerald" />
              <span className="font-bold text-slate-primary text-sm">
                {personal.name.split(' ')[0]}
                <span className="text-emerald">.dev</span>
              </span>
            </div>
            <p className="text-slate-muted text-xs">
              CSE (AIML) Undergrad @ MAIT Delhi • CGPA: 9.25
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-muted hover:text-slate-primary hover:border-emerald/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
            >
              <Github size={16} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-muted hover:text-emerald hover:border-emerald/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send email"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-muted hover:text-emerald-light hover:border-emerald/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <p className="text-slate-muted text-xs flex items-center gap-1.5">
              © {year} {personal.name}. Built with
              <Heart size={14} className="text-rose-500 fill-rose-500" aria-label="love" />
            </p>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-muted hover:text-emerald-light hover:border-emerald/40 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
