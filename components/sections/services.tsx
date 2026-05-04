import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import { Divider } from '../ui/divider'

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Master Planning',
      description: 'Strategic site analysis and comprehensive urban design frameworks that establish the foundation for exceptional projects.',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Collaborative ideation and conceptual design exploring spatial possibilities and design narratives.',
    },
    {
      number: '03',
      title: 'Design Development',
      description: 'Detailed architectural design with attention to materiality, sustainability, and constructability.',
    },
    {
      number: '04',
      title: 'Construction Administration',
      description: 'Full-service oversight ensuring design intent is realized through meticulous quality control and coordination.',
    },
  ]

  return (
    <SectionContainer id="services" className="border-t border-border">
      <SectionTitle size="md">
        Our Services
      </SectionTitle>
      <p className="text-lg text-muted-foreground leading-relaxed mb-20 max-w-2xl">
        A comprehensive design process refined through years of practice across diverse project types and scales.
      </p>

      <div className="space-y-16 md:space-y-20">
        {services.map((service, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-5xl md:text-6xl font-light text-accent text-opacity-30 leading-tight">
                {service.number}
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            {index < services.length - 1 && <Divider className="mt-16 md:mt-20" />}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
