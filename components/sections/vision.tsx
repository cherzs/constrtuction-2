import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import { Divider } from '../ui/divider'
import Image from 'next/image'

export default function VisionStatement() {
  return (
    <SectionContainer id="vision" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 pb-20 border-b border-border items-start">
        {/* Left - Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="/images/vision-aesthetic.jpg"
            alt="Architectural vision and design philosophy"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <SectionTitle size="md">
            Vision & Values
          </SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Our practice is rooted in the belief that architecture serves humanity. We create spaces that harmonize with their cultural and environmental contexts.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-light text-foreground mb-3">
                Integrity
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Honesty in design, truthful expression of materials and structure, and unwavering commitment to our clients&apos; vision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-3">
                Sustainability
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Environmental stewardship embedded in every design decision, creating buildings that enhance rather than diminish their surroundings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Uncompromising attention to craft, detail, and the pursuit of timeless design that transcends trends and fads.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mt-20 pt-20 border-t border-border">
        <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed italic mb-8">
          &quot;We believe architecture is not the creation of individual genius, but rather the collaborative expression of a culture&apos;s values and aspirations.&quot;
        </p>
        <p className="text-sm text-muted-foreground tracking-wide">
          — PT. Shin Dongah Construction
        </p>
      </div>
    </SectionContainer>
  )
}
