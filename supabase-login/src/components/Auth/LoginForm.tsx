'use client'

import { useEffect, useState } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase/client'

export default function LoginForm() {
    const [redirectUrl, setRedirectUrl] = useState('')

    useEffect(() => {
        setRedirectUrl(`${window.location.origin}/dashboard`)
    }, [])

    return (
        <div className="max-w-md mx-auto mt-10">
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google', 'github']}
                redirectTo={redirectUrl}
            />
        </div>
    )
}