import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'violet' | 'cyan' | 'neutral';
  className?: string;
  role?: string;
}

export function Badge({ children, variant = 'neutral', className = '', role }: BadgeProps) {
  const variants = {
    violet: 'bg-violet-glow text-violet-light border border-violet/20',
    cyan: 'bg-cyan-glow text-cyan-light border border-cyan/20',
    neutral: 'bg-white/5 text-slate-muted border border-white/10',
  };

  return (
    <span
      role={role}
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium font-mono tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
