import { useSyncExternalStore } from 'react'

export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

// True on devices with a precise pointer that can hover (mouse, trackpad).
export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)')
