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
import TeamSection from '@/components/TeamSection'
import Testimonials from '@/components/Testimonials'
import BookingSection from '@/components/BookingSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FloatingCTA from '@/components/FloatingCTA'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.18),transparent_65%)]" />
        <div className="absolute top-[24rem] right-[-10rem] h-[24rem] w-[24rem] rounded-full bg-[#C9A84C]/10 blur-[120px]" />
        <div className="absolute top-[72rem] left-[-8rem] h-[22rem] w-[22rem] rounded-full bg-[#E2C97E]/10 blur-[120px]" />
        <div className="absolute bottom-[16rem] right-[8%] h-[20rem] w-[20rem] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
      </div>
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
      <TeamSection />
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
