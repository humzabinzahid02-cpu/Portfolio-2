'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Let's Connect</h2>

        <div className="flex flex-col items-center">
          {/* Contact Information - Centered */}
          <div className="space-y-6 mb-12 w-full max-w-md">
            <div className="glass-card p-6 rounded-2xl animate-in-view">
              <div className="flex gap-4 items-center justify-center text-center">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:humzabinzahid02@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    humzabinzahid02@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl animate-in-view">
              <div className="flex gap-4 items-center justify-center text-center">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:+923174503903"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +92 317 450 3903
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl animate-in-view">
              <div className="flex gap-4 items-center justify-center text-center">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Faisalabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}