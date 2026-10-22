import { ArrowLeft, FolderGit2 } from 'lucide-react'
import { usePageMeta } from '../utils/metadata.js'
import Button from '../components/common/Button.jsx'
import SceneFallback from '../components/three/SceneFallback.jsx'

export default function NotFound() {
  usePageMeta({ title: 'Page not found', path: '/404', description: 'The page you were looking for does not exist.' })

  return (
    <section className="relative isolate overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container-page flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
        <div className="size-40 opacity-80">
          <SceneFallback />
        </div>
        <p className="mt-6 font-mono text-sm text-brand-bright">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">This page doesn’t exist.</h1>
        <p className="mt-4 max-w-md text-muted">The link may be outdated, or the address may have a typo.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to home
          </Button>
          <Button to="/projects" variant="secondary">
            <FolderGit2 className="size-4" aria-hidden="true" /> Browse projects
          </Button>
        </div>
      </div>
    </section>
  )
}
