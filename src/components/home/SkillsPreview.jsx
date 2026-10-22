import { ArrowRight } from 'lucide-react'
import { skillCategories } from '../../data/skills.js'
import Button from '../common/Button.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import SkillCategory from '../skills/SkillCategory.jsx'

export default function SkillsPreview() {
  return (
    <section className="container-page">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="Six areas, one toolkit."
        description="From interface to model: the technologies I reach for, grouped by where they sit in a product."
        action={
          <Button to="/skills" variant="secondary" size="sm">
            All skills <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.id} category={category} delay={(index % 3) * 0.05} compact />
        ))}
      </div>
    </section>
  )
}
