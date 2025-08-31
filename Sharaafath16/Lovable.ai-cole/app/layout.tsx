import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[radial-gradient(90rem_90rem_at_50%_-10%,rgba(124,113,255,0.12),transparent)]`}>
        {children}
      </body>
    </html>
  )
}
