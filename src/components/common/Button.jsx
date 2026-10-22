import { Link } from 'react-router-dom'
import { external } from '../../utils/links.js'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary: 'bg-brand text-white shadow-[0_8px_30px_-12px_rgb(59_130_246/0.8)] hover:bg-brand-bright',
  secondary: 'border border-line-strong bg-ink-900/60 text-fg hover:border-brand/50 hover:bg-ink-850',
  ghost: 'text-muted hover:text-fg',
}

const sizes = {
  sm: 'min-h-10 px-3.5 text-sm',
  md: 'min-h-12 px-5 text-[15px]',
}

// Renders a router Link for internal paths, an anchor for external or file URLs,
// and a button otherwise.
export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    const isExternal = /^https?:/.test(href)
    return (
      <a href={href} className={classes} {...(isExternal ? external : {})} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
