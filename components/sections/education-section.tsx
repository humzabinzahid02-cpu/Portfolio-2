'use client';

const education = [
  {
    degree: 'BSCS',
    institution: 'Virtual University',
    period: '2025 – 2029',
    icon: '🎓',
  },
  {
    degree: 'ICS',
    institution: 'BISE Faisalabad',
    period: '2023 – 2025',
    icon: '📚',
  },
  {
    degree: 'Matric',
    institution: 'BISE Faisalabad',
    period: '2021 – 2023',
    icon: '✏️',
  },
];

export default function EducationSection() {
  return (
    <section
      data-section
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-muted-foreground">Education</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-4">{edu.icon}</div>
                {index !== education.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-blue-500/50 to-blue-500/0" />
                )}
              </div>

              <div className="pb-8">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 group-hover:opacity-40 blur transition duration-500" />
                  <div className="relative bg-gradient-to-br from-card to-card/50 border border-blue-500/20 group-hover:border-blue-500/40 rounded-lg p-6 backdrop-blur-sm transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.institution}</p>
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
