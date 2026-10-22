import { Award, GraduationCap, Layers, Sparkles } from 'lucide-react'
import avatar from '../assets/images/avatar.webp'
import { profile } from '../data/site.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const highlights = [
  { icon: GraduationCap, title: 'BS Computer Science', text: 'Superior University, Lahore · 2024' },
  { icon: Award, title: 'Gold Medalist', text: 'Graduated with distinction, CGPA 3.59' },
  { icon: Layers, title: 'Web, mobile and backend', text: 'React, Flutter, Django, FastAPI, Node.js' },
  { icon: Sparkles, title: 'AI-powered features', text: 'RAG, LangChain, OpenAI and Gemini APIs' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading index="01" eyebrow="About" title="Engineer by training, product builder by habit." />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
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
                  className="relative mx-auto h-72 w-auto object-contain object-bottom sm:h-80"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-line px-6 py-5">
                <span>
                  <span className="block font-medium text-fg">{profile.name}</span>
                  <span className="block text-sm text-muted">{profile.title}</span>
                </span>
                <span className="font-mono text-xs text-subtle">{profile.location}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal className="space-y-5 text-base leading-relaxed text-pretty text-muted md:text-lg">
              <p>
                I&apos;m a software engineer from Lahore with a BS in Computer Science from Superior University, where I
                graduated as a Gold Medalist in 2024. I started out building Flutter apps and Python backends, and today
                most of my work spans the whole stack.
              </p>
              <p>
                On a typical project I design the REST API in <span className="text-fg">Django</span>,{' '}
                <span className="text-fg">FastAPI</span> or <span className="text-fg">Express</span>, build the
                interface in <span className="text-fg">React</span> or <span className="text-fg">Flutter</span>, and
                wire the two together with authentication, storage and deployment in mind.
              </p>
              <p>
                Lately I&apos;ve been focused on AI-powered applications: retrieval-augmented chat over documents,
                LLM-driven code generation and speech interfaces. I&apos;m most interested in where these tools make a
                product genuinely more useful, not just more impressive.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 0.06} className="card-surface flex gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand-bright">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-medium text-fg">{item.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">{item.text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
