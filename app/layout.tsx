import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Upgrace - Building Digital Excellence',
  description: 'We craft exceptional digital experiences through innovative design and cutting-edge technology. Specializing in Blockchain Development, Full-Stack Web Applications, and AI Automation.',
  keywords: 'blockchain development, web development, AI automation, smart contracts, DeFi, NFT, React, Next.js, Node.js',
  authors: [{ name: 'Upgrace Team' }],
  creator: 'Upgrace',
  publisher: 'Upgrace',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://upgrace.in',
    siteName: 'Upgrace',
    title: 'Upgrace - Building Digital Excellence',
    description: 'We craft exceptional digital experiences through innovative design and cutting-edge technology.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Upgrace - Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upgrace - Building Digital Excellence',
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
