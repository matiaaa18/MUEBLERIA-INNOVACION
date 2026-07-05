import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { WHATSAPP_FULL_URL } from '../utils/constants'

export default function FloatingWhatsapp() {
  const [show, setShow] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1800)
    const bubbleTimer = setTimeout(() => setShowBubble(true), 4000)
    return () => { clearTimeout(timer); clearTimeout(bubbleTimer) }
  }, [])

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3" aria-live="polite">
      {/* Chat bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[220px] overflow-hidden"
            role="dialog"
            aria-label="Contacto por WhatsApp"
          >
            {/* Header */}
            <div className="bg-[#1d7d3e] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white" size={15} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white text-[0.75rem] font-bold leading-tight">Innovación</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full" aria-hidden="true" />
                    <p className="text-green-200 text-[0.65rem] font-medium">En línea</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowBubble(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <HiX size={15} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              {/* Chat bubble style */}
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5 mb-4">
                <p className="text-gray-700 text-[0.8125rem] leading-relaxed">
                  ¡Hola! 👋 ¿Tienes un proyecto en mente? Escríbenos y te cotizamos gratis.
                </p>
              </div>
              <a
                href={WHATSAPP_FULL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25d366] hover:bg-[#1db954]
                           text-white text-[0.8125rem] font-bold py-2.5 rounded-xl transition-colors duration-200"
              >
                <FaWhatsapp size={15} aria-hidden="true" />
                Iniciar conversación
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <AnimatePresence>
        {show && (
          <motion.div className="relative">
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-25 pointer-events-none" aria-hidden="true" />
            <motion.a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="relative w-14 h-14 bg-[#25d366] hover:bg-[#1db954] rounded-full flex items-center justify-center
                         shadow-xl shadow-[#25d366]/40 hover:shadow-[#25d366]/60
                         transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              aria-label="Contactar por WhatsApp — Cotizar proyecto"
              onClick={() => setShowBubble(false)}
            >
              <FaWhatsapp className="text-white" size={27} aria-hidden="true" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
