import Slider from '../common/Slider.jsx'
import ProjectPreview from './ProjectPreview.jsx'

export default function ProjectGallery({ project }) {
  if (project.screenshots.length === 0) {
    return (
      <figure className="card-surface overflow-hidden">
        <ProjectPreview type={project.preview} className="aspect-[16/9] min-h-80" />
        <figcaption className="border-t border-line px-5 py-4 text-sm text-muted">
          Illustration of the {project.title} interface. No screenshots are published in the repository, and the app
          wasn’t run for this portfolio, so this is a stylised preview rather than a capture.
        </figcaption>
      </figure>
    )
  }

  return (
    <Slider
      items={project.screenshots}
      label={`${project.title} screenshots`}
      getKey={(shot) => shot.src}
      getSlideLabel={(shot, i) => `${shot.caption}, ${i + 1} of ${project.screenshots.length}`}
      renderSlide={(shot) => (
        <figure className="card-surface overflow-hidden">
          <div className="aspect-[16/10] bg-white/[0.02]">
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              loading="lazy"
              decoding="async"
              draggable="false"
              className="size-full object-contain"
            />
          </div>
          <figcaption className="border-t border-line px-5 py-4 text-sm text-muted">{shot.caption}</figcaption>
        </figure>
      )}
    />
  )
}
