import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MATERIALS = [
  {
    name: 'Melamina Masisa',
    attributes: ['Alta durabilidad', 'Amplia variedad de colores', 'Resistente a la humedad'],
    desc: 'El estándar de la mueblería moderna en Chile. Amplia gama de colores y texturas que imitan maderas nobles, con la ventaja de ser resistente, liviana y de fácil mantención.',
  },
  {
    name: 'MDF',
    attributes: ['Superficie perfecta para lacado', 'Sin nudos ni vetas', 'Ideal para vanitorios premium'],
    desc: 'La opción preferida cuando se busca una terminación lacada de alta calidad. Su superficie homogénea permite acabados muy finos, sin imperfecciones.',
  },
  {
    name: 'Granito Natural',
    attributes: ['100% natural', 'Cada placa es única', 'Resistente al calor y rasguños'],
    desc: 'Piedra natural extraída de canteras, con vetas irrepetibles. Extremadamente resistente al calor, rasguños y manchas. Una inversión que dura toda la vida.',
  },
  {
    name: 'Cuarzo Engineered',
    attributes: ['Sin mantenimiento periódico', 'Colores uniformes', 'Higiénico y sellado de fábrica'],
    desc: '93% de cuarzo natural con resinas de alta tecnología. No necesita sellado periódico y ofrece colores más uniformes. Ideal para cocinas contemporáneas.',
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
