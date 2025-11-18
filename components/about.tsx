'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
        
        <div className="glass-card p-8 md:p-12 rounded-2xl animate-in-view">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm Humza Bin Zahid, a frontend developer passionate about building performant, accessible, and maintainable web applications. I specialize in React and modern frontend tooling, and I care deeply about clean code, polished UX, and measurable performance improvements.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I enjoy turning complex problems into simple, elegant user experiences. With a strong analytical mindset and quick learning ability, I approach every project with precision and a commitment to excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border/30">
            <div>
              <h3 className="text-accent font-semibold mb-2">Education</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>BS Computer Science (2025–2029) — Virtual University of Pakistan</li>
                <li>ICS (2023–2025) — BISE Faisalabad</li>
                <li>Matriculation (2021–2023) — BISE Faisalabad</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-accent font-semibold mb-2">Languages</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Urdu — Native</li>
                <li>English — Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
