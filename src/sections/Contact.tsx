import { useState, useEffect, useRef } from 'react'
import { gsap } from '../hooks/useGsap'
import { Send } from 'lucide-react'

const WHATSAPP_BASE = 'https://wa.me/5402604030347'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', idea: '', size: '', zone: '' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.contact-reveal').forEach((el) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hola! Soy ${form.name}.\n\nIdea de tatuaje: ${form.idea}\nTamaño aproximado: ${form.size}\nZona del cuerpo: ${form.zone}\n\nQuiero agendar una consulta!`
    )
    window.open(`${WHATSAPP_BASE}?text=${message}`, '_blank')
  }

  const inputClasses =
    'w-full bg-transparent border-b border-paper/20 py-3 text-paper placeholder-paper/30 focus:border-olive-400 focus:outline-none transition-colors'

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 bg-ink"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="contact-reveal text-olive-400 text-sm uppercase tracking-[0.3em] mb-4">
            Contacto
          </p>
          <h2 className="contact-reveal font-display text-4xl md:text-6xl text-paper mb-4">
            Empecemos Tu Proyecto
          </h2>
          <p className="contact-reveal text-paper/50 max-w-xl mx-auto">
            Completá el formulario y te contacto por WhatsApp para coordinar
            tu consulta gratuita.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="contact-reveal">
            <label htmlFor="name" className="text-paper/40 text-xs uppercase tracking-widest">
              Tu Nombre
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ej: María García"
              className={inputClasses}
            />
          </div>

          <div className="contact-reveal">
            <label htmlFor="idea" className="text-paper/40 text-xs uppercase tracking-widest">
              Tu Idea
            </label>
            <textarea
              id="idea"
              required
              value={form.idea}
              onChange={(e) => setForm({ ...form, idea: e.target.value })}
              placeholder="Describí tu idea de tatuaje..."
              rows={3}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="contact-reveal">
              <label htmlFor="size" className="text-paper/40 text-xs uppercase tracking-widest">
                Tamaño Aproximado
              </label>
              <select
                id="size"
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className={`${inputClasses} cursor-pointer`}
              >
                <option value="" className="bg-ink">
                  Seleccionar...
                </option>
                <option value="Pequeño (3-5cm)" className="bg-ink">
                  Pequeno (3-5cm)
                </option>
                <option value="Mediano (5-10cm)" className="bg-ink">
                  Mediano (5-10cm)
                </option>
                <option value="Grande (10-20cm)" className="bg-ink">
                  Grande (10-20cm)
                </option>
                <option value="Extra grande (20cm+)" className="bg-ink">
                  Extra grande (20cm+)
                </option>
              </select>
            </div>

            <div className="contact-reveal">
              <label htmlFor="zone" className="text-paper/40 text-xs uppercase tracking-widest">
                Zona del Cuerpo
              </label>
              <input
                id="zone"
                type="text"
                value={form.zone}
                onChange={(e) => setForm({ ...form, zone: e.target.value })}
                placeholder="Ej: antebrazo, espalda..."
                className={inputClasses}
              />
            </div>
          </div>

          <div className="contact-reveal pt-4">
            <button
              type="submit"
              className="magnetic-btn group w-full md:w-auto border-2 border-olive-500 text-olive-400 px-12 py-4 text-sm uppercase tracking-[0.3em] hover:text-paper transition-colors flex items-center justify-center gap-3"
              data-magnetic
            >
              <span>Enviar por WhatsApp</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
