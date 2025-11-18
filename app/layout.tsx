import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Humza Bin Zahid | Frontend Developer & CleanCode Advocate',
  description: 'Premium portfolio showcasing modern React experiences, 3D animations, and performance optimization. Frontend Developer specializing in clean, scalable code.',
  generator: 'v0.app',
  keywords: ['frontend developer', 'react', 'next.js', 'typescript', 'tailwind css', '3d animations'],
  openGraph: {
    title: 'Humza Bin Zahid | Frontend Developer',
    description: 'Build performant React experiences',
    url: 'https://humza-portfolio.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humza Bin Zahid | Frontend Developer',
    description: 'Premium portfolio with 3D animations and modern design',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
