'use client'

import { useAuth } from '@/contexts/AuthContext'
import AuthRedirect from '@/components/Auth/AuthRedirect'
import { supabase } from '@/lib/supabase/supabaseClient'
import StatsCard from '@/components/Dashboard/StatsCard'
import RecentActivity from '@/components/Dashboard/RecentActivity'
import QuickActions from '@/components/Dashboard/QuickActions'
import UserSummary from '@/components/Dashboard/UserSummary'
import { BellIcon } from '@heroicons/react/24/outline'

export default function Dashboard() {
    const { session } = useAuth()

    return (
        <>
            {/* <AuthRedirect requireAuth to="/login" /> */}

            <div className="min-h-screen bg-gray-50">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="bg-indigo-600 w-8 h-8 rounded-md mr-3"></div>
                            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="text-gray-500 hover:text-gray-700">
                                <BellIcon className="h-6 w-6" />
                            </button>

                            <div className="flex items-center">
                                <div className="bg-indigo-600 rounded-full h-8 w-8 flex items-center justify-center text-white mr-2">
                                    {session?.user?.email?.charAt(0).toUpperCase() || 'U'}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    {session?.user?.user_metadata?.full_name || 'Usuário'}
                                </span>
                            </div>

                            <button
                                onClick={() => supabase.auth.signOut()}
                                className="text-gray-500 hover:text-gray-700 text-sm"
                            >
                                Sair
                            </button>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4">
                            <StatsCard
                                title="Total de Clientes"
                                value="1,248"
                                change="+12%"
                                isPositive={true}
                            />
                            <StatsCard
                                title="Conversão Mensal"
                                value="24.3%"
                                change="+2.5%"
                                isPositive={true}
                            />
                            <StatsCard
                                title="Ticket Médio"
                                value="R$ 124,80"
                                change="-1.8%"
                                isPositive={false}
                            />
                            <StatsCard
                                title="Satisfação"
                                value="92%"
                                change="+0.5%"
                                isPositive={true}
                            />
                        </div>
                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
                            <div className="lg:col-span-2">
                                <RecentActivity />
                            </div>
                        </div>
                        <div>
                            <QuickActions />
                            <UserSummary user={session?.user || null} />
                        </div>
                        <div className="px-4 py-6 sm:px-0">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-xl font-semibold mb-4">Bem-vindo à sua Dashboard!</h2>
                                {session && (
                                    <div>
                                        <p><strong>Email:</strong> {session.user?.email}</p>
                                        <p><strong>ID:</strong> {session.user?.id}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}