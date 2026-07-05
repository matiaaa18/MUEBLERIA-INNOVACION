import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import { HiChevronDown } from 'react-icons/hi'

const FAQS = [
  {
    q: '¿Cuánto demora un proyecto?',
    a: 'El tiempo varía según el tamaño y complejidad del proyecto. Una cocina completa puede demorar entre 2 y 4 semanas desde la fabricación hasta la instalación. Proyectos más pequeños como vanitorios o muebles individuales pueden estar listos en menos tiempo. Te daremos un plazo exacto en el presupuesto.',
  },
  {
    q: '¿Cómo puedo cotizar mi proyecto?',
    a: 'Puedes cotizar por WhatsApp al +56 9 5858 8317, por Instagram o Facebook. Te pediremos algunas fotos y medidas básicas del espacio para darte una idea de precio preliminar. Luego coordinamos una visita para tomar medidas exactas y entregarte el presupuesto definitivo.',
  },
  {
    q: '¿La visita tiene costo?',
    a: 'No. La visita para tomar medidas y conocer el proyecto es completamente gratuita y sin compromiso. Vamos hasta tu hogar, evaluamos el espacio y te entregamos el presupuesto de forma transparente.',
  },
  {
    q: '¿Trabajan fuera de Antofagasta?',
    a: 'Sí, trabajamos en Antofagasta, Calama, Mejillones, Tocopilla, Taltal y otras ciudades de la región. Para proyectos fuera de Antofagasta puede aplicar un costo adicional de traslado que se informa con anticipación. Consúltanos aunque tu ciudad no aparezca en la lista.',
  },
  {
    q: '¿Qué materiales utilizan?',
    a: 'Trabajamos principalmente con melamina Masisa y MDF para muebles, y granito y cuarzo para cubiertas. Todos nuestros materiales son de primera calidad. Puedes ver más detalles en la sección de Materiales de esta misma página.',
  },
  {
    q: '¿Los proyectos tienen garantía?',
    a: 'Sí. Todos nuestros trabajos cuentan con garantía en estructura, melamina, herrajes y cubiertas. La garantía cubre defectos de fabricación e instalación bajo condiciones normales de uso. No cubre daños por mal uso, humedad excesiva ni modificaciones realizadas por terceros.',
  },
  {
    q: '¿Cuánto debo abonar para comenzar?',
    a: 'Generalmente se solicita un abono del 50% al momento de confirmar y firmar el proyecto, y el saldo restante contra entrega. Esta condición puede variar según el tamaño del proyecto y se informa claramente en el presupuesto.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-gray-900 pr-4 text-sm lg:text-base">{item.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <HiChevronDown className="text-[#c8a96e]" size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
              {item.a}
            </div>
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
    <section id="faq" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Resolvemos tus dudas
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-500 text-lg">
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
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
