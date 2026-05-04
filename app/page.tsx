import { Header } from '@/components/header'
import Hero from '@/components/sections/hero'
import { IntroSection } from '@/components/sections/intro'
import Divisions from '@/components/sections/divisions'
import Services from '@/components/sections/services'
import VisionStatement from '@/components/sections/vision'
import ProcessFlow from '@/components/sections/process'
import { OperationalReadinessSection } from '@/components/sections/operational-readiness'
import History from '@/components/sections/history'
import Contact from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <IntroSection />
      <Divisions />
      <Services />
      <VisionStatement />
      <ProcessFlow />
      <OperationalReadinessSection />
      <History />
      <Contact />
      <Footer />
    </main>
  )
}
