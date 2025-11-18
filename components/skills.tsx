'use client'

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Libraries',
      skills: ['React Router', 'Redux (API)', 'Git', 'Material UI', 'Responsive Design', 'API Integration'],
    },
    {
      title: 'Specializations',
      skills: ['Performance Optimization', 'Clean Code', 'Scalable Architecture', 'Accessibility', 'UI/UX Implementation'],
    },
  ]

  const strengths = [
    'Analytical mindset',
    'Quick learning ability',
    'Clean and scalable code',
    'Problem solving',
    'Collaborative team player',
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-all duration-300 animate-in-view"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/30 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-2xl animate-in-view">
          <h3 className="text-2xl font-semibold text-accent mb-6">Key Strengths</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((strength) => (
              <div key={strength} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {[
            { metric: '30%', label: 'Performance Improvement' },
            { metric: '20%', label: 'Enhanced Interactivity' },
            { metric: '15%', label: 'User Engagement Boost' },
            { metric: '40%', label: 'Reduced Loading Time' },
          ].map(({ metric, label }) => (
            <div key={label} className="glass-card p-6 rounded-2xl text-center animate-in-view">
              <div className="text-3xl font-bold text-accent mb-2">{metric}</div>
              <p className="text-muted-foreground text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
