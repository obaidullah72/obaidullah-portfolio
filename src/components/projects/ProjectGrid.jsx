import { AnimatePresence, m } from 'motion/react'
import { ease } from '../../utils/motion.js'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectGrid({ projects, headingLevel }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence initial={false}>
        {projects.map((project) => (
          <m.li
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="h-full"
          >
            <ProjectCard project={project} headingLevel={headingLevel} />
          </m.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
