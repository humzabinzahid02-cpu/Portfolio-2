'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:humzabinzahid02@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-border/30 bg-background/50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-muted-foreground">
              © 2025 Humza Bin Zahid. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="grid sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Navigation</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Contact</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li><a href="mailto:humzabinzahid02@gmail.com" className="hover:text-accent transition-colors">Email</a></li>
                <li><a href="tel:+923174503903" className="hover:text-accent transition-colors">Phone</a></li>
                <li><p>Faisalabad, Pakistan</p></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li><a href="https://project-two-roan-97.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">View Projects</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
