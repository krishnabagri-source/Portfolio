import colors from 'tailwindcss/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: '#09090F',
      },
      ringOffsetColor: {
        base: '#09090F',
      },
      colors: {
        card: '#12131D',
        'card-hover': '#181A27',
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
          glow: 'rgba(16,185,129,0.15)',
        },
        cyan: {
          DEFAULT: '#38BDF8',
          light: '#7DD3FC',
          glow: 'rgba(56,189,248,0.15)',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          glow: 'rgba(139,92,246,0.15)',
        },
        slate: {
          ...colors.slate,
          primary: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
          border: '#1E2235',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 70%)',
        'gradient-emerald-cyan': 'linear-gradient(135deg, #10B981, #38BDF8)',
        'gradient-emerald': 'linear-gradient(135deg, #10B981, #34D399)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'glow-emerald': '0 0 40px rgba(16,185,129,0.18)',
        'glow-emerald-lg': '0 0 80px rgba(16,185,129,0.22)',
        'glow-cyan': '0 0 40px rgba(56,189,248,0.15)',
        'card': '0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 1px 0 rgba(16,185,129,0.2), 0 12px 32px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
