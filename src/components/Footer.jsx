import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiMail, HiClock, HiLocationMarker } from 'react-icons/hi'
import { SOCIAL, EMAIL, NAV_LINKS } from '../utils/constants'

export default function Footer() {
  const handleLink = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-bold text-xl text-white block leading-tight">
                Mueblería & Marmolería
              </span>
              <span className="text-[#c8a96e] font-medium tracking-widest text-sm uppercase">
                Innovación
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Especialistas en muebles a medida y cubiertas de granito y cuarzo.
              Calidad, puntualidad y terminaciones impecables en el norte de Chile.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: SOCIAL.instagram, label: 'Instagram' },
                { icon: FaFacebook, href: SOCIAL.facebook, label: 'Facebook' },
                { icon: FaWhatsapp, href: SOCIAL.whatsapp, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 hover:bg-[#c8a96e] rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-white/5 hover:border-[#c8a96e]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Navegación</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="text-gray-400 hover:text-[#c8a96e] text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiClock className="text-[#c8a96e] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white text-sm font-medium">Horario</p>
                  <p className="text-gray-400 text-xs mt-0.5">Lunes a Sábado</p>
                  <p className="text-gray-400 text-xs">08:30 – 18:00 hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="text-[#c8a96e] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-gray-400 text-xs hover:text-[#c8a96e] transition-colors mt-0.5 block"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-[#c8a96e] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white text-sm font-medium">Cobertura</p>
                  <p className="text-gray-400 text-xs mt-0.5">Antofagasta · Calama</p>
                  <p className="text-gray-400 text-xs">y norte de Chile</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Mueblería y Marmolería Innovación. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Diseño web profesional
          </p>
        </div>
      </div>
    </footer>
  )
}
