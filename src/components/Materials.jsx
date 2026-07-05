import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'

const MATERIALS = [
  {
    name: 'Melamina Masisa',
    emoji: '🪵',
    color: 'from-amber-50 to-orange-50',
    border: 'border-amber-100',
    accent: 'text-amber-700',
    badge: 'bg-amber-50 text-amber-700',
    features: ['Alta durabilidad', 'Variedad de colores', 'Fácil limpieza', 'Resistente a humedad'],
    desc: 'La melamina Masisa es uno de los materiales más utilizados en mueblería moderna. Ofrece una amplia gama de colores y texturas que imitan maderas nobles, con la ventaja de ser resistente, liviana y de fácil mantención. Ideal para cocinas, closets y muebles del hogar.',
  },
  {
    name: 'MDF',
    emoji: '🪚',
    color: 'from-stone-50 to-neutral-50',
    border: 'border-stone-100',
    accent: 'text-stone-700',
    badge: 'bg-stone-50 text-stone-700',
    features: ['Superficie perfecta para pintura', 'Sin nudos ni vetas', 'Alta precisión', 'Versátil'],
    desc: 'El MDF (Medium Density Fiberboard) es la opción preferida cuando se busca una terminación lacada o pintada de alta calidad. Su superficie homogénea permite acabados muy finos, sin imperfecciones. Perfecto para mobiliario de baño y ambientes que requieren estética premium.',
  },
  {
    name: 'Granito',
    emoji: '🏔️',
    color: 'from-gray-50 to-slate-50',
    border: 'border-gray-200',
    accent: 'text-gray-700',
    badge: 'bg-gray-100 text-gray-700',
    features: ['100% natural', 'Única en el mundo', 'Resistente al calor', 'Alta dureza'],
    desc: 'El granito es una piedra natural extraída directamente de canteras. Cada placa es única, con vetas y tonos irrepetibles que aportan carácter y exclusividad. Extremadamente resistente al calor, rasguños y manchas. Una inversión que dura toda la vida.',
  },
  {
    name: 'Cuarzo',
    emoji: '💎',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    accent: 'text-blue-700',
    badge: 'bg-blue-50 text-blue-700',
    features: ['No requiere sellado', 'Colores uniformes', 'Alta resistencia', 'Higiénico'],
    desc: 'Las cubiertas de cuarzo son fabricadas con 93% de cuarzo natural y resinas de alta tecnología. A diferencia del granito, no necesita sellado periódico. Ofrece colores más uniformes y modernos, siendo ideal para cocinas contemporáneas que buscan elegancia con mínimo mantenimiento.',
  },
]

export default function Materials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="materiales" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Calidad garantizada
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Materiales que usamos
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Solo trabajamos con materiales de primera calidad para garantizar la durabilidad de cada proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {MATERIALS.map((mat) => (
            <motion.div
              key={mat.name}
              variants={fadeUp}
              className={`rounded-2xl p-7 bg-gradient-to-br ${mat.color} border ${mat.border} hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{mat.emoji}</span>
                <div>
                  <h3 className={`font-bold text-xl ${mat.accent}`}>{mat.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {mat.features.map((f) => (
                      <span key={f} className={`text-xs font-medium px-2 py-0.5 rounded-full ${mat.badge}`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{mat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
