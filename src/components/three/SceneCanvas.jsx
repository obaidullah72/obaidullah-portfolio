import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AdaptiveDpr } from '@react-three/drei'
import HeroObject from './HeroObject.jsx'

// Signals once the scene has actually rendered a frame at its measured size.
function ReadySignal({ onReady }) {
  const done = useRef(false)
  useFrame(() => {
    if (done.current) return
    done.current = true
    requestAnimationFrame(() => onReady?.())
  })
  return null
}

// Owns the WebGL canvas. Rendering stops while the scene is off-screen and
// switches to on-demand (a single static frame) when motion is reduced.
export default function SceneCanvas({ reducedMotion, trackPointer, onReady }) {
  const wrapper = useRef(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    if (wrapper.current) observer.observe(wrapper.current)
    return () => observer.disconnect()
  }, [])

  const frameloop = reducedMotion ? 'demand' : visible ? 'always' : 'never'

  return (
    <div ref={wrapper} className="size-full">
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7.2], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        aria-hidden="true"
      >
        <AdaptiveDpr pixelated={false} />
        <ReadySignal onReady={onReady} />
        <HeroObject animate={!reducedMotion} trackPointer={trackPointer && !reducedMotion} />
      </Canvas>
    </div>
  )
}
