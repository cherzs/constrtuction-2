export default function OperationalReadiness() {
  const capabilities = [
    { title: 'Global Reach', description: 'Operating across 12 countries with local expertise and international standards.' },
    { title: 'Team Size', description: 'Over 120 architects, designers, and technical professionals.' },
    { title: 'Technology', description: 'State-of-the-art BIM, rendering, and project management tools.' },
    { title: 'Certifications', description: 'AIA, LEED accredited, and industry-leading quality standards.' },
    { title: 'Collaboration', description: 'Integrated teams working seamlessly with contractors and consultants.' },
    { title: 'Portfolio', description: 'Diverse project types from small residential to large institutional commissions.' },
  ]

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold tracking-widest text-accent-foreground/60 uppercase">
              Operational Excellence
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground text-balance">
              Infrastructure for Success
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Our organizational capabilities ensure we deliver consistently excellent results at every scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {capabilities.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
            <div>
              <p className="text-3xl font-light text-foreground">1,200+</p>
              <p className="text-xs text-foreground/60 mt-2 uppercase tracking-wider">Team Hours Per Month</p>
            </div>
            <div>
              <p className="text-3xl font-light text-foreground">98%</p>
              <p className="text-xs text-foreground/60 mt-2 uppercase tracking-wider">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-light text-foreground">2M+</p>
              <p className="text-xs text-foreground/60 mt-2 uppercase tracking-wider">Sq Ft Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-light text-foreground">0</p>
              <p className="text-xs text-foreground/60 mt-2 uppercase tracking-wider">Overdue Deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
