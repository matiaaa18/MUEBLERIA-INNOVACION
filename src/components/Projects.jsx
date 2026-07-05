import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { HiX, HiZoomIn, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const CATEGORIES = ['Todos', 'Cocinas', 'Closets', 'Baños', 'Cubiertas', 'Antes y Después']

const PROJECTS = [
  { id: 1,  category: 'Cocinas',        title: 'Cocina moderna en blanco', folder: 'cocinas',       file: '01.jpg' },
  { id: 2,  category: 'Cocinas',        title: 'Cocina con isla central',   folder: 'cocinas',       file: '02.jpg' },
  { id: 3,  category: 'Cocinas',        title: 'Cocina en roble natural',   folder: 'cocinas',       file: '03.jpg' },
  { id: 4,  category: 'Cocinas',        title: 'Cocina + cubierta cuarzo',  folder: 'cocinas',       file: '04.jpg' },
  { id: 5,  category: 'Closets',        title: 'Walk in Closet matrimonial',folder: 'closets',       file: '01.jpg' },
  { id: 6,  category: 'Closets',        title: 'Closet empotrado completo', folder: 'closets',       file: '02.jpg' },
  { id: 7,  category: 'Baños',          title: 'Vanitorio flotante moderno',folder: 'banos',         file: '01.jpg' },
  { id: 8,  category: 'Baños',          title: 'Mueble baño con espejo',    folder: 'banos',         file: '02.jpg' },
  { id: 9,  category: 'Cubiertas',      title: 'Cubierta de granito negro', folder: 'granito',       file: '01.jpg' },
  { id: 10, category: 'Cubiertas',      title: 'Cubierta de cuarzo blanco', folder: 'cuarzo',        file: '01.jpg' },
  { id: 11, category: 'Antes y Después',title: 'Cocina: antes y después',   folder: 'antes-despues', file: '01.jpg' },
  { id: 12, category: 'Antes y Después',title: 'Closet: transformación',    folder: 'antes-despues', file: '02.jpg' },
]

function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      variants={fadeUp}
      layout
      className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer
                 aspect-square ring-1 ring-black/5 hover:ring-[#c8a96e]/30 transition-all duration-300"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`Ver imagen: ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(project) } }}
    >
      {/* Placeholder bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-150 to-gray-200 flex flex-col items-center justify-center" aria-hidden="true">
        <div className="text-3xl opacity-30 mb-1">📷</div>
        <p className="text-gray-400 text-[0.7rem] font-medium">Próximamente</p>
      </div>

      {/* Real image */}
      <img
        src={`/images/${project.folder}/${project.file}`}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex items-end justify-between gap-2">
          <p className="text-white text-[0.8125rem] font-semibold leading-tight drop-shadow">{project.title}</p>
          <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0 border border-white/25">
            <HiZoomIn size={16} className="text-white" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-[#c8a96e] text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase">
          {project.category}
        </span>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightbox, setLightbox] = useState(null)
  const { ref, isInView } = useScrollAnimation()

  const filtered = activeCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const navigate = useCallback((dir) => {
    setLightbox((prev) => {
      const idx = filtered.findIndex((p) => p.id === prev.id)
      const next = filtered[(idx + dir + filtered.length) % filtered.length]
      return next
    })
  }, [filtered])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, navigate, closeLightbox])

  return (
    <section id="proyectos" aria-label="Galería de proyectos" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="section-label">Nuestro trabajo</span>
          <h2 className="section-title mb-4">Galería de Proyectos</h2>
          <p className="section-desc">
            Cada proyecto cuenta una historia de transformación. Aquí algunas de ellas.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Categorías de proyectos"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-[0.8125rem] font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#c8a96e] text-white shadow-md shadow-[#c8a96e]/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 lg:gap-4"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setLightbox} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/92 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full
                         flex items-center justify-center text-white transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              <HiX size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20
                         rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              aria-label="Imagen anterior"
            >
              <HiChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20
                         rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              aria-label="Imagen siguiente"
            >
              <HiChevronRight size={22} />
            </button>

            <motion.div
              key={lightbox.id}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="max-w-4xl w-full max-h-[82vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder for lightbox */}
              <div className="w-full max-h-[74vh] rounded-2xl overflow-hidden bg-gray-800 relative flex items-center justify-center min-h-[300px]">
                <div className="text-gray-600 text-center" aria-hidden="true">
                  <div className="text-5xl mb-2">📷</div>
                  <p className="text-sm">Imagen próximamente</p>
                </div>
                <img
                  src={`/images/${lightbox.folder}/${lightbox.file}`}
                  alt={lightbox.title}
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-[0.9375rem]">{lightbox.title}</p>
                <p className="text-white/40 text-xs mt-1">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
