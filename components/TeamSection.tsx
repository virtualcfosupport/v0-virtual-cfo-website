'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Cpu, LineChart } from 'lucide-react'

const qualifications = [
  {
    icon: Award,
    title: 'Global Credentials',
    description: 'Our team members hold globally recognized qualifications including CPA, ACCA, CFA, and MBA from top-tier institutions.',
  },
  {
    icon: LineChart,
    title: 'Strategic FP&A & Advisory',
    description: 'Expertise in complex financial modeling, capital strategy, M&A due diligence, and board-level reporting.',
  },
  {
    icon: Cpu,
    title: 'Modern Tech Stack',
    description: 'Proficient in advanced ERPs, automation tools, OCR, and BI platforms (PowerBI, Tableau) to streamline operations.',
  },
  {
    icon: Briefcase,
    title: 'Industry Experience',
    description: 'Big 4 pedigree combined with deep industry knowledge across SaaS, e-commerce, healthcare, and professional services.',
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#E2C97E]/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 backdrop-blur-sm">
              <span className="text-[#C9A84C] text-sm font-semibold tracking-wide uppercase">
                Elite Talent
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Virtual CFO Qualifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              We deploy top-tier financial talent. Our U.S.-led global team combines strategic foresight with rigorous technical expertise to scale your operations.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {qualifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:gold-glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {item.title.split('&').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i !== arr.length - 1 && <span className="font-sans">&amp;</span>}
                      </span>
                    ))}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
