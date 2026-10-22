// Shared animation settings so every section moves the same way.
export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

export const stagger = (staggerChildren = 0.07, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

export const inView = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '0px 0px -60px 0px' } }
