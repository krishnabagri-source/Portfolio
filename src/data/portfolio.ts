// ============================================================
// All portfolio content lives here — easy to update.
// Replace placeholder URLs/text with real values when ready.
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
  screenshotPlaceholder: string; // gradient CSS string shown until real screenshot is added
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
  roles: ['Software Engineer', 'DSA Enthusiast', 'AI/ML Explorer', 'Problem Solver'],
  tagline: 'Turning complex problems into elegant software.',
  bio: `I'm a Computer Science undergraduate at Maharaja Agrasen Institute of Technology (MAIT), Delhi. 
I'm passionate about building real-world software — from intelligent AI systems to performant 
backend services — with a strong foundation in Data Structures & Algorithms and a growing 
interest in machine learning and large language models.`,
  bioPoints: [
    'B.Tech CSE at MAIT, Delhi (2023 – 2027)',
    'Strong foundation in DSA with C++ and competitive programming',
    'Building AI/ML projects and exploring LLM applications',
    'Interested in scalable backend systems and software engineering best practices',
  ],
  email: 'krishnabagri@example.com', // TODO: replace with real email
  location: 'New Delhi, India',
  githubUrl: 'https://github.com/krishnabagri', // TODO: replace with real URL
  linkedinUrl: 'https://linkedin.com/in/krishnabagri', // TODO: replace with real URL
  resumeUrl: '/resume.pdf', // TODO: add resume to public/ folder
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
    githubUrl: undefined, // TODO: add GitHub URL
    liveUrl: undefined,   // TODO: add live URL
    screenshotPlaceholder: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
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
    githubUrl: undefined, // TODO: add GitHub URL
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #0d1117 0%, #1a0533 50%, #2d1b69 100%)',
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
    githubUrl: undefined, // TODO: add GitHub URL
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #000011 0%, #0a0a2e 50%, #001a3a 100%)',
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
    githubUrl: undefined, // TODO: add GitHub URL
    liveUrl: undefined,
    screenshotPlaceholder: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0d2137 100%)',
  },
];

// ── Journey / Timeline ────────────────────────────────────────
export const timelineItems: TimelineItem[] = [
  {
    id: 'mait',
    date: '2023 – Present',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'Maharaja Agrasen Institute of Technology, Delhi',
    description: 'Pursuing CSE with focus on algorithms, software engineering, and AI/ML. Active in coding clubs and technical events.',
    type: 'education',
    highlight: true,
  },
  {
    id: 'cbse12',
    date: '2023',
    title: 'Class XII — CBSE (83.4%)',
    subtitle: 'Senior Secondary Education',
    description: 'Completed senior secondary with PCM stream (83.4%), developing strong analytical thinking, mathematics, and physics foundations.',
    type: 'education',
  },
  {
    id: 'cbse10',
    date: '2021',
    title: 'Class X — CBSE (88.2%)',
    subtitle: 'Secondary Education',
    description: 'Graduated with 88.2% distinction. Developed early passion for computer science and structured problem-solving.',
    type: 'education',
  },
  // TODO: Add hackathons and achievements when details are confirmed
  // {
  //   id: 'hackathon1',
  //   date: 'Month YYYY',
  //   title: 'Hackathon Name',
  //   subtitle: 'Role / Achievement',
  //   description: 'What was built and what was achieved.',
  //   type: 'hackathon',
  //   highlight: true,
  // },
];
