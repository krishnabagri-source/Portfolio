// ============================================================
// All portfolio content lives here — easy to update.
// ============================================================

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshotPlaceholder: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'hackathon' | 'achievement';
  highlight?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail';
}

// ── Personal Info ─────────────────────────────────────────────
export const personal = {
  name: 'Krishna Bagri',
  title: 'Software Engineer in the Making',
  roles: ['Software Engineer', 'C++ & DSA Developer', 'AI/ML Enthusiast', 'Problem Solver'],
  tagline: 'Crafting performant software with C++, DSA, and modern AI/ML systems.',
  bio: `I'm a Computer Science undergraduate at Maharaja Agrasen Institute of Technology (MAIT), Delhi (2025–2029). 
I focus on writing clean, scalable software with deep foundations in C++, Data Structures & Algorithms, 
and practical exploration of machine learning and intelligent systems.`,
  bioPoints: [
    'B.Tech in CSE at MAIT, Delhi (2025 – 2029, Expected)',
    'Strong foundations in C++, Data Structures & Algorithms, and computational logic',
    'Applied AI/ML and intelligent software architecture exploration',
    'Designing scalable backend systems, clean APIs, and modern responsive frontends',
  ],
  email: 'krishnabagri@example.com',
  location: 'New Delhi, India',
  githubUrl: 'https://github.com/krishnabagri-source',
  linkedinUrl: 'https://www.linkedin.com/in/krishna-bagri-750a87382/',
  resumeUrl: '/resume.pdf',
};

// ── Social Links ──────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: personal.githubUrl, icon: 'github' },
  { label: 'LinkedIn', url: personal.linkedinUrl, icon: 'linkedin' },
  { label: 'Email', url: `mailto:${personal.email}`, icon: 'mail' },
];

// ── Skills ────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['React', 'FastAPI', 'Tailwind CSS', 'NumPy', 'Pandas'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Postman'],
  },
  {
    name: 'Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'Machine Learning Basics', 'Problem Solving'],
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'travelpilot',
    title: 'TravelPilot',
    tagline: 'AI-powered travel itinerary planner',
    description:
      'A smart travel planning application that generates personalized trip itineraries using AI, helping users discover destinations, plan routes, and manage travel logistics in one place.',
    problem: 'Planning a trip is fragmented across multiple platforms — research, itinerary building, and budgeting are disconnected.',
    solution: 'TravelPilot unifies trip planning with an AI assistant that generates day-by-day itineraries, recommends places, and adapts plans to user preferences.',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'AI/LLM'],
    githubUrl: undefined,
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #0c131a 0%, #091017 50%, #060a0f 100%)',
  },
  {
    id: 'cerebro',
    title: 'CereBro',
    tagline: 'AI-enhanced knowledge management tool',
    description:
      'A second-brain application that uses AI to help users capture, connect, and retrieve knowledge from notes, documents, and the web with semantic search.',
    problem: 'Information overload makes it hard to retain and connect knowledge across notes, articles, and ideas.',
    solution: 'CereBro uses vector embeddings and semantic search to surface relevant knowledge automatically, creating an intelligent personal knowledge base.',
    tags: ['Python', 'FastAPI', 'Vector DB', 'LLM', 'React'],
    githubUrl: undefined,
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #101018 0%, #0d0d14 50%, #07070b 100%)',
  },
  {
    id: 'solarsim',
    title: 'SolarSim',
    tagline: 'Interactive solar system simulation',
    description:
      'A physics-based 3D simulation of the solar system built with real astronomical data, featuring accurate orbital mechanics, planet scales, and an educational info panel.',
    problem: 'Astronomy education tools are either too simplified or too technical, lacking an engaging visual layer.',
    solution: 'SolarSim renders the solar system with real orbital periods and distances, letting users explore planets interactively with educational overlays.',
    tags: ['TypeScript', 'Three.js', 'Physics', 'WebGL'],
    githubUrl: undefined,
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #060b14 0%, #03060c 50%, #010205 100%)',
  },
  {
    id: 'languistic',
    title: 'Languistic',
    tagline: 'Language learning platform with AI tutoring',
    description:
      'A language learning web app with AI-powered conversation practice, vocabulary building, and adaptive exercises that adjust to learner proficiency.',
    problem: 'Traditional language apps use rigid lesson plans that don\'t adapt to how individual learners progress.',
    solution: 'Languistic uses AI to run adaptive conversation drills, detect weak areas, and personalize vocabulary — simulating a real language tutor.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'AI/LLM'],
    githubUrl: undefined,
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #0c1815 0%, #081210 50%, #040908 100%)',
  },
];

// ── Journey / Timeline (Strict Chronological Order) ────────────
export const timelineItems: TimelineItem[] = [
  {
    id: 'cbse10',
    date: '2023',
    title: 'Completed Class 10 — CBSE',
    subtitle: 'Secondary School Certificate • 88.2%',
    description: 'Graduated with 88.2% distinction under CBSE, building a strong early foundation in mathematics, analytical reasoning, and computer basics.',
    type: 'education',
  },
  {
    id: 'cbse12',
    date: '2025',
    title: 'Completed Class 12 — CBSE',
    subtitle: 'Senior School Certificate (PCM) • 83.2%',
    description: 'Completed senior secondary education in the Physics, Chemistry, and Mathematics (PCM) stream with 83.2% under CBSE, cultivating rigorous mathematical logic and algorithmic intuition.',
    type: 'education',
  },
  {
    id: 'mait',
    date: '2025 – 2029',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'Maharaja Agrasen Institute of Technology (MAIT), Delhi • Currently Pursuing (Expected 2029)',
    description: 'Currently pursuing Bachelor of Technology in CSE (Expected 2029) with dedicated focus on core software engineering, C++, Data Structures & Algorithms, and practical AI/ML.',
    type: 'education',
    highlight: true,
  },
];
