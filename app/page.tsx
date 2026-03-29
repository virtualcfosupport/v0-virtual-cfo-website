import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import WhatWeAre from '@/components/WhatWeAre'
import ProblemSolution from '@/components/ProblemSolution'
import PositioningBanner from '@/components/PositioningBanner'
import CoreServices from '@/components/CoreServices'
import Metrics from '@/components/Metrics'
import WhyAccra from '@/components/WhyAccra'
import EngagementModel from '@/components/EngagementModel'
import Testimonials from '@/components/Testimonials'
import BookingSection from '@/components/BookingSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FloatingCTA from '@/components/FloatingCTA'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustBar />
      <WhatWeAre />
      <ProblemSolution />
      <PositioningBanner />
      <CoreServices />
      <Metrics />
      <WhyAccra />
      <EngagementModel />
      <Testimonials />
      <BookingSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <FloatingCTA />
    </main>
  )
}
