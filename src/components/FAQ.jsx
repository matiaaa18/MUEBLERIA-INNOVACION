import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import { HiChevronDown } from 'react-icons/hi'

const FAQS = [
  {
    q: '¿Cuánto demora un proyecto?',
    a: 'El tiempo varía según el tamaño y complejidad. Una cocina completa demora entre 2 y 4 semanas desde la fabricación hasta la instalación. Proyectos menores como vanitorios pueden estar listos antes. Te daremos un plazo exacto en el presupuesto.',
  },
  {
    q: '¿Cómo puedo cotizar mi proyecto?',
    a: 'Puedes cotizar por WhatsApp al +56 9 5858 8317, Instagram o Facebook. Te pediremos fotos y medidas básicas para una idea preliminar de precio. Luego coordinamos una visita para tomar medidas exactas y entregarte el presupuesto definitivo.',
  },
  {
    q: '¿La visita tiene costo?',
    a: 'No. La visita para medir y conocer el proyecto es completamente gratuita y sin compromiso. Vamos a tu hogar, evaluamos el espacio y te entregamos el presupuesto de forma transparente.',
  },
  {
    q: '¿Trabajan fuera de Antofagasta?',
    a: 'Sí. Cubrimos Antofagasta, Calama, Mejillones, Tocopilla, Taltal y otras ciudades de la región. Para ciudades fuera de Antofagasta puede aplicar un costo de traslado que informamos con anticipación.',
  },
  {
    q: '¿Qué materiales utilizan?',
    a: 'Trabajamos principalmente con Melamina Masisa y MDF para muebles, y granito y cuarzo para cubiertas. Todos de primera calidad. Puedes ver más detalles en la sección de Materiales de esta página.',
  },
  {
    q: '¿Los proyectos tienen garantía?',
    a: 'Sí. Garantizamos estructura, melamina, herrajes y cubiertas contra defectos de fabricación e instalación. No cubre mal uso, humedad excesiva ni modificaciones de terceros.',
  },
  {
    q: '¿Cuánto debo abonar para comenzar?',
    a: 'Generalmente se solicita un 50% al confirmar el proyecto y el saldo restante contra entrega. Esta condición se informa claramente en el presupuesto según el tamaño del trabajo.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  const id = `faq-answer-${index}`
  return (
    <motion.div variants={fadeUp} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        id={`faq-btn-${index}`}
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-6 py-5 text-left
                   hover:bg-gray-50/70 transition-colors duration-150 cursor-pointer"
      >
        <span className="font-semibold text-gray-900 pr-5 text-[0.9375rem] leading-snug">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0"
          aria-hidden="true"
        >
          <HiChevronDown className="text-[#c8a96e]" size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-500 text-[0.9rem] leading-[1.75] border-t border-gray-50 pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { ref, isInView } = useScrollAnimation()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" aria-label="Preguntas frecuentes" className="section-py bg-[#faf9f7]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Resolvemos tus dudas</span>
          <h2 className="section-title mb-4">Preguntas Frecuentes</h2>
          <p className="section-desc">
            Todo lo que necesitas saber antes de comenzar tu proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-3"
        >
          {FAQS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} isOpen={openIndex === i} onToggle={toggle} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
