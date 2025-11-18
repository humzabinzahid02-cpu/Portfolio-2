'use client';

import { useState } from 'react';
import { OpenInNew, Code as CodeIcon } from '@mui/icons-material';

const projects = [
  {
    title: 'Dynamic UI Components',
    description: 'Interactive React components with smooth animations and real-time updates',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Routing & State Management',
    description: 'Scalable application architecture with Redux and React Router',
    tags: ['Redux', 'React Router', 'Context API'],
  },
  {
    title: 'Lazy Loading Optimization',
    description: 'Code splitting and lazy loading strategies for better performance',
    tags: ['Next.js', 'Code Splitting', 'Performance'],
  },
  {
    title: 'Reusable Components',
    description: 'Component library with atomic design principles and design tokens',
    tags: ['Component Library', 'Design System', 'Storybook'],
  },
  {
    title: 'Performance Optimization',
    description: 'Advanced optimization techniques for fast, responsive web apps',
    tags: ['Web Vitals', 'SEO', 'Accessibility'],
  },
  {
    title: 'API Integration',
    description: 'RESTful and GraphQL API integration with error handling',
    tags: ['Fetch API', 'GraphQL', 'Error Handling'],
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      data-section
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-muted-foreground">Featured</span>
            <span className="text-gray-600"> Projects</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500" />
              <div
                className={`relative bg-gradient-to-br from-card to-card/50 border border-gray-500/20 group-hover:border-gray-500/40 rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 h-full flex flex-col transform ${
                  hoveredProject === index ? 'scale-105' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-gray-700 group-hover:text-gray-600 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-gray-500/10 border border-gray-500/30 text-gray-700 rounded group-hover:bg-gray-500/20 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-500/20">
                    <button className="inline-flex items-center gap-2 px-3 py-2 bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/30 rounded text-gray-700 text-sm transition-all group-hover:border-gray-400">
                      <CodeIcon sx={{ fontSize: 16 }} />
                      Code
                    </button>
                    <button className="inline-flex items-center gap-2 px-3 py-2 bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/30 rounded text-gray-700 text-sm transition-all group-hover:border-gray-400">
                      <OpenInNew sx={{ fontSize: 16 }} />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
