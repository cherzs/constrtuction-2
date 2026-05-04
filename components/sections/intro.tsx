import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import { Divider } from '../ui/divider'
import Image from 'next/image'

export function IntroSection() {
  return (
    <SectionContainer id="studio" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left - Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/intro-studio.jpg"
            alt="Shin Dongah Construction studio workspace"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="order-1 lg:order-2">
          <SectionTitle size="md">
            Studio
          </SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded in 2008, Shin Dongah Construction has established itself as a leading architectural practice dedicated to creating timeless spaces. Our philosophy centers on the intersection of cultural context, environmental sustainability, and human experience.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With offices across Asia, our multidisciplinary team brings together expertise in residential design, commercial development, and cultural architecture. Each project represents our commitment to excellence and innovation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20 md:mt-32 pt-20 md:pt-32 border-t border-border">
        {/* Stats */}
        <div className="space-y-12">
          <div>
            <p className="text-5xl md:text-6xl font-light text-foreground mb-4">
              2008
            </p>
            <p className="text-sm text-muted-foreground tracking-wide">
              Year Founded
            </p>
            <Divider className="mt-8" />
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-light text-foreground mb-4">
              30+
            </p>
            <p className="text-sm text-muted-foreground tracking-wide">
              Architects & Designers
            </p>
            <Divider className="mt-8" />
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-light text-foreground mb-4">
              5
            </p>
            <p className="text-sm text-muted-foreground tracking-wide">
              Continental Locations
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

