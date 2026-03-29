'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Eye, DollarSign, CheckCircle, ArrowRight } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Fragmented AP/AR Processes',
    description: 'Disjointed workflows create errors and delays',
  },
  {
    icon: Clock,
    title: 'Slow Cycle Times',
    description: 'Invoice approval and cash collection take too long',
  },
  {
    icon: Eye,
    title: 'Poor Cash Flow Visibility',
    description: "No real-time view of what's owed and when",
  },
  {
    icon: DollarSign,
    title: 'High US Cost Structures',
    description: 'Premium overhead limits scalability',
  },
]

const solutionLayers = [
  {
    flag: 'US',
    title: 'US Layer',
    items: ['CFO Oversight', 'Approvals', 'Stakeholder Alignment'],
    bgClass: 'bg-[#1A2235]',
  },
  {
    flag: 'Tech',
    title: 'Technology Layer',
    items: ['ERP Integration', 'OCR Automation', 'Real-time Reporting'],
    bgClass: 'bg-[#151B2A]',
  },
  {
    flag: 'GH',
    title: 'Accra Hub',
    items: ['AP/AR Execution', 'Analytics', 'Reporting'],
    bgClass: 'bg-[#111827]',
  },
]

const outcomes = [
  'Unified end-to-end process ownership',
  'Real-time cash flow visibility',
  'CFO-grade financial controls',
  'Cost-effective global delivery',
  'Continuous process improvement',
]

export default function ProblemSolution() {
  return (
    <>
      {/* Problem Section */}
      <section id="problem" className="relative py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-wider uppercase mb-4">
              The Challenge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0EDE6] text-balance">
              Finance Inefficiencies Are Silently Killing Your Growth
            </h2>
          </motion.div>

          {/* Problem Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0A0D14] rounded-xl p-6 border-l-4 border-amber-600/70"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-600/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-semibold text-[#F0EDE6] mb-2">{problem.title}</h3>
                <p className="text-[#9CA3AF] text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Transition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-[#C9A84C]"
          >
            <span className="text-lg font-medium">There&apos;s a better way</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative py-24 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-wider uppercase mb-4">
              Our Platform
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0EDE6] text-balance">
              A Finance Operations Platform Built for Scale
            </h2>
          </motion.div>

          {/* Architecture Diagram + Outcomes */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Layered Architecture */}
            <div className="space-y-4">
              {solutionLayers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`${layer.bgClass} rounded-xl p-6 border border-[#2D3748] relative overflow-hidden`}
                >
                  {/* Connector line */}
                  {index < solutionLayers.length - 1 && (
                    <div className="absolute left-1/2 -bottom-4 w-0.5 h-8 bg-gradient-to-b from-[#C9A84C] to-transparent z-10" />
                  )}
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] font-bold text-sm">
                      {layer.flag}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#F0EDE6]">{layer.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-[#0A0D14] rounded-full text-[#9CA3AF] text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#111827] rounded-xl p-8 border border-[#2D3748]"
            >
              <h3 className="font-serif text-2xl font-bold text-[#F0EDE6] mb-6">Key Outcomes</h3>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <motion.li
                    key={outcome}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#C9A84C] mt-0.5 shrink-0" />
                    <span className="text-[#F0EDE6]">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
