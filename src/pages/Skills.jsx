import { LEVELS, skillCategories } from '../data/skills.js'
import { usePageMeta } from '../utils/metadata.js'
import PageHeader from '../components/common/PageHeader.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import SkillsCarousel from '../components/skills/SkillsCarousel.jsx'
import SkillCategory from '../components/skills/SkillCategory.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

const levelDescriptions = {
  Familiar: 'Used in a project or coursework; comfortable reading and extending.',
  'Working knowledge': 'Used in real projects; can build features independently.',
  Intermediate: 'Regular use across several projects; the overall level of my data science work.',
  Experienced: 'Primary tools I use day to day and have shipped multiple projects with.',
}

export default function Skills() {
  usePageMeta({
    title: 'Skills',
    path: '/skills',
    description:
      'Technical skills of Obaidullah Mansoor across frontend, backend, mobile, AI and LLM integration, data science and developer tooling.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Technologies I use to take products from idea to release."
        description="Skills are described with plain-language levels instead of percentages, and each category links to projects where it was used."
      />

      <div className="space-y-24 pb-24 md:space-y-32 md:pb-32">
        <section className="container-page">
          <SectionHeading index="01" eyebrow="Core technologies" title="The tools I reach for most." />
          <SkillsCarousel />
        </section>

        <section className="container-page">
          <SectionHeading
            index="02"
            eyebrow="By category"
            title="Six areas of practice."
            description="From the interface down to data and models."
          />
          <Reveal className="mb-8 grid gap-3 rounded-2xl border border-line bg-ink-900/50 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {LEVELS.map((level, index) => (
              <div key={level}>
                <p className="flex items-center gap-2 text-sm font-medium text-fg">
                  <span className="flex gap-1" aria-hidden="true">
                    {LEVELS.map((name, i) => (
                      <span key={name} className={`h-1.5 w-3 rounded-full ${i <= index ? 'bg-brand-bright' : 'bg-ink-600'}`} />
                    ))}
                  </span>
                  {level}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{levelDescriptions[level]}</p>
              </div>
            ))}
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.id} category={category} delay={(index % 2) * 0.06} />
            ))}
          </div>
        </section>

        <ContactCTA />
      </div>
    </>
  )
}
