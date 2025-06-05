'use client'

import Link from 'next/link'
import ClientOnly from '@/components/ClientOnly'
import AuthRedirect from '@/components/Auth/AuthRedirect'
import HydrationFallback from '@/components/HydrationFallback'
import { Suspense } from 'react'

export default function Home() {
  return (
    <ClientOnly fallback={<HydrationFallback />}>
      <AuthRedirect requireAuth={false} to="/dashboard" />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Sistema</h1>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/dashboard"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </ClientOnly>
  )
}