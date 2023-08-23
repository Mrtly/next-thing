import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopNav from './components/topNav'
import SideNav from './components/sideNav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Adventures',
  description: 'a Next.js playground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-ubuntu">
        <main>
          <TopNav/>
          <div className="flex">
            <SideNav/>
            <div className="w-full min-w-screen min-h-screen p-10 flex flex-col items-center justify-center">
            {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
