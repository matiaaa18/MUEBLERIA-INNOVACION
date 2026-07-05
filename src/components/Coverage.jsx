import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, slideLeft } from '../utils/animations'
import { HiLocationMarker, HiCheckCircle } from 'react-icons/hi'

const CITIES = [
  { name: 'Antofagasta', main: true },
  { name: 'Calama', main: true },
  { name: 'Mejillones', main: true },
  { name: 'Tocopilla', main: true },
  { name: 'Taltal', main: true },
]

export default function Coverage() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="cobertura" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Dónde llegamos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Cobertura en el{' '}
              <span className="text-[#c8a96e]">Norte de Chile</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Nos desplazamos a las principales ciudades de la zona norte, llevando calidad
              y profesionalismo hasta tu puerta. ¿Tu ciudad no está en la lista?{' '}
              <strong className="text-gray-700">Consúltanos igual</strong>, siempre buscamos la
              forma de llegar.
            </p>

            <div className="space-y-3 mb-8">
              {CITIES.map((city) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * CITIES.indexOf(city) + 0.3 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 border border-gray-100 shadow-sm"
                >
                  <HiCheckCircle className="text-[#4a7c59] shrink-0" size={20} />
                  <span className="font-medium text-gray-800">{city.name}</span>
                  {city.name === 'Antofagasta' && (
                    <span className="ml-auto text-xs bg-[#c8a96e] text-white px-2.5 py-0.5 rounded-full font-medium">
                      Principal
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-[#4a7c59]/5 border border-[#4a7c59]/20 rounded-xl p-4">
              <HiLocationMarker className="text-[#4a7c59] shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-gray-600 leading-relaxed">
                También realizamos trabajos en <strong>otras ciudades de la región</strong>.
                Consulta disponibilidad y costos adicionales de traslado.
              </p>
            </div>
          </motion.div>

          {/* Right: Map SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 w-full max-w-sm mx-auto">
              {/* Simplified Chile Norte SVG */}
              <svg viewBox="0 0 200 400" className="w-full max-h-80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Chile silhouette simplified - norte region */}
                <path
                  d="M100 20 C90 25, 80 30, 75 40 L70 60 C65 75, 60 85, 62 100 L65 120 C63 135, 60 150, 58 165 L55 185 C52 200, 50 215, 48 230 L45 250 C43 265, 40 280, 42 295 L45 315 C47 330, 50 345, 55 360 L60 375 C65 385, 72 392, 80 395 L90 398 C95 399, 100 400, 105 399 L115 396 C122 393, 128 388, 132 380 L137 365 C140 352, 140 338, 138 325 L135 308 C133 293, 130 278, 128 263 L125 243 C124 228, 122 213, 120 198 L118 178 C117 163, 115 148, 113 133 L111 113 C110 98, 108 83, 107 68 L106 48 C104 36, 102 25, 100 20Z"
                  fill="#e8f0eb"
                  stroke="#4a7c59"
                  strokeWidth="1.5"
                />
                {/* City markers */}
                {[
                  { x: 95, y: 80, name: 'Tocopilla' },
                  { x: 100, y: 130, name: 'Calama' },
                  { x: 95, y: 175, name: 'Antofagasta' },
                  { x: 88, y: 100, name: 'Mejillones' },
                  { x: 100, y: 270, name: 'Taltal' },
                ].map((city) => (
                  <g key={city.name}>
                    <circle cx={city.x} cy={city.y} r="5" fill="#c8a96e" />
                    <circle cx={city.x} cy={city.y} r="8" fill="#c8a96e" fillOpacity="0.3" />
                  </g>
                ))}
                {/* Labels */}
                <text x="110" y="84" fontSize="7" fill="#555" fontFamily="system-ui">Tocopilla</text>
                <text x="105" y="104" fontSize="7" fill="#555" fontFamily="system-ui">Mejillones</text>
                <text x="110" y="134" fontSize="7" fill="#555" fontFamily="system-ui">Calama</text>
                <text x="107" y="179" fontSize="8" fill="#c8a96e" fontFamily="system-ui" fontWeight="bold">Antofagasta</text>
                <text x="107" y="274" fontSize="7" fill="#555" fontFamily="system-ui">Taltal</text>
              </svg>
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">Norte de Chile</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
