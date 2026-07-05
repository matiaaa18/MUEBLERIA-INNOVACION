import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const REASONS = [
  { n: '01', title: 'Lo económico sale caro',        desc: 'Preferimos explicarte por qué algo tiene el precio que tiene, antes que darte un número bajo y sorprenderte al final. Calidad real tiene un costo real.' },
  { n: '02', title: 'Revisión mueble por mueble',    desc: 'Antes de salir del taller, el dueño revisa cada pieza personalmente. No sale nada que no cumpla el estándar.' },
  { n: '03', title: 'Presupuesto en 1 día',          desc: 'Medimos, calculamos y te enviamos el presupuesto al día siguiente. Sin demorarte semanas en una decisión.' },
  { n: '04', title: 'Precios sin inflación',         desc: 'El primer precio que te damos es el precio real. No inflamos para hacer descuentos que parecen grandes.' },
  { n: '05', title: 'Nunca comprometemos seguridad', desc: 'Si hay una forma correcta y una forma rápida, siempre hacemos la correcta. La seguridad del cliente no se negocia.' },
  { n: '06', title: '1 año de garantía real',        desc: 'Garantía escrita en estructura, herrajes, melamina y cubiertas. Si algo falla por fabricación, lo resolvemos nosotros.' },
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
