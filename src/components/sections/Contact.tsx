import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      form.subject || `Inquiry from ${form.name || 'Portfolio Visitor'}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="section-padding scroll-mt-16" aria-labelledby="contact-heading">
      <div className="container-custom">
        <SectionHeader
          id="contact-heading"
          eyebrow="Initiate Contact"
          title="Let's Build"
          titleHighlight="Something Meaningful"
          description="Have an internship opportunity, an engineering challenge to solve, or want to discuss software systems? My inbox is always open."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal direction="left">
              <div className="p-6 sm:p-7 rounded-2xl bg-card border border-white/10 shadow-card space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald">
                  <Sparkles size={14} />
                  <span>Prompt Response Guaranteed</span>
                </div>

                <div>
                  <h3 className="text-slate-primary font-bold text-lg mb-2">
                    Open for Opportunities
                  </h3>
                  <p className="text-slate-muted text-xs sm:text-sm leading-relaxed">
                    I am actively seeking software engineering internships for 2026/2027. I welcome conversations about engineering teams, technical projects, or open-source software.
                  </p>
                </div>

                {/* Email Quick Copy Box */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-muted uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-slate-primary truncate block">
                      {personal.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald/20 hover:text-emerald text-slate-muted transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Social Channels */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald/40 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-slate-primary group-hover:text-emerald transition-colors">
                        <Github size={16} />
                      </div>
                      <span className="text-xs font-medium text-slate-primary">GitHub</span>
                    </div>
                    <span className="text-xs font-mono text-slate-muted group-hover:text-emerald-light transition-colors">
                      @krishnabagri
                    </span>
                  </a>

                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald/40 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald/10 text-emerald">
                        <Linkedin size={16} />
                      </div>
                      <span className="text-xs font-medium text-slate-primary">LinkedIn</span>
                    </div>
                    <span className="text-xs font-mono text-slate-muted group-hover:text-emerald transition-colors">
                      in/krishnabagri
                    </span>
                  </a>

                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald/40 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald/10 text-emerald-light">
                        <FileText size={16} />
                      </div>
                      <span className="text-xs font-medium text-slate-primary">Resume</span>
                    </div>
                    <span className="text-xs font-mono text-slate-muted group-hover:text-emerald-light transition-colors">
                      PDF Document
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <Reveal delay={150} direction="right">
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-white/10 shadow-card">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={16} className="text-emerald" />
                  <h3 className="text-slate-primary font-bold text-lg">
                    Send a Direct Message
                  </h3>
                </div>
                <p className="text-slate-muted text-xs sm:text-sm mb-6">
                  Fill in your inquiry below to trigger a pre-formatted email in your default client.
                </p>

                {sentNotice ? (
                  <div className="p-8 rounded-2xl bg-emerald/10 border border-emerald/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald/20 text-emerald flex items-center justify-center mx-auto">
                      <Check size={22} />
                    </div>
                    <h4 className="text-slate-primary font-bold text-base">Client Opened!</h4>
                    <p className="text-xs text-slate-muted max-w-sm mx-auto leading-relaxed">
                      Your default mail application has been opened with your message. If it didn't trigger automatically, email me directly at{' '}
                      <span className="text-emerald-light font-mono font-medium">{personal.email}</span>.
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSentNotice(false)}
                      className="mt-3 text-xs"
                    >
                      Compose Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono text-slate-muted mb-1.5"
                        >
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Chen"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-emerald focus:ring-1 focus:ring-emerald transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono text-slate-muted mb-1.5"
                        >
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-emerald focus:ring-1 focus:ring-emerald transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono text-slate-muted mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="SWE Internship Opportunity / Technical Collaboration"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-emerald focus:ring-1 focus:ring-emerald transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono text-slate-muted mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Hi Krishna, I reviewed your portfolio and would like to connect regarding..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-emerald focus:ring-1 focus:ring-emerald transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      rightIcon={<Send size={15} />}
                    >
                      Compose Email
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
