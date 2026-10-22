import ProjectPreview from './ProjectPreview.jsx'

// Real screenshot when the project has one, otherwise its illustrated preview.
export default function ProjectMedia({ project, className = '', eager = false }) {
  const cover = project.screenshots[0]
  if (!cover) return <ProjectPreview type={project.preview} className={className} />

  return (
    <div className={`relative overflow-hidden bg-ink-950 ${className}`}>
      <img
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 size-full object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950/50 via-transparent to-transparent" />
    </div>
  )
}
