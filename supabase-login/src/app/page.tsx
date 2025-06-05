import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import AuthRedirect from '@/components/Auth/AuthRedirect'

export default function Home() {
  const { session } = useAuth()

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