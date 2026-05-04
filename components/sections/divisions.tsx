import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import Image from 'next/image'

export default function Divisions() {
  const divisions = [
    {
      title: 'Residential Design',
      description: 'Luxury residences, apartments, and private homes that balance aesthetics with livability. We create spaces that adapt to individual lifestyles while maintaining architectural integrity.',
      image: '/images/division-residential.jpg',
    },
    {
      title: 'Commercial Architecture',
      description: 'Office complexes, retail spaces, and hospitality design that elevates brand identity. Our commercial projects merge functionality with distinctive design narratives.',
      image: '/images/division-commercial.jpg',
    },
    {
      title: 'Interior Design',
      description: 'Comprehensive interior solutions that extend our architectural vision. From concept development to material selection, we ensure every detail reflects our design philosophy.',
      image: '/images/division-interior.jpg',
    },
    {
      title: 'Cultural Spaces',
      description: 'Museums, galleries, and institutional buildings that celebrate human creativity. We design spaces that honor cultural heritage while inspiring contemporary engagement.',
      image: '/images/division-cultural.jpg',
    },
  ]

  return (
    <SectionContainer id="work" className="border-t border-border">
      <SectionTitle size="md" centered>
        Our Practice
      </SectionTitle>
      <p className="text-center text-lg text-muted-foreground leading-relaxed mb-20 max-w-2xl mx-auto">
        We approach each project type with distinct expertise, ensuring solutions tailored to unique program requirements and cultural contexts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {divisions.map((division, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative h-72 md:h-80 mb-8 overflow-hidden">
              <Image
                src={division.image}
                alt={division.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              {division.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed flex-grow mb-6">
              {division.description}
            </p>
            <div>
              <button className="text-foreground text-sm font-light hover:text-muted-foreground transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
