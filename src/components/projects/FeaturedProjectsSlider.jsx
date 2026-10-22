import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { featuredProjects } from '../../utils/projectHelpers.js'
import { external } from '../../utils/links.js'
import { GithubIcon } from '../common/icons/BrandIcons.jsx'
import { TechBadgeList } from '../common/TechBadge.jsx'
import Slider from '../common/Slider.jsx'
import ProjectMedia from './ProjectMedia.jsx'

function FeaturedSlide({ project, index }) {
  return (
    <article className="card-surface grid overflow-hidden lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <ProjectMedia
        project={project}
        className="aspect-[16/10] border-b border-line lg:aspect-auto lg:min-h-[26rem] lg:border-r lg:border-b-0"
        eager={index === 0}
      />
      <div className="flex min-h-[22rem] flex-col p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-xs text-brand-bright">
          <span className="text-subtle">
            {String(index + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
          </span>{' '}
          · {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-pretty text-muted">{project.summary}</p>
        <div className="mt-6">
          <TechBadgeList items={project.technologies.map((tech) => tech.name)} limit={6} />
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Link
            to={`/projects/${project.slug}`}
            className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-bright"
          >
            View details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <a
            href={project.repositories[0].url}
            {...external}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line-strong px-4 text-sm text-fg transition-colors hover:border-brand/50"
          >
            <GithubIcon className="size-4" /> GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default function FeaturedProjectsSlider() {
  return (
    <Slider
      items={featuredProjects}
      label="Featured projects"
      autoplay={7000}
      getSlideLabel={(project, i) => `${project.title}, ${i + 1} of ${featuredProjects.length}`}
      renderSlide={(project, index) => <FeaturedSlide project={project} index={index} />}
    />
  )
}
