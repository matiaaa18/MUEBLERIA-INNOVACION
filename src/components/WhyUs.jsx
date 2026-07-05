import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { HiClock, HiShieldCheck, HiUser, HiStar, HiBadgeCheck, HiDocumentText } from 'react-icons/hi'

const REASONS = [
  {
    icon: HiClock,
    title: 'Puntualidad',
    desc: 'Respetamos cada plazo comprometido. Tu tiempo es valioso y lo sabemos.',
  },
  {
    icon: HiShieldCheck,
    title: 'Garantía',
    desc: 'Todos nuestros trabajos cuentan con garantía en estructura, herrajes y cubiertas.',
  },
  {
    icon: HiUser,
    title: 'Atención Personalizada',
    desc: 'Te acompañamos en cada etapa del proyecto, desde la visita hasta la entrega.',
  },
  {
    icon: HiStar,
    title: 'Materiales de Calidad',
    desc: 'Usamos melamina Masisa, MDF, granito y cuarzo de primera calidad.',
  },
  {
    icon: HiBadgeCheck,
    title: 'Terminaciones Perfectas',
    desc: 'Cada detalle es revisado meticulosamente antes de la entrega final.',
  },
  {
    icon: HiDocumentText,
    title: 'Transparencia en los Presupuestos',
    desc: 'Precios claros, sin sorpresas. Lo que cotizamos es lo que cobras.',
  },
]

export default function WhyUs() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,169,110,0.08)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Nuestra diferencia
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No somos una empresa más. Somos el equipo que se preocupa por cada milímetro de tu proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 hover:border-[#c8a96e]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#c8a96e]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c8a96e]/20 transition-colors">
                <Icon className="text-[#c8a96e]" size={22} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
