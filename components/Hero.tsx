'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedCounter from './AnimatedCounter'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0D14]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-grid-move">
          <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#E2C97E]/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-1.5s' }} />

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Tag */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-wide">CFO-Led Finance Operations</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F0EDE6] leading-tight mb-6 text-balance"
          >
            Transform Your Finance Operations
            <span className="block text-[#C9A84C]">Not Just Your Costs.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-[#9CA3AF] mb-10 text-pretty"
          >
            A CFO-led platform combining US oversight with an Accra delivery hub to improve 
            cash flow, strengthen controls, and scale efficiently.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Link
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-[#0A0D14] font-semibold rounded-lg hover:opacity-90 transition-all duration-200 gold-glow"
            >
              Book a CFO Strategy Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C9A84C] text-[#C9A84C] font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-all duration-200"
            >
              Start a 2-4 Week Pilot
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <Link
              href="#services"
              className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors duration-200 text-sm underline underline-offset-4"
            >
              Schedule an AP/AR Workflow Review
            </Link>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass rounded-xl p-6 gold-glow-hover transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-2">
                <AnimatedCounter from={0} to={50} suffix="-70%" />
              </div>
              <div className="text-[#9CA3AF] text-sm">Error Reduction</div>
            </div>
            <div className="glass rounded-xl p-6 gold-glow-hover transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-2">
                <AnimatedCounter from={0} to={2} suffix="-3x" />
              </div>
              <div className="text-[#9CA3AF] text-sm">Faster Processing</div>
            </div>
            <div className="glass rounded-xl p-6 gold-glow-hover transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-2">
                <AnimatedCounter from={0} to={5} suffix="-15" /> <span className="text-2xl">Days</span>
              </div>
              <div className="text-[#9CA3AF] text-sm">DSO Improvement</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#C9A84C]/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"
          />
        </div>
      </motion.div>
    </section>
  )
}
