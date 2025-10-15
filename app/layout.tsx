import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devbuddy - Building Digital Excellence',
  description: 'We craft exceptional digital experiences through innovative design and cutting-edge technology. Specializing in Blockchain Development, Full-Stack Web Applications, and AI Automation.',
  keywords: 'blockchain development, web development, AI automation, smart contracts, DeFi, NFT, React, Next.js, Node.js',
  authors: [{ name: 'devbuddy Team' }],
  creator: 'devbuddy',
  publisher: 'devbuddy',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devbuddy.tech',
    siteName: 'devbuddy',
    title: 'devbuddy - Building Digital Excellence',
    description: 'We craft exceptional digital experiences through innovative design and cutting-edge technology.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'devbuddy - Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'devbuddy - Building Digital Excellence',
    description: 'We craft exceptional digital experiences through innovative design and cutting-edge technology.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
