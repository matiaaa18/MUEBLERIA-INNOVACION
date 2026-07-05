import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { HiShieldCheck, HiX } from 'react-icons/hi'

const COVERS = [
  { label: 'Estructura de muebles', desc: 'Garantizamos la solidez estructural de cada mueble fabricado.' },
  { label: 'Melamina Masisa', desc: 'Cubrimos defectos del material en condiciones normales de uso.' },
  { label: 'Herrajes', desc: 'Bisagras, correderas y rieles con garantía de funcionamiento.' },
  { label: 'Cubiertas de granito y cuarzo', desc: 'Garantía contra defectos de fabricación e instalación.' },
]

const NOT_COVERS = [
  'Daños causados por mal uso o negligencia',
  'Deterioro por humedad excesiva o inundaciones',
  'Daños por agentes externos (golpes, rayaduras intencionales)',
  'Desgaste normal por el paso del tiempo',
  'Modificaciones realizadas por terceros ajenos a nosotros',
]

export default function Warranty() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="garantia" className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(74,124,89,0.08)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Tu tranquilidad
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Garantía de nuestros trabajos
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Respaldamos cada proyecto porque confiamos en la calidad de lo que hacemos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* What we cover */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#4a7c59] rounded-full flex items-center justify-center">
                <HiShieldCheck className="text-white" size={16} />
              </div>
              <h3 className="text-white font-semibold text-lg">Qué cubre la garantía</h3>
            </div>
            <div className="space-y-4">
              {COVERS.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 hover:bg-white/8 transition-colors"
                >
                  <HiShieldCheck className="text-[#4a7c59] shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What we don't cover */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                <HiX className="text-red-400" size={16} />
              </div>
              <h3 className="text-white font-semibold text-lg">Qué no cubre</h3>
            </div>
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <div className="space-y-4">
                {NOT_COVERS.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <HiX className="text-red-400/70 shrink-0 mt-0.5" size={16} />
                    <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-500 text-xs leading-relaxed">
                  Para hacer efectiva la garantía, el cliente debe contactarnos dentro del plazo
                  acordado y presentar el número de proyecto correspondiente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
