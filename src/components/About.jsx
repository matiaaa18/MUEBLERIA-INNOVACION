import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { slideLeft, fadeUp, staggerContainer } from '../utils/animations'

const VALUES = [
  { label: 'Eficaz',      desc: 'Resultados sin rodeos. Lo que prometemos, lo cumplimos en el plazo acordado.' },
  { label: 'Prolijidad',  desc: 'Cada mueble se revisa personalmente antes de salir del taller. Ningún detalle pasa desapercibido.' },
  { label: 'Perspicaz',   desc: 'Anticipamos problemas antes de que ocurran y proponemos soluciones que el cliente no esperaba.' },
  { label: 'Precios reales', desc: 'No inflamos precios para luego hacer descuentos. El primer número es el número real.' },
  { label: 'Sin atajos',  desc: 'Nunca comprometemos la seguridad ni la calidad de un proyecto por ahorrar tiempo o material.' },
  { label: 'Trato directo', desc: 'Hablas directamente con quien fabrica e instala. Sin intermediarios, sin teléfono descompuesto.' },
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
              Más de 5 años destacando por calidad y resultados que se ven.
            </h2>
            <p className="body-lg mb-5">
              <strong className="text-[var(--ink)] font-semibold">Mueblería y Marmolería Innovación</strong>{' '}
              nació de la ilusión de salir adelante y destacar. Desde el primer día la meta fue
              una sola: que cada proyecto hablara por sí solo.
            </p>
            <p className="body-md mb-14">
              Tres palabras definen cómo trabajamos: <em>Eficaz, Prolijidad y Perspicaz.</em>{' '}
              Más de 5 años de experiencia combinada en mueblería y marmolería, con proyectos que
              van desde una cocina completa hasta cubiertas de materiales que nunca antes habíamos
              trabajado —y siempre entregados a tiempo y sin sorpresas.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-0 border-t border-black/[0.06]">
              {[
                { to: 3, suffix: '+', label: 'Años mueblería' },
                { to: 5, suffix: '+', label: 'Años marmolería' },
                { to: 144, suffix: '+', label: 'Proyectos al año' },
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
