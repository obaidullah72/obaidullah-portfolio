import { Suspense } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import PageTransition from '../common/PageTransition.jsx'
import ScrollToTop, { RouteScrollManager } from '../common/ScrollToTop.jsx'

function PageFallback() {
  return <div className="min-h-[70vh]" aria-busy="true" />
}

export default function MainLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <RouteScrollManager />
      <Navbar />
      <main id="main" className="min-h-[70vh]">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            <Suspense fallback={<PageFallback />}>{outlet}</Suspense>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
