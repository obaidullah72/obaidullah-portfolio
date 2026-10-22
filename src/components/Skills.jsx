import { skillGroups } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'
import SkillCard from './SkillCard.jsx'

// Bento layout: the AI group takes a tall slot on large screens
const spans = {
  frontend: 'lg:col-span-2',
  backend: 'lg:col-span-2',
  ai: 'lg:col-span-2 lg:row-span-2',
  mobile: 'lg:col-span-2',
  tools: 'sm:col-span-2 lg:col-span-2',
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-line bg-ink-900/40 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="A toolkit shaped by shipping real projects."
          description="Grouped by where they fit in a product, from the interface down to the model behind it."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.id} group={group} delay={index * 0.05} className={spans[group.id]} />
          ))}
        </div>
      </div>
    </section>
  )
}
