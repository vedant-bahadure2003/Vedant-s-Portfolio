import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vedant Bahadure - Full-Stack Developer',
  description: 'Computer Science student and Full-Stack Developer passionate about creating exceptional digital experiences',
  keywords: 'Vedant Bahadure, Full-Stack Developer, Frontend Developer, React, Next.js, Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}