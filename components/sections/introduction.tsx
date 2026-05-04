export default function Introduction() {
  return (
    <section id="about" className="w-full py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-40 h-40 mx-auto rounded-lg bg-gradient-to-br from-foreground/5 to-accent/15" />
                <p className="text-sm text-foreground/50">Studio View</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-accent-foreground/60 uppercase">
                About Keen Architecture
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground text-balance">
                Crafting Tomorrow&apos;s Spaces Today
              </h2>
            </div>

            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Founded in 1998, Keen Architecture has established itself as a leader in innovative spatial design. Our studio combines modernist principles with contemporary technology to create buildings that resonate with users and communities alike.
              </p>
              <p>
                We believe architecture transcends aesthetics—it shapes how people live, work, and connect. Every project reflects our commitment to sustainability, functionality, and timeless design.
              </p>
            </div>

            <div className="pt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <a href="#contact" className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
