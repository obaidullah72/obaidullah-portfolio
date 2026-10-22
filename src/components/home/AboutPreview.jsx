import { ArrowRight } from 'lucide-react'
import avatar from '../../assets/images/avatar.webp'
import { profile } from '../../data/profile.js'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

export default function AboutPreview() {
  return (
    <section className="container-page">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <SectionHeading index="02" eyebrow="About" title="An engineer who likes the whole stack, and the data behind it." className="mb-8!" />
          <Reveal className="space-y-5 text-base leading-relaxed text-pretty text-muted md:text-lg">
            <p>
              I graduated in Computer Science from Superior University in 2024 as a Gold Medalist. Since then most of my
              work has been building complete products: a Django or FastAPI backend, a React or Flutter frontend, and the
              authentication, storage and integrations that connect them.
            </p>
            <p>
              Alongside that I’ve spent several years on data science: cleaning and exploring datasets, regression and
              classical machine learning, and more recently retrieval-augmented generation with LLMs.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <Button to="/about" variant="secondary">
              More about me <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        <Reveal className="mx-auto w-full max-w-sm">
          <figure className="card-surface overflow-hidden">
            <div className="relative bg-[radial-gradient(ellipse_at_50%_100%,rgb(59_130_246/0.35),transparent_65%)] px-8 pt-10">
              <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
              <img
                src={avatar}
                alt={`Illustrated avatar of ${profile.name}`}
                width="480"
                height="720"
                loading="lazy"
                decoding="async"
                className="relative mx-auto h-72 w-auto object-contain object-bottom"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-line px-6 py-5">
              <span>
                <span className="block font-medium text-fg">{profile.name}</span>
                <span className="block text-sm text-muted">{profile.title}</span>
              </span>
              <span className="font-mono text-xs text-subtle">{profile.location}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
