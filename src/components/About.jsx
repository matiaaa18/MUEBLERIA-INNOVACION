import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { slideLeft, fadeUp, staggerContainer } from '../utils/animations'

const VALUES = [
  { label: 'Honestidad',            desc: 'Transparencia total en cada etapa del proyecto.' },
  { label: 'Puntualidad',           desc: 'Plazos que se respetan, siempre.' },
  { label: 'Calidad',               desc: 'Materiales y mano de obra de primera categoría.' },
  { label: 'Terminaciones exactas', desc: 'Cada milímetro revisado antes de la entrega.' },
  { label: 'Trato cercano',         desc: 'Profesionalismo con calidez humana.' },
  { label: 'Compromiso real',       desc: 'Tu satisfacción es nuestra única meta.' },
]

function Counter({ to, duration = 1600 }) {
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
    <section id="nosotros" aria-label="Sobre nosotros" className="section-outer bg-white">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-start">

          {/* Left */}
          <motion.div
            ref={leftRef}
            variants={slideLeft}
            initial="hidden"
            animate={leftVisible ? 'visible' : 'hidden'}
          >
            <span className="eyebrow">Sobre Nosotros</span>
            <h2 className="h2 mb-8">
              Transformando hogares con dedicación y calidad.
            </h2>
            <p className="body-lg mb-5">
              <strong className="text-[var(--ink)] font-semibold">Mueblería y Marmolería Innovación</strong>{' '}
              nació del esfuerzo, sacrificio y mucha dedicación. Desde el primer día nuestro
              objetivo ha sido claro: destacar por la calidad de cada proyecto.
            </p>
            <p className="body-md mb-14">
              Con más de 5 años de experiencia combinada, hemos construido una reputación basada
              en la confianza y en resultados que superan las expectativas. Cada proyecto es único
              y lo tratamos como tal.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-0 border-t border-black/[0.06]">
              {[
                { to: 3, suffix: '+', label: 'Años mueblería' },
                { to: 5, suffix: '+', label: 'Años marmolería' },
                { to: 200, suffix: '+', label: 'Proyectos' },
              ].map(({ to, suffix, label }, i) => (
                <div
                  key={label}
                  className={`pt-8 ${i > 0 ? 'pl-8 border-l border-black/[0.06]' : ''}`}
                >
                  <div className="text-[2.25rem] font-extrabold text-[var(--ink)] leading-none mb-1.5 tabular-nums">
                    <Counter to={to} />{suffix}
                  </div>
                  <div className="body-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: values */}
          <motion.div
            ref={rightRef}
            variants={staggerContainer}
            initial="hidden"
            animate={rightVisible ? 'visible' : 'hidden'}
            className="lg:pt-[calc(0.6875rem+1rem+2rem)]"
          >
            <ul role="list" className="space-y-0">
              {VALUES.map(({ label, desc }) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="flex gap-5 py-5 border-b border-black/[0.06]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--wood)] mt-[0.45rem] shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[var(--ink)] text-[0.9375rem] leading-snug mb-0.5">{label}</p>
                    <p className="body-sm">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
