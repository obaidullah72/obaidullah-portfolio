import { Braces, Network, Workflow } from 'lucide-react'
import { getTechIcon } from '../../utils/techIcons.js'

const fallbacks = { rag: Workflow, api: Network }

export default function TechIcon({ name, icon, className = 'size-5' }) {
  const simpleIcon = getTechIcon(icon ?? name)
  if (simpleIcon) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d={simpleIcon.path} />
      </svg>
    )
  }
  const Fallback = fallbacks[icon] ?? Braces
  return <Fallback aria-hidden="true" className={className} />
}
