export const WHATSAPP_NUMBER = '56958588317'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_MESSAGE = 'Hola, vi su página web y quisiera cotizar un proyecto.'
export const WHATSAPP_FULL_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const SOCIAL = {
  instagram: 'https://www.instagram.com/muebleriaimperial2025',
  facebook: 'https://www.facebook.com/people/Muebleria-Marmoleria-Innovacion',
  whatsapp: WHATSAPP_FULL_URL,
}

export const EMAIL = 'cbravo902@gmail.com'

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]
