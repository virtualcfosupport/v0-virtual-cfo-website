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
  description: 'Transform your AP/AR operations with CFO oversight and Accra hub execution. Reduce errors by 50-70%, accelerate processing 2-3x, improve DSO by 5-15 days.',
  keywords: 'virtual CFO, accounts payable, accounts receivable, finance operations, Accra, outsourcing, cash flow optimization',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'VirtualCFOSupport | CFO-Led Finance Operations Platform',
    description: 'Transform your AP/AR operations with CFO oversight and Accra hub execution.',
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
