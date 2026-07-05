import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp } from '../utils/animations'
import { HiLocationMarker, HiCheckCircle } from 'react-icons/hi'

const CITIES = [
  { name: 'Antofagasta', primary: true },
  { name: 'Calama' },
  { name: 'Mejillones' },
  { name: 'Tocopilla' },
  { name: 'Taltal' },
]

const MAP_CITIES = [
  { cx: 98,  cy: 72,  name: 'Tocopilla',   anchor: 'right' },
  { cx: 93,  cy: 97,  name: 'Mejillones',  anchor: 'right' },
  { cx: 104, cy: 128, name: 'Calama',      anchor: 'right', inland: true },
  { cx: 97,  cy: 170, name: 'Antofagasta', anchor: 'right', primary: true },
  { cx: 101, cy: 265, name: 'Taltal',      anchor: 'right' },
]

export default function Coverage() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="cobertura" aria-label="Cobertura" className="section-py bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Dónde llegamos</span>
            <h2 className="section-title mb-5">
              Cobertura en el{' '}
              <span className="text-[#c8a96e]">Norte de Chile</span>
            </h2>
            <p className="text-gray-500 text-[1.0625rem] leading-[1.75] mb-8">
              Llevamos calidad y profesionalismo hasta tu puerta en las principales ciudades del norte.
              ¿Tu ciudad no está en la lista?{' '}
              <strong className="text-gray-700 font-semibold">Consúltanos igual</strong> — siempre
              buscamos la forma de llegar.
            </p>

            <div className="space-y-2.5 mb-8">
              {CITIES.map((city, i) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.45 }}
                  className={`flex items-center gap-3.5 rounded-xl px-5 py-3.5 border transition-colors duration-200 ${
                    city.primary
                      ? 'bg-[#fdf8f0] border-[#c8a96e]/25'
                      : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <HiCheckCircle
                    className={city.primary ? 'text-[#c8a96e]' : 'text-[#4a7c59]'}
                    size={20}
                    aria-hidden="true"
                  />
                  <span className={`font-medium text-[0.9375rem] ${city.primary ? 'text-gray-900' : 'text-gray-700'}`}>
                    {city.name}
                  </span>
                  {city.primary && (
                    <span className="ml-auto text-[0.7rem] bg-[#c8a96e] text-white px-2.5 py-0.5 rounded-full font-bold tracking-wide uppercase">
                      Principal
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-[#4a7c59]/6 border border-[#4a7c59]/18 rounded-xl p-4">
              <HiLocationMarker className="text-[#4a7c59] shrink-0 mt-0.5" size={18} aria-hidden="true" />
              <p className="text-[0.875rem] text-gray-600 leading-relaxed">
                También realizamos trabajos en <strong className="font-semibold text-gray-700">otras ciudades de la región</strong>.
                Consulta disponibilidad y costos adicionales de traslado.
              </p>
            </div>
          </motion.div>

          {/* Right: SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 w-full max-w-[340px] mx-auto">
              <p className="text-[0.7rem] font-bold text-gray-400 tracking-[0.16em] uppercase text-center mb-5">
                Región de Antofagasta
              </p>
              <svg
                viewBox="0 0 200 380"
                className="w-full max-h-72"
                aria-label="Mapa del norte de Chile con ciudades de cobertura"
                role="img"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Region background blob */}
                <ellipse cx="100" cy="195" rx="42" ry="165" fill="#e8f0eb" stroke="#4a7c59" strokeWidth="1.5" strokeLinejoin="round" />
                {/* Coast line refinement */}
                <path
                  d="M85 30 C80 45 76 65 74 85 C72 108 71 128 72 148 C73 168 74 188 76 208 C78 228 80 250 82 270 C84 290 86 310 88 330 L100 348 L112 330 C114 310 116 290 118 270 C120 250 122 228 124 208 C126 188 127 168 128 148 C129 128 128 108 126 85 C124 65 120 45 115 30 Z"
                  fill="#d0e5d6"
                  stroke="#4a7c59"
                  strokeWidth="0.8"
                />

                {/* City markers */}
                {MAP_CITIES.map((city) => (
                  <g key={city.name}>
                    {city.primary && (
                      <circle cx={city.cx} cy={city.cy} r="12" fill="#c8a96e" fillOpacity="0.12" />
                    )}
                    <circle cx={city.cx} cy={city.cy} r={city.primary ? 5.5 : 4}
                            fill={city.primary ? '#c8a96e' : '#4a7c59'} />
                    <circle cx={city.cx} cy={city.cy} r={city.primary ? 8.5 : 6.5}
                            fill={city.primary ? '#c8a96e' : '#4a7c59'} fillOpacity="0.2" />
                    <text
                      x={city.cx + 12}
                      y={city.cy + 3.5}
                      fontSize={city.primary ? '8.5' : '7'}
                      fill={city.primary ? '#c8a96e' : '#4a4a4a'}
                      fontFamily="system-ui, sans-serif"
                      fontWeight={city.primary ? 'bold' : '500'}
                    >
                      {city.name}
                    </text>
                  </g>
                ))}
              </svg>
              <p className="text-[0.7rem] text-gray-400 text-center mt-4">
                ● Ciudad principal &nbsp;&nbsp; ● Ciudades de cobertura
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
