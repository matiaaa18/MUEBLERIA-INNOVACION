import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { WHATSAPP_FULL_URL } from '../utils/constants'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      ref={ref}
      aria-label="Bienvenida"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#0d0d0d]"
    >
      {/* Parallax background — full bleed */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-[#0d0d0d]/20 z-10" />
        <div
          className="w-full h-full bg-gradient-to-br from-[#1a1209] via-[#0f0d0a] to-[#0d0d0d]"
          role="img"
          aria-label="Proyecto de cocina moderna a medida"
        />
        <img
          src="/images/cocinas/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          loading="eager"
          fetchpriority="high"
        />
      </motion.div>

      {/* Noise */}
      <div
        className="absolute inset-0 z-[11] opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content — pinned to bottom left */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-20 lg:pb-28 pt-[calc(72px+6rem)]"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="eyebrow-light mb-6"
        >
          Antofagasta · Calama · Norte de Chile
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h1 max-w-3xl mb-7"
        >
          Muebles y Cubiertas{' '}
          <span style={{ color: 'var(--wood)' }}>a Medida</span>
          {' '}para transformar tu hogar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/60 text-[1.0625rem] leading-[1.75] max-w-[500px] mb-10"
        >
          Más de 144 proyectos al año en el norte de Chile. Cocinas, closets,
          vanitorios y cubiertas de granito y cuarzo. Presupuesto en 1 día, entrega puntual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Solicitar Cotización
            <HiArrowRight size={16} aria-hidden="true" />
          </a>
          <button
            onClick={() => scrollTo('#proyectos')}
            className="btn btn-outline-light"
          >
            Ver Proyectos
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
      >
        <span className="text-white/25 text-[0.6rem] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          className="w-px h-6 bg-gradient-to-b from-white/25 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
