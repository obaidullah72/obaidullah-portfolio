// Static SVG version of the hero scene, used while the 3D bundle loads,
// when WebGL is unavailable, or if the renderer fails.
export default function SceneFallback() {
  return (
    <svg viewBox="0 0 400 400" className="size-full" aria-hidden="true">
      <defs>
        <radialGradient id="fallback-core" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="60%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0b1d4a" />
        </radialGradient>
      </defs>
      <g className="origin-center animate-[spin_60s_linear_infinite]" style={{ transformBox: 'fill-box' }}>
        <ellipse
          cx="200"
          cy="200"
          rx="165"
          ry="58"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.3"
          transform="rotate(-24 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="145"
          ry="70"
          fill="none"
          stroke="#3b82f6"
          strokeOpacity="0.35"
          transform="rotate(32 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="120"
          ry="40"
          fill="none"
          stroke="#60a5fa"
          strokeOpacity="0.35"
          transform="rotate(8 200 200)"
        />
        <circle cx="352" cy="132" r="4" fill="#22d3ee" />
        <circle cx="86" cy="266" r="4" fill="#60a5fa" />
      </g>
      <polygon points="200,118 271,159 271,241 200,282 129,241 129,159" fill="url(#fallback-core)" />
      <polygon points="200,118 271,159 200,200" fill="#60a5fa" fillOpacity="0.22" />
      <polygon points="129,241 200,282 200,200" fill="#000" fillOpacity="0.2" />
      <polygon
        points="200,92 293,146 293,254 200,308 107,254 107,146"
        fill="none"
        stroke="#60a5fa"
        strokeOpacity="0.2"
      />
    </svg>
  )
}
