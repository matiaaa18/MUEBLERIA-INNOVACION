import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { WHATSAPP_FULL_URL } from '../utils/constants'

const STATS = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '200+', label: 'Proyectos entregados' },
  { value: '100%', label: 'Satisfacción garantizada' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

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
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0d0d0d]"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#141414]/90 to-[#1a1209]/80 z-10" />
        {/* Placeholder BG — replace with real project image */}
        <div
          className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-[#2a1f0d]"
          role="img"
          aria-label="Proyecto de cocina moderna"
        />
      </motion.div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-[11] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] z-[12] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(200,169,110,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-[calc(72px+3rem)] pb-16 lg:pt-[calc(72px+5rem)] lg:pb-24"
      >
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-20 items-center">

          {/* ── Left content ─────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 mb-8"
            >
              <span className="flex items-center gap-2 bg-[#c8a96e]/10 border border-[#c8a96e]/25 rounded-full px-4 py-1.5 text-[0.78rem] text-[#c8a96e] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 bg-[#c8a96e] rounded-full animate-pulse" aria-hidden="true" />
                Antofagasta · Calama y norte de Chile
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-[-0.025em] mb-6"
            >
              Muebles y Cubiertas{' '}
              <span className="text-[#c8a96e]">a Medida</span>{' '}
              <span className="text-white/90">para transformar tu hogar.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1.0625rem] text-white/65 leading-[1.75] mb-10 max-w-[540px]"
            >
              Especialistas en cocinas, closets, baños, muebles personalizados y cubiertas
              de granito y cuarzo. Calidad, puntualidad y terminaciones impecables.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3.5 mb-14"
            >
              <a
                href={WHATSAPP_FULL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Solicitar Cotización
                <HiArrowRight size={17} aria-hidden="true" />
              </a>
              <button
                onClick={() => scrollTo('#proyectos')}
                className="btn-ghost"
              >
                Ver Proyectos
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-8 pt-8 border-t border-white/8"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className={i > 0 ? 'border-l border-white/10 pl-8' : ''}>
                  <div className="text-[1.625rem] font-extrabold text-white tracking-tight leading-none">{stat.value}</div>
                  <div className="text-[0.75rem] text-white/45 mt-1.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Project card ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] shadow-2xl ring-1 ring-white/8">
              {/* Placeholder image */}
              <div
                className="w-full h-full bg-gradient-to-br from-[#2a2018] via-[#1e1a14] to-[#3d2f1a] flex items-center justify-center"
                role="img"
                aria-label="Proyecto de cocina"
              >
                <div className="text-center opacity-30">
                  <div className="text-6xl mb-3">📷</div>
                  <p className="text-white text-xs">Foto del proyecto</p>
                </div>
              </div>
              {/* Real project image — loaded on top when available */}
              <img
                src="/images/cocinas/hero.jpg"
                alt="Cocina moderna a medida — Mueblería Innovación"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
                loading="eager"
                fetchpriority="high"
              />
              {/* Bottom info card */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#c8a96e] rounded-lg flex items-center justify-center shrink-0 text-white text-base" aria-hidden="true">
                    ✓
                  </div>
                  <div>
                    <p className="text-white text-[0.8125rem] font-semibold leading-tight">Cocina moderna terminada</p>
                    <p className="text-white/55 text-[0.6875rem] mt-0.5">Melamina Masisa + Cubierta de cuarzo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="text-white/30 text-[0.65rem] tracking-[0.18em] uppercase font-medium">Scroll</span>
        <motion.div
          className="w-[1px] h-7 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [1, 1.6, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
