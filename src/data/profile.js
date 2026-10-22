export const SITE_URL = 'https://obaidullah-portfolio-six.vercel.app'

export const profile = {
  name: 'Obaidullah Mansoor',
  firstName: 'Obaidullah',
  initials: 'OM',
  title: 'Software Engineer',
  location: 'Lahore, Pakistan',
  email: 'obaidullah3372@gmail.com',
  resume: '/resume.pdf',
  tagline: 'Software engineer building web, mobile and AI-powered products.',
}

export const socials = [
  { id: 'github', label: 'GitHub', handle: '@obaidullah72', href: 'https://github.com/obaidullah72' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/obaidullah72', href: 'https://www.linkedin.com/in/obaidullah72/' },
]

export const GITHUB_URL = socials[0].href

// Experience as described by Obaidullah. Software years include university,
// freelance and professional work, so they are presented as "approximately".
export const highlights = [
  {
    id: 'software',
    value: 3,
    prefix: '~',
    suffix: ' yrs',
    label: 'Software development',
    detail: 'Web, mobile and backend projects across university, freelance and professional work.',
  },
  {
    id: 'data',
    value: 4,
    suffix: '–5+ yrs',
    label: 'Data science involvement',
    detail: 'Analysis, experimentation and implementation at an intermediate level.',
  },
  {
    id: 'repos',
    value: 70,
    suffix: '+',
    label: 'Public repositories',
    detail: 'On GitHub, from Flutter apps to Django and FastAPI services.',
  },
]
