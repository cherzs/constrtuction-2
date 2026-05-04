import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import { Divider } from '../ui/divider'
import Image from 'next/image'

export default function ProcessFlow() {
  const steps = [
    {
      number: '01',
      title: 'Discover & Engage',
      description: 'Comprehensive consultation exploring your vision, site context, program requirements, and design aspirations through collaborative dialogue.',
    },
    {
      number: '02',
      title: 'Conceptualize',
      description: 'Creative exploration and iterative design development establishing spatial narratives, aesthetic direction, and initial material strategies.',
    },
    {
      number: '03',
      title: 'Develop',
      description: 'Detailed design development refining form, materiality, systems, and technical solutions while maintaining design integrity throughout.',
    },
    {
      number: '04',
      title: 'Document & Permit',
      description: 'Complete construction documentation and permit drawings prepared for regulatory approval and contractor implementation.',
    },
  ]

  return (
    <SectionContainer id="process" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 pb-20 border-b border-border items-start">
        {/* Left - Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/process-flow.jpg"
            alt="Architectural design and planning process"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="order-1 lg:order-2">
          <SectionTitle size="md">
            Our Process
          </SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A collaborative methodology refined across years of diverse projects, ensuring design excellence at every phase.
          </p>
        </div>
      </div>

      <div className="space-y-16 md:space-y-20">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-6xl md:text-7xl font-light text-accent text-opacity-20">
                {step.number}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && <Divider className="mt-16 md:mt-20" />}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
