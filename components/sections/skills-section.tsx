'use client';

import { useState } from 'react';
import { Code, Build, Palette, VerifiedUser } from '@mui/icons-material';

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    icon: Code,
  },
  {
    name: 'Frameworks',
    skills: ['React.js', 'Next.js', 'Redux', 'React Router'],
    icon: Build,
  },
  {
    name: 'UI & Styling',
    skills: ['Tailwind CSS', 'Material UI', 'CSS-in-JS', 'Responsive Design'],
    icon: Palette,
  },
  {
    name: 'Tools & Best Practices',
    skills: ['Git', 'API Integration', 'Performance Optimization', 'Lazy Loading'],
    icon: VerifiedUser,
  },
];

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section
      data-section
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-muted-foreground">Technical</span>
            <span className="text-gray-600"> Skills</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/0 to-gray-700/0 group-hover:from-gray-600 group-hover:to-gray-700 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                <div className="relative bg-gradient-to-br from-card/50 to-card/20 border border-gray-500/20 group-hover:border-gray-500/40 rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-start gap-4 mb-6">
                    <IconComponent className="text-3xl text-gray-600" sx={{ fontSize: 32 }} />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 group-hover:text-gray-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-500/10 border border-gray-500/30 text-gray-700 text-sm rounded-full group-hover:bg-gray-500/20 group-hover:border-gray-400 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
