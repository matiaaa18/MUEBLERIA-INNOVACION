import { useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import { HiX, HiEye, HiZoomIn } from 'react-icons/hi'

const CATEGORIES = ['Todos', 'Cocinas', 'Closets', 'Baños', 'Cubiertas', 'Antes y Después']

const CATEGORY_FOLDERS = {
  Cocinas: 'cocinas',
  Closets: 'closets',
  Baños: 'banos',
  Cubiertas: ['granito', 'cuarzo'],
  'Antes y Después': 'antes-despues',
}

const PLACEHOLDER_PROJECTS = [
  { id: 1, category: 'Cocinas', title: 'Cocina moderna blanca', folder: 'cocinas', file: '01.jpg' },
  { id: 2, category: 'Cocinas', title: 'Cocina con isla central', folder: 'cocinas', file: '02.jpg' },
  { id: 3, category: 'Cocinas', title: 'Cocina en melamina roble', folder: 'cocinas', file: '03.jpg' },
  { id: 4, category: 'Closets', title: 'Walk in Closet matrimonial', folder: 'closets', file: '01.jpg' },
  { id: 5, category: 'Closets', title: 'Closet empotrado', folder: 'closets', file: '02.jpg' },
  { id: 6, category: 'Baños', title: 'Vanitorio flotante', folder: 'banos', file: '01.jpg' },
  { id: 7, category: 'Baños', title: 'Mueble baño moderno', folder: 'banos', file: '02.jpg' },
  { id: 8, category: 'Cubiertas', title: 'Cubierta de granito negro', folder: 'granito', file: '01.jpg' },
  { id: 9, category: 'Cubiertas', title: 'Cubierta de cuarzo blanco', folder: 'cuarzo', file: '01.jpg' },
  { id: 10, category: 'Antes y Después', title: 'Renovación cocina completa', folder: 'antes-despues', file: '01.jpg' },
  { id: 11, category: 'Cocinas', title: 'Cocina con cubierta cuarzo', folder: 'cocinas', file: '04.jpg' },
  { id: 12, category: 'Antes y Después', title: 'Transformación closet', folder: 'antes-despues', file: '02.jpg' },
]

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer aspect-square"
      onClick={() => onClick(project)}
    >
      <img
        src={`/images/${project.folder}/${project.file}`}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      {/* Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center -z-0">
        <div className="text-center">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-gray-500 text-xs">Próximamente</p>
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/60 transition-all duration-300 flex items-center justify-center z-10">
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <HiZoomIn size={20} className="text-gray-900" />
          </div>
          <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
            Ver imagen
          </span>
        </motion.div>
      </div>
      {/* Category badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-[#c8a96e] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightboxProject, setLightboxProject] = useState(null)
  const { ref, isInView } = useScrollAnimation()

  const filtered =
    activeCategory === 'Todos'
      ? PLACEHOLDER_PROJECTS
      : PLACEHOLDER_PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Nuestro trabajo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Galería de Proyectos
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Cada proyecto es una historia de transformación. Aquí algunas de ellas.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#c8a96e] text-white shadow-md shadow-[#c8a96e]/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setLightboxProject} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxProject(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#c8a96e] transition-colors"
              onClick={() => setLightboxProject(null)}
            >
              <HiX size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/images/${lightboxProject.folder}/${lightboxProject.file}`}
                alt={lightboxProject.title}
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <p className="text-white text-center mt-4 font-medium text-sm">
                {lightboxProject.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
