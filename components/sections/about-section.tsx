'use client';

import { Mail, Phone, Place } from '@mui/icons-material';
import LinkedIn from '@mui/icons-material/LinkedIn';

export default function AboutSection() {
  return (
    <section
      data-section
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-gray-700">About</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
              <div className="relative bg-white border border-gray-300 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-400 transition-all shadow-sm hover:shadow-md">
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  Motivated and detail-oriented React.js Developer specializing in high-performance web applications. Strong in modern JavaScript frameworks, responsive UI, and clean coding practices.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                    <Place className="w-5 h-5 text-gray-600" />
                    <span>Faisalabad, Pakistan</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <a href="mailto:humzabinzahid02@gmail.com" className="hover:underline">
                      humzabinzahid02@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span>0317-4503903</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                    <LinkedIn className="w-5 h-5 text-gray-600" />
                    <a
                      href="https://linkedin.com/in/humza-bin-zahid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/humza-bin-zahid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                Frontend Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                HTML, CSS, JavaScript, TypeScript. Proficient in building scalable, maintainable web applications with focus on performance optimization and user experience.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                Specializations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                React.js, Next.js, State Management, API Integration. Expert in building dynamic, interactive interfaces with smooth animations and responsive design.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                Design Principles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Clean code advocate with passion for intuitive UI/UX. Dedicated to writing maintainable code and creating interfaces that users love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}