import { lazy, Suspense, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { useWebGLSupport } from '../../hooks/useWebGLSupport.js'
import { useFinePointer } from '../../hooks/useMediaQuery.js'
import SceneFallback from '../three/SceneFallback.jsx'
import SceneErrorBoundary from '../three/SceneErrorBoundary.jsx'
import FloatingTechLabels from './FloatingTechLabels.jsx'

// three.js and R3F live in their own chunk and load after the page is interactive.
const SceneCanvas = lazy(() => import('../three/SceneCanvas.jsx'))

export default function HeroScene() {
  const webgl = useWebGLSupport()
  const finePointer = useFinePointer()
  const reducedMotion = useReducedMotion()
  const [ready, setReady] = useState(false)

  // The SVG stays underneath until the canvas has drawn its first frame, then
  // the two crossfade, so there is never an empty gap while three.js starts up.
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="glow inset-[18%] opacity-70" aria-hidden="true" />
      <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-0' : 'opacity-100'}`}>
        <SceneFallback />
      </div>
      {webgl && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
          <SceneErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <SceneCanvas reducedMotion={reducedMotion} trackPointer={finePointer} onReady={() => setReady(true)} />
            </Suspense>
          </SceneErrorBoundary>
        </div>
      )}
      <FloatingTechLabels />
    </div>
  )
}
