import { Bot, Smartphone } from 'lucide-react'

// Token colors for the hand-highlighted snippet
const c = {
  key: 'text-[#c4b5fd]',
  prop: 'text-[#93c5fd]',
  str: 'text-[#86efac]',
  pun: 'text-subtle',
  com: 'text-subtle italic',
  bool: 'text-[#fda4af]',
}

const list = (items) =>
  items.flatMap((item, i) => [[`'${item}'`, c.str], ...(i < items.length - 1 ? [[', ', c.pun]] : [])])

const lines = [
  [['// what I work with', c.com]],
  [
    ['export const ', c.key],
    ['engineer', 'text-fg'],
    [' = {', c.pun],
  ],
  [
    ['  name', c.prop],
    [': ', c.pun],
    ["'Obaidullah Mansoor'", c.str],
    [',', c.pun],
  ],
  [
    ['  role', c.prop],
    [': ', c.pun],
    ["'Software Engineer'", c.str],
    [',', c.pun],
  ],
  [['  web', c.prop], [': [', c.pun], ...list(['React', 'Next.js', 'Node.js']), ['],', c.pun]],
  [['  backend', c.prop], [': [', c.pun], ...list(['Python', 'Django', 'FastAPI']), ['],', c.pun]],
  [['  ai', c.prop], [': [', c.pun], ...list(['LangChain', 'RAG']), ['],', c.pun]],
  [['  mobile', c.prop], [': [', c.pun], ...list(['Flutter']), ['],', c.pun]],
  [
    ['  degree', c.prop],
    [': ', c.pun],
    ["'BS Computer Science'", c.str],
    [',', c.pun],
  ],
  [
    ['  openToWork', c.prop],
    [': ', c.pun],
    ['true', c.bool],
    [',', c.pun],
  ],
  [['}', c.pun]],
]

function FloatingChip({ icon: Icon, title, subtitle, className }) {
  return (
    <div
      className={`absolute hidden items-center gap-3 rounded-xl border border-line-strong bg-ink-800/90 py-2.5 pr-4 pl-2.5 shadow-2xl shadow-black/40 backdrop-blur-md sm:flex ${className}`}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-brand/15 text-brand-bright">
        <Icon className="size-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-medium text-fg">{title}</span>
        <span className="block font-mono text-[11px] text-subtle">{subtitle}</span>
      </span>
    </div>
  )
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden="true">
      <div className="glow inset-10 opacity-60" />

      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-900/90 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-line bg-ink-800/80 px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#f87171]/80" />
          <span className="size-2.5 rounded-full bg-[#fbbf24]/80" />
          <span className="size-2.5 rounded-full bg-[#34d399]/80" />
          <span className="ml-3 rounded-md bg-ink-950/70 px-2.5 py-1 font-mono text-[11px] text-muted">
            engineer.js
          </span>
        </div>

        <pre className="overflow-hidden px-4 py-5 font-mono text-[11.5px] leading-6 sm:px-5 sm:text-[13px] sm:leading-7">
          <code>
            {lines.map((tokens, i) => (
              <div key={i} className="flex">
                <span className="mr-4 w-5 shrink-0 text-right text-ink-600 select-none sm:mr-5">{i + 1}</span>
                <span className="whitespace-pre">
                  {tokens.map(([text, cls], j) => (
                    <span key={j} className={cls}>
                      {text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>

        <div className="flex items-center gap-2 border-t border-line bg-ink-950/60 px-4 py-3 font-mono text-[11.5px] sm:px-5 sm:text-xs">
          <span className="text-brand-bright">~/obaidullah72</span>
          <span className="text-subtle">❯</span>
          <span className="text-muted">git push origin main</span>
          <span className="ml-0.5 inline-block h-4 w-[7px] animate-blink bg-brand-bright" />
        </div>
      </div>

      <FloatingChip
        icon={Bot}
        title="RAG pipeline"
        subtitle="LangChain · FAISS"
        className="-top-5 -right-3 animate-float lg:-right-6"
      />
      <FloatingChip
        icon={Smartphone}
        title="Cross-platform apps"
        subtitle="Flutter · Dart"
        className="-right-3 -bottom-8 animate-float [animation-delay:-3.5s] lg:-right-6"
      />
    </div>
  )
}
