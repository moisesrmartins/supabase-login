import { createServerSupabase } from '@/lib/supabase/supabaseServer'

export default async function ProtectedPage() {
    const supabase = createServerSupabase()

    // Obter sessão do usuário
    const { data: { session } } = await supabase.auth.getSession()

    // Obter dados protegidos
    const { data } = await supabase
        .from('protected_table')
        .select('*')
        .eq('user_id', session?.user.id)

    return (
        <div>
            <h1>Dados Protegidos</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}