'use client'

import LoginForm from '@/components/Auth/LoginForm'
import AuthRedirect from '@/components/Auth/AuthRedirect'

export default function LoginPage() {
    return (
        <>
            <AuthRedirect requireAuth={false} to="/dashboard" />
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-center mb-8">Acesse sua conta</h1>
                <LoginForm />
            </div>
        </>
    )
}