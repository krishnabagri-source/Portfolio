import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'neutral' | 'violet';
  className?: string;
  role?: string;
}

export function Badge({ children, variant = 'neutral', className = '', role }: BadgeProps) {
  const variants = {
    emerald: 'bg-emerald/10 text-emerald-light border border-emerald/25 shadow-sm',
    cyan: 'bg-cyan/10 text-cyan-light border border-cyan/25',
    violet: 'bg-violet/10 text-violet-light border border-violet/25',
    neutral: 'bg-white/[0.04] text-slate-muted border border-white/10 hover:border-white/20',
  };

  return (
    <span
      role={role}
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
