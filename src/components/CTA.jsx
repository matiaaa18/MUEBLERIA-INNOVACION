import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_FULL_URL, EMAIL } from '../utils/constants'

export default function CTA() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contacto" aria-label="Contacto y cotización" className="section-outer bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.06]" aria-hidden="true" />

      <div className="section-inner">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Da el primer paso
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="h2 mb-5"
            >
              Hagamos realidad tu proyecto.
            </motion.h2>

            <motion.p variants={fadeUp} className="body-lg mb-10 max-w-md mx-auto">
              La primera consulta es gratuita y sin compromiso. Escríbenos hoy y te respondemos rápido.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3.5 justify-center mb-8">
              <a
                href={WHATSAPP_FULL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <FaWhatsapp size={20} aria-hidden="true" />
                Cotizar por WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="btn btn-outline-dark"
              >
                Enviar un correo
              </a>
            </motion.div>

            <motion.p variants={fadeUp} className="body-sm">
              Visita gratuita · Presupuesto transparente · Respuesta en menos de 24 hrs
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
