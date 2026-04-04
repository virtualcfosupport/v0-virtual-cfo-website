'use client'

import { motion } from 'framer-motion'
import { Search, Rocket, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Assess',
    timeline: 'Week 1-2',
    description: 'Process review, gap identification, baseline metrics',
  },
  {
    icon: Rocket,
    number: '02',
    title: 'Pilot',
    timeline: 'Week 3-6',
    description: 'Live 2-4 week pilot as your embedded Controllership team with full CFO oversight',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Scale',
    timeline: 'Week 7+',
    description: 'Full deployment across AP/AR with automation enablement',
  },
]

export default function EngagementModel() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }
    }
  }

  return (
    <section id="how-it-works" className="relative py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Engage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From assessment to scale in weeks, not months.
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-[#C9A84C] via-[#C9A84C] to-[#C9A84C] origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative z-10 mx-auto w-[120px] h-[120px] rounded-full bg-white border-2 border-[#C9A84C] flex items-center justify-center mb-8 shadow-sm">
                  <div className="text-center">
                    <step.icon className="w-8 h-8 text-[#C9A84C] mx-auto mb-1" />
                    <span className="text-[#C9A84C] text-xs font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="inline-block px-3 py-1 bg-[#C9A84C]/10 rounded-full text-[#C9A84C] text-sm font-medium mb-3">
                    {step.timeline}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex gap-4"
            >
              {/* Line connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-[30px] top-[60px] bottom-0 w-0.5 bg-gradient-to-b from-[#C9A84C] to-[#ded3ba]" />
              )}
              
              {/* Circle */}
              <div className="shrink-0 w-[60px] h-[60px] rounded-full bg-white border-2 border-[#C9A84C] flex items-center justify-center z-10 shadow-sm">
                <step.icon className="w-6 h-6 text-[#C9A84C]" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl p-4 border border-border shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#C9A84C] text-xs font-bold">{step.number}</span>
                  <span className="px-2 py-0.5 bg-[#C9A84C]/10 rounded-full text-[#C9A84C] text-xs">{step.timeline}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="#book"
            onClick={(e) => handleNavClick(e, '#book')}
            className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-[#0A0D14] font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
          >
            Book a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
