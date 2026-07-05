import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MATERIALS = [
  {
    name: 'Melamina Masisa',
    attributes: ['Herrajes Masisa de primera línea', 'Bisagras con cierre suave', 'Correderas telescópicas + cierre suave'],
    desc: 'Trabajamos exclusivamente con melamina y herrajes Masisa: la marca de referencia en Chile. Bisagras con cierre suave y correderas telescópicas en cada cajón. No usamos componentes de segunda categoría aunque el cliente no los vea.',
  },
  {
    name: 'MDF',
    attributes: ['Ideal para cuartos de niños', 'Sin astillas ni bordes vivos', 'Mejor relación calidad-precio en lacado'],
    desc: 'El MDF es nuestra recomendación para muebles de dormitorio infantil y vanitorios lacados. Superficie perfectamente homogénea, sin vetas ni nudos. Más resistente a golpes que la melamina en las zonas de mayor tráfico.',
  },
  {
    name: 'Granito Natural',
    attributes: ['Negro San Gabriel', 'Blanco Dallas', 'Verde Ubatuba · Gris Ocre'],
    desc: 'Piedra natural de cantera, cada placa es irrepetible. Resistente al calor, los rasguños y las manchas. Los colores más solicitados: Negro San Gabriel, Blanco Dallas, Verde Ubatuba y Gris Ocre. Una inversión que dura décadas.',
  },
  {
    name: 'Cuarzo Engineered',
    attributes: ['Calacatta Gold', 'Negro Marquina', 'Angel White · Blanco Puro'],
    desc: '93% cuarzo natural con resinas de alta tecnología. Sellado de fábrica: sin mantenimiento periódico. Los colores más elegidos: Calacatta Gold, Negro Marquina, Angel White y Blanco Puro. La opción preferida para cocinas contemporáneas.',
  },
]

export default function Materials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="materiales" aria-label="Materiales" className="section-outer bg-white">
      <div className="section-inner">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Calidad garantizada</span>
          <h2 className="h2 max-w-xl">
            Solo trabajamos con materiales de primera categoría.
          </h2>
        </motion.div>

        {/* Materials grid */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
          {MATERIALS.map((mat, i) => (
            <motion.article
              key={mat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="py-10 border-b border-black/[0.06]"
            >
              <h3 className="text-[1.125rem] font-bold text-[var(--ink)] mb-3 leading-snug">{mat.name}</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-4" role="list">
                {mat.attributes.map((a) => (
                  <li
                    key={a}
                    className="text-[0.75rem] font-medium text-[var(--wood)] before:content-['—'] before:mr-1.5 before:opacity-50"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <p className="body-md">{mat.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
