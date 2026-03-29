'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, Mail, DollarSign, BarChart3, TrendingDown, RefreshCw, ClipboardList,
  Inbox, CheckSquare, FolderOpen, CreditCard, Users, Calendar, Shield,
  Wallet, LineChart, Zap, Search, Target, Clock,
  Bot, Settings, Database, Link, MailCheck, Lock
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const tabs = [
  { id: 'ar', label: 'Accounts Receivable' },
  { id: 'ap', label: 'Accounts Payable' },
  { id: 'cashflow', label: 'Cash Flow' },
  { id: 'tech', label: 'Technology' },
]

const arServices = [
  { icon: FileText, title: 'Invoicing & Billing', description: 'Accurate, timely invoice generation and delivery across all customer channels' },
  { icon: Mail, title: 'Collections Management', description: 'Systematic follow-ups, escalation workflows, and dispute resolution to accelerate cash recovery' },
  { icon: DollarSign, title: 'Cash Application', description: 'Accurate matching of payments to open invoices — same day, every day' },
  { icon: BarChart3, title: 'Aging Management & Reporting', description: 'Weekly AR aging reports, risk-tiering of receivables, and customer credit monitoring' },
  { icon: TrendingDown, title: 'DSO Optimization', description: 'Active strategies to reduce Days Sales Outstanding — target 5-15 day improvement' },
  { icon: RefreshCw, title: 'Reconciliation', description: 'End-of-period AR reconciliation, tied to GL and bank statements' },
  { icon: ClipboardList, title: 'Audit-Ready Documentation', description: 'Every transaction documented and traceable for compliance and audit review' },
]

const apServices = [
  { icon: Inbox, title: 'Invoice Receipt & Processing', description: 'Capture, code, and route invoices for approval — paper, email, or EDI' },
  { icon: CheckSquare, title: '3-Way Match & Approval Workflows', description: 'PO, receipt, and invoice matching with automated exception handling' },
  { icon: FolderOpen, title: 'GL Coding & Chart of Accounts Management', description: 'Accurate coding aligned to your chart of accounts and cost centres' },
  { icon: CreditCard, title: 'Payment Preparation & Execution', description: 'Scheduled payment runs with dual-approval controls and full audit trail' },
  { icon: Users, title: 'Vendor Relationship Management', description: 'Vendor onboarding, statement reconciliation, and dispute resolution' },
  { icon: Calendar, title: 'Month-End Accruals & Close Support', description: 'Accrual entries, AP aging schedules, and close reporting packages' },
  { icon: Shield, title: 'Compliance & Audit Readiness', description: 'SOX-aligned process controls, segregation of duties, and documented workflows' },
]

const cashflowServices = [
  { icon: Wallet, title: 'Working Capital Analysis', description: 'Identify cash tied up in receivables and payables — and unlock it' },
  { icon: LineChart, title: 'Cash Flow Forecasting', description: '13-week rolling cash flow forecasts updated weekly' },
  { icon: Zap, title: 'Early Payment Discount Capture', description: 'Identify and capture supplier early-pay discounts to reduce AP costs' },
  { icon: Search, title: 'Leakage Detection', description: 'Identify duplicate payments, overpayments, and missed credits' },
  { icon: BarChart3, title: 'Cash Conversion Cycle (CCC) Monitoring', description: 'Track and improve DPO, DSO, and inventory days' },
  { icon: Target, title: 'SLA-Driven Collections', description: 'Defined collection timelines: Net 30 → reminder Day 25 → call Day 31 → escalation Day 45' },
]

const techServices = [
  { icon: Bot, title: 'OCR Invoice Capture', description: 'Automated data extraction from paper and PDF invoices — no manual keying' },
  { icon: Settings, title: 'Workflow Automation', description: 'Rules-based routing, approval triggers, and exception flagging' },
  { icon: Database, title: 'Real-Time Dashboards', description: 'Live AP/AR dashboards with drill-down into aging, open items, and trends' },
  { icon: Link, title: 'Bank Feed Integration', description: 'Automated bank reconciliation via direct feed connections' },
  { icon: MailCheck, title: 'Automated Customer Communications', description: 'Invoice delivery, payment reminders, and receipt confirmations' },
  { icon: Lock, title: 'Secure Document Management', description: 'Encrypted storage of all invoices, contracts, and payment records' },
]

const erpLogos = [
  { name: 'QuickBooks', logo: '/logos/quickbooks.svg' },
  { name: 'Xero', logo: '/logos/xero.svg' },
  { name: 'NetSuite', logo: '/logos/netsuite.svg' },
  { name: 'Sage', logo: '/logos/sage.svg' },
  { name: 'Microsoft Dynamics', logo: '/logos/dynamics.svg' },
  { name: 'SAP', logo: '/logos/sap.svg' },
]

const slaItems = [
  { icon: Clock, title: 'Invoice Processing', value: 'Within 24 hours of receipt' },
  { icon: Mail, title: 'Collections Follow-up', value: 'Day 25, 31, 45 escalation cadence' },
  { icon: CreditCard, title: 'Payment Runs', value: 'Weekly scheduled, emergency same-day' },
  { icon: BarChart3, title: 'Reporting Delivery', value: 'Monthly close pack within 3 business days' },
]

const tabContent: Record<string, { subheadline: string; services: typeof arServices }> = {
  ar: { subheadline: 'From Invoice to Cash — We Own the Full Cycle', services: arServices },
  ap: { subheadline: 'Controlled, Compliant Vendor Payments — On Time, Every Time', services: apServices },
  cashflow: { subheadline: "We Don't Just Book Transactions — We Improve Your Cash Position", services: cashflowServices },
  tech: { subheadline: 'Integrated Into Your Stack — Automated Where It Matters', services: techServices },
}

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState('ar')

  return (
    <section id="services" className="relative py-24 bg-[#111827]">
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
            Our Core Services
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            End-to-end ownership across the full AP/AR lifecycle — not just transaction processing.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-[#0A0D14] bg-[#C9A84C]'
                  : 'text-[#9CA3AF] bg-[#0A0D14] hover:text-[#F0EDE6] hover:bg-[#1A2235]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subheadline */}
            <h3 className="text-center text-xl text-[#C9A84C] font-medium mb-10">
              {tabContent[activeTab].subheadline}
            </h3>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {tabContent[activeTab].services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex gap-4 p-6 bg-[#0A0D14] rounded-xl border border-[#2D3748] hover:border-[#C9A84C]/30 transition-colors"
                >
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F0EDE6] mb-1">{service.title}</h4>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ERP Logos (only for tech tab) */}
            {activeTab === 'tech' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-12"
              >
                <p className="text-center text-[#9CA3AF] text-sm mb-6">ERP & Accounting Platform Integrations</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {erpLogos.map((erp) => (
                    <div
                      key={erp.name}
                      className="px-6 py-3 bg-[#0A0D14] rounded-lg border border-[#2D3748] text-[#9CA3AF] hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all"
                    >
                      <span className="font-medium">{erp.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* SLA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0D14] rounded-xl p-8 border border-[#2D3748]"
        >
          <h3 className="text-center font-serif text-2xl font-bold text-[#F0EDE6] mb-8">
            Our Service Level Commitments
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F0EDE6] text-sm">{item.title}</h4>
                  <p className="text-[#9CA3AF] text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            href="#book"
            className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-[#0A0D14] font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
          >
            Book a Service Review
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
