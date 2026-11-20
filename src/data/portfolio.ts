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

export const personal = {
  name: 'Krishna Bagri',
  title: 'Software Engineer in the Making',
  roles: ['Software Engineering Enthusiast', 'C++ Developer', 'Problem Solver', 'AI/ML Explorer'],
  tagline: 'Solving problems. Building useful software.',
  bio: 'I’m a Computer Science student at Maharaja Agrasen Institute of Technology, Delhi. I enjoy solving complex problems, building practical software, and exploring intelligent systems through programming and AI.',
  bioPoints: [
    'Computer Science student at MAIT, Delhi',
    'Software engineering and practical product building',
    'Data Structures, Algorithms, and C++',
    'Artificial Intelligence and Machine Learning',
  ],
  email: '',
  location: 'New Delhi, India',
  githubUrl: 'https://github.com/krishnabagri-source',
  linkedinUrl: '',
  resumeUrl: '/resume.pdf',
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: personal.githubUrl, icon: 'github' },
  ...(personal.linkedinUrl ? [{ label: 'LinkedIn', url: personal.linkedinUrl, icon: 'linkedin' as const }] : []),
  ...(personal.email ? [{ label: 'Email', url: `mailto:${personal.email}`, icon: 'mail' as const }] : []),
];

export const skillCategories: SkillCategory[] = [
  { name: 'Programming Languages', skills: ['C++', 'Python', 'C', 'Java'] },
  { name: 'Frontend', skills: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { name: 'Backend', skills: ['FastAPI', 'Python', 'REST APIs'] },
  { name: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] },
  { name: 'Core Concepts', skills: ['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Problem Solving'] },
];

export const projects: Project[] = [
  {
    id: 'travelpilot',
    title: 'TravelPilot',
    tagline: 'AI-powered travel planning',
    description: 'A travel planning application for generating itineraries, scheduling activities, and replanning trips as plans change.',
    problem: 'Trip planning involves coordinating destinations, schedules, and changes across a journey.',
    solution: 'TravelPilot brings itinerary generation, scheduling, and trip replanning into one application.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'SQLite'],
    screenshotPlaceholder: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 'cerebro',
    title: 'CereBro',
    tagline: 'Adaptive learning, shaped around the learner',
    description: 'An adaptive learning platform with diagnostic assessment, personalized recommendations, and learner progress tracking.',
    problem: 'Learners benefit from guidance that responds to their needs and progress.',
    solution: 'CereBro combines diagnostic assessment, personalized recommendations, and progress tracking in one learning experience.',
    tags: ['React', 'TypeScript', 'Adaptive Learning'],
    screenshotPlaceholder: 'linear-gradient(135deg, #0d1117 0%, #1a0533 50%, #2d1b69 100%)',
  },
  {
    id: 'solarsim',
    title: 'SolarSim',
    tagline: 'Exploring solar energy through computation',
    description: 'An interactive solar energy analysis platform that demonstrates numerical integration and data visualization.',
    problem: 'Numerical methods can be difficult to connect to meaningful, observable outcomes.',
    solution: 'SolarSim presents solar energy analysis through interactive calculations and visualized results.',
    tags: ['C++', 'React', 'Numerical Methods'],
    screenshotPlaceholder: 'linear-gradient(135deg, #000011 0%, #0a0a2e 50%, #001a3a 100%)',
  },
  {
    id: 'languistic',
    title: 'Languistic',
    tagline: 'Communication with care',
    description: 'A communication-focused application exploring empathetic and accessible language.',
    problem: 'The words we use can shape how clear and considerate communication feels.',
    solution: 'Languistic explores ways to make everyday communication more empathetic and accessible.',
    tags: ['Communication', 'Accessible Language'],
    screenshotPlaceholder: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0d2137 100%)',
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'mait',
    date: 'Education',
    title: 'Computer Science & Engineering',
    subtitle: 'Maharaja Agrasen Institute of Technology, Delhi',
    description: 'Studying computer science with interests in software engineering, algorithms, and AI/ML.',
    type: 'education',
    highlight: true,
  },
  {
    id: 'deadlock-26',
    date: '2026',
    title: 'DEADLOCK ’26',
    subtitle: 'Technical hackathon participation',
    description: 'Participated in DEADLOCK ’26 as part of a growing interest in collaborative technical challenges.',
    type: 'hackathon',
  },
  {
    id: 'travelpilot-build',
    date: 'Selected project',
    title: 'TravelPilot',
    subtitle: 'AI-powered trip planning',
    description: 'Built an application for itinerary generation, scheduling, and replanning.',
    type: 'achievement',
  },
  {
    id: 'cerebro-build',
    date: 'Selected project',
    title: 'CereBro',
    subtitle: 'Adaptive learning platform',
    description: 'Built a learning experience with diagnostic assessment, personalized recommendations, and progress tracking.',
    type: 'achievement',
  },
];
