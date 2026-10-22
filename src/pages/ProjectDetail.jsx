import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, CircleDashed, Lightbulb } from 'lucide-react'
import { m } from 'motion/react'
import { GITHUB_URL } from '../data/profile.js'
import { usePageMeta } from '../utils/metadata.js'
import { formatDate, getAdjacentProjects, getProjectBySlug } from '../utils/projectHelpers.js'
import { ease } from '../utils/motion.js'
import { external } from '../utils/links.js'
import Button from '../components/common/Button.jsx'
import Reveal from '../components/common/Reveal.jsx'
import TechIcon from '../components/common/TechIcon.jsx'
import { GithubIcon } from '../components/common/icons/BrandIcons.jsx'
import ProjectMedia from '../components/projects/ProjectMedia.jsx'
import ProjectGallery from '../components/projects/ProjectGallery.jsx'
import ProjectArchitecture from '../components/projects/ProjectArchitecture.jsx'
import NotFound from './NotFound.jsx'

function DetailSection({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <Reveal>
        <h2 id={`${id}-heading`} className="mb-6 flex items-center gap-3 text-2xl font-semibold tracking-tight text-fg">
          <span className="h-px w-6 bg-brand-bright" aria-hidden="true" />
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

function MetaRow({ label, children }) {
  return (
    <div className="py-3.5">
      <dt className="font-mono text-[11px] tracking-[0.15em] text-subtle uppercase">{label}</dt>
      <dd className="mt-1.5 text-sm text-[#e2e8f0]">{children}</dd>
    </div>
  )
}

function ProjectNavLink({ project, direction }) {
  const isNext = direction === 'next'
  if (!project) {
    return (
      <div className="hidden rounded-xl border border-dashed border-line p-5 text-sm text-subtle sm:block">
        {isNext ? 'This is the last project' : 'This is the first project'}
      </div>
    )
  }
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`card-surface group flex flex-col p-5 ${isNext ? 'sm:items-end sm:text-right' : ''}`}
    >
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
        {!isNext && <ArrowLeft className="size-3.5" aria-hidden="true" />}
        {isNext ? 'Next project' : 'Previous project'}
        {isNext && <ArrowRight className="size-3.5" aria-hidden="true" />}
      </span>
      <span className="mt-2 font-medium text-fg group-hover:text-brand-bright">{project.title}</span>
      <span className="text-sm text-muted">{project.category}</span>
    </Link>
  )
}

