import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import {
  HiPhone, HiHome, HiPencil, HiColorSwatch, HiDocumentText,
  HiCog, HiAdjustments, HiBadgeCheck,
} from 'react-icons/hi'
import { FaTools } from 'react-icons/fa'

const STEPS = [
  { step: 1, icon: HiPhone, title: 'Contacto', desc: 'Nos escribes por WhatsApp o redes y coordinamos una visita.' },
  { step: 2, icon: HiHome, title: 'Visita', desc: 'Vamos hasta tu hogar para conocer el espacio en persona.' },
  { step: 3, icon: HiPencil, title: 'Medición', desc: 'Tomamos todas las medidas con precisión milimétrica.' },
  { step: 4, icon: HiColorSwatch, title: 'Diseño', desc: 'Creamos el diseño a medida según tus gustos y necesidades.' },
  { step: 5, icon: HiDocumentText, title: 'Presupuesto', desc: 'Te entregamos un presupuesto transparente sin sorpresas.' },
  { step: 6, icon: HiCog, title: 'Fabricación', desc: 'Fabricamos cada pieza con materiales de primera calidad.' },
  { step: 7, icon: HiAdjustments, title: 'Rectificación', desc: 'Verificamos las medidas finales antes de instalar.' },
  { step: 8, icon: FaTools, title: 'Instalación', desc: 'Instalamos todo con cuidado, limpieza y profesionalismo.' },
  { step: 9, icon: HiBadgeCheck, title: 'Entrega', desc: 'Te hacemos entrega del proyecto terminado y verificado.' },
]

export default function Process() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="proceso" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Un proceso claro y ordenado para que tu proyecto fluya sin imprevistos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c8a96e]/0 via-[#c8a96e]/30 to-[#c8a96e]/0 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${
                    isLeft ? '' : 'lg:[&>*:first-child]:order-2'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isLeft ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                    <div
                      className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#c8a96e]/20 transition-all duration-300 ${
                        isLeft ? '' : 'lg:ml-0'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-3 ${
                          isLeft ? 'lg:flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-10 h-10 bg-[#fdf8f0] rounded-xl flex items-center justify-center shrink-0">
                          <step.icon className="text-[#c8a96e]" size={20} />
                        </div>
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className={`hidden lg:flex items-center justify-center relative ${isLeft ? 'order-2' : 'order-1'}`}>
                    <div className="w-10 h-10 bg-[#c8a96e] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#c8a96e]/30 z-10">
                      {step.step}
                    </div>
                  </div>

                  {/* Mobile step number */}
                  <div className="lg:hidden flex items-center gap-3 mb-3 -mt-0">
                    <div className="w-8 h-8 bg-[#c8a96e] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {step.step}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
