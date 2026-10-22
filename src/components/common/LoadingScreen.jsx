import { useEffect } from 'react'

// The splash itself is inline in index.html so it shows before any JavaScript loads.
// Once React has mounted, fade it out and remove it.
export default function LoadingScreen() {
  useEffect(() => {
    const splash = document.getElementById('splash')
    if (!splash) return
    const hide = setTimeout(() => splash.classList.add('splash-hidden'), 250)
    const remove = setTimeout(() => splash.remove(), 800)
    return () => {
      clearTimeout(hide)
      clearTimeout(remove)
    }
  }, [])

  return null
}
