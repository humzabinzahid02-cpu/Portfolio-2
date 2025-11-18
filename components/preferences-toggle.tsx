'use client'

import { useEffect, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function PreferencesToggle() {
  const [is3DEnabled, setIs3DEnabled] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('3d-enabled')
    if (saved !== null) {
      setIs3DEnabled(saved === 'true')
    }
    setIsVisible(true)
  }, [])

  const toggle3D = () => {
    const newValue = !is3DEnabled
    setIs3DEnabled(newValue)
    localStorage.setItem('3d-enabled', String(newValue))
  }

  if (!isVisible) return null

  return (
    <button
      onClick={toggle3D}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-card border border-border hover:bg-card/80 transition-colors group"
      title={is3DEnabled ? 'Disable 3D animations' : 'Enable 3D animations'}
      aria-label="Toggle 3D animations"
    >
      {is3DEnabled ? (
        <Eye size={20} className="text-accent group-hover:text-accent/80 transition-colors" />
      ) : (
        <EyeOff size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
      )}
    </button>
  )
}
