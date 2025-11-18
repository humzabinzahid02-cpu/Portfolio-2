'use client'

import { useRef, useEffect, useState } from 'react'
import { Award } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  metric: string
}

const achievements: Achievement[] = [
  {
    title: 'Dynamic UI Components',
    description: 'Built dynamic UI components with React.js, improving project modularity',
    metric: 'Enhanced Modularity',
  },
  {
    title: 'Performance Optimization',
    description: 'Increased app performance through efficient code optimization',
    metric: '+30% Improvement',
  },
  {
    title: 'Load Time Reduction',
    description: 'Reduced loading time using modern web performance techniques',
    metric: '-40% Faster',
  },
  {
    title: 'User Engagement',
    description: 'Improved user engagement by 15% through advanced React features',
    metric: '+15% Engagement',
  },
  {
    title: 'Initial Load Time',
    description: 'Reduced initial load time using lazy loading and code splitting',
    metric: 'Optimized Loading',
  },
  {
    title: 'Component Reusability',
    description: 'Enhanced interactivity through reusable UI components',
    metric: '+20% Interactivity',
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Key Achievements
        </h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.title}
              className={`group perspective transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="relative h-full p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 group-hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                    <span className="text-lg font-bold text-accent group-hover:text-primary transition-colors">
                      {achievement.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
