// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '@/src/providers/ReactQueryProvider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YesHalal Dashboard',
  description: 'Halal Meat Traceability System',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
