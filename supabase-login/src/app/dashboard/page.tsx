'use client'

import { useAuth } from '@/contexts/AuthContext'
import AuthRedirect from '@/components/Auth/AuthRedirect'
import { supabase } from '@/lib/supabase/client'

export default function Dashboard() {
    const { session } = useAuth()

    return (
        <>
            <AuthRedirect requireAuth to="/login" />

            <div className="min-h-screen bg-gray-50">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <button
                            onClick={() => supabase.auth.signOut()}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Sair
                        </button>
                    </div>
                </header>

                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            {session && (
                                <div className="bg-white p-6 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold mb-4">Informações do Usuário</h2>
                                    <p><strong>Email:</strong> {session.user?.email}</p>
                                    <p><strong>ID:</strong> {session.user?.id}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}