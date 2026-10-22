// Experience as described by Obaidullah, and roles as listed on the previous
// version of this portfolio. Year-by-year work is based on public repository activity.

export const experienceOverview = [
  {
    id: 'software',
    title: 'Software development',
    span: '~3 years',
    level: null,
    description:
      'Building web, mobile and backend applications across university projects, freelance work and professional roles: React frontends, Django, FastAPI and Express APIs, Flutter apps and AI integrations.',
    focus: [
      'Frontend engineering',
      'Backend and API development',
      'Full-stack applications',
      'Mobile apps',
      'AI-powered features',
    ],
  },
  {
    id: 'data',
    title: 'Data science',
    span: '4–5+ years',
    level: 'Intermediate',
    description:
      'Involvement in data science and analytics since before graduation: cleaning and exploring datasets, visualisation, statistical testing, regression and classical machine learning, plus putting models behind APIs.',
    focus: [
      'Data cleaning and EDA',
      'Visualisation',
      'Regression and classical ML',
      'Experimentation in notebooks',
      'Serving models via APIs',
    ],
  },
]

export const roles = [
  {
    id: 'flutter-dev',
    role: 'Flutter Developer',
    period: 'Oct 2025 — Present',
    current: true,
    description: 'Developing cross-platform mobile applications with Flutter for Android and iOS.',
    tags: ['Flutter', 'Dart'],
  },
  {
    id: 'python-associate',
    role: 'Python Associate Engineer',
    period: 'Jun 2025 — Present',
    current: true,
    description: 'Building and maintaining scalable Python applications.',
    tags: ['Python', 'Django'],
  },
  {
    id: 'python-intern',
    role: 'Python Intern',
    period: 'Jan 2025 — May 2025',
    description: 'Gained hands-on experience in Python development and contributed to a range of projects.',
    tags: ['Python'],
  },
]

// Selected work grouped by the year of each repository's latest activity.
export const projectTimeline = [
  {
    year: '2026',
    title: 'RAG, streaming and scheduled data collection',
    description:
      'Retrieval-augmented chat over PDFs, LLM streaming, a scheduled scraping pipeline and an offline-first Flutter app.',
    projects: ['pdf-rag-chatbot', 'llm-streaming-demo', 'leadharvester', 'liferise'],
    tags: ['FastAPI', 'FAISS', 'Gemini', 'PostgreSQL', 'Flutter'],
  },
  {
    year: '2025',
    title: 'Full-stack and AI applications',
    description:
      'React frontends paired with Express and Django REST backends, LLM code generation, speech interfaces, resume parsing and a served ML model.',
    projects: ['vox', 'ai-interview-platform', 'speech-to-code', 'smart-resume-parser', 'house-price-prediction'],
    tags: ['React', 'Node.js', 'Django REST', 'OpenAI', 'spaCy'],
  },
  {
    year: '2024',
    title: 'Data analysis and Flutter apps',
    description:
      'Sales and profitability analysis in Jupyter, a series of Flutter apps with local databases, and graduation.',
    projects: ['sales-profitability-analysis'],
    tags: ['pandas', 'statsmodels', 'scikit-learn', 'Flutter', 'sqflite'],
  },
]
