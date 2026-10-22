import { Search, X } from 'lucide-react'
import { availableCategories, filterableTechnologies } from '../../utils/projectHelpers.js'

export default function ProjectFilters({ category, technology, query, onChange, resultCount, total }) {
  const hasFilters = Boolean(category || technology || query)

  return (
    <div className="space-y-5">
      <div role="group" aria-label="Filter by category" className="-mx-1 flex flex-wrap gap-2">
        {['', ...availableCategories].map((value) => {
          const active = category === value
          return (
            <button
              key={value || 'all'}
              type="button"
              aria-pressed={active}
              onClick={() => onChange({ category: value })}
              className={`min-h-10 rounded-full border px-4 text-sm transition-colors ${
                active
                  ? 'border-brand bg-brand text-white'
                  : 'border-line-strong bg-ink-900/60 text-muted hover:border-brand/50 hover:text-fg'
              }`}
            >
              {value || 'All'}
            </button>
          )
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]">
        <label className="relative block">
          <span className="sr-only">Search projects by title or technology</span>
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => onChange({ q: event.target.value })}
            placeholder="Search by title or technology…"
            className="min-h-12 w-full rounded-lg border border-line-strong bg-ink-900/70 pr-4 pl-10 text-sm text-fg placeholder:text-subtle focus:border-brand/60 focus:outline-none"
          />
        </label>
        <label className="relative block">
          <span className="sr-only">Filter by technology</span>
          <select
            value={technology}
            onChange={(event) => onChange({ tech: event.target.value })}
            className="min-h-12 w-full appearance-none rounded-lg border border-line-strong bg-ink-900/70 px-4 text-sm text-fg focus:border-brand/60 focus:outline-none"
          >
            <option value="">All technologies</option>
            {filterableTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-subtle"
            aria-hidden="true"
          >
            ▾
          </span>
        </label>
      </div>

      <div className="flex min-h-10 flex-wrap items-center justify-between gap-3 text-sm">
        <p aria-live="polite" className="text-muted">
          Showing <span className="font-medium text-fg">{resultCount}</span> of {total} projects
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={() => onChange({ category: '', tech: '', q: '' })}
            className="inline-flex min-h-10 items-center gap-1.5 text-brand-bright hover:text-fg"
          >
            <X className="size-4" aria-hidden="true" /> Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
