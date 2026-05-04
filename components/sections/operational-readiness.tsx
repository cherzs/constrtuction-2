import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import Image from 'next/image'

export function OperationalReadinessSection() {
  const capabilities = [
    'BIM Modeling & Visualization',
    'Sustainable Design Certification',
    'Parametric Design',
    'Advanced Rendering',
    '3D Laser Scanning',
    'Material Research & Testing',
    'Building Performance Analysis',
    'Project Management Software',
    'Structural Engineering Integration',
    'MEP Systems Design',
  ]

  return (
    <SectionContainer id="capabilities" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 pb-20 border-b border-border items-start">
        {/* Left - Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="/images/operational-team.jpg"
            alt="Shin Dongah Construction professional team"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <SectionTitle size="md">
            Operational Capabilities
          </SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            We are equipped with comprehensive design tools and methodologies to deliver sophisticated projects of any scale and complexity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="py-6 px-4 border border-border hover:bg-muted/30 transition-colors"
          >
            <p className="text-sm text-foreground font-light leading-relaxed text-center">
              {capability}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
