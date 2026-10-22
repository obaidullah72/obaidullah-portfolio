import { profile } from '../../data/profile.js'

export default function Monogram({ className = 'size-9 text-sm' }) {
  return (
    <span
      className={`relative grid place-items-center rounded-lg border border-brand/40 bg-linear-to-br from-brand/20 to-cyan/5 font-mono font-medium text-brand-bright ${className}`}
    >
      {profile.initials}
    </span>
  )
}
