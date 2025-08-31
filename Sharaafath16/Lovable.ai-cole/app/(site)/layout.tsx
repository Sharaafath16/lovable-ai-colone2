
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Cole',
    template: '%s • Cole',
  },
  description: 'A modern marketing site scaffold with Next.js, Tailwind, and Resend contact form.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cole',
    description: 'A modern marketing site scaffold with Next.js, Tailwind, and Resend contact form.',
    url: siteUrl,
    siteName: 'Cole',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Cole',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cole',
    description: 'A modern marketing site scaffold with Next.js, Tailwind, and Resend contact form.',
    images: ['/og-image.svg'],
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
