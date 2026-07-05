const EASE_OUT_EXPO = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT_EXPO } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
}

export const slideLeft = {
  hidden:  { opacity: 0, x: -44 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
}

export const slideRight = {
  hidden:  { opacity: 0, x: 44 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
}

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
