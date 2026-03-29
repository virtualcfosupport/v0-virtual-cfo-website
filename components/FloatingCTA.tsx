'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-40"
        >
          <Link
            href="#book"
            className="flex items-center gap-2 px-5 py-3 gold-gradient text-[#0A0D14] font-semibold rounded-full shadow-lg shadow-[#C9A84C]/30 hover:shadow-[#C9A84C]/50 transition-shadow"
          >
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline">Book a Free CFO Call</span>
            <span className="sm:hidden">Book Call</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
