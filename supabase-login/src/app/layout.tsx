import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import { Suspense } from 'react'
import HydrationFallback from '@/components/HydrationFallback'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supabase Login',
  description: 'Sistema de autenticação com Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Suspense fallback={<HydrationFallback />}>
            {children}
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  )
}