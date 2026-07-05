import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, slideLeft, staggerContainer } from '../utils/animations'
import {
  HiShieldCheck, HiClock, HiHeart, HiStar, HiBadgeCheck, HiUserGroup,
} from 'react-icons/hi'

const VALUES = [
  { icon: HiHeart,       label: 'Honestidad',            desc: 'Transparencia total en cada etapa.' },
  { icon: HiClock,       label: 'Puntualidad',            desc: 'Plazos que se respetan siempre.' },
  { icon: HiUserGroup,   label: 'Respeto',                desc: 'Trato amable y profesional.' },
  { icon: HiStar,        label: 'Calidad',                desc: 'Materiales y mano de obra premium.' },
  { icon: HiBadgeCheck,  label: 'Terminaciones perfectas',desc: 'Cada detalle cuenta.' },
  { icon: HiShieldCheck, label: 'Compromiso',             desc: 'Tu satisfacción es nuestra meta.' },
]

function Counter({ to, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useScrollAnimation(0.5)
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true
    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, to, duration])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  const { ref: leftRef, isInView: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isInView: rightVisible } = useScrollAnimation()

  return (
    <section id="nosotros" aria-label="Sobre nosotros" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-28 items-center">

          {/* ── Left ───────────────────── */}
          <motion.div
            ref={leftRef}
            variants={slideLeft}
            initial="hidden"
            animate={leftVisible ? 'visible' : 'hidden'}
          >
            <span className="section-label">Sobre Nosotros</span>
            <h2 className="section-title mb-6">
              Transformando hogares con{' '}
              <span className="text-[#c8a96e]">dedicación y calidad</span>
            </h2>
            <p className="text-gray-600 text-[1.0625rem] leading-[1.75] mb-5">
              <strong className="text-gray-900 font-semibold">Mueblería y Marmolería Innovación</strong>{' '}
              nació del esfuerzo, sacrificio y mucha dedicación. Desde el primer día nuestro
              objetivo ha sido claro: destacar por la calidad de cada proyecto.
            </p>
            <p className="text-gray-500 leading-[1.75] mb-10">
              Con más de 5 años de experiencia combinada, hemos construido una reputación basada
              en la confianza y en resultados que superan las expectativas. Cada proyecto es único
              y lo tratamos como tal.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { to: 3, suffix: '+', label: 'Años Mueblería' },
                { to: 5, suffix: '+', label: 'Años Marmolería' },
                { to: 200, suffix: '+', label: 'Proyectos' },
              ].map(({ to, suffix, label }) => (
                <div
                  key={label}
                  className="bg-[#faf9f7] rounded-2xl p-5 border border-gray-100 text-center"
                >
                  <div className="text-[2rem] font-extrabold text-[#c8a96e] leading-none mb-1.5 tabular-nums">
                    <Counter to={to} />{suffix}
                  </div>
                  <div className="text-[0.75rem] text-gray-500 font-medium leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex -space-x-1.5" aria-hidden="true">
                {['#c8a96e','#b89250','#d4b98a'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ background: c }} />
                ))}
              </div>
              <span>Más de 200 familias confían en nosotros</span>
            </div>
          </motion.div>

          {/* ── Right: Values ───────────── */}
          <motion.div
            ref={rightRef}
            variants={staggerContainer}
            initial="hidden"
            animate={rightVisible ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-3.5"
          >
            {VALUES.map(({ icon: Icon, label, desc }) => (
              <motion.article
                key={label}
                variants={fadeUp}
                className="bg-[#faf9f7] rounded-2xl p-5 border border-gray-100
                           hover:border-[#c8a96e]/25 hover:bg-[#fdf8f0] hover:shadow-md
                           transition-all duration-300 group cursor-default"
              >
                <div className="w-10 h-10 bg-[#c8a96e]/10 rounded-xl flex items-center justify-center mb-3.5
                                group-hover:bg-[#c8a96e]/18 transition-colors duration-300">
                  <Icon className="text-[#c8a96e]" size={19} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-gray-900 text-[0.875rem] mb-1 leading-tight">{label}</h3>
                <p className="text-gray-500 text-[0.8125rem] leading-relaxed">{desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
