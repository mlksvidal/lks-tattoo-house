import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { gsap } from '../hooks/useGsap'

const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
]

const WHATSAPP_URL = 'https://wa.me/5402604030347?text=Hola!%20Quiero%20consultar%20por%20un%20tatuaje'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current.querySelectorAll('a'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out' }
      )
    }
  }, [isOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="font-display text-2xl tracking-[0.3em] text-paper hover:text-olive-400 transition-colors"
          data-magnetic
        >
          LKS
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm uppercase tracking-[0.2em] text-paper/70 hover:text-olive-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-olive-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn border border-olive-500 text-olive-400 px-5 py-2 text-sm uppercase tracking-widest hover:text-paper transition-colors"
            data-magnetic
          >
            <span>Reservar</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-paper z-[110]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-ink/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden z-[105]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-3xl text-paper/80 hover:text-olive-400 tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 border border-olive-500 text-olive-400 px-8 py-3 text-lg uppercase tracking-widest hover:bg-olive-600 hover:text-paper transition-all"
          >
            Reservar Cita
          </a>
        </div>
      )}
    </nav>
  )
}
