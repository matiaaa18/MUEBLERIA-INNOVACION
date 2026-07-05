import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const REASONS = [
  { n: '01', title: 'Puntualidad',               desc: 'Respetamos cada plazo comprometido. Tu tiempo es tan valioso como el nuestro.' },
  { n: '02', title: 'Garantía incluida',          desc: 'Todos nuestros trabajos tienen garantía en estructura, herrajes y cubiertas.' },
  { n: '03', title: 'Atención Personalizada',     desc: 'Te acompañamos en cada etapa, desde la primera visita hasta la entrega final.' },
  { n: '04', title: 'Materiales de Calidad',      desc: 'Solo usamos melamina Masisa, MDF, granito y cuarzo de primera categoría.' },
  { n: '05', title: 'Terminaciones Perfectas',    desc: 'Revisamos cada milímetro antes de entregar. Cero detalles sin resolver.' },
  { n: '06', title: 'Presupuestos Transparentes', desc: 'Precio claro desde el inicio. Lo que cotizamos es exactamente lo que cobras.' },
]

export default function WhyUs() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section aria-label="Por qué elegirnos" className="section-outer bg-[#111] relative overflow-hidden">
      {/* Subtle top/bottom edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" aria-hidden="true" />

      <div className="section-inner relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow-light">Nuestra diferencia</span>
          <h2 className="h2-light max-w-lg">
            Por qué elegirnos.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
          {REASONS.map((r, i) => (
            <motion.article
              key={r.n}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 border-b border-white/[0.07]"
            >
              <span
                className="block text-[0.6875rem] font-semibold tabular-nums tracking-[0.12em] text-white/20 mb-4"
                aria-hidden="true"
              >
                {r.n}
              </span>
              <h3 className="text-white font-semibold text-[1rem] mb-2.5 leading-snug">{r.title}</h3>
              <p className="text-white/45 text-[0.875rem] leading-relaxed">{r.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
