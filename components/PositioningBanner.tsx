'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const comparisons = [
  { label: 'Back-office Operations', isRight: false },
  { label: 'Bookkeeping Only', isRight: false },
  { label: 'Finance Operations Partner', isRight: true },
]

export default function PositioningBanner() {
  return (
    <section className="relative py-16 bg-[#0A0D14] border-y border-[#2D3748]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-wider uppercase mb-4">
            How We&apos;re Different
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0EDE6] mb-6 text-balance">
            More Than Back-Office Processing — Full Finance Operations Ownership
          </h2>
          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-pretty">
            Traditional AP/AR providers execute transactions. VirtualCFOSupport takes end-to-end 
            ownership of your finance operations — from invoicing to collections to reconciliation to 
            reporting — with cash flow optimization and CFO-level oversight built in.
          </p>

          {/* Comparison Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${
                  item.isRight
                    ? 'bg-[#C9A84C]/20 border-2 border-[#C9A84C] text-[#C9A84C]'
                    : 'bg-[#111827] border border-[#2D3748] text-[#9CA3AF]'
                }`}
              >
                {item.isRight ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
                <span className="font-medium">{item.label}</span>
                {item.isRight && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
