'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'VirtualCFOSupport reduced our invoice processing time from 5 days to under 48 hours. The CFO oversight gave our board complete confidence.',
    author: 'Sarah Mitchell',
    title: 'CFO',
    company: 'TechScale Inc.',
  },
  {
    quote: 'Finally, a finance operations partner that actually understands working capital. Our DSO dropped by 12 days in the first quarter.',
    author: 'David Chen',
    title: 'VP Finance',
    company: 'Meridian Healthcare',
  },
  {
    quote: "The Accra team operates at a level I didn't expect. Seamless collaboration, accurate reporting, and they caught errors our internal team missed.",
    author: 'Jennifer Ross',
    title: 'Controller',
    company: 'Atlas Manufacturing',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 sm:p-12 border border-border shadow-sm"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-[#C9A84C]/30 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8 font-serif italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                  <span className="text-[#C9A84C] font-bold text-lg">
                    {testimonials[current].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-foreground font-semibold">{testimonials[current].author}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[current].title}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white border border-border text-muted-foreground hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrent(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === current ? 'w-6 bg-[#C9A84C]' : 'bg-[#ded3ba] hover:bg-[#c0ae7e]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white border border-border text-muted-foreground hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
