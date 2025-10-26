import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devbuddy - Building Digital Excellence',
  description: 'I craft exceptional digital experiences through innovative design and cutting-edge technology. Specializing in Full-Stack Web Development, React, Next.js, and modern web technologies.',
  keywords: 'blockchain development, web development, AI automation, smart contracts, DeFi, NFT, React, Next.js, Node.js',
  authors: [{ name: 'Ayush More' }],
  creator: 'devbuddy',
  publisher: 'devbuddy',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devbuddy.tech',
    siteName: 'devbuddy',
    title: 'devbuddy - Building Digital Excellence',
    description: 'I craft exceptional digital experiences through innovative design and cutting-edge technology.',
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
    description: 'I craft exceptional digital experiences through innovative design and cutting-edge technology.',
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FPKHCV442W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FPKHCV442W');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
