import { useEffect, useRef } from 'react'
import { gsap } from '../hooks/useGsap'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.location-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative py-32 px-6 bg-ink-light"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="location-reveal text-olive-400 text-sm uppercase tracking-[0.3em] mb-4">
            Ubicación
          </p>
          <h2 className="location-reveal font-display text-4xl md:text-6xl text-paper">
            Encontrame Acá
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="location-reveal aspect-square md:aspect-auto md:h-[400px] overflow-hidden border border-paper/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52987.73289835966!2d-68.36!3d-34.6177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969704cfd3ed8447%3A0x86ff399b82e2ed3f!2sSan%20Rafael%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(30%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de LKS Tattoo House en San Rafael, Mendoza"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="location-reveal flex items-start gap-4">
              <MapPin className="w-6 h-6 text-olive-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl text-paper mb-1">Dirección</h3>
                <p className="text-paper/50">
                  San Rafael, Mendoza
                  <br />
                  Argentina
                </p>
              </div>
            </div>

            <div className="location-reveal flex items-start gap-4">
              <Clock className="w-6 h-6 text-olive-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl text-paper mb-1">Horarios</h3>
                <p className="text-paper/50">
                  Lunes a Viernes: 10:00 — 20:00
                  <br />
                  Sábados: 10:00 — 15:00
                  <br />
                  <span className="text-olive-400/60">Solo con turno previo</span>
                </p>
              </div>
            </div>

            <div className="location-reveal flex items-start gap-4">
              <Phone className="w-6 h-6 text-olive-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl text-paper mb-1">Contacto</h3>
                <p className="text-paper/50">
                  <a
                    href="https://wa.me/5402604030347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-olive-400 transition-colors"
                  >
                    +54 260 403 0347
                  </a>
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5402604030347?text=Hola!%20Quiero%20consultar%20por%20un%20tatuaje"
              target="_blank"
              rel="noopener noreferrer"
              className="location-reveal magnetic-btn self-start border border-olive-500 text-olive-400 px-8 py-3 text-sm uppercase tracking-[0.2em] hover:text-paper transition-colors mt-4"
              data-magnetic
            >
              <span>Escribime por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
