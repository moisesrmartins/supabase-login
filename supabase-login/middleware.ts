import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    // Proteger rotas do dashboard
    if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    // Redirecionar usuários autenticados para longe do login
    if (session && req.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    await supabase.auth.getSession()

    return res
}

export const config = {
    matcher: ['/dashboard/:path*', '/login'],
}