import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'

const CATEGORIES = [
  {
    heading: 'Mueblería',
    items: [
      'Muebles de Cocina',
      'Closets',
      'Walk-in Closet',
      'Vanitorios',
      'Home Office',
      'Muebles para TV',
      'Centros de entretenimiento',
      'Muebles personalizados',
    ],
  },
  {
    heading: 'Marmolería e Instalaciones',
    items: [
      'Cubiertas de Granito',
      'Cubiertas de Cuarzo',
      'Remodelación de Cocinas',
      'Instalación de muebles',
      'Instalación de lavaplatos',
      'Instalación de grifería',
      'Obras civiles menores',
      'Pintura · Cambio de cerámica',
    ],
  },
]

export default function Services() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="servicios" aria-label="Servicios" className="section-outer bg-[#faf9f7]">
      <div className="section-inner">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Lo que hacemos</span>
          <h2 className="h2 max-w-xl">
            Soluciones completas para cada rincón de tu hogar.
          </h2>
        </motion.div>

        {/* Two-column service list */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.heading}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[var(--ink-faint)] mb-6">
                {cat.heading}
              </p>
              <ul className="space-y-0" role="list">
                {cat.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 py-4 border-b border-black/[0.06] group"
                  >
                    <span
                      className="text-[0.6875rem] font-semibold tabular-nums text-[var(--ink-faint)] w-5 shrink-0 group-hover:text-[var(--wood)] transition-colors duration-200"
                      aria-hidden="true"
                    >
                      {String(ci * 8 + i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[1.0625rem] font-medium text-[var(--ink)] leading-snug group-hover:text-[var(--wood)] transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
