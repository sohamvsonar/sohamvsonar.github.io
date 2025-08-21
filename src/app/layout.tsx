import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soham Sonar - Software Engineer',
  description: 'Software engineer specialized in building robust software using Python programming language. Passionate about machine learning and Large Language Models.',
  keywords: ['Soham Sonar', 'Software Engineer', 'Python Developer', 'Machine Learning', 'Large Language Models', 'Portfolio'],
  authors: [{ name: 'Soham Sonar' }],
  creator: 'Soham Sonar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sohamsonar.dev',
    title: 'Soham Sonar - Software Engineer',
    description: 'Software engineer specialized in building robust software using Python programming language. Passionate about machine learning and Large Language Models.',
    siteName: 'Soham Sonar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soham Sonar - Software Engineer',
    description: 'Software engineer specialized in building robust software using Python programming language. Passionate about machine learning and Large Language Models.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}