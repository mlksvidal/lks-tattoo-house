import { useEffect, useRef } from 'react'
import { gsap } from '../hooks/useGsap'
import { MessageSquare, Pencil, Droplets, Heart } from 'lucide-react'

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Consulta',
    description:
      'Charlamos sobre tu idea, estilo, tamaño y ubicación. Entiendo qué querés expresar y te asesoro sobre lo que mejor funciona en piel.',
  },
  {
    icon: Pencil,
    title: 'Diseño',
    description:
      'Creo un diseño único desde cero, adaptado a tu anatomía. Lo revisamos juntos y ajustamos hasta que sea exactamente lo que imaginás.',
  },
  {
    icon: Droplets,
    title: 'Sesión',
    description:
      'En un espacio limpio y relajado, trabajamos con la mejor calidad de materiales. Cada línea es precisa, cada detalle cuenta.',
  },
  {
    icon: Heart,
    title: 'Cuidados',
    description:
      'Te doy instrucciones detalladas de cuidado post-tatuaje y seguimiento personalizado para que tu tattoo sane perfecto.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.utils.toArray<HTMLElement>('.process-reveal').forEach((el) => {
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

      // Timeline line grow
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: 1,
            },
          }
        )
      }

      // Step cards stagger
      if (timelineRef.current) {
        gsap.utils.toArray<HTMLElement>('.process-step').forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
            {
              opacity: 1,
              x: 0,
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
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 px-6 bg-ink"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="process-reveal text-olive-400 text-sm uppercase tracking-[0.3em] mb-4">
            Proceso
          </p>
          <h2 className="process-reveal font-display text-4xl md:text-6xl text-paper">
            Cómo Trabajo
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center line */}
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-olive-600 origin-top hidden sm:block"
          />

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <div
                  key={step.title}
                  className={`process-step relative flex items-start gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                    } pl-16 sm:pl-0`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 mb-4 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="text-olive-400/50 font-display text-5xl">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-paper mb-3 flex items-center gap-3">
                      {isEven && <span className="hidden md:inline" />}
                      <Icon className="w-5 h-5 text-olive-400 md:hidden" />
                      {step.title}
                    </h3>
                    <p className="text-paper/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 border-2 border-olive-500 bg-ink rounded-full z-10 hidden sm:flex items-center justify-center">
                    <div className="w-2 h-2 bg-olive-400 rounded-full" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
