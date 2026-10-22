import { profile } from '../data/site.js'

export default function Monogram() {
  return (
    <span className="grid size-9 place-items-center rounded-lg border border-brand/40 bg-brand/10 font-mono text-sm font-medium text-brand-bright">
      {profile.initials}
    </span>
  )
}
