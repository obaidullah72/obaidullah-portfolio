import { Check, FileText, Mic, Save, Search, Share2, Sparkles } from 'lucide-react'

// Illustrative, CSS-only previews for projects without screenshots. Sample
// content inside them is placeholder text, not data from the real apps.

function Window({ title, children, className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-xl border border-line-strong bg-ink-950/90 shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="size-2 rounded-full bg-ink-600" />
        <span className="size-2 rounded-full bg-ink-600" />
        <span className="size-2 rounded-full bg-ink-600" />
        <span className="ml-2 font-mono text-[10px] text-subtle">{title}</span>
      </div>
      {children}
    </div>
  )
}

function Phone({ children }) {
  return (
    <div className="w-40 shrink-0 rounded-[1.6rem] border border-line-strong bg-ink-950 p-1.5 shadow-2xl shadow-black/50 sm:w-44">
      <div className="relative overflow-hidden rounded-[1.25rem] bg-ink-900 px-3 pt-6 pb-4">
        <span className="absolute top-2 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-ink-950" />
        {children}
      </div>
    </div>
  )
}

const Line = ({ w, className = 'bg-ink-600' }) => (
  <span className={`block h-1.5 rounded-full ${className}`} style={{ width: w }} />
)

function EditorPreview() {
  return (
    <Window title="vox / generate" className="max-w-md">
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2 rounded-lg border border-line bg-ink-900 px-3 py-2">
          <Sparkles className="size-3.5 shrink-0 text-brand-bright" />
          <span className="truncate text-[11px] text-muted">Create a React hook for API calls</span>
          <span className="ml-auto rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[9px] text-brand-bright">js</span>
        </div>
        <pre className="rounded-lg bg-ink-900/70 p-3 font-mono text-[10px] leading-[1.7]">
          <span className="text-[#c4b5fd]">export function </span>
          <span className="text-[#93c5fd]">useFetch</span>
          <span className="text-subtle">(url) {'{'}</span>
          {'\n'}
          <span className="text-[#c4b5fd]"> const </span>
          <span className="text-muted">[data, setData] = </span>
          <span className="text-[#93c5fd]">useState</span>
          <span className="text-subtle">(null)</span>
          {'\n'}
          <span className="text-[#93c5fd]"> useEffect</span>
          <span className="text-subtle">(() =&gt; {'{'}</span>
          {'\n'}
          <span className="text-muted"> fetch(url).then(r =&gt; r.json())</span>
          {'\n'}
          <span className="text-subtle"> {'}'}, [url])</span>
          {'\n'}
          <span className="text-subtle">{'}'}</span>
        </pre>
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 text-[10px] text-muted">
            <Save className="size-3" /> Save
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-brand px-2 py-1 text-[10px] text-white">
            <Share2 className="size-3" /> Share as Gist
          </span>
        </div>
      </div>
    </Window>
  )
}

