import ProjectPreview from './ProjectPreview.jsx'

// Designed cover if the project has one, then its first real screenshot,
// otherwise its illustrated preview.
export default function ProjectMedia({ project, className = '', eager = false }) {
  const cover = project.cover ?? project.screenshots[0]
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
        // Covers share the page background, so letterboxing them is seamless and nothing gets cropped
        className={`absolute inset-0 size-full ${project.cover ? 'object-contain' : 'object-cover object-top'}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950/50 via-transparent to-transparent" />
    </div>
  )
}
