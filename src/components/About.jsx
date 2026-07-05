import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '../utils/animations'
import {
  HiShieldCheck, HiClock, HiHeart, HiStar, HiBadgeCheck, HiUserGroup,
} from 'react-icons/hi'

const VALUES = [
  { icon: HiHeart, label: 'Honestidad', desc: 'Transparencia en cada etapa del proyecto.' },
  { icon: HiClock, label: 'Puntualidad', desc: 'Cumplimos los plazos acordados.' },
  { icon: HiUserGroup, label: 'Respeto', desc: 'Trato amable y profesional siempre.' },
  { icon: HiStar, label: 'Calidad', desc: 'Materiales premium y mano de obra experta.' },
  { icon: HiBadgeCheck, label: 'Terminaciones perfectas', desc: 'Cada detalle importa.' },
  { icon: HiShieldCheck, label: 'Compromiso', desc: 'Tu satisfacción es nuestra meta.' },
]

export default function About() {
  const { ref: leftRef, isInView: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isInView: rightVisible } = useScrollAnimation()

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            ref={leftRef}
            variants={slideLeft}
            initial="hidden"
            animate={leftVisible ? 'visible' : 'hidden'}
          >
            <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Más de 5 años transformando hogares con{' '}
              <span className="text-[#c8a96e]">dedicación y calidad</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong className="text-gray-800">Mueblería y Marmolería Innovación</strong> nació
              del esfuerzo, sacrificio y mucha dedicación. Desde el primer día nuestro objetivo
              ha sido claro: destacar por la calidad de cada proyecto que tomamos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Con <strong>3 años en mueblería</strong> y <strong>5 años en marmolería</strong>,
              hemos construido una reputación basada en la confianza y en resultados que superan
              las expectativas de nuestros clientes. Cada proyecto es único y lo tratamos como tal.
            </p>

            {/* Experience badges */}
            <div className="flex gap-6 mb-10">
              {[
                { years: '3', area: 'Años en Mueblería' },
                { years: '5', area: 'Años en Marmolería' },
              ].map((item) => (
                <div
                  key={item.area}
                  className="flex-1 bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center"
                >
                  <div className="text-3xl font-bold text-[#c8a96e] mb-1">{item.years}+</div>
                  <div className="text-sm text-gray-500 font-medium">{item.area}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Values grid */}
          <motion.div
            ref={rightRef}
            variants={staggerContainer}
            initial="hidden"
            animate={rightVisible ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {VALUES.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#c8a96e]/30 hover:bg-[#fdf8f0] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#c8a96e]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#c8a96e]/20 transition-colors">
                  <Icon className="text-[#c8a96e]" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
