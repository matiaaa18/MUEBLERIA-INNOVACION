import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { HiClock, HiShieldCheck, HiUser, HiStar, HiBadgeCheck, HiDocumentText } from 'react-icons/hi'

const REASONS = [
  {
    icon: HiClock,
    title: 'Puntualidad',
    desc: 'Respetamos cada plazo comprometido. Tu tiempo es tan valioso como el nuestro.',
  },
  {
    icon: HiShieldCheck,
    title: 'Garantía incluida',
    desc: 'Todos nuestros trabajos tienen garantía en estructura, herrajes y cubiertas.',
  },
  {
    icon: HiUser,
    title: 'Atención Personalizada',
    desc: 'Te acompañamos en cada etapa, desde la primera visita hasta la entrega.',
  },
  {
    icon: HiStar,
    title: 'Materiales de Calidad',
    desc: 'Solo usamos melamina Masisa, MDF, granito y cuarzo de primera categoría.',
  },
  {
    icon: HiBadgeCheck,
    title: 'Terminaciones Perfectas',
    desc: 'Revisamos cada milímetro antes de entregar. Cero detalles sin resolver.',
  },
  {
    icon: HiDocumentText,
    title: 'Presupuestos Transparentes',
    desc: 'Precio claro desde el inicio. Lo que cotizamos es exactamente lo que cobras.',
  },
]

export default function WhyUs() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section aria-label="Por qué elegirnos" className="section-py bg-[#0d0d0d] relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px]"
             style={{ background: 'radial-gradient(circle at 80% 20%, rgba(200,169,110,0.05) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="section-label">Nuestra diferencia</span>
          <h2 className="section-title-light mb-4">¿Por qué elegirnos?</h2>
          <p className="section-desc text-gray-400">
            No somos una empresa más. Somos el equipo que se preocupa por cada detalle de tu proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group bg-white/[0.04] border border-white/[0.07] rounded-2xl p-7
                         hover:bg-white/[0.07] hover:border-[#c8a96e]/25
                         transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 bg-[#c8a96e]/10 rounded-xl flex items-center justify-center mb-5
                              group-hover:bg-[#c8a96e]/18 transition-colors duration-300">
                <Icon className="text-[#c8a96e]" size={21} aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold text-[0.9375rem] mb-2.5 leading-snug">{title}</h3>
              <p className="text-gray-400 text-[0.875rem] leading-relaxed">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
