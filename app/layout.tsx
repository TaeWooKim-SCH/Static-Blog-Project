import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeWrap from './conponents/common/ThemeWrap'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "taewoo blog",
  description: 'Welcome to taewoo blog',
  openGraph: {
    title: 'taewoo blog',
    description: 'Welcome to taewoo blog',
    images: './favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#F7F7F7] dark:bg-[#141414] transition-all`}>
        <ThemeWrap>{children}</ThemeWrap>
      </body>
    </html>
  )
}
