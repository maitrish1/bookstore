import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ResponsiveDrawer from './Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookstore',
  description: 'Your reading destination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveDrawer/>
        {children}</body>
    </html>
  )
}
