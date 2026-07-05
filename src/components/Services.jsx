import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '../utils/animations'
import {
  MdKitchen, MdChair, MdBathroom, MdDesktopMac, MdTv, MdBuild, MdColorLens, MdWater,
} from 'react-icons/md'
import {
  GiWoodBeam, GiStoneBlock, GiRolledCloth,
} from 'react-icons/gi'
import { HiHome, HiOfficeBuilding, HiCog } from 'react-icons/hi'
import { FaTools } from 'react-icons/fa'
import { BsHouseDoor } from 'react-icons/bs'

const SERVICES = [
  { icon: MdKitchen, title: 'Muebles de Cocina', desc: 'Diseño funcional y elegante adaptado a tu espacio.' },
  { icon: MdChair, title: 'Closets', desc: 'Optimización de espacio con acabados perfectos.' },
  { icon: HiHome, title: 'Walk in Closet', desc: 'Vestidores de lujo totalmente personalizados.' },
  { icon: MdBathroom, title: 'Vanitorios', desc: 'Muebles de baño con estilo y funcionalidad.' },
  { icon: MdDesktopMac, title: 'Home Office', desc: 'Espacios de trabajo a medida para tu hogar.' },
  { icon: MdTv, title: 'Muebles para TV', desc: 'Soluciones modernas para tu salón.' },
  { icon: HiOfficeBuilding, title: 'Centros de entretenimiento', desc: 'Ambientes completos de confort y diseño.' },
  { icon: MdChair, title: 'Muebles personalizados', desc: 'Cualquier mueble que imagines, lo fabricamos.' },
  { icon: GiStoneBlock, title: 'Cubiertas de Granito', desc: 'Elegancia y durabilidad natural.' },
  { icon: GiRolledCloth, title: 'Cubiertas de Cuarzo', desc: 'Resistencia y estética sin igual.' },
  { icon: HiCog, title: 'Remodelación de Cocinas', desc: 'Renovamos tu cocina de principio a fin.' },
  { icon: FaTools, title: 'Instalación de muebles', desc: 'Montaje profesional y garantizado.' },
  { icon: MdWater, title: 'Instalación de lavaplatos', desc: 'Instalación rápida y sin complicaciones.' },
  { icon: MdBuild, title: 'Instalación de grifería', desc: 'Montaje de griferías y accesorios.' },
  { icon: BsHouseDoor, title: 'Obras civiles menores', desc: 'Pequeñas construcciones y habilitaciones.' },
  { icon: MdColorLens, title: 'Pintura', desc: 'Aplicación profesional con terminaciones impecables.' },
  { icon: GiWoodBeam, title: 'Cambio de cerámica', desc: 'Renovación de pisos y muros.' },
]

function ServiceCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#c8a96e]/40 hover:shadow-lg hover:shadow-[#c8a96e]/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-[#fdf8f0] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c8a96e] transition-colors duration-300">
        <Icon className="text-[#c8a96e] group-hover:text-white transition-colors duration-300" size={22} />
      </div>
      <h3 className="font-semibold text-gray-900 mb-2 text-sm">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Services() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Lo que hacemos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Soluciones completas para cada rincón de tu hogar, desde la idea hasta la instalación.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 0.05} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
