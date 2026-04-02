'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import Link from 'next/link'
import { ShieldCheck, TimerReset, Landmark, Sparkles } from 'lucide-react'

const metrics = [
  { value: 50, suffix: '-70%', label: 'Error Reduction', icon: ShieldCheck, tone: 'Control Accuracy' },
  { value: 2, suffix: '-3x', label: 'Faster Processing', icon: TimerReset, tone: 'Cycle Time' },
  { value: 5, suffix: '-15', extra: 'Days', label: 'DSO Improvement', icon: Landmark, tone: 'Cash Flow' },
  { value: 48, suffix: 'hrs', prefix: '<', label: 'Invoice Cycle Time', icon: Sparkles, tone: 'Automation Speed' },
]

export default function Metrics() {
  return (
    <section id="results" className="relative py-24 bg-[linear-gradient(180deg,#fffaf0_0%,#fcfaf5_46%,#f6eedc_100%)] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C9A84C]/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/25 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#A97C1A] mb-5 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Data-backed outcomes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Results That Move the Needle
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our clients see measurable outcomes within the first 90 days.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl border border-[#eadcb8] bg-white/90 p-8 text-center shadow-[0_24px_60px_rgba(31,41,55,0.08)] gold-glow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C]/12">
                <metric.icon className="h-6 w-6 text-[#B88418]" />
              </div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#A97C1A]">
                {metric.tone}
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-[#C9A84C] mb-2">
                <AnimatedCounter from={0} to={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                {metric.extra && <span className="text-2xl ml-1">{metric.extra}</span>}
              </div>
              <div className="text-foreground font-semibold">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="#book"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C9A84C] text-[#C9A84C] font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-all duration-200"
          >
            Get These Results for Your Business
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
