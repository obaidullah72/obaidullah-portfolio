import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { profile, socials } from '../data/profile.js'
import { usePageMeta } from '../utils/metadata.js'
import { external } from '../utils/links.js'
import { socialIcons } from '../components/common/icons/socialIcons.js'
import PageHeader from '../components/common/PageHeader.jsx'
import Reveal from '../components/common/Reveal.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    path: '/contact',
    description: 'Get in touch with Obaidullah Mansoor about full-stack, backend, mobile or AI engineering work.',
  })

  const channels = [
    { id: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    ...socials.map((social) => ({
      id: social.id,
      label: social.label,
      value: social.handle,
      href: social.href,
      icon: socialIcons[social.id],
      external: true,
    })),
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something useful together."
        description="Whether it’s a full-time role, a freelance project or a collaboration, I’d like to hear about it. Email is the fastest way to reach me."
      />

      <section className="container-page relative grid gap-10 pb-24 md:pb-32 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div className="glow top-40 -left-40 size-[420px] opacity-40" aria-hidden="true" />

        <Reveal className="relative space-y-4">
          <ul className="space-y-3">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    {...(channel.external ? external : {})}
                    className="card-surface group flex items-center gap-4 p-5"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-bright">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-muted">{channel.label}</span>
                      <span className="block truncate font-medium text-fg">{channel.value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-bright"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
          <p className="flex items-center gap-2 px-1 pt-2 text-sm text-muted">
            <MapPin className="size-4 text-brand-bright" aria-hidden="true" /> Based in {profile.location}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="card-surface relative p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-fg">Send a message</h2>
          <p className="mt-1.5 mb-7 text-sm text-muted">All fields except the subject are required.</p>
          <ContactForm />
        </Reveal>
      </section>
    </>
  )
}
