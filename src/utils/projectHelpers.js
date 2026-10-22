import { CATEGORIES, projects } from '../data/projects.js'

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)

export const getProjectsBySlugs = (slugs) => slugs.map(getProjectBySlug).filter(Boolean)

export const featuredProjects = projects.filter((project) => project.featured)

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug)
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
  }
}

// Only categories that at least one project belongs to, in the canonical order.
export const availableCategories = CATEGORIES.filter((category) =>
  projects.some((project) => project.categories.includes(category)),
)

// Technologies used by two or more projects make useful filters; one-offs add noise.
export const filterableTechnologies = (() => {
  const counts = new Map()
  projects.forEach((project) =>
    project.technologies.forEach(({ name }) => counts.set(name, (counts.get(name) ?? 0) + 1)),
  )
  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([name]) => name)
    .sort((a, b) => a.localeCompare(b))
})()

export function filterProjects({ category, technology, query }) {
  const needle = query.trim().toLowerCase()
  return projects.filter((project) => {
    if (category && !project.categories.includes(category)) return false
    if (technology && !project.technologies.some((tech) => tech.name === technology)) return false
    if (!needle) return true
    return (
      project.title.toLowerCase().includes(needle) ||
      project.summary.toLowerCase().includes(needle) ||
      project.technologies.some((tech) => tech.name.toLowerCase().includes(needle))
    )
  })
}

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
