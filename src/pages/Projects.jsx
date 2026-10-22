import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, SearchX } from 'lucide-react'
import { projects } from '../data/projects.js'
import { GITHUB_URL } from '../data/profile.js'
import { usePageMeta } from '../utils/metadata.js'
import { availableCategories, filterProjects, filterableTechnologies } from '../utils/projectHelpers.js'
import PageHeader from '../components/common/PageHeader.jsx'
import Button from '../components/common/Button.jsx'
import { GithubIcon } from '../components/common/icons/BrandIcons.jsx'
import ProjectFilters from '../components/projects/ProjectFilters.jsx'
import ProjectGrid from '../components/projects/ProjectGrid.jsx'

export default function Projects() {
  usePageMeta({
    title: 'Projects',
    path: '/projects',
    description: `${projects.length} projects by Obaidullah Mansoor across web, mobile, AI, data science and backend development, each with source code on GitHub.`,
  })

  // Filters live in the URL so filtered views can be shared and survive back/forward.
  const [params, setParams] = useSearchParams()
  const rawCategory = params.get('category') ?? ''
  const rawTech = params.get('tech') ?? ''
  const category = availableCategories.includes(rawCategory) ? rawCategory : ''
  const technology = filterableTechnologies.includes(rawTech) ? rawTech : ''
  const query = params.get('q') ?? ''

  const results = useMemo(() => filterProjects({ category, technology, query }), [category, technology, query])

  const updateFilters = (changes) => {
    // Read the live URL rather than the last render's params so rapid successive
    // changes (click a category, then type) never resurrect a stale filter.
    const next = new URLSearchParams(window.location.search)
    Object.entries(changes).forEach(([key, value]) => (value ? next.set(key, value) : next.delete(key)))
    setParams(next, { replace: 'q' in changes, preventScrollReset: true })
  }

  return (
    <>
      <PageHeader
        eyebrow={`Projects · ${projects.length}`}
        title="Work across web, mobile, AI and data."
        description="Every project here is a public repository on my GitHub. Features and stacks are taken from the code itself, and anything still planned is marked as planned."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={GITHUB_URL} variant="secondary">
            <GithubIcon className="size-4" /> github.com/obaidullah72
            <ArrowUpRight className="size-4 text-subtle" aria-hidden="true" />
          </Button>
        </div>
      </PageHeader>

      <section className="container-page pb-24 md:pb-32" aria-label="Project collection">
        <div className="mb-10">
          <ProjectFilters
            category={category}
            technology={technology}
            query={query}
            onChange={updateFilters}
            resultCount={results.length}
            total={projects.length}
          />
        </div>

        {results.length > 0 ? (
          <ProjectGrid projects={results} headingLevel="h2" />
        ) : (
          <div className="card-surface flex flex-col items-center px-6 py-16 text-center">
            <SearchX className="size-8 text-subtle" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-fg">No projects match those filters</h2>
            <p className="mt-2 max-w-sm text-sm text-muted">Try a different search term or clear the filters.</p>
            <Button
              className="mt-6"
              variant="secondary"
              size="sm"
              onClick={() => updateFilters({ category: '', tech: '', q: '' })}
            >
              Clear filters
            </Button>
          </div>
        )}
      </section>
    </>
  )
}
