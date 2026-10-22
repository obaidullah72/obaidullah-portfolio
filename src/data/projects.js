// Every project below maps to a public repository on github.com/obaidullah72.
// Stacks are taken from each repo's package.json, requirements.txt or pubspec.yaml.

const gh = (repo) => `https://github.com/obaidullah72/${repo}`

export const projects = [
  {
    id: 'vox',
    featured: true,
    name: 'Vox',
    category: 'Full-stack · AI',
    summary:
      'An AI code generator. Describe what you need, pick a language, and Vox writes the code with Google Gemini.',
    details: [
      'Save snippets to a personal library or publish them as public GitHub Gists in one click',
      'JWT authentication, Cloudinary profile uploads and email-based password recovery',
      'Usage stats dashboard built on a Node.js + MongoDB REST API',
    ],
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    links: [
      { label: 'Frontend', href: gh('vox_frontend') },
      { label: 'Backend', href: gh('vox_backend') },
    ],
    preview: 'editor',
  },
  {
    id: 'rag-chatbot',
    featured: true,
    name: 'PDF RAG Chatbot',
    category: 'AI · Retrieval-Augmented Generation',
    summary:
      'A FastAPI service that turns uploaded PDFs into a searchable knowledge base and answers questions with cited sources.',
    details: [
      'Page-aware chunking with LangChain text splitters and a persistent FAISS vector index',
      'Swappable providers: OpenAI or Mistral for answers, OpenAI or HuggingFace for embeddings',
      'Per-session conversation memory, with every answer traced back to file and page',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'OpenAI', 'Mistral'],
    links: [{ label: 'Repository', href: gh('rag_fast') }],
    preview: 'chat',
  },
  {
    id: 'speech-to-code',
    featured: true,
    name: 'Speech-to-Code',
    category: 'Mobile · AI',
    summary:
      'A Flutter app that listens to a spoken instruction, generates Python with OpenAI and runs it through a Node.js backend.',
    details: [
      'Live speech-to-text input with an in-app, syntax-highlighted code editor',
      'Express backend handles code generation and remote execution',
    ],
    stack: ['Flutter', 'Dart', 'Node.js', 'Express', 'OpenAI'],
    links: [
      { label: 'App', href: gh('speech-to-code') },
      { label: 'Backend', href: gh('speech2code-backend') },
    ],
    preview: 'phone-voice',
  },
  {
    id: 'interview',
    name: 'AI Interview Platform',
    category: 'Full-stack',
    summary:
      'A Q&A interview app that plays questions aloud, records spoken answers and transcribes them, with history for every session.',
    stack: ['React', 'Tailwind CSS', 'Django REST', 'JWT', 'PocketSphinx'],
    links: [
      { label: 'Frontend', href: gh('interview_fe_auto') },
      { label: 'Backend', href: gh('interview_be_auto') },
    ],
    preview: 'waveform',
  },
  {
    id: 'liferise',
    name: 'LifeRise',
    category: 'Mobile',
    summary:
      'An offline-first Flutter app for routines, habits, reading and journaling, with local reminders and progress charts.',
    stack: ['Flutter', 'Riverpod', 'GoRouter', 'SQLite', 'FL Chart'],
    links: [{ label: 'Repository', href: gh('life-rise') }],
    preview: 'phone-habits',
  },
  {
    id: 'resume-parser',
    name: 'Smart Resume Parser',
    category: 'AI · NLP',
    summary:
      'A Django app that extracts skills, education and experience from PDF, DOCX and scanned resumes, then ranks candidates against a role.',
    stack: ['Django', 'spaCy', 'EasyOCR', 'pdfminer'],
    links: [{ label: 'Repository', href: gh('cv_shortlister') }],
    preview: 'document',
  },
  {
    id: 'ebook',
    name: 'Ebook Marketplace',
    category: 'Full-stack',
    summary:
      'A store where customers browse, buy and download ebooks, with role-based admin tooling behind a JWT-secured REST API.',
    stack: ['React', 'React Router', 'Tailwind CSS', 'Django REST', 'JWT'],
    links: [
      { label: 'Frontend', href: gh('ebook-fe') },
      { label: 'Backend', href: gh('ebook-be') },
    ],
    preview: 'store',
  },
]
