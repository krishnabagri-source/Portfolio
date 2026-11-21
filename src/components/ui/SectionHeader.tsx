import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 mb-12 sm:mb-16 ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-[0.2em] uppercase text-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={100}>
        <h2
          id={id}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-primary tracking-tight leading-tight"
        >
          {title}
          {titleHighlight && (
            <span className="text-gradient"> {titleHighlight}</span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="text-slate-muted max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
