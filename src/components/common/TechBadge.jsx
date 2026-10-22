export default function TechBadge({ children, as: Component = 'li' }) {
  return (
    <Component className="rounded-md border border-brand/20 bg-brand/[0.07] px-2 py-0.5 font-mono text-[11px] text-[#bfdbfe]">
      {children}
    </Component>
  )
}

export function TechBadgeList({ items, label = 'Tech stack', limit }) {
  const shown = limit ? items.slice(0, limit) : items
  const hidden = items.length - shown.length
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {shown.map((item) => (
        <TechBadge key={item}>{item}</TechBadge>
      ))}
      {hidden > 0 && (
        <li className="rounded-md px-1.5 py-0.5 font-mono text-[11px] text-subtle">
          +{hidden}
          <span className="sr-only"> more</span>
        </li>
      )}
    </ul>
  )
}
