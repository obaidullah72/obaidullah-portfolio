import { m } from 'motion/react'

// Fades content up once as it enters the viewport. Honors reduced motion via MotionConfig.
export default function Reveal({ as = 'div', delay = 0, className, children, ...props }) {
  const Component = m[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}
