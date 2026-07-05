import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { NAV_LINKS, WHATSAPP_FULL_URL } from '../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = NAV_LINKS.map(l => l.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLink = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Navegación principal"
          className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]"
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleLink('#inicio') }}
            aria-label="Mueblería y Marmolería Innovación — Inicio"
            className="flex items-center"
          >
            {/* Logo image — shown when navbar is white (scrolled) */}
            <img
              src="/logo.svg"
              alt="Mueblería y Marmolería Innovación"
              className={`h-11 w-auto object-contain transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            {/* Text logo — shown on dark/transparent navbar */}
            <span className={`flex flex-col leading-none transition-opacity duration-300 ${scrolled ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'}`}>
              <span className="font-extrabold text-[1.05rem] tracking-tight text-white">
                Mueblería & Marmolería
              </span>
              <span style={{ color: 'var(--wood)' }} className="text-[0.65rem] font-bold tracking-[0.22em] uppercase mt-0.5">
                Innovación
              </span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href
              return (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className={`relative px-3.5 py-2 text-[0.8125rem] font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                    scrolled
                      ? isActive ? 'text-[#c8a96e]' : 'text-gray-600 hover:text-gray-900'
                      : isActive ? 'text-[#c8a96e]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#c8a96e] rounded-full"
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !text-sm !px-5 !py-2.5"
            >
              Cotizar gratis
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-colors cursor-pointer ${
              scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-[-1]"
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                id="mobile-menu"
                role="dialog"
                aria-label="Menú de navegación"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl"
              >
                <div className="px-5 pt-3 pb-6 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleLink(link.href)}
                      className={`text-left font-medium py-3 px-3 rounded-xl transition-colors text-[0.9375rem] cursor-pointer ${
                        activeSection === link.href
                          ? 'text-[#c8a96e] bg-[#fdf8f0]'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="pt-3 border-t border-gray-100 mt-2">
                    <a
                      href={WHATSAPP_FULL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full justify-center !text-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      Cotizar gratis
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
