'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, Rocket } from 'lucide-react'
import Script from 'next/script'

const bookingOptions = [
  {
    icon: Phone,
    title: 'CFO Strategy Call',
    duration: '30 min',
    price: 'Free',
    description: 'Discovery & fit assessment',
    calLink: 'virtualcfosupport/cfo-strategy-call',
  },
  {
    icon: Clock,
    title: 'AP/AR Workflow Review',
    duration: '45 min',
    price: 'Free',
    description: 'Deep dive into current processes',
    calLink: 'virtualcfosupport/workflow-review',
  },
  {
    icon: Rocket,
    title: 'Start Your Pilot',
    duration: '60 min',
    price: 'Structured',
    description: 'Begin your 2-4 week pilot',
    calLink: 'virtualcfosupport/start-pilot',
  },
]

export default function BookingSection() {
  return (
    <section id="book" className="relative py-24 bg-[#1A2235]">
      <Script src="https://cal.com/embed.js" strategy="lazyOnload" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0EDE6] mb-4">
            Ready to Transform Your Finance Operations?
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Book a no-obligation CFO Strategy Call. We&apos;ll review your current AP/AR setup and identify quick wins.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <button
            data-cal-link="virtualcfosupport/cfo-strategy-call"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex items-center gap-2 px-10 py-5 gold-gradient text-[#0A0D14] font-bold text-lg rounded-lg hover:opacity-90 transition-all duration-200 gold-glow"
          >
            Book Your Free CFO Call Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

        {/* Booking Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:gold-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                <option.icon className="w-6 h-6 text-[#C9A84C]" />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#F0EDE6] mb-2">{option.title}</h3>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-[#0A0D14] rounded text-[#9CA3AF] text-sm">
                  {option.duration}
                </span>
                <span className="px-2 py-1 bg-[#C9A84C]/10 rounded text-[#C9A84C] text-sm font-medium">
                  {option.price}
                </span>
              </div>

              <p className="text-[#9CA3AF] mb-6">{option.description}</p>

              <button
                data-cal-link={option.calLink}
                data-cal-config='{"layout":"month_view"}'
                className="w-full py-3 border-2 border-[#C9A84C] text-[#C9A84C] font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-all duration-200"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
