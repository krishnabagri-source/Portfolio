import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import { personal } from '../../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/5 py-3 shadow-lg'
          : 'bg-base/70 backdrop-blur-md py-4 sm:py-5 border-b border-white/[0.03]'
      }`}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet rounded-md"
          aria-label="Krishna Bagri — back to top"
        >
          <div className="w-8 h-8 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center group-hover:bg-violet/20 group-hover:border-violet/40 transition-colors">
            <Code2 size={16} className="text-violet" />
          </div>
          <span className="font-bold text-slate-primary text-sm tracking-tight">
            {personal.name.split(' ')[0]}
            <span className="text-gradient">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet ${
                    isActive
                      ? 'text-cyan bg-cyan/10 border border-cyan/20'
                      : 'text-slate-muted hover:text-slate-primary hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-violet/30 text-violet-light hover:bg-violet/15 hover:border-violet/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-muted hover:text-slate-primary hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden relative z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="glass border-t border-white/5 px-6 py-4 flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet flex items-center justify-between ${
                  isActive
                    ? 'text-cyan bg-cyan/10 border border-cyan/20'
                    : 'text-slate-muted hover:text-slate-primary hover:bg-white/5'
                }`}
                tabIndex={isOpen ? 0 : -1}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan" />}
              </a>
            );
          })}

          <div className="pt-2 border-t border-white/5 mt-1">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-violet/30 text-violet-light hover:bg-violet/15 text-center transition-all"
              tabIndex={isOpen ? 0 : -1}
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
