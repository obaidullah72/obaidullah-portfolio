import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects.js'
import { socials } from '../data/site.js'
import { external } from '../utils/links.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard, { FeaturedProjectCard } from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

const featured = projects.filter((project) => project.featured)
const more = projects.filter((project) => !project.featured)
const github = socials.find((social) => social.id === 'github')

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Selected work across web, mobile and AI."
          description="A few projects that show how I approach a problem end to end. Each one links to its source code on GitHub."
        />

        <div className="space-y-8">
          {featured.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} reversed={index % 2 === 1} />
          ))}
        </div>

        <div className="mt-20 mb-8 flex flex-wrap items-end justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">More projects</h3>
          <a
            href={`${github.href}?tab=repositories`}
            {...external}
            className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-brand-bright hover:text-fg"
          >
            All repositories on GitHub
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {more.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={(index % 2) * 0.08} />
          ))}
        </div>

        <Reveal className="mt-6 text-center text-xs text-subtle">
          Previews are illustrations of each app&apos;s interface, not screenshots.
        </Reveal>
      </div>
    </section>
  )
}
