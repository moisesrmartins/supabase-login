'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

interface AuthRedirectProps {
    requireAuth?: boolean
    to: string
}

export default function AuthRedirect({
    requireAuth = true,
    to
}: AuthRedirectProps) {
    const { session, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (loading) return

        if (requireAuth && !session) {
            router.replace(to)
        }

        if (!requireAuth && session) {
            router.replace(to)
        }
    }, [session, loading, requireAuth, to, router])

    return null
}