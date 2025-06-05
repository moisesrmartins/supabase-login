'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function AuthRedirect({
    requireAuth = true,
    to
}: {
    requireAuth?: boolean
    to: string
}) {
    const [isMounted, setIsMounted] = useState(false)
    const { session, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (!isMounted || loading) return

        if (requireAuth && !session) {
            router.replace(to)
        }

        if (!requireAuth && session) {
            router.replace(to)
        }
    }, [session, loading, requireAuth, to, router, isMounted])

    return null
}