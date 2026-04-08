import { useEffect, useRef } from 'react'
import { gsap } from '../hooks/useGsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5402604030347?text=Hola!%20Quiero%20consultar%20por%20un%20tatuaje'

interface HeroProps {
  loaded: boolean
}

export default function Hero({ loaded }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  // GSAP scroll parallax only (not entrance animations)
  useEffect(() => {
    if (!loaded) return
    const section = sectionRef.current
    const decor = decorRef.current
    if (!section || !decor) return

    const parallax = gsap.to(decor, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    const fadeOut = gsap.to(section, {
      opacity: 0.3,
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      parallax.kill()
      fadeOut.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [loaded])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-[10%] right-[5%] w-64 h-64 text-olive-800/20"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M100,180 C100,180 100,20 100,20 C80,60 40,80 40,120 C40,160 70,180 100,180 Z" />
          <path d="M100,180 C100,180 100,20 100,20 C120,60 160,80 160,120 C160,160 130,180 100,180 Z" />
          <path d="M100,20 L100,180" />
          <path d="M70,60 Q100,50 130,60" />
          <path d="M55,100 Q100,85 145,100" />
          <path d="M60,140 Q100,125 140,140" />
        </svg>

        <svg
          className="absolute bottom-[15%] left-[8%] w-48 h-48 text-sage-800/15 rotate-[-20deg]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M100,190 Q60,140 80,80 Q90,40 100,10" />
          <path d="M100,190 Q140,140 120,80 Q110,40 100,10" />
          <ellipse cx="60" cy="110" rx="25" ry="40" transform="rotate(-30 60 110)" />
          <ellipse cx="140" cy="110" rx="25" ry="40" transform="rotate(30 140 110)" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="text-olive-400 text-sm uppercase tracking-[0.4em] mb-6 font-body"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
          }}
        >
          Tattoo Studio &mdash; San Rafael, Mendoza
        </p>

        <h1
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-paper mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}
        >
          LKS Tattoo House
        </h1>

        <p
          className="font-accent text-[clamp(1.1rem,2.5vw,1.5rem)] text-paper/60 max-w-2xl mx-auto mb-12 italic leading-relaxed"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s',
          }}
        >
          Arte botánico y fine line sobre piel. Cada trazo cuenta tu historia.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="magnetic-btn inline-flex border-2 border-olive-500 text-olive-400 px-10 py-4 text-sm uppercase tracking-[0.3em] hover:text-paper transition-colors"
          data-magnetic
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s',
          }}
        >
          <span>Agendar Consulta</span>
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/30 animate-bounce">
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  )
}
