const INSTAGRAM_URL = 'https://www.instagram.com/lkstattoohouse/'
const HIGHLIGHTS_URL = 'https://www.instagram.com/stories/highlights/18105597328550008/'

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-ink-light py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="reveal-up text-olive-400 text-sm uppercase tracking-[0.3em] mb-4">
          Portfolio
        </p>
        <h2 className="reveal-up font-display text-4xl md:text-6xl text-paper mb-6 leading-tight">
          Mis Trabajos
        </h2>
        <p className="reveal-up font-accent text-paper/50 italic text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Cada pieza que realizo vive en Instagram. Seguime para ver mis trabajos
          más recientes, proceso y resultados en tiempo real.
        </p>

        {/* Cards */}
        <div className="reveal-up grid md:grid-cols-2 gap-6 mb-12">

          {/* Destacadas */}
          <a
            href={HIGHLIGHTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-paper/10 hover:border-olive-500/50 transition-all duration-500 p-8 text-left"
            aria-label="Ver trabajos destacados en Instagram"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-olive-900/0 to-olive-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon */}
            <div className="relative z-10 mb-6 inline-flex items-center justify-center w-14 h-14 border border-olive-500/40 text-olive-500 group-hover:border-olive-400 group-hover:text-olive-400 transition-colors duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>

            <h3 className="relative z-10 font-display text-2xl text-paper mb-2 group-hover:text-olive-300 transition-colors duration-300">
              Trabajos Destacados
            </h3>
            <p className="relative z-10 text-paper/40 text-sm leading-relaxed mb-6">
              Historias destacadas con mis mejores piezas, proceso de trabajo y resultados finales.
            </p>
            <span className="relative z-10 inline-flex items-center gap-2 text-olive-500 text-xs uppercase tracking-[0.25em] group-hover:gap-3 transition-all duration-300">
              Ver destacadas
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>

          {/* Instagram principal */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-paper/10 hover:border-olive-500/50 transition-all duration-500 p-8 text-left"
            aria-label="Ver perfil de Instagram"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-olive-900/0 to-olive-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon */}
            <div className="relative z-10 mb-6 inline-flex items-center justify-center w-14 h-14 border border-olive-500/40 text-olive-500 group-hover:border-olive-400 group-hover:text-olive-400 transition-colors duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </div>

            <h3 className="relative z-10 font-display text-2xl text-paper mb-2 group-hover:text-olive-300 transition-colors duration-300">
              @lkstattoohouse
            </h3>
            <p className="relative z-10 text-paper/40 text-sm leading-relaxed mb-6">
              Seguime en Instagram para ver los trabajos más recientes, actualizaciones y disponibilidad de turnos.
            </p>
            <span className="relative z-10 inline-flex items-center gap-2 text-olive-500 text-xs uppercase tracking-[0.25em] group-hover:gap-3 transition-all duration-300">
              Ver perfil
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>

        </div>

        {/* CTA principal */}
        <div className="reveal-up">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-3 border-2 border-olive-500 text-olive-400 px-10 py-4 text-sm uppercase tracking-[0.3em] hover:text-paper hover:bg-olive-600/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            Ver todos mis trabajos
          </a>
        </div>

      </div>
    </section>
  )
}
