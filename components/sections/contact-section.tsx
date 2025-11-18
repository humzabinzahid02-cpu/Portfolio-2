'use client';

import Link from 'next/link';
import { Mail, Phone, GitHub, LinkedIn, NorthEast } from '@mui/icons-material';

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-section
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-muted-foreground">Let's</span>
            <span className="text-gray-600"> Connect</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
            <div className="relative bg-gradient-to-br from-card to-card/50 border border-gray-500/20 group-hover:border-gray-500/40 rounded-xl p-8 backdrop-blur-sm transition-all">
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or want to collaborate, feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:humzabinzahid02@gmail.com"
                  className="flex items-center gap-3 p-4 bg-gray-500/10 border border-gray-500/30 rounded-lg hover:bg-gray-500/20 hover:border-gray-400 transition-all group"
                >
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-gray-500" sx={{ fontSize: 20 }} />
                  <span className="text-muted-foreground group-hover:text-gray-600 transition-colors">
                    humzabinzahid02@gmail.com
                  </span>
                  <NorthEast className="w-4 h-4 ml-auto text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" sx={{ fontSize: 16 }} />
                </a>

                <a
                  href="tel:+923174503903"
                  className="flex items-center gap-3 p-4 bg-gray-500/10 border border-gray-500/30 rounded-lg hover:bg-gray-500/20 hover:border-gray-400 transition-all group"
                >
                  <Phone className="w-5 h-5 text-gray-600 group-hover:text-gray-500" sx={{ fontSize: 20 }} />
                  <span className="text-muted-foreground group-hover:text-gray-600 transition-colors">
                    +92 (317) 450-3903
                  </span>
                  <NorthEast className="w-4 h-4 ml-auto text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" sx={{ fontSize: 16 }} />
                </a>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
            <div className="relative bg-gradient-to-br from-card to-card/50 border border-gray-500/20 group-hover:border-gray-500/40 rounded-xl p-8 backdrop-blur-sm transition-all h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">Follow Me</h3>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/humza-bin-zahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-500/10 border border-gray-500/30 rounded-lg hover:bg-gray-500/20 hover:border-gray-400 transition-all group"
                >
                  <LinkedIn className="w-5 h-5 text-gray-600 group-hover:text-gray-500" sx={{ fontSize: 20 }} />
                  <span className="text-muted-foreground group-hover:text-gray-600 transition-colors text-sm">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-500/10 border border-gray-500/30 rounded-lg hover:bg-gray-500/20 hover:border-gray-400 transition-all group"
                >
                  <GitHub className="w-5 h-5 text-gray-600 group-hover:text-gray-500" sx={{ fontSize: 20 }} />
                  <span className="text-muted-foreground group-hover:text-gray-600 transition-colors text-sm">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative border-t border-gray-500/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 Humza Bin Zahid. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-gray-600 text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gray-600 text-sm transition-colors"
              >
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-gray-600 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
