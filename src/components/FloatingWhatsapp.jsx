import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { WHATSAPP_FULL_URL } from '../utils/constants'

export default function FloatingWhatsapp() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-4 max-w-[220px] border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Innovación</p>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <p className="text-xs text-green-600">En línea</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowTooltip(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <HiX size={14} />
              </button>
            </div>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              ¡Hola! ¿Tienes un proyecto en mente? Escríbenos y te cotizamos.
            </p>
            <a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25d366] text-white text-xs font-semibold text-center py-2.5 rounded-xl hover:bg-[#20bf5c] transition-colors"
            >
              Iniciar conversación
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 bg-[#25d366] hover:bg-[#20bf5c] rounded-full flex items-center justify-center shadow-2xl shadow-[#25d366]/40 hover:shadow-[#25d366]/60 transition-all duration-200 hover:-translate-y-1 cursor-pointer relative"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-white" size={26} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
      </motion.button>
    </div>
  )
}
