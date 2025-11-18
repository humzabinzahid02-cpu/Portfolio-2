'use client'

import { useEffect, useRef } from 'react'

export function Canvas3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', { willReadFrequently: false })
    if (!ctx) return

    const container = containerRef.current
    const dpr = Math.min(window.devicePixelRatio, 2) // Cap DPR at 2 for performance
    canvas.width = container.clientWidth * dpr
    canvas.height = container.clientHeight * dpr
    canvas.style.width = `${container.clientWidth}px`
    canvas.style.height = `${container.clientHeight}px`
    ctx.scale(dpr, dpr)

    let animationId: number
    let time = 0
    let lastFrameTime = 0

    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTime < 16.67) {
        animationId = requestAnimationFrame(animate)
        return
      }
      lastFrameTime = currentTime

      time += 0.005

      // Create animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width / dpr, canvas.height / dpr)
      gradient.addColorStop(0, `hsl(200, 70%, ${8 + Math.sin(time) * 3}%)`)
      gradient.addColorStop(0.5, `hsl(200, 70%, ${12 + Math.cos(time * 0.7) * 2}%)`)
      gradient.addColorStop(1, `hsl(200, 70%, ${10 + Math.sin(time * 0.5) * 2}%)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)

      // Draw animated geometric elements
      const centerX = (canvas.width / dpr) / 2
      const centerY = (canvas.height / dpr) / 2
      const radius = 150 + Math.sin(time * 0.5) * 30

      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(85, 210, 234, ${0.1 - i * 0.03})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius + i * 80, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw rotating elements
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(time * 0.2)

      ctx.strokeStyle = 'rgba(85, 210, 234, 0.15)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(-100, -100)
      ctx.lineTo(100, 100)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(100, -100)
      ctx.lineTo(-100, 100)
      ctx.stroke()

      ctx.restore()

      animationId = requestAnimationFrame(animate)
    }

    container.appendChild(canvas)
    animationId = requestAnimationFrame(animate)

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        canvas.width = container.clientWidth * dpr
        canvas.height = container.clientHeight * dpr
        canvas.style.width = `${container.clientWidth}px`
        canvas.style.height = `${container.clientHeight}px`
        ctx.scale(dpr, dpr)
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(resizeTimeout)
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      if (container.contains(canvas)) {
        container.removeChild(canvas)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}
