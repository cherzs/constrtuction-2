import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import { Divider } from '../ui/divider'
import Image from 'next/image'

export default function History() {
  const milestones = [
    {
      year: '2008',
      title: 'Studio Founded',
      description: 'Shin Dongah Construction established in Seoul with a vision to create architecture that transcends cultural boundaries.',
    },
    {
      year: '2011',
      title: 'First International Office',
      description: 'Expanded practice to Tokyo, Japan, establishing presence in East Asian markets and beginning regional project work.',
    },
    {
      year: '2014',
      title: 'Major Recognition',
      description: 'Received prestigious international architecture awards for innovative residential design and sustainable development.',
    },
    {
      year: '2017',
      title: 'Asian Headquarters',
      description: 'Opened comprehensive offices in Shanghai and Singapore to serve growing demand across the Asia-Pacific region.',
    },
    {
      year: '2021',
      title: 'Milestone Achievement',
      description: 'Celebrated completion of 150th project while maintaining commitment to design excellence and sustainable practices.',
    },
  ]

  return (
    <SectionContainer id="history" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 pb-20 border-b border-border items-start">
        {/* Left - Content */}
        <div>
          <SectionTitle size="md">
            Our Journey
          </SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From humble beginnings to becoming a respected practice, each milestone represents our evolving commitment to architectural excellence.
          </p>
        </div>

        {/* Right - Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="/images/history-timeline.jpg"
            alt="Shin Dongah Construction journey and milestones"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="space-y-12 md:space-y-16">
        {milestones.map((milestone, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div>
                <p className="text-4xl md:text-5xl font-light text-foreground">
                  {milestone.year}
                </p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl md:text-2xl font-light text-foreground mb-3">
                  {milestone.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
            {index < milestones.length - 1 && <Divider className="mt-12 md:mt-16" />}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
