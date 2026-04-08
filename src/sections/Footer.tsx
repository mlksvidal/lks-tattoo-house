import { Camera, Globe, MessageCircle } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    icon: Camera,
    href: 'https://www.instagram.com/lkstattoohouse',
    label: 'Instagram',
  },
  {
    icon: Globe,
    href: 'https://www.facebook.com/profile.php?id=61588560967681',
    label: 'Facebook',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/5402604030347',
    label: 'WhatsApp',
  },
]

const QUICK_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
]

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-ink border-t border-paper/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-paper tracking-[0.2em] mb-4">
              LKS
            </h3>
            <p className="text-paper/40 text-sm leading-relaxed max-w-xs">
              Arte botánico y fine line sobre piel.
              Estudio de tatuajes en San Rafael, Mendoza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-olive-400 text-xs uppercase tracking-[0.3em] mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-paper/40 hover:text-olive-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-olive-400 text-xs uppercase tracking-[0.3em] mb-6">
              Redes
            </h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 border border-paper/10 flex items-center justify-center text-paper/40 hover:text-olive-400 hover:border-olive-500 transition-all"
                    data-magnetic
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5402604030347?text=Hola!%20Quiero%20consultar%20por%20un%20tatuaje"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-400 text-sm hover:text-olive-300 transition-colors"
              >
                +54 260 403 0347
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-paper/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paper/20 text-xs">
            &copy; {new Date().getFullYear()} LKS Tattoo House. Todos los derechos reservados.
          </p>
          <p className="text-paper/15 text-xs">
            San Rafael, Mendoza — Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
