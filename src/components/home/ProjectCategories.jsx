import { Link } from 'react-router-dom'
import { ArrowUpRight, Bot, Layout, LineChart, Server, Smartphone } from 'lucide-react'
import { projects } from '../../data/projects.js'
import { availableCategories } from '../../utils/projectHelpers.js'
import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const icons = {
  'Web Development': Layout,
  'Mobile Applications': Smartphone,
  'AI & Machine Learning': Bot,
  'Data Science': LineChart,
  'Backend Development': Server,
}

export default function ProjectCategories() {
  return (
    <section className="container-page">
      <SectionHeading index="05" eyebrow="Browse" title="Explore projects by category." />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {availableCategories.map((category, index) => {
          const Icon = icons[category]
          const count = projects.filter((project) => project.categories.includes(category)).length
          return (
            <Reveal as="li" key={category} delay={index * 0.05}>
              <Link
                to={`/projects?category=${encodeURIComponent(category)}`}
                className="card-surface group flex h-full flex-col p-5 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-brand-bright" aria-hidden="true" />
                  <ArrowUpRight
                    className="size-4 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-bright"
                    aria-hidden="true"
                  />
                </div>
                <span className="mt-6 font-medium text-fg">{category}</span>
                <span className="mt-1 text-sm text-muted">
                  {count} project{count === 1 ? '' : 's'}
                </span>
              </Link>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
