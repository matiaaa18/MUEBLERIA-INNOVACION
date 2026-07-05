import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import {
  HiPhone, HiHome, HiPencil, HiColorSwatch, HiDocumentText,
  HiCog, HiAdjustments, HiBadgeCheck,
} from 'react-icons/hi'
import { FaTools } from 'react-icons/fa'

const STEPS = [
  { step: 1, icon: HiPhone,        title: 'Contacto',              desc: 'Nos escribes por WhatsApp o redes y coordinamos una visita.' },
  { step: 2, icon: HiHome,         title: 'Visita',                desc: 'Vamos hasta tu hogar para conocer el espacio en persona.' },
  { step: 3, icon: HiPencil,       title: 'Medición',              desc: 'Tomamos todas las medidas con precisión milimétrica.' },
  { step: 4, icon: HiColorSwatch,  title: 'Diseño',                desc: 'Creamos el diseño a medida según tus gustos y necesidades.' },
  { step: 5, icon: HiDocumentText, title: 'Presupuesto',           desc: 'Te entregamos un presupuesto transparente sin sorpresas.' },
  { step: 6, icon: HiCog,          title: 'Fabricación',           desc: 'Fabricamos cada pieza con materiales de primera calidad.' },
  { step: 7, icon: HiAdjustments,  title: 'Rectificación',         desc: 'Verificamos las medidas finales antes de instalar.' },
  { step: 8, icon: FaTools,        title: 'Instalación',           desc: 'Instalamos todo con cuidado, limpieza y profesionalismo.' },
  { step: 9, icon: HiBadgeCheck,   title: 'Entrega',               desc: 'Te hacemos entrega del proyecto terminado y verificado.' },
]

export default function Process() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="proceso" aria-label="Nuestro proceso" className="section-py bg-[#faf9f7]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Cómo trabajamos</span>
          <h2 className="section-title mb-4">Nuestro Proceso</h2>
          <p className="section-desc">
            Un proceso claro y ordenado para que tu proyecto fluya sin imprevistos ni sorpresas.
          </p>
        </motion.div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-9 h-9 bg-[#c8a96e] rounded-full flex items-center justify-center
                                text-white font-bold text-sm shadow-md shadow-[#c8a96e]/30">
                  {step.step}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-gray-100 min-h-[1.5rem]" aria-hidden="true" />
                )}
              </div>
              <div className="pt-1 pb-2">
                <div className="flex items-center gap-2.5 mb-2">
                  <step.icon className="text-[#c8a96e] shrink-0" size={16} aria-hidden="true" />
                  <h3 className="font-semibold text-gray-900 text-[0.9375rem]">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-[0.8125rem] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: alternating timeline */}
        <div className="hidden lg:block relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#c8a96e]/10 via-[#c8a96e]/30 to-[#c8a96e]/10 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="grid grid-cols-[1fr_56px_1fr] items-center gap-0"
                >
                  {/* Left side */}
                  <div className={isLeft ? 'pr-8' : 'col-start-3 pl-8'}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                                    hover:shadow-md hover:border-[#c8a96e]/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 bg-[#fdf8f0] rounded-xl flex items-center justify-center shrink-0">
                          <step.icon className="text-[#c8a96e]" size={17} aria-hidden="true" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-[0.9375rem]">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-[0.8125rem] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className={`flex justify-center ${isLeft ? 'col-start-2' : 'col-start-2 row-start-1'}`}>
                    <div className="w-11 h-11 bg-[#c8a96e] rounded-full flex items-center justify-center
                                    text-white font-extrabold text-sm shadow-lg shadow-[#c8a96e]/35 z-10
                                    ring-4 ring-[#faf9f7]">
                      {step.step}
                    </div>
                  </div>

                  {/* Right spacer when left-aligned, or content when right-aligned */}
                  {isLeft && <div />}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
