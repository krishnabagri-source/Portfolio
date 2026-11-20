import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'highlight' | 'neutral';
  className?: string;
  role?: string;
}

export function Badge({ children, variant = 'neutral', className = '', role }: BadgeProps) {
  const variants = {
    emerald: 'bg-emerald-glow text-emerald-light border border-emerald/20',
    highlight: 'bg-emerald-glow text-emerald-light border border-emerald/20',
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
