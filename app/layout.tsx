import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'


export const metadata: Metadata = {
  title: 'TodoNext',
  description: 'Todo application to manage tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen`}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
