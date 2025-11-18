'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(107, 114, 128, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.8;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      data-section
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-1" />

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20 border border-gray-400/30 backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-600">Welcome to my portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-gray-500 to-gray-600 bg-clip-text text-transparent">
            Humza Bin Zahid
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Frontend Developer <span className="text-gray-600">|</span> Clean Code Advocate
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting high-performance web applications with modern React and Next.js. Specializing in responsive design, smooth animations, and pixel-perfect interfaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-gray-700/20 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" sx={{ fontSize: 16 }} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-400/30 text-gray-700 hover:bg-gray-700/10 font-medium rounded-lg transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://linkedin.com/in/humza-bin-zahid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-400/20 to-gray-600/20 border border-gray-400/30 rounded-full hover:border-gray-400/60 transition-all group"
          >
            <LinkedIn className="w-5 h-5 text-gray-600 group-hover:text-gray-500 transition-colors" sx={{ fontSize: 20 }} />
            <span className="text-sm font-medium text-gray-600">LinkedIn</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse">
        <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
