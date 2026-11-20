import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  download?: boolean | string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  children,
  leftIcon,
  rightIcon,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs sm:text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base',
  };

  const variants = {
    primary:
      'bg-emerald text-white hover:bg-emerald-dark active:scale-[0.98] shadow-glow-emerald hover:shadow-glow-emerald',
    secondary:
      'bg-white/5 border border-white/10 text-slate-primary hover:bg-white/10 hover:border-emerald/30 active:scale-[0.98]',
    ghost: 'text-slate-muted hover:text-slate-primary hover:bg-white/5 active:scale-[0.98]',
    outline:
      'border border-emerald/40 text-emerald-light hover:bg-emerald-glow hover:border-emerald/60 active:scale-[0.98]',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick as any}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
