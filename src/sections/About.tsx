export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-ink"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="reveal-up relative overflow-hidden aspect-[3/4]">
          <img
            src="/lucas-vidal.jpg"
            alt="Lucas Vidal tatuando"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.classList.add('bg-ink-light')
                parent.innerHTML = `
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-24 h-24 text-olive-600/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                      <circle cx="50" cy="30" r="18"/>
                      <path d="M20,95 Q20,60 50,60 Q80,60 80,95"/>
                    </svg>
                  </div>
                  <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-olive-500 to-transparent"/>
                `
              }
            }}
          />
          {/* Accent line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-olive-500 to-transparent pointer-events-none" />
        </div>

        {/* Text */}
        <div>
          <p className="reveal-up text-olive-400 text-sm uppercase tracking-[0.3em] mb-4">
            Sobre Mí
          </p>
          <h2 className="reveal-up font-display text-4xl md:text-5xl text-paper mb-8 leading-tight">
            Lucas Vidal
          </h2>

          <p className="reveal-up text-paper/60 leading-relaxed mb-6 text-lg">
            Soy tatuador profesional desde hace relativamente poco tiempo, pero mi vínculo con el mundo
            del tatuaje viene desde muy chico. Crecí influenciado por la estética del rock y el metal,
            donde el arte corporal y la identidad visual siempre tuvieron un lugar fuerte en mi vida.
          </p>

          <p className="reveal-up text-paper/50 leading-relaxed mb-6">
            Desde siempre estuve conectado con el arte gráfico: dibujar, diseñar y crear fueron parte
            de mi día a día mucho antes de empezar a tatuar. Hoy, canalizo toda esa experiencia en cada
            pieza que realizo, con una búsqueda constante de evolución y aprendizaje.
          </p>

          <p className="reveal-up text-paper/50 leading-relaxed mb-6">
            Me especializo en diseños con estilo dotwork, donde el detalle, la textura y la paciencia
            son clave para lograr resultados únicos. Cada tatuaje es una colaboración: me interesa
            escuchar tu idea, interpretarla y llevarla a algo que realmente te represente.
          </p>

          <p className="reveal-up font-accent text-olive-400 italic text-lg leading-relaxed">
            Contame tu idea y hagámosla realidad.
          </p>
        </div>

      </div>
    </section>
  )
}
