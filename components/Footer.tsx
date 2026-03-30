'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Linkedin, Twitter, Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Accounts Receivable', href: '#services' },
    { label: 'Accounts Payable', href: '#services' },
    { label: 'Cash Flow Optimization', href: '#services' },
    { label: 'Technology & Automation', href: '#services' },
    { label: 'CFO Advisory', href: '#book' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Accra', href: '#why-accra' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'AP/AR Benchmarks', href: '#' },
    { label: 'SLA Overview', href: '#services' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }
    } else if (href === '/') {
      if (window.location.pathname === '/') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-[#0A0D14] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="inline-block mb-4"
            >
              <span className="font-serif text-2xl font-bold text-[#C9A84C]">VirtualCFOSupport</span>
            </Link>
            <p className="text-[#9CA3AF] mb-6">Finance Operations, Elevated.</p>

            {/* Newsletter */}
            <form onSubmit={handleSubmit} className="mb-6">
              <label className="block text-[#F0EDE6] text-sm font-medium mb-2">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-[#111827] border border-[#2D3748] rounded-lg text-[#F0EDE6] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="px-4 py-2.5 gold-gradient text-[#0A0D14] rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/virtualcfosupport"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#111827] border border-[#2D3748] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/virtualcfosupport"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#111827] border border-[#2D3748] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@virtualcfosupport.com"
                className="w-10 h-10 rounded-full bg-[#111827] border border-[#2D3748] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#F0EDE6] font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F0EDE6] font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F0EDE6] font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#9CA3AF] hover:text-[#C9A84C] transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#2D3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#6B7280] text-sm">
              &copy; {new Date().getFullYear()} VirtualCFOSupport. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-[#6B7280] hover:text-[#C9A84C] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#6B7280] hover:text-[#C9A84C] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