function ProjectDetailContent({ project }) {
  usePageMeta({ title: project.title, path: `/projects/${project.slug}`, description: project.summary })
  const { previous, next } = getAdjacentProjects(project.slug)
  const { overview } = project
  const frameworks = project.technologies.map((tech) => tech.name).join(', ')

  return (
    <>
      {/* A. Project hero */}
      <header className="relative isolate overflow-hidden pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="glow -top-40 right-0 -z-10 h-[420px] w-[620px] opacity-50" aria-hidden="true" />
        <div className="container-page">
          <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg">
            <ArrowLeft className="size-4" aria-hidden="true" /> All projects
          </Link>

          <div className="mt-6 grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              <ul className="flex flex-wrap gap-2" aria-label="Categories">
                {project.categories.map((category) => (
                  <li key={category}>
                    <Link
                      to={`/projects?category=${encodeURIComponent(category)}`}
                      className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs text-brand-bright hover:border-brand/60"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
              <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-fg sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{project.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                {project.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line-strong bg-ink-900/70 px-2.5 py-1 text-xs text-[#cbd5e1]"
                  >
                    <TechIcon name={tech.name} className="size-3.5 text-brand-bright" />
                    {tech.name}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.repositories.map((repo, index) => (
                  <Button key={repo.url} href={repo.url} variant={index === 0 ? 'primary' : 'secondary'}>
                    <GithubIcon className="size-4" />
                    {project.repositories.length > 1 ? `${repo.label} repository` : 'View on GitHub'}
                    <ArrowUpRight className="size-4 opacity-70" aria-hidden="true" />
                  </Button>
                ))}
                {project.liveUrl && (
                  <Button href={project.liveUrl} variant="secondary">
                    Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="card-surface overflow-hidden"
            >
              <ProjectMedia project={project} className="aspect-[16/10]" eager />
            </m.div>
          </div>
        </div>
      </header>

      <div className="container-page grid grid-cols-[minmax(0,1fr)] gap-14 pb-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="space-y-20">
          {/* B. Overview */}
          <DetailSection id="overview" title="Overview">
            <Reveal className="space-y-4 text-lg leading-relaxed text-pretty text-muted">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
            <Reveal>
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ['What it does', overview.what],
                  ['Problem it addresses', overview.problem],
                  ['Main objective', overview.objective],
                  ['Intended for', overview.audience],
                ]
                  .filter(([, value]) => value)
                  .map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-line bg-ink-900/50 p-5">
                      <dt className="font-mono text-[11px] tracking-[0.15em] text-brand-bright uppercase">{label}</dt>
                      <dd className="mt-2 leading-relaxed text-[#cbd5e1]">{value}</dd>
                    </div>
                  ))}
              </dl>
            </Reveal>
          </DetailSection>

          {/* C. Features */}
          <DetailSection id="features" title="Features">
            <Reveal>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 rounded-xl border border-line bg-ink-900/40 p-4 text-[#e2e8f0]">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-bright" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            {project.planned.length > 0 && (
              <Reveal className="mt-6 rounded-xl border border-dashed border-line-strong p-5">
                <h3 className="text-sm font-medium text-fg">Planned or partially implemented</h3>
                <ul className="mt-3 space-y-2">
                  {project.planned.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <CircleDashed className="mt-0.5 size-4 shrink-0 text-subtle" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </DetailSection>

          {/* D. Technology stack */}
          <DetailSection id="stack" title="Technology stack">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.technologies.map((tech, index) => (
                <Reveal as="li" key={tech.name} delay={(index % 2) * 0.05} className="card-surface flex gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand-bright">
                    <TechIcon name={tech.name} className="size-5" />
                  </span>
                  <span>
                    <span className="block font-medium text-fg">{tech.name}</span>
                    <span className="block font-mono text-[11px] tracking-wide text-brand-bright uppercase">{tech.role}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted">{tech.usage}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </DetailSection>

          {/* E. Architecture */}
          {project.architecture && (
            <DetailSection id="architecture" title="Architecture and implementation">
              <ProjectArchitecture architecture={project.architecture} />
            </DetailSection>
          )}

          {/* F. Challenges */}
          {project.challenges.length > 0 && (
            <DetailSection id="challenges" title="Challenges and design decisions">
              <ul className="space-y-4">
                {project.challenges.map((item, index) => (
                  <Reveal as="li" key={item.challenge} delay={index * 0.05} className="card-surface grid gap-4 p-6 md:grid-cols-2 md:gap-8">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.15em] text-subtle uppercase">Challenge</p>
                      <p className="mt-2 leading-relaxed text-fg">{item.challenge}</p>
                    </div>
                    <div className="border-t border-line pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                      <p className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] text-brand-bright uppercase">
                        <Lightbulb className="size-3.5" aria-hidden="true" /> Approach
                      </p>
                      <p className="mt-2 leading-relaxed text-muted">{item.solution}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <p className="mt-4 text-xs text-subtle">Based on what the source code and documentation show.</p>
            </DetailSection>
          )}

          {/* G. Gallery */}
          <DetailSection id="gallery" title={project.screenshots.length > 0 ? 'Screenshots' : 'Preview'}>
            <ProjectGallery project={project} />
            {project.screenshotNote && <p className="mt-4 text-xs text-subtle">{project.screenshotNote}</p>}
          </DetailSection>
        </div>

        {/* H. Metadata */}
        <aside aria-label="Project details" className="lg:sticky lg:top-24 lg:self-start">
          <div className="card-surface p-6">
            <h2 className="text-sm font-semibold text-fg">Project details</h2>
            <dl className="mt-2 divide-y divide-line">
              <MetaRow label="Primary language">{project.primaryLanguage}</MetaRow>
              <MetaRow label="Frameworks & libraries">{frameworks}</MetaRow>
              <MetaRow label={project.repositories.length > 1 ? 'Repositories' : 'Repository'}>
                <ul className="space-y-1">
                  {project.repositories.map((repo) => (
                    <li key={repo.url}>
                      <a href={repo.url} {...external} className="break-all text-brand-bright hover:text-fg">
                        {repo.url.replace('https://github.com/', '')}
                      </a>
                    </li>
                  ))}
                </ul>
              </MetaRow>
              <MetaRow label="Live demo">
                {project.liveUrl ? (
                  <a href={project.liveUrl} {...external} className="text-brand-bright hover:text-fg">
                    {project.liveUrl.replace(/^https?:\/\//, '')}
                  </a>
                ) : (
                  <span className="text-muted">No public deployment</span>
                )}
              </MetaRow>
              <MetaRow label="License">
                <span className="text-muted">Not specified in the repository</span>
              </MetaRow>
              <MetaRow label="Last updated">{formatDate(project.lastUpdated)}</MetaRow>
              {project.status && <MetaRow label="Status">{project.status}</MetaRow>}
            </dl>
          </div>
        </aside>
      </div>

      {/* I. Navigation between projects */}
      <nav aria-label="More projects" className="container-page pb-24 md:pb-32">
        <div className="hairline mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectNavLink project={previous} direction="previous" />
          <ProjectNavLink project={next} direction="next" />
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-900/50 p-6 sm:flex-row sm:items-center md:p-8">
          <div>
            <p className="font-medium text-fg">Interested in work like this?</p>
            <p className="mt-1 text-sm text-muted">I’m happy to talk through how it was built or what you’re planning.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/projects" variant="ghost" size="sm">
              <ArrowLeft className="size-4" aria-hidden="true" /> All projects
            </Button>
            <Button href={GITHUB_URL} variant="secondary" size="sm">
              <GithubIcon className="size-4" /> GitHub profile
            </Button>
            <Button to="/contact" size="sm">
              Contact me
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <NotFound />
  // Keyed so per-project state (gallery position) resets when moving between projects.
  return <ProjectDetailContent key={project.slug} project={project} />
}
