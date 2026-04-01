'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const serviceOptions = [
  'Accounts Payable',
  'Accounts Receivable',
  'Full AP/AR Management',
  'CFO Advisory',
  'Automation Enablement',
  'Not sure yet',
]

const volumeOptions = [
  'Under 100',
  '100-500',
  '500-2,000',
  '2,000+',
]

const contactInfo = [
  { icon: Mail, label: 'hello@virtualcfosupport.com' },
  { icon: Phone, label: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'US Operations + Accra, Ghana Delivery Hub' },
  { icon: Clock, label: 'Response within 24 hours' },
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    serviceInterest: '',
    invoiceVolume: '',
    message: '',
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call (replace with actual Formspree/Resend integration)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        serviceInterest: '',
        invoiceVolume: '',
        message: '',
        consent: false,
      })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section className="relative py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0EDE6] mb-4">
            Get in Touch
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Have questions before booking? Send us a message and a member of our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 bg-[#111827] rounded-xl border border-[#2D3748]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <span className="text-[#F0EDE6]">{item.label}</span>
              </div>
            ))}

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/virtualcfosupport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#E2C97E] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>Follow us on LinkedIn</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-[#111827] rounded-xl p-12 border border-[#2D3748] text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#F0EDE6] mb-2">Thank you!</h3>
                  <p className="text-[#9CA3AF]">We&apos;ll be in touch within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 border border-[#C9A84C] text-[#C9A84C] rounded-lg hover:bg-[#C9A84C]/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-[#111827] rounded-xl p-8 border border-[#2D3748] space-y-6"
                >
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0A0D14] border border-[#2D3748] rounded-lg text-[#F0EDE6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0A0D14] border border-[#2D3748] rounded-lg text-[#F0EDE6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0A0D14] border border-[#2D3748] rounded-lg text-[#F0EDE6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0A0D14] border border-[#2D3748] rounded-lg text-[#F0EDE6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                        Service Interest *
                      </label>
                      <select
                        name="serviceInterest"
                        required
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0A0D14] border border-[#2D3748] rounded-lg text-[#F0EDE6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all"
                      >
                        <option value="">Select an option</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    {/* Invoice Volume */}
                    <div>
                      <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                        Monthly Invoice Volume
                      </label>
                      <select
                        name="invoiceVolume"
                        value={formData.invoiceVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0A0D14] border border-[#2D3748] rounded-lg text-[#F0EDE6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all"
                      >
                        <option value="">Select an option</option>
                        {volumeOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#C9A84C] text-xs uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0A0D14] border border-[#2D3748] rounded-lg text-[#F0EDE6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-[#2D3748] bg-[#0A0D14] text-[#C9A84C] focus:ring-[#C9A84C]/50"
                    />
                    <span className="text-[#9CA3AF] text-sm">
                      I agree to receive communications from VirtualCFOSupport
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 gold-gradient text-[#0A0D14] font-semibold rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
