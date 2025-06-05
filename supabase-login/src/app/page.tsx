'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import AuthRedirect from '@/components/Auth/AuthRedirect'
import { useEffect, useState } from 'react'

export default function Home() {
  const { session } = useAuth()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <>
      <AuthRedirect requireAuth={false} to="/dashboard" />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Sistema</h1>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg"
          >
            Entrar
          </Link>
          <Link
            href="/dashboard"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  )
}