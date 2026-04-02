'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Globe, GraduationCap, DollarSign, Bot, TrendingUp, BarChart3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  { icon: Globe, text: 'Real-time collaboration with US teams' },
  { icon: GraduationCap, text: 'Skilled, English-speaking finance professionals' },
  { icon: DollarSign, text: 'Lower cost structure, higher quality delivery' },
  { icon: Bot, text: 'Automation-driven efficiency (OCR, workflow tools)' },
  { icon: TrendingUp, text: 'Continuous process improvement embedded in delivery' },
  { icon: BarChart3, text: 'Built-in analytics and reporting capability' },
]

export default function WhyAccra() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="why-accra" ref={sectionRef} className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              U.S. Strategic Leadership. Global Execution.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 text-pretty">
              We operate as your U.S.-based Virtual CFO & Controllership Partner, leveraging a world-class global delivery hub in Accra, Ghana to drive operational excellence.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <span className="text-foreground pt-2">{feature.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="#book"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#C9A84C] text-[#C9A84C] font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-all duration-200"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Finance professional in modern office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf5]/80 via-[#fcfaf5]/10 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">Accra, Ghana</div>
                    <div className="text-muted-foreground text-sm">Finance Operations Hub</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A84C]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C9A84C]/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
