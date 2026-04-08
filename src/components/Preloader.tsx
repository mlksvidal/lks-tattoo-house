import { useEffect, useRef } from 'react'
import { gsap } from '../hooks/useGsap'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onCompleteRef = onComplete

    const tl = gsap.timeline({
      onComplete: () => {
        onCompleteRef()
      },
    })

    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.inOut',
    })
      .to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.6,
        ease: 'power2.in',
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
      })

    // Fallback: ensure preloader always exits even if GSAP fails
    const fallback = setTimeout(() => {
      onCompleteRef()
    }, 4000)

    return () => {
      tl.kill()
      clearTimeout(fallback)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={containerRef} className="preloader">
      <span ref={textRef} className="preloader-text">
        LKS
      </span>
    </div>
  )
}
