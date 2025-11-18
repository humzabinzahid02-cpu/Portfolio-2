'use client'

import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'Portfolio Project',
      role: 'Frontend Developer',
      description: 'A modern, responsive portfolio showcasing frontend skills with an interactive 3D hero scene, modular UI components, and performance optimizations.',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Canvas API'],
      results: 'Implemented lazy loading, code splitting, and compressed assets for 40% faster load times',
      link: 'https://project-two-roan-97.vercel.app',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects & Experience</h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 animate-in-view group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm font-semibold mt-1">{project.role}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                    aria-label="View code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  <span className="text-accent font-semibold">Results:</span> {project.results}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
