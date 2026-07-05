import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import { FaWhatsapp } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'
import { WHATSAPP_FULL_URL, EMAIL } from '../utils/constants'

const TRUST = [
  'Visita gratuita y sin compromiso',
  'Presupuesto detallado y transparente',
  'Respuesta en menos de 24 horas',
]

export default function CTA() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contacto" aria-label="Contacto y cotización" className="relative overflow-hidden bg-white">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden="true" />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(200,169,110,0.055) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24 lg:py-36 text-center relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span variants={fadeUp} className="section-label">
            Da el primer paso
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-gray-900
                       leading-[1.1] tracking-[-0.025em] mb-5"
          >
            Hagamos realidad
            <br />
            <span className="text-[#c8a96e]">tu proyecto.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-500 text-[1.0625rem] mb-10 max-w-md mx-auto leading-[1.75]">
            Escríbenos hoy mismo. La primera consulta es gratuita y sin compromiso. Te respondemos rápido.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <FaWhatsapp size={22} aria-hidden="true" />
              Cotizar por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 border border-gray-200
                         hover:border-gray-300 text-gray-700 font-semibold px-7 py-4 rounded-full
                         text-[0.9375rem] transition-all duration-200 hover:bg-gray-50"
            >
              Enviar un correo
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.ul variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-gray-500 text-[0.8125rem]">
                <HiCheckCircle className="text-[#4a7c59] shrink-0" size={16} aria-hidden="true" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
