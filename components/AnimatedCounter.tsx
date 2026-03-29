'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(from)
  
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [isInView, motionValue, to])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
