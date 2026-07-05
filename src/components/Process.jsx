import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const STEPS = [
  { n: '01', title: 'Contacto',     desc: 'Nos escribes por WhatsApp o redes y coordinamos una visita.' },
  { n: '02', title: 'Visita',       desc: 'Vamos hasta tu hogar para conocer el espacio en persona.' },
  { n: '03', title: 'Medición',     desc: 'Tomamos todas las medidas con precisión milimétrica.' },
  { n: '04', title: 'Diseño',       desc: 'Creamos el diseño a medida según tus gustos y necesidades.' },
  { n: '05', title: 'Presupuesto',  desc: 'En máximo 1 día hábil recibes el presupuesto detallado. Precio real, sin inflaciones ni sorpresas.' },
  { n: '06', title: 'Fabricación',  desc: 'Fabricamos cada pieza con materiales de primera calidad.' },
  { n: '07', title: 'Rectificación',desc: 'Verificamos las medidas finales antes de instalar.' },
  { n: '08', title: 'Instalación',  desc: 'Instalamos todo con cuidado, limpieza y profesionalismo.' },
  { n: '09', title: 'Entrega',      desc: 'El dueño revisa el proyecto in situ antes de hacer entrega formal. Cero detalles sin resolver.' },
]

export default function Process() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="proceso" aria-label="Nuestro proceso" className="section-outer bg-[#faf9f7]">
      <div className="section-inner">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="h2 max-w-lg">
            Un proceso claro, sin imprevistos.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
          {STEPS.map((step, i) => (
            <motion.article
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 border-b border-black/[0.06] relative"
            >
              {/* Large background number */}
              <span
                className="absolute top-4 right-0 text-[4.5rem] font-black leading-none text-black/[0.035] select-none pointer-events-none tabular-nums"
                aria-hidden="true"
              >
                {step.n}
              </span>
              <span className="block text-[0.6875rem] font-semibold tabular-nums tracking-[0.12em] text-[var(--ink-faint)] mb-4">
                {step.n}
              </span>
              <h3 className="h3 mb-2">{step.title}</h3>
              <p className="body-sm">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
