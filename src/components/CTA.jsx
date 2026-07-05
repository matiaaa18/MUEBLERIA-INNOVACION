import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_FULL_URL } from '../utils/constants'

export default function CTA() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contacto" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,110,0.06)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            Da el primer paso
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Hagamos realidad
            <br />
            <span className="text-[#c8a96e]">tu proyecto.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed"
          >
            Escríbenos hoy mismo. La primera consulta es gratuita y sin compromiso.
            Te respondemos rápido y coordinamos una visita a tu domicilio.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#20bf5c] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-200 shadow-xl shadow-[#25d366]/25 hover:shadow-[#25d366]/40 hover:-translate-y-1"
            >
              <FaWhatsapp size={24} />
              Cotizar por WhatsApp
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-sm mt-6"
          >
            Visita gratuita · Presupuesto sin compromiso · Respuesta inmediata
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
