import { m } from 'motion/react'
import { ease } from '../../utils/motion.js'

export default function PageTransition({ children }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease }}
    >
      {children}
    </m.div>
  )
}
