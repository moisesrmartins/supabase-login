import { User } from '@supabase/supabase-js'

interface UserSummaryProps {
    user: User | null
}

export default function UserSummary({ user }: UserSummaryProps) {
    if (!user) return null

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <div className="flex items-center space-x-4 mb-6">
                <div className="bg-indigo-600 rounded-full h-16 w-16 flex items-center justify-center text-white text-xl font-bold">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {user.user_metadata?.full_name || 'Usuário'}
                    </h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Membro desde:</span>
                    <span className="text-gray-900">
                        {new Date(user.created_at).toLocaleDateString('pt-BR')}
                    </span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-green-600 font-medium">Ativo</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Último login:</span>
                    <span className="text-gray-900">
                        {new Date().toLocaleDateString('pt-BR')}
                    </span>
                </div>
            </div>

            <div className="mt-6">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
                    Ver Perfil Completo
                </button>
            </div>
        </div>
    )
}