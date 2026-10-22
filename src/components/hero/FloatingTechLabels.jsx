import TechIcon from '../common/TechIcon.jsx'

const labels = [
  { name: 'React', icon: 'react', className: 'top-[10%] left-[2%]', delay: '0s' },
  { name: 'Python', icon: 'python', className: 'top-[6%] right-[6%]', delay: '-2s' },
  { name: 'LangChain', icon: 'langchain', className: 'top-[52%] -right-[2%]', delay: '-4s' },
  { name: 'Flutter', icon: 'flutter', className: 'bottom-[8%] right-[18%]', delay: '-1s' },
  { name: 'FastAPI', icon: 'fastapi', className: 'bottom-[18%] left-[0%]', delay: '-3s' },
]

export default function FloatingTechLabels() {
  return (
    <ul aria-hidden="true">
      {labels.map((label) => (
        <li
          key={label.name}
          className={`absolute hidden animate-float items-center gap-2 rounded-full border border-line-strong bg-ink-850/80 py-1.5 pr-3 pl-2 font-mono text-xs text-muted shadow-lg shadow-black/30 backdrop-blur-md sm:flex ${label.className}`}
          style={{ animationDelay: label.delay }}
        >
          <TechIcon icon={label.icon} className="size-3.5 text-brand-bright" />
          {label.name}
        </li>
      ))}
    </ul>
  )
}
