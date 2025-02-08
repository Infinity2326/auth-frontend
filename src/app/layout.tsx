import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ToggleTheme } from '@/shared/components/ui'
import { MainProvider } from '@/shared/providers'
import '@/shared/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
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
      <body className={`${geistSans.variable} antialiased`}>
        <MainProvider>
          <div className="relative flex flex-col min-h-screen">
            <ToggleTheme />
            <div className="flex justify-center items-center px-4 w-full h-screen">{children}</div>
          </div>
        </MainProvider>
      </body>
    </html>
  )
}
