import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiMail, HiClock, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { SOCIAL, EMAIL, NAV_LINKS, WHATSAPP_NUMBER, WHATSAPP_FULL_URL } from '../utils/constants'

const SOCIALS = [
  { icon: FaInstagram, href: SOCIAL.instagram, label: 'Instagram' },
  { icon: FaFacebook,  href: SOCIAL.facebook,  label: 'Facebook' },
  { icon: FaWhatsapp,  href: SOCIAL.whatsapp,  label: 'WhatsApp' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-12 py-16 border-b border-white/[0.06]">

          {/* Brand column */}
          <div>
            <div className="mb-5">
              <span className="font-extrabold text-[1.125rem] text-white block leading-tight">
                Mueblería & Marmolería
              </span>
              <span className="text-[#c8a96e] font-bold tracking-[0.2em] text-[0.65rem] uppercase mt-1 block">
                Innovación
              </span>
            </div>
            <p className="text-gray-400 text-[0.875rem] leading-[1.75] max-w-xs mb-7">
              Especialistas en muebles a medida y cubiertas de granito y cuarzo.
              Calidad, puntualidad y terminaciones impecables en el norte de Chile.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/[0.05] hover:bg-[#c8a96e] rounded-xl flex items-center justify-center
                             text-gray-400 hover:text-white transition-all duration-200
                             border border-white/[0.05] hover:border-[#c8a96e] focus-visible:ring-2 focus-visible:ring-[#c8a96e]"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-[0.8125rem] font-semibold tracking-wide uppercase mb-5">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-[#c8a96e] text-[0.875rem] transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[0.8125rem] font-semibold tracking-wide uppercase mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiClock className="text-[#c8a96e] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <div>
                  <p className="text-white text-[0.875rem] font-medium leading-tight">Horario de atención</p>
                  <p className="text-gray-400 text-[0.8125rem] mt-1">Lunes a Sábado, 08:30 – 18:00 hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiPhone className="text-[#c8a96e] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <div>
                  <p className="text-white text-[0.875rem] font-medium leading-tight">Teléfono / WhatsApp</p>
                  <a
                    href={WHATSAPP_FULL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-[0.8125rem] hover:text-[#c8a96e] transition-colors mt-1 block"
                  >
                    +56 9 5858 8317
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="text-[#c8a96e] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <div>
                  <p className="text-white text-[0.875rem] font-medium leading-tight">Correo electrónico</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-gray-400 text-[0.8125rem] hover:text-[#c8a96e] transition-colors mt-1 block break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-[#c8a96e] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <div>
                  <p className="text-white text-[0.875rem] font-medium leading-tight">Cobertura</p>
                  <p className="text-gray-400 text-[0.8125rem] mt-1">Antofagasta · Calama y norte de Chile</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-[0.8125rem]">
            © {new Date().getFullYear()} Mueblería y Marmolería Innovación. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-[0.75rem]">Antofagasta, Chile</p>
        </div>
      </div>
    </footer>
  )
}
