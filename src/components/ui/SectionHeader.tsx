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
          <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-violet">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={100}>
        <h2
          id={id}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-primary leading-tight"
        >
          {title}
          {titleHighlight && (
            <span className="text-gradient"> {titleHighlight}</span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="text-slate-muted max-w-xl leading-relaxed text-sm sm:text-base md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
