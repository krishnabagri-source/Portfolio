// ============================================================
// All portfolio content lives here — easy to update.
// Primary Source of Truth: Krishna Bagri Resume (Nov 2026)
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
  roles: ['Software Engineer', 'C++ & DSA Developer', 'CSE (AIML) Undergrad @ MAIT', 'Problem Solver'],
  tagline: 'Crafting performant software with C++, DSA, and modern AI/ML systems.',
  bio: `I'm a Computer Science and Engineering (Artificial Intelligence & Machine Learning) undergraduate at Maharaja Agrasen Institute of Technology (MAIT), Delhi (Aug 2025 – May 2029) with a 9.25 CGPA. 
I focus on strong computer science fundamentals in C, C++, Data Structures & Algorithms, Object-Oriented Programming, and practical exploration of software development and AI-assisted workflows.`,
  bioPoints: [
    'B.Tech in CSE (AIML) at MAIT, Delhi (Aug 2025 – May 2029, CGPA: 9.25)',
    'Strong foundations in C, C++, Data Structures & Algorithms, and OOP',
    'Core DSA: Arrays, Linked Lists, Stacks, Queues, Hashing, Sorting, Searching, Recursion',
    'AI-assisted development of intelligent prototypes and numerical simulations',
  ],
  email: 'bagrikrishna2007@gmail.com',
  phone: '+91 8700759960',
  location: 'New Delhi, India',
  githubUrl: 'https://github.com/krishnabagri-source',
  linkedinUrl: 'https://www.linkedin.com/in/krishna-bagri-750a87382',
  resumeUrl: '/resume.pdf',
};

// ── Social Links ──────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: personal.githubUrl, icon: 'github' },
  { label: 'LinkedIn', url: personal.linkedinUrl, icon: 'linkedin' },
  { label: 'Email', url: `mailto:${personal.email}`, icon: 'mail' },
];

// ── Skills ────────────────────────────────────────────────────
// Directly verified from Krishna's Resume:
export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['C', 'C++', 'Python'],
  },
  {
    name: 'Core Computer Science',
    skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'Numerical Methods', 'Computational Logic'],
  },
  {
    name: 'DSA Topics',
    skills: ['Arrays', 'Strings', 'Linked Lists', 'Stacks', 'Queues', 'Hashing', 'Sorting', 'Searching', 'Recursion'],
  },
  {
    name: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    name: 'Interests & Exploration',
    skills: ['Machine Learning', 'Artificial Intelligence', 'Software Development', 'AI-Assisted Development'],
  },
];

// ── Projects ──────────────────────────────────────────────────
// Preserving all 4 projects with precise real-world details from resume:
export const projects: Project[] = [
  {
    id: 'solarsim',
    title: 'SolarSim',
    tagline: 'Solar Energy Analysis & Numerical Simulation',
    description:
      'Implemented Composite Simpson’s 1/3 Rule and the Trapezoidal Rule in C++ to estimate energy from discrete solar generation and consumption data, paired with an AI-assisted interactive dashboard.',
    problem: 'Discrete solar generation and consumption readings fluctuate continually, requiring precise numerical integration routines to calculate total energy yields and deficits.',
    solution: 'Engineered C++ numerical integration algorithms (Composite Simpson’s 1/3 Rule & Trapezoidal Rule) and built an AI-assisted interactive website supporting user-defined datasets and graphical comparison of results.',
    tags: ['C++', 'Numerical Methods', 'Simpson’s 1/3 Rule', 'Trapezoidal Rule', 'AI-Assisted Web'],
    githubUrl: undefined,
    liveUrl: 'https://solarsim-ruddy.vercel.app',
    screenshotPlaceholder: 'linear-gradient(135deg, #060b14 0%, #03060c 50%, #010205 100%)',
  },
  {
    id: 'travelpilot',
    title: 'TravelPilot',
    tagline: 'AI-Powered Travel Planner Prototype',
    description:
      'Created an AI-assisted travel planning prototype generating day-wise itineraries tailored to destination, dates, budget constraints, and traveler preferences.',
    problem: 'Planning travel itineraries is time-consuming and fragmented, with high risk of scheduling conflicts, transit miscalculations, and rigid plans.',
    solution: 'Developed an AI-assisted planning engine incorporating automated day-by-day itinerary synthesis, scheduling conflict checks, and alternative activity suggestions.',
    tags: ['AI-Assisted Development', 'Python', 'Prompt Engineering', 'Prototyping', 'Itinerary Engine'],
    githubUrl: undefined,
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #0c131a 0%, #091017 50%, #060a0f 100%)',
  },
  {
    id: 'cerebro',
    title: 'CereBro',
    tagline: 'Adaptive Learning Platform Prototype',
    description:
      'Created an adaptive education prototype featuring diagnostic assessments, concept mastery tracking, and personalized study recommendations.',
    problem: 'Traditional learning workflows follow rigid, one-size-fits-all pathways that fail to identify student-specific knowledge gaps or optimize memory retention.',
    solution: 'Engineered an AI-assisted adaptive learning prototype featuring diagnostic assessments, concept mastery tracking, spaced repetition workflows, and learner progress visualization.',
    tags: ['AI-Assisted Development', 'Adaptive Learning', 'Diagnostic Assessment', 'Spaced Repetition', 'Data Visualization'],
    githubUrl: undefined,
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #101018 0%, #0d0d14 50%, #07070b 100%)',
  },
  {
    id: 'languistic',
    title: 'Languistic',
    tagline: 'Communication Barrier Solver Prototype',
    description:
      'Created a communication-focused prototype to rephrase messages with greater empathy, clarity, and accessibility, reducing psychological friction in digital conversations.',
    problem: 'Digital communication often suffers from emotional friction, harsh phrasing, and tone misalignment that create misunderstandings between people.',
    solution: 'Explored human-centered AI workflows to analyze communication tone and generate empathetic, clear message rephrasings that lower psychological barriers.',
    tags: ['AI-Assisted Development', 'Human-Centered AI', 'NLP / Empathy Rephrasing', 'Accessibility', 'Prototype'],
    githubUrl: 'https://github.com/krishnabagri-source/languistic',
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
    description: 'Graduated with 88.2% distinction under CBSE, building a solid analytical foundation in mathematics, logical reasoning, and computer fundamentals.',
    type: 'education',
  },
  {
    id: 'cbse12',
    date: '2025',
    title: 'Completed Class 12 — CBSE',
    subtitle: 'Senior School Certificate (PCM) • 83.2%',
    description: 'Completed senior secondary education in the Physics, Chemistry, and Mathematics (PCM) stream with 83.2% under CBSE, cultivating mathematical logic and problem-solving discipline.',
    type: 'education',
  },
  {
    id: 'mait',
    date: 'Aug 2025 – May 2029',
    title: 'B.Tech in Computer Science & Engineering (AIML)',
    subtitle: 'Maharaja Agrasen Institute of Technology (MAIT), Delhi • CGPA: 9.25',
    description: 'Currently pursuing Bachelor of Technology in CSE with specialization in Artificial Intelligence & Machine Learning (2025–2029). Maintaining an outstanding 9.25 CGPA with a rigorous focus on C, C++, Data Structures & Algorithms, and modern software development.',
    type: 'education',
    highlight: true,
  },
  {
    id: 'touchtyping',
    date: '2025',
    title: 'Touch Typing Proficiency',
    subtitle: '70+ Words Per Minute (WPM)',
    description: 'Achieved high-speed touch typing proficiency exceeding 70 words per minute, enhancing programming productivity, terminal speed, and documentation efficiency.',
    type: 'achievement',
  },
];
