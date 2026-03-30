'use client'

import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, UserCheck } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
}

const cards = [
  {
    icon: Briefcase,
    title: 'Finance Operations Management',
    description:
      'End-to-end ownership of AP/AR — invoicing, collections, vendor payments, reconciliation, and reporting. We run the whole cycle, not just parts of it.',
  },
  {
    icon: TrendingUp,
    title: 'Cash Flow Optimization',
    description:
      "We don't just process transactions. We actively improve your cash position — reducing DSO, capturing early-pay discounts, and eliminating payment leakage.",
  },
  {
    icon: UserCheck,
    title: 'CFO-Led Execution',
    description:
      'Every engagement is overseen by a CFO, not just a processing team. We redesign and improve processes while operating them.',
  },
]

export default function WhatWeAre() {
  return (
    <section className="relative py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0EDE6] mb-4">
            Where We Sit
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            We operate as your embedded finance team — combining execution with CFO-level oversight.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#111827] rounded-xl p-8 border-l-4 border-[#C9A84C] hover:shadow-[0_0_40px_rgba(201,168,76,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/20 transition-colors">
                <card.icon className="w-7 h-7 text-[#C9A84C]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F0EDE6] mb-3">{card.title}</h3>
              <p className="text-[#9CA3AF] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentiator Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-[#1A2235] rounded-xl p-8 border border-[#C9A84C]/30"
        >
          <div className="absolute -top-3 left-8 px-4 py-1 bg-[#C9A84C] rounded-full">
            <span className="text-[#0A0D14] text-sm font-semibold">What Sets Us Apart</span>
          </div>
          <p className="text-[#F0EDE6] text-lg italic leading-relaxed pt-2">
            &ldquo;Unlike traditional back-office providers, we bring automation, tools (QuickBooks, Xero, NetSuite), 
            clear SLAs, and audit-ready processes — so you get operational execution AND financial transformation.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
