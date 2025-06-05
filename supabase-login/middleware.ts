import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    // Atualiza a sessão se expirada
    await supabase.auth.getSession()

    const { data: { session } } = await supabase.auth.getSession()
    const path = req.nextUrl.pathname

    // Redireciona usuários não autenticados que tentam acessar dashboard
    if (!session && path.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    // Redireciona usuários autenticados que tentam acessar login
    if (session && path === '/login') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return res
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/login'
    ],
}