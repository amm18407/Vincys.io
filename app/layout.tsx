import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vincys - Transform Your Business with AI-Powered Solutions',
  description: 'Discover how Vincys leverages cutting-edge AI technology to streamline operations, enhance productivity, and drive business growth. Get started today.',
  keywords: 'AI, business automation, productivity, machine learning, digital transformation',
  authors: [{ name: 'Vincys Team' }],
  icons: {
    icon: '/Group 1.svg',
    shortcut: '/Group 1.svg',
    apple: '/Group 1.svg',
  },
  openGraph: {
    title: 'Vincys - Transform Your Business with AI-Powered Solutions',
    description: 'Discover how Vincys leverages cutting-edge AI technology to streamline operations, enhance productivity, and drive business growth.',
    url: 'https://vincys.io',
    siteName: 'Vincys',
    images: [
      {
        url: 'https://vincys.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vincys - AI-Powered Business Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vincys - Transform Your Business with AI-Powered Solutions',
    description: 'Discover how Vincys leverages cutting-edge AI technology to streamline operations, enhance productivity, and drive business growth.',
    images: ['https://vincys.io/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
