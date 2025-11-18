'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { ArrowDown } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Canvas3D = dynamic(() => import('./canvas-3d').then(mod => ({ default: mod.Canvas3D })), {
  ssr: false,
  loading: () => <HeroFallback />
})

function HeroFallback() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-accent/5 via-background to-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/50 animate-pulse" />
      </div>
    </div>
  )
}

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReduced(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsReduced(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleScroll = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={scrollRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {!isReduced && (
        <div className="absolute inset-0 hidden md:block">
          <Suspense fallback={<HeroFallback />}>
            <Canvas3D />
          </Suspense>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="premium-heading">
              Hi, I'm <span className="text-accent">Humza</span>
            </h1>
            <p className="premium-subheading">
              I build performant, accessible React experiences with clean code and attention to detail
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={handleScroll}
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            >
              About me
            </button>
            <Link
  href="#contact"
  className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300"
>
  Contact Me
</Link>
          </div>
        </div>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent hover:text-accent/80 transition-colors"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
