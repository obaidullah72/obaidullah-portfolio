import { Bot, Layout, Server, Smartphone, Wrench } from 'lucide-react'

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    blurb: 'Responsive interfaces with clean state management.',
    skills: ['React.js', 'Next.js', 'JavaScript', 'Redux Toolkit', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    blurb: 'REST APIs, authentication and data modelling.',
    skills: ['Python', 'Django & DRF', 'FastAPI', 'Node.js', 'Express', 'MongoDB', 'SQLite'],
  },
  {
    id: 'ai',
    title: 'AI & LLMs',
    icon: Bot,
    blurb: 'Retrieval pipelines and LLM features inside real products.',
    skills: ['LangChain', 'RAG', 'FAISS', 'OpenAI API', 'Gemini API', 'LLM streaming', 'spaCy'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: Smartphone,
    blurb: 'Cross-platform apps for Android and iOS.',
    skills: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'sqflite'],
  },
  {
    id: 'tools',
    title: 'Tools & workflow',
    icon: Wrench,
    blurb: 'The tooling I use to ship and maintain projects.',
    skills: ['Git', 'GitHub', 'Vite', 'Docker', 'Vercel', 'API integration'],
  },
]
