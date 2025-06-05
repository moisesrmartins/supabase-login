'use client'

import { useEffect, useState } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase/client'

export default function LoginForm() {
    const [redirectUrl, setRedirectUrl] = useState<string>('')

    useEffect(() => {
        setRedirectUrl(`${window.location.origin}/dashboard`)
    }, [])

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow">
            <Auth
                supabaseClient={supabase}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#6366f1',
                                brandAccent: '#4f46e5',
                            },
                        },
                    },
                }}
                providers={['google', 'github']}
                redirectTo={redirectUrl}
                showLinks={true}
            />
        </div>
    )
}