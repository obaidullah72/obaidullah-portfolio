import { useEffect } from 'react'
import { SITE_URL, profile } from '../data/profile.js'

const DEFAULT_DESCRIPTION =
  'Obaidullah Mansoor is a software engineer building full-stack web apps, Flutter mobile apps and AI-powered products with React, Python, Node.js and LangChain.'

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

// Updates the tags already present in index.html so each route has its own
// title, description, canonical URL and Open Graph values.
export function usePageMeta({ title, description = DEFAULT_DESCRIPTION, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${profile.name}` : `${profile.name} — ${profile.title}`
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [title, description, path])
}