function ChatPreview() {
  return (
    <Window title="collections / handbook" className="max-w-md">
      <div className="space-y-3 p-4 text-[11px] leading-relaxed">
        <div className="ml-auto w-fit max-w-[80%] rounded-xl rounded-br-sm bg-brand px-3 py-2 text-white">
          How many leave days carry over to next year?
        </div>
        <div className="max-w-[88%] rounded-xl rounded-bl-sm border border-line bg-ink-900 px-3 py-2.5 text-muted">
          <p>Up to the annual limit can be carried forward, provided the request is approved before year end.</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {['handbook.pdf · p.14', 'policy.pdf · p.3'].map((source) => (
              <span
                key={source}
                className="inline-flex items-center gap-1 rounded bg-ink-950 px-1.5 py-0.5 font-mono text-[9px] text-brand-bright"
              >
                <FileText className="size-2.5" /> {source}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-line bg-ink-900/70 px-3 py-2 text-subtle">
          <Search className="size-3" /> Ask about your documents…
        </div>
      </div>
    </Window>
  )
}

function VoicePhonePreview() {
  return (
    <Phone>
      <p className="text-[9px] font-medium text-muted">Speak your instruction</p>
      <div className="relative mx-auto my-5 grid size-14 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand/25 [animation-duration:2.4s]" />
        <span className="absolute -inset-2 rounded-full border border-brand/20" />
        <span className="relative grid size-12 place-items-center rounded-full bg-brand text-white">
          <Mic className="size-5" />
        </span>
      </div>
      <p className="rounded-md bg-ink-950/70 px-2 py-1.5 text-[9px] leading-snug text-fg">
        “Write a function that reverses a string”
      </p>
      <pre className="mt-2 rounded-md border border-line bg-ink-950 p-2 font-mono text-[8.5px] leading-[1.6]">
        <span className="text-[#c4b5fd]">def </span>
        <span className="text-[#93c5fd]">reverse</span>
        <span className="text-subtle">(s):</span>
        {'\n'}
        <span className="text-[#c4b5fd]"> return </span>
        <span className="text-muted">s[::-1]</span>
      </pre>
      <span className="mt-2.5 block rounded-md bg-brand/15 py-1.5 text-center text-[9px] font-medium text-brand-bright">
        Run code
      </span>
    </Phone>
  )
}

const bars = [30, 55, 80, 45, 95, 60, 35, 70, 90, 50, 25, 65, 85, 40, 75, 55, 30, 60, 45, 20]

function WaveformPreview() {
  return (
    <Window title="interview / session" className="max-w-sm">
      <div className="p-4">
        <div className="flex items-center justify-between text-[10px] text-subtle">
          <span>Question 3 of 8</span>
          <span className="font-mono">REC</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink-700">
          <div className="h-full w-[37%] rounded-full bg-brand" />
        </div>
        <p className="mt-3 text-[11px] font-medium text-fg">Tell me about a project you are proud of.</p>
        <div className="mt-4 flex h-12 items-center justify-between">
          {bars.map((h, i) => (
            <span key={i} className="w-1 rounded-full bg-brand-bright/70" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          <Line w="92%" />
          <Line w="70%" />
        </div>
      </div>
    </Window>
  )
}

const habits = [
  { label: 'Morning routine', done: true },
  { label: 'Read 20 pages', done: true },
  { label: 'Evening journal', done: false },
]

function HabitsPhonePreview() {
  return (
    <Phone>
      <p className="text-[9px] text-subtle">Today</p>
      <p className="text-xs font-semibold text-fg">Good morning</p>
      <ul className="mt-3 space-y-1.5">
        {habits.map((habit) => (
          <li
            key={habit.label}
            className="flex items-center gap-2 rounded-md bg-ink-950/70 px-2 py-1.5 text-[9px] text-muted"
          >
            <span
              className={`grid size-3.5 place-items-center rounded-full border ${
                habit.done ? 'border-brand bg-brand text-white' : 'border-ink-600'
              }`}
            >
              {habit.done && <Check className="size-2.5" strokeWidth={3} />}
            </span>
            {habit.label}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex h-12 items-end gap-1 rounded-md bg-ink-950/70 p-2">
        {[40, 65, 50, 80, 70, 90, 60].map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${i === 5 ? 'bg-brand-bright' : 'bg-brand/40'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </Phone>
  )
}

function DocumentPreview() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <div className="w-28 shrink-0 space-y-2 rounded-lg border border-line-strong bg-ink-950 p-3 shadow-xl shadow-black/40">
        <Line w="60%" className="bg-fg/70" />
        <Line w="40%" />
        <div className="space-y-1.5 pt-2">
          <Line w="100%" />
          <Line w="85%" className="bg-brand/60" />
          <Line w="92%" />
          <Line w="70%" className="bg-brand/60" />
          <Line w="80%" />
        </div>
      </div>
      <div className="flex-1 space-y-2">
        {[
          ['Skills', 'Python · Django'],
          ['Education', 'Bachelor'],
          ['Experience', '2 roles'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-line bg-ink-900 px-3 py-2">
            <span className="block font-mono text-[9px] uppercase tracking-wider text-subtle">{label}</span>
            <span className="block text-[11px] text-fg">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const leads = [
  ['Bright Dental Care', 'Dentists', 'Austin, TX'],
  ['Northside Plumbing', 'Plumbers', 'Denver, CO'],
  ['Oak & Iron Fitness', 'Gyms', 'Tampa, FL'],
  ['Lakeview Auto Repair', 'Auto Repair', 'Columbus, OH'],
]

function TablePreview() {
  return (
    <Window title="leadharvester / businesses" className="max-w-md">
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 rounded-md border border-line bg-ink-900 px-2.5 py-1.5 text-[10px] text-subtle">
            <Search className="size-3" /> Search leads
          </div>
          <div className="flex gap-1">
            {['CSV', 'XLSX', 'JSON'].map((format) => (
              <span key={format} className="rounded bg-brand/15 px-1.5 py-1 font-mono text-[9px] text-brand-bright">
                {format}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-line text-[10px]">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-2 bg-ink-900 px-3 py-2 font-mono text-[9px] tracking-wider text-subtle uppercase">
            <span>Business</span>
            <span>Category</span>
            <span>Location</span>
          </div>
          {leads.map(([name, category, location]) => (
            <div key={name} className="grid grid-cols-[1.4fr_1fr_1fr] gap-2 border-t border-line px-3 py-2 text-muted">
              <span className="truncate text-fg">{name}</span>
              <span className="truncate">{category}</span>
              <span className="truncate">{location}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 flex items-center gap-1.5 font-mono text-[9px] text-subtle">
          <span className="size-1.5 rounded-full bg-cyan" /> Scheduler · next run in 30 min
        </p>
      </div>
    </Window>
  )
}

function StreamPreview() {
  return (
    <Window title="llm-stream / gemini" className="max-w-md">
      <div className="space-y-3 p-4">
        <div className="flex gap-2">
          <span className="flex-1 truncate rounded-md border border-line bg-ink-900 px-3 py-2 text-[11px] text-muted">
            What is retrieval-augmented generation?
          </span>
          <span className="rounded-md bg-brand px-3 py-2 text-[11px] text-white">Send</span>
        </div>
        <p className="min-h-20 rounded-md border border-line bg-ink-900/70 p-3 text-[11px] leading-relaxed text-muted">
          Retrieval-augmented generation pairs a language model with a search step, so answers are grounded in
          <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-brand-bright align-middle" />
        </p>
        <p className="font-mono text-[9px] text-subtle">StreamingHttpResponse · chunk 14</p>
      </div>
    </Window>
  )
}

const chartBars = [42, 58, 51, 74, 66, 88, 71, 62, 79, 55, 60, 38]

function ChartPreview() {
  return (
    <Window title="analysis.ipynb" className="max-w-md">
      <div className="p-4">
        <p className="font-mono text-[10px] text-subtle">In [12]:</p>
        <p className="mb-3 font-mono text-[10px] text-muted">
          df.groupby(<span className="text-[#86efac]">'month'</span>)[<span className="text-[#86efac]">'sales'</span>].sum().plot()
        </p>
        <div className="flex h-24 items-end gap-1.5 border-b border-l border-line pb-px pl-px">
          {chartBars.map((h, i) => (
            <span key={i} className="flex-1 rounded-t-sm bg-linear-to-t from-brand/50 to-brand-bright" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[9px]">
          {['pandas', 'matplotlib', 'scikit-learn'].map((lib) => (
            <span key={lib} className="truncate rounded bg-ink-900 px-2 py-1 text-center text-muted">
              {lib}
            </span>
          ))}
        </div>
      </div>
    </Window>
  )
}

const variants = {
  editor: EditorPreview,
  chat: ChatPreview,
  'phone-voice': VoicePhonePreview,
  waveform: WaveformPreview,
  'phone-habits': HabitsPhonePreview,
  document: DocumentPreview,
  table: TablePreview,
  stream: StreamPreview,
  chart: ChartPreview,
}

export default function ProjectPreview({ type, className = '' }) {
  const Variant = variants[type]
  return (
    <div
      aria-hidden="true"
      className={`relative isolate flex items-center justify-center overflow-hidden bg-ink-950/60 p-6 ${className}`}
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-70" />
      <div className="glow top-1/2 left-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      {Variant && <Variant />}
    </div>
  )
}
