'use client'

import { Shield, Globe, Users, Zap, Database, Clock, Calendar } from 'lucide-react'

const trustItems = [
  { icon: Shield, text: 'CFO-Supervised' },
  { icon: Globe, text: 'US + Accra, Ghana Delivery Hub' },
  { icon: Users, text: 'AP/AR Specialists' },
  { icon: Zap, text: 'Automation-First' },
  { icon: Database, text: 'ERP Integrated' },
  { icon: Clock, text: '24-48hr Cycle Time' },
  { icon: Calendar, text: 'Month-End Close Acceleration' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#111827] border-y border-[#2D3748] py-4 overflow-hidden">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111827] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111827] to-transparent z-10" />
        
        {/* Ticker */}
        <div className="animate-ticker flex whitespace-nowrap">
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mx-8"
            >
              <item.icon className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-[#F0EDE6] text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
