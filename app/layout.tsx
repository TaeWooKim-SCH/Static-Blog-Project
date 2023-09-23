import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeWrap from './conponents/common/ThemeWrap'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "TaeWoo's Blog",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#F7F7F7] dark:bg-[#141414] transition-all`}>
        <ThemeWrap>{children}</ThemeWrap>
      </body>
    </html>
  )
}
