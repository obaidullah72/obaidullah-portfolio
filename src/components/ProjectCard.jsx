import { ArrowUpRight, Check } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons.jsx'
import { external } from '../utils/links.js'
import ProjectPreview from './ProjectPreview.jsx'
import Reveal from './Reveal.jsx'

function StackList({ stack }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-brand/20 bg-brand/[0.07] px-2 py-0.5 font-mono text-[11px] text-[#bfdbfe]"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          {...external}
          aria-label={`${project.name}: ${link.label} on GitHub (opens in a new tab)`}
          className="group/link inline-flex min-h-10 items-center gap-2 rounded-lg border border-line-strong bg-ink-950/40 px-3.5 text-sm text-fg transition-colors hover:border-brand/50 hover:bg-brand/10"
        >
          <GithubIcon className="size-4 text-muted group-hover/link:text-fg" />
          {link.label}
          <ArrowUpRight
            className="size-3.5 text-subtle transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  )
}

export function FeaturedProjectCard({ project, index, reversed }) {
  return (
    <Reveal as="article" className="card-surface grid overflow-hidden lg:grid-cols-2">
      <ProjectPreview
        type={project.preview}
        className={`min-h-72 border-line lg:min-h-[26rem] ${reversed ? 'border-b lg:order-2 lg:border-b-0 lg:border-l' : 'border-b lg:border-r lg:border-b-0'}`}
      />
      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-xs text-brand-bright">
          <span className="text-subtle">{String(index + 1).padStart(2, '0')} /</span> {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{project.name}</h3>
        <p className="mt-4 leading-relaxed text-pretty text-muted">{project.summary}</p>
        <ul className="mt-6 space-y-2.5">
          {project.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm leading-relaxed text-[#cbd5e1]">
              <Check className="mt-0.5 size-4 shrink-0 text-brand-bright" aria-hidden="true" />
              {detail}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-6 pt-8">
          <StackList stack={project.stack} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  )
}

export default function ProjectCard({ project, delay }) {
  return (
    <Reveal as="article" delay={delay} className="card-surface flex flex-col overflow-hidden hover:-translate-y-1">
      <ProjectPreview type={project.preview} className="h-80 border-b border-line" />
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-brand-bright">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{project.summary}</p>
        <div className="mt-auto space-y-5 pt-6">
          <StackList stack={project.stack} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  )
}
