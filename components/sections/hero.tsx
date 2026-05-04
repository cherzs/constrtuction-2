import { CTAButton } from '../ui/cta-button'
import { Divider } from '../ui/divider'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Content */}
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground mb-8">
              Defining Space
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-lg">
              We craft distinctive architectural experiences that harmonize form, function, and the essence of living. Distinguished projects across residential, commercial, and cultural spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary">Start a Project</CTAButton>
              <CTAButton variant="secondary">View Our Work</CTAButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Modern minimalist architecture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-32 pt-20 md:pt-32 border-t border-border">
          <div>
            <p className="text-3xl md:text-4xl font-light text-foreground mb-2">150+</p>
            <p className="text-sm text-muted-foreground tracking-wide">Completed Projects</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light text-foreground mb-2">15+</p>
            <p className="text-sm text-muted-foreground tracking-wide">Years of Practice</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light text-foreground mb-2">30+</p>
            <p className="text-sm text-muted-foreground tracking-wide">Team Members</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light text-foreground mb-2">5</p>
            <p className="text-sm text-muted-foreground tracking-wide">Continental Offices</p>
          </div>
        </div>
      </div>
    </section>
  )
}
