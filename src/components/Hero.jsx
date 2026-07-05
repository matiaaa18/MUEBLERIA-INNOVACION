import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { WHATSAPP_FULL_URL } from '../utils/constants'
import { fadeUp, fadeIn, slideRight } from '../utils/animations'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#proyectos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
    >
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 opacity-95" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8a96e' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center py-24 lg:py-32">
        {/* Left: Text */}
        <div className="flex flex-col gap-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded-full px-4 py-2 w-fit"
          >
            <span className="w-2 h-2 bg-[#c8a96e] rounded-full animate-pulse" />
            <span className="text-[#c8a96e] text-sm font-medium tracking-wide">
              Antofagasta · Calama y más
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Muebles y Cubiertas{' '}
            <span className="text-[#c8a96e]">a Medida</span>{' '}
            para transformar tu hogar.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="text-lg text-gray-300 leading-relaxed max-w-xl"
          >
            Especialistas en cocinas, closets, baños, muebles personalizados y cubiertas
            de granito y cuarzo. Calidad, puntualidad y terminaciones impecables.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#c8a96e] hover:bg-[#b8924e] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#c8a96e]/25 hover:shadow-[#c8a96e]/40 hover:-translate-y-0.5"
            >
              Solicitar Cotización
              <HiArrowRight size={18} />
            </a>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5 cursor-pointer"
            >
              Ver Proyectos
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.65 }}
            className="flex gap-10 pt-4 border-t border-white/10"
          >
            {[
              { value: '5+', label: 'Años de experiencia' },
              { value: '200+', label: 'Proyectos completados' },
              { value: '100%', label: 'Clientes satisfechos' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-800 shadow-2xl">
            <img
              src="/images/cocinas/hero.jpg"
              alt="Proyecto de cocina moderna"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.classList.add('hero-placeholder')
              }}
            />
            {/* Fallback gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-[#c8a96e]/30 flex flex-col items-center justify-center hero-placeholder-content">
              <div className="text-6xl mb-4">🏠</div>
              <p className="text-white/60 text-sm">Imagen de proyecto</p>
            </div>
            {/* Decorative tag */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c8a96e] rounded-lg flex items-center justify-center text-white text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Cocina moderna terminada</p>
                  <p className="text-white/60 text-xs">Melamina Masisa + Cubierta de cuarzo</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#c8a96e]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#4a7c59]/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
