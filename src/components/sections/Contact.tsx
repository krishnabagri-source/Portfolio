import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Send, Check, Copy, Sparkles } from 'lucide-react';
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
          titleHighlight="Something Great"
          description="Have an internship opportunity, a project to collaborate on, or want to discuss software engineering? My inbox is always open."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct channels and Quick Copy */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal direction="left">
              <div className="p-6 rounded-2xl bg-card border border-white/5 shadow-card space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan">
                  <Sparkles size={14} />
                  <span>Prompt Response Guaranteed</span>
                </div>

                <div>
                  <h3 className="text-slate-primary font-bold text-lg mb-2">
                    Let's Connect
                  </h3>
                  <p className="text-slate-muted text-xs sm:text-sm leading-relaxed">
                    I am actively seeking software engineering internship opportunities for Summer/Fall 2026.
                    Feel free to reach out directly via email or LinkedIn.
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
                    className="p-2 rounded-lg bg-white/5 hover:bg-violet/20 hover:text-violet text-slate-muted transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Social channels */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-slate-primary">
                        <Github size={16} />
                      </div>
                      <span className="text-xs font-medium text-slate-primary">GitHub</span>
                    </div>
                    <span className="text-xs font-mono text-slate-muted group-hover:text-violet-light transition-colors">
                      @krishnabagri
                    </span>
                  </a>

                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan/10 text-cyan">
                        <Linkedin size={16} />
                      </div>
                      <span className="text-xs font-medium text-slate-primary">LinkedIn</span>
                    </div>
                    <span className="text-xs font-mono text-slate-muted group-hover:text-cyan transition-colors">
                      in/krishnabagri
                    </span>
                  </a>

                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-violet/10 text-violet-light">
                        <FileText size={16} />
                      </div>
                      <span className="text-xs font-medium text-slate-primary">Resume</span>
                    </div>
                    <span className="text-xs font-mono text-slate-muted group-hover:text-violet-light transition-colors">
                      PDF Document
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={150} direction="right">
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-white/5 shadow-card">
                <h3 className="text-slate-primary font-bold text-lg mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-slate-muted text-xs sm:text-sm mb-6">
                  Fill in your details below to quickly open a pre-formatted email in your default client.
                </p>

                {sentNotice ? (
                  <div className="p-6 rounded-xl bg-violet/10 border border-violet/30 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-violet/20 text-violet flex items-center justify-center mx-auto">
                      <Check size={20} />
                    </div>
                    <h4 className="text-slate-primary font-bold text-base">Client Opened!</h4>
                    <p className="text-xs text-slate-muted max-w-sm mx-auto">
                      Your default email application was triggered with your message. If it didn't open, reach out directly at{' '}
                      <span className="text-violet-light font-mono">{personal.email}</span>.
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSentNotice(false)}
                      className="mt-2 text-xs"
                    >
                      Reset Form
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
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Chen"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono text-slate-muted mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet transition-colors"
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
                        placeholder="Internship opportunity / project discussion"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet transition-colors"
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
                        placeholder="Hi Krishna, I came across your portfolio and wanted to reach out regarding..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-primary text-sm placeholder:text-slate-muted/50 focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet transition-colors resize-none"
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
