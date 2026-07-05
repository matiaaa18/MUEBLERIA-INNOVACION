import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { HiShieldCheck, HiX } from 'react-icons/hi'

const COVERS = [
  { label: 'Estructura de muebles',  desc: 'Solidez estructural de cada mueble fabricado.' },
  { label: 'Melamina Masisa',        desc: 'Defectos del material en condiciones normales.' },
  { label: 'Herrajes y corredera',   desc: 'Bisagras, correderas y rieles en funcionamiento.' },
  { label: 'Cubiertas instaladas',   desc: 'Defectos de fabricación e instalación.' },
]

const NOT_COVERS = [
  'Daños por mal uso o negligencia del usuario',
  'Deterioro por humedad excesiva o inundaciones',
  'Golpes, rasguños o daños físicos intencionales',
  'Desgaste natural por el paso del tiempo',
  'Modificaciones realizadas por terceros ajenos',
]

export default function Warranty() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="garantia" aria-label="Garantía" className="section-py bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px]"
             style={{ background: 'radial-gradient(circle at 20% 90%, rgba(74,124,89,0.06) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Tu tranquilidad importa</span>
          <h2 className="section-title-light mb-4">Garantía de nuestros trabajos</h2>
          <p className="section-desc text-gray-400">
            Respaldamos cada proyecto porque confiamos plenamente en la calidad de lo que hacemos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* ─ What we cover ─ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-[#4a7c59]/20 rounded-full flex items-center justify-center">
                <HiShieldCheck className="text-[#4a7c59]" size={16} aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold text-base">Qué cubre la garantía</h3>
            </div>
            <div className="space-y-3">
              {COVERS.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-5 flex gap-4
                             hover:bg-white/[0.08] hover:border-[#4a7c59]/20 transition-all duration-300"
                >
                  <HiShieldCheck className="text-[#4a7c59] shrink-0 mt-0.5" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-white font-semibold text-[0.875rem] mb-1">{item.label}</p>
                    <p className="text-gray-400 text-[0.8125rem] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─ What we don't cover ─ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-red-500/15 rounded-full flex items-center justify-center">
                <HiX className="text-red-400" size={16} aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold text-base">Qué no cubre</h3>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
              <ul className="space-y-3.5">
                {NOT_COVERS.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <HiX className="text-red-400/60 shrink-0 mt-0.5" size={15} aria-hidden="true" />
                    <p className="text-gray-400 text-[0.875rem] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <p className="text-gray-500 text-[0.8125rem] leading-relaxed">
                  Para hacer efectiva la garantía, contacta directamente con nosotros y
                  ten a mano el número de tu proyecto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
