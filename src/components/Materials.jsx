import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'

const MATERIALS = [
  {
    name: 'Melamina Masisa',
    icon: '🪵',
    gradient: 'from-amber-50 to-orange-50/60',
    border: 'border-amber-100',
    accent: '#9a6f2a',
    badge: 'bg-amber-100/60 text-amber-800',
    tags: ['Alta durabilidad', 'Variedad de colores', 'Resistente a humedad'],
    desc: 'La melamina Masisa es el estándar en mueblería moderna. Ofrece una amplia gama de colores y texturas que imitan maderas nobles, con la ventaja de ser resistente, liviana y de fácil mantención.',
  },
  {
    name: 'MDF',
    icon: '🪚',
    gradient: 'from-stone-50 to-neutral-50/60',
    border: 'border-stone-200',
    accent: '#6b5c4a',
    badge: 'bg-stone-100/60 text-stone-700',
    tags: ['Superficie perfecta', 'Para pintura lacada', 'Sin nudos ni vetas'],
    desc: 'El MDF es la opción preferida cuando se busca una terminación lacada de alta calidad. Su superficie homogénea permite acabados muy finos, sin imperfecciones. Ideal para vanitorios y ambientes premium.',
  },
  {
    name: 'Granito Natural',
    icon: '🏔️',
    gradient: 'from-gray-50 to-slate-50/60',
    border: 'border-gray-200',
    accent: '#3a3a3a',
    badge: 'bg-gray-100/60 text-gray-700',
    tags: ['100% natural', 'Única en el mundo', 'Resistente al calor'],
    desc: 'El granito es una piedra natural extraída directamente de canteras. Cada placa es única, con vetas irrepetibles. Extremadamente resistente al calor, rasguños y manchas. Una inversión que dura toda la vida.',
  },
  {
    name: 'Cuarzo Engineered',
    icon: '💎',
    gradient: 'from-sky-50 to-indigo-50/60',
    border: 'border-sky-100',
    accent: '#2563a8',
    badge: 'bg-sky-100/60 text-sky-800',
    tags: ['Sin mantenimiento', 'Colores uniformes', 'Higiénico y sellado'],
    desc: 'Las cubiertas de cuarzo combinan 93% de cuarzo natural con resinas de alta tecnología. No necesita sellado periódico y ofrece colores más uniformes. Ideal para cocinas contemporáneas que buscan elegancia.',
  },
]

export default function Materials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="materiales" aria-label="Materiales" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Calidad garantizada</span>
          <h2 className="section-title mb-4">Materiales que usamos</h2>
          <p className="section-desc">
            Solo trabajamos con materiales de primera calidad para garantizar la durabilidad de cada proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-4 lg:gap-5"
        >
          {MATERIALS.map((mat) => (
            <motion.article
              key={mat.name}
              variants={fadeUp}
              className={`rounded-2xl p-7 bg-gradient-to-br ${mat.gradient} border ${mat.border}
                          hover:shadow-md transition-all duration-300 cursor-default`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-[2.5rem] leading-none shrink-0" aria-hidden="true">{mat.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{mat.name}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {mat.tags.map((tag) => (
                      <span key={tag} className={`text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full ${mat.badge}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-[0.875rem] leading-relaxed">{mat.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
