'use client'

import { Suspense, useState, useEffect } from 'react'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { PreferencesToggle } from '@/components/preferences-toggle'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <main>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <Hero />
        </Suspense>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <PreferencesToggle />
    </div>
  )
}
