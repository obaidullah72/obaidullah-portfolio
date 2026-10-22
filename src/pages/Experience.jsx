import { Briefcase, Code2, FolderGit2, GraduationCap, LineChart } from 'lucide-react'
import { experienceOverview, projectTimeline, roles } from '../data/experience.js'
import { education } from '../data/education.js'
import { usePageMeta } from '../utils/metadata.js'
import PageHeader from '../components/common/PageHeader.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import ExperienceTimeline from '../components/experience/ExperienceTimeline.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

const icons = { software: Code2, data: LineChart }

export default function Experience() {
  usePageMeta({
    title: 'Experience',
    path: '/experience',
    description:
      'Around three years of software development and 4–5+ years of involvement in data science, plus roles, project timeline and education.',
  })

  const roleEntries = roles.map((role) => ({ ...role, title: role.role }))
  const timelineEntries = projectTimeline.map((entry) => ({ ...entry, id: entry.year, period: entry.year }))
  const educationEntries = education.map((item) => ({
    id: item.id,
    period: item.period,
    title: item.degree,
    subtitle: item.school,
    description: item.highlights.join(' · '),
  }))

  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Software development and data science, side by side."
        description="Around three years of building software, and a longer involvement in data science at an intermediate level. Years include university, freelance and professional work rather than only full-time employment."
      />

      <div className="space-y-24 pb-24 md:space-y-32 md:pb-32">
        <section className="container-page grid gap-4 lg:grid-cols-2" aria-label="Experience overview">
          {experienceOverview.map((track, index) => {
            const Icon = icons[track.id]
            return (
              <Reveal key={track.id} delay={index * 0.08} className="card-surface relative overflow-hidden p-7 md:p-9">
                <div className="glow -top-24 -right-24 size-64 opacity-40" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-bright">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    {track.level && (
                      <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs text-cyan">
                        Level: {track.level}
                      </span>
                    )}
                  </div>
                  <p className="mt-6 text-4xl font-semibold tracking-tight text-fg">{track.span}</p>
                  <h2 className="mt-1 text-lg font-medium text-fg">{track.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{track.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {track.focus.map((item) => (
                      <li key={item} className="rounded-md border border-line bg-ink-950/50 px-2.5 py-1 text-xs text-[#cbd5e1]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </section>

        <section className="container-page grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              eyebrow={
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="size-3.5" aria-hidden="true" /> Roles
                </span>
              }
              title="Professional roles"
              description="As listed on my previous portfolio."
            />
            <ExperienceTimeline entries={roleEntries} />
          </div>
          <div>
            <SectionHeading
              eyebrow={
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="size-3.5" aria-hidden="true" /> Education
                </span>
              }
              title="Education"
            />
            <ExperienceTimeline entries={educationEntries} />
          </div>
        </section>

        <section className="container-page">
          <SectionHeading
            eyebrow={
              <span className="inline-flex items-center gap-2">
                <FolderGit2 className="size-3.5" aria-hidden="true" /> Project timeline
              </span>
            }
            title="What I’ve been building, year by year."
            description="Grouped by each repository’s most recent activity on GitHub."
          />
          <ExperienceTimeline entries={timelineEntries} />
        </section>

        <ContactCTA />
      </div>
    </>
  )
}
