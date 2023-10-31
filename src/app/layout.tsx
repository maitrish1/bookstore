import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ResponsiveDrawer from './Components/Navbar'
import { Box } from '@mui/material'; // Import Box from MUI

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
        <Box display="flex" flexDirection="row">
          <ResponsiveDrawer/>
          <Box flexGrow={1} display="flex" justifyContent="center" alignItems="center">
            {children}
          </Box>
        </Box>
      </body>
    </html>
  )
}
