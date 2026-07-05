import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import { HiChevronDown } from 'react-icons/hi'

const FAQS = [
  {
    q: '¿Cuánto demora un proyecto?',
    a: 'Una cocina completa está lista en aproximadamente 10 días hábiles desde que se confirma el proyecto. Trabajos más pequeños —un vanitorio, un mueble TV o una cubierta de reemplazo— pueden estar terminados en 5 días hábiles. El plazo exacto siempre queda indicado en el presupuesto.',
  },
  {
    q: '¿Cuánto demora en llegar el presupuesto?',
    a: 'En máximo 1 día hábil desde la visita. Medimos, calculamos y te mandamos el presupuesto detallado al día siguiente. Sin demoras, sin incertidumbre.',
  },
  {
    q: '¿Cómo puedo cotizar mi proyecto?',
    a: 'Escríbenos por WhatsApp al +56 9 5858 8317, Instagram o Facebook. Con fotos y medidas básicas podemos darte una idea preliminar de precio. Luego coordinamos una visita gratuita para tomar medidas exactas y entregarte el presupuesto definitivo.',
  },
  {
    q: '¿La visita tiene costo?',
    a: 'No. La visita para medir y conocer el espacio es completamente gratuita y sin compromiso. Vamos a tu hogar, evaluamos el proyecto y te entregamos el presupuesto de forma transparente.',
  },
  {
    q: '¿Dónde está el taller?',
    a: 'Nuestro taller está en Av. Industrial #7363, Antofagasta. Allí fabricamos todos los muebles y cubiertas antes de llevarlos a tu hogar para la instalación.',
  },
  {
    q: '¿Trabajan fuera de Antofagasta?',
    a: 'Sí. Cubrimos Antofagasta, Calama, Mejillones, Tocopilla, Taltal y otras ciudades del norte. Para traslados fuera de Antofagasta se cobra un costo de combustible que informamos antes de agendar.',
  },
  {
    q: '¿Cómo se paga y emiten factura?',
    a: 'Aceptamos efectivo y transferencia bancaria. Sí emitimos boleta y factura. Generalmente se solicita un 50% al confirmar el proyecto y el saldo contra entrega, según se acuerde en el presupuesto.',
  },
  {
    q: '¿Las cubiertas de granito o cuarzo requieren mantención?',
    a: 'El cuarzo no requiere sellado: sale sellado de fábrica y es prácticamente sin mantenimiento. El granito se recomienda sellar cada 1 a 2 años con productos específicos para piedra natural, lo que tarda solo unos minutos y prolonga su vida útil considerablemente.',
  },
  {
    q: '¿Los proyectos tienen garantía?',
    a: 'Sí. Todos los trabajos tienen 1 año de garantía en estructura, melamina, herrajes y cubiertas, contra defectos de fabricación e instalación, conforme a la Ley 19.496. No cubre mal uso, humedad excesiva ni modificaciones de terceros.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  const id = `faq-answer-${index}`
  return (
    <motion.div variants={fadeUp} className="border-b border-black/[0.06]">
      <button
        id={`faq-btn-${index}`}
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between py-5 text-left gap-5 cursor-pointer"
      >
        <span className="font-semibold text-[var(--ink)] text-[0.9375rem] leading-snug">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0 text-[var(--wood)]"
          aria-hidden="true"
        >
          <HiChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 body-md pr-8">{item.a}</p>
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
    <section id="faq" aria-label="Preguntas frecuentes" className="section-outer bg-[#faf9f7]">
      <div className="section-inner">
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow">Resolvemos tus dudas</span>
            <h2 className="h2">Preguntas Frecuentes</h2>
          </motion.div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="border-t border-black/[0.06]"
          >
            {FAQS.map((item, i) => (
              <FAQItem key={i} item={item} index={i} isOpen={openIndex === i} onToggle={toggle} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
