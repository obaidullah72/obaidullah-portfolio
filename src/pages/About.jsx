import { ArrowRight, GraduationCap } from 'lucide-react'
import avatar from '../assets/images/avatar.webp'
import { profile, socials } from '../data/profile.js'
import { education } from '../data/education.js'
import { usePageMeta } from '../utils/metadata.js'
import { getProjectsBySlugs } from '../utils/projectHelpers.js'
import { socialIcons } from '../components/common/icons/socialIcons.js'
import PageHeader from '../components/common/PageHeader.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import Button from '../components/common/Button.jsx'
import LayerStack from '../components/about/LayerStack.jsx'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

const principles = [
  {
    title: 'Start from the problem',
    text: 'I try to understand what a feature is for before choosing tools. A plain REST endpoint is often the right answer; an LLM only earns its place when it makes the product more useful.',
  },
  {
    title: 'Own the whole path',
    text: 'I like building across the stack, from data model and API to interface, so that decisions on one side don’t surprise the other.',
  },
  {
    title: 'Be honest about results',
    text: 'In analysis work that means reporting a weak model as weak. In engineering it means documenting what is finished and what is still planned.',
  },
]

const interests = [
  'Retrieval-augmented generation and document Q&A',
  'API design and backend architecture',
  'Cross-platform mobile apps with Flutter',
  'Data-driven applications and analytics',
  'Developer tooling and LLM-assisted coding',
]

export default function About() {
  usePageMeta({
    title: 'About',
    path: '/about',
    description:
      'About Obaidullah Mansoor: software engineer with around three years of software development and 4–5+ years of involvement in data science.',
  })

  const selected = getProjectsBySlugs(['pdf-rag-chatbot', 'vox', 'sales-profitability-analysis'])

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I build software that connects interfaces, APIs and data."
        description={`I’m ${profile.name}, a software engineer from Lahore. My work spans full-stack web, Flutter mobile apps and backend services, with a steady thread of data science and, more recently, AI integration.`}
      />

      <div className="space-y-24 pb-24 md:space-y-32 md:pb-32">
        <section className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <Reveal className="space-y-6 text-lg leading-relaxed text-pretty text-muted md:text-xl md:leading-relaxed">
            <p>
              <span className="text-fg">Software development.</span> Over roughly three years I’ve built React
              frontends, Django, FastAPI and Express APIs, and Flutter apps across university projects, freelance work
              and professional roles. I enjoy the parts in between: authentication, background jobs, integrations with
              services like Gemini, OpenAI, Cloudinary and GitHub, and keeping the code organised as a project grows.
            </p>
            <p>
              <span className="text-fg">Data science.</span> My involvement in data science goes back four to five years
              and sits at an intermediate level: cleaning and exploring datasets with pandas, visualising them, running
              regressions and classical models with scikit-learn and statsmodels, and serving models through APIs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <LayerStack />
          </Reveal>
        </section>

        <section className="container-page">
          <SectionHeading index="01" eyebrow="Philosophy" title="How I approach engineering work." />
          <ol className="grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} delay={index * 0.06} className="card-surface p-7">
                <span className="font-mono text-sm text-brand-bright">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">{principle.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{principle.text}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="container-page grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
            <figure className="card-surface overflow-hidden">
              <div className="relative bg-[radial-gradient(ellipse_at_50%_100%,rgb(59_130_246/0.35),transparent_65%)] px-8 pt-10">
                <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <img
                  src={avatar}
                  alt={`Illustrated avatar of ${profile.name}`}
                  width="480"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="relative mx-auto h-80 w-auto object-contain object-bottom"
                />
              </div>
              <figcaption className="border-t border-line px-6 py-5">
                <span className="block font-medium text-fg">{profile.name}</span>
                <span className="block text-sm text-muted">
                  {profile.title} · {profile.location}
                </span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {socials.map((social) => {
                    const Icon = socialIcons[social.id]
                    return (
                      <Button key={social.id} href={social.href} variant="secondary" size="sm">
                        <Icon className="size-4" /> {social.label}
                      </Button>
                    )
                  })}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-fg">Technical interests</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex gap-3 rounded-xl border border-line bg-ink-900/50 p-4 text-[#cbd5e1]"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                    {interest}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-fg">
                <GraduationCap className="size-6 text-brand-bright" aria-hidden="true" /> Education
              </h2>
              <ul className="mt-5 space-y-4">
                {education.map((item) => (
                  <li key={item.id} className="card-surface p-6">
                    <p className="font-mono text-xs text-brand-bright">{item.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-fg">{item.degree}</h3>
                    <p className="text-sm text-muted">{item.school}</p>
                    {item.highlights.length > 0 && (
                      <ul className="mt-4 grid gap-2 border-t border-line pt-4 text-sm text-[#cbd5e1] sm:grid-cols-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-bright" aria-hidden="true" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="container-page">
          <SectionHeading
            index="02"
            eyebrow="Selected projects"
            title="A few projects that show the range."
            action={
              <Button to="/projects" variant="secondary" size="sm">
                All projects <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            }
          />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selected.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>

        <ContactCTA />
      </div>
    </>
  )
}
