// CSS 3D illustration of the layers I usually build across: interface, API, data.
const layers = [
  { label: 'Interface', detail: 'React · Flutter', tone: 'from-brand/35 to-cyan/10' },
  { label: 'API', detail: 'Django · FastAPI · Express', tone: 'from-brand/25 to-brand/5' },
  { label: 'Data & AI', detail: 'PostgreSQL · FAISS · LLMs', tone: 'from-cyan/25 to-brand/5' },
]

export default function LayerStack() {
  return (
    <div className="layer-stack relative mx-auto aspect-square w-full max-w-sm" aria-hidden="true">
      <div className="layer-stack-inner absolute inset-0">
        {layers.map((layer, index) => (
          <div
            key={layer.label}
            className={`layer-plane absolute inset-x-[12%] top-1/2 h-[46%] rounded-2xl border border-brand/40 bg-linear-to-br ${layer.tone} p-5`}
            style={{ '--i': index }}
          >
            <p className="font-mono text-[11px] tracking-[0.15em] text-brand-bright uppercase">{layer.label}</p>
            <p className="mt-1 text-sm text-fg">{layer.detail}</p>
            <div className="mt-4 grid grid-cols-4 gap-1.5">
              {Array.from({ length: 8 }, (_, i) => (
                <span key={i} className="h-1.5 rounded-full bg-brand-bright/25" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
