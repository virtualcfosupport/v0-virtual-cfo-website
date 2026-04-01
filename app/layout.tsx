import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VirtualCFOSupport | CFO-Led Finance Operations Platform',
  description: 'Transform your AP/AR operations with CFO oversight and Accra Delivery Hub execution. Reduce errors by 50-70%, accelerate processing 2-3x, improve DSO by 5-15 days.',
  keywords: 'virtual CFO, accounts payable, accounts receivable, finance operations, Accra, cash flow optimization, controllership',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'VirtualCFOSupport | CFO-Led Finance Operations Platform',
    description: 'Transform your AP/AR operations with CFO oversight and Accra Delivery Hub execution.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0D14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#0A0D14] text-[#F0EDE6]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
