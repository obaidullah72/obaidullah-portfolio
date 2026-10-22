import { ArrowRight } from 'lucide-react'
import { GITHUB_URL } from '../data/profile.js'
import { usePageMeta } from '../utils/metadata.js'
import Hero from '../components/hero/Hero.jsx'
import Highlights from '../components/home/Highlights.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import SkillsPreview from '../components/home/SkillsPreview.jsx'
import ExperienceSummary from '../components/home/ExperienceSummary.jsx'
import ProjectCategories from '../components/home/ProjectCategories.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import FeaturedProjectsSlider from '../components/projects/FeaturedProjectsSlider.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import TechTicker from '../components/common/TechTicker.jsx'
import Button from '../components/common/Button.jsx'
import { GithubIcon } from '../components/common/icons/BrandIcons.jsx'

export default function Home() {
  usePageMeta({ path: '/' })

  return (
    <>
      <Hero />
      <div className="space-y-24 pb-24 md:space-y-32 md:pb-32">
        <Highlights />

        <section className="container-page" aria-labelledby="featured-heading">
          <SectionHeading
            index="01"
            eyebrow="Featured work"
            title={<span id="featured-heading">Selected projects, built end to end.</span>}
            description="A rotating selection from my GitHub. Each project has a detail page covering features, stack and architecture."
            action={
              <div className="flex flex-wrap gap-2">
                <Button to="/projects" variant="secondary" size="sm">
                  All projects <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href={GITHUB_URL} variant="ghost" size="sm" aria-label="GitHub profile (opens in a new tab)">
                  <GithubIcon className="size-4" /> GitHub
                </Button>
              </div>
            }
          />
          <FeaturedProjectsSlider />
        </section>

        <section aria-label="Technologies I work with" className="border-y border-line bg-ink-900/40 py-8">
          <TechTicker />
        </section>

        <AboutPreview />
        <SkillsPreview />
        <ExperienceSummary />
        <ProjectCategories />
        <ContactCTA />
      </div>
    </>
  )
}
