import { lazy, Suspense } from 'react'
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
  const fallback = <SceneFallback />

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="glow inset-[18%] opacity-70" aria-hidden="true" />
      <div className="absolute inset-0">
        {webgl ? (
          <SceneErrorBoundary fallback={fallback}>
            <Suspense fallback={fallback}>
              <SceneCanvas reducedMotion={reducedMotion} trackPointer={finePointer} />
            </Suspense>
          </SceneErrorBoundary>
        ) : (
          fallback
        )}
      </div>
      <FloatingTechLabels />
    </div>
  )
}
