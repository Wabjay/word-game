import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './context/AuthProvider'
import LandingNavbar from './navbars/Landing'
import DashboardNavbar from './navbars/Dashboard'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Game Setup',
  description: 'PixelGum Studios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* Define a logic for landing page and dashboard navbar here */}
          <LandingNavbar />
        {/* <DashboardNavbar /> */}
          <main className="w-full mx-auto mt-[60px]">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
