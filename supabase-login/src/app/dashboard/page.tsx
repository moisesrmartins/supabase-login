'use client'

import { useAuth } from '@/contexts/AuthContext'
import AuthRedirect from '@/components/Auth/AuthRedirect'
import StatsCard from '@/components/Dashboard/StatsCard'
import RecentActivity from '@/components/Dashboard/RecentActivity'
import QuickActions from '@/components/Dashboard/QuickActions'
import UserSummary from '@/components/Dashboard/UserSummary'
import { supabase } from '@/lib/supabase/supabaseClient'
import { useState } from 'react'

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
    )
}

export default function Dashboard() {
    const { session } = useAuth()
    const [activityExpanded, setActivityExpanded] = useState(false)

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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mb-6">
                            <StatsCard
                                title="Total de Clientes"
                                value="1,248"
                                change="+12%"
                                trend="positive"
                            />
                            <StatsCard
                                title="Conversão Mensal"
                                value="24.3%"
                                change="+2.5%"
                                trend="positive"
                            />
                            <StatsCard
                                title="Ticket Médio"
                                value="R$ 124,80"
                                change="-1.8%"
                                trend="negative"
                            />
                            <StatsCard
                                title="Satisfação"
                                value="92%"
                                change="+0.5%"
                                trend="positive"
                            />
                            <StatsCard
                                title="Produtividade"
                                value="78%"
                                change="0%"
                                trend="neutral"
                            />
                        </div>

                        <div className={`flex flex-col gap-6 px-4 ${activityExpanded ? 'lg:flex-col' : 'lg:flex-row'}`}>
                            <div className={`${activityExpanded ? 'w-full' : 'lg:w-2/3'}`}>
                                <RecentActivity
                                    onExpandToggle={(expanded) => setActivityExpanded(expanded)}
                                />
                            </div>

                            <div className={`${activityExpanded ? 'w-full mt-6' : 'lg:w-1/3'} space-y-6`}>
                                <QuickActions />
                                <UserSummary user={session?.user || null} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}