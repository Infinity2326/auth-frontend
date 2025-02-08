import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../shared/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    absolute: 'NestJS & Next.js Auth',
    template: '%s | NestJS & Next.js Auth',
  },
  description: 'Authentication with NestJS and Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
