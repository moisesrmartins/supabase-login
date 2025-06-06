import { PlusIcon, DocumentPlusIcon, UserPlusIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function QuickActions() {
    const actions = [
        {
            title: 'Novo Projeto',
            icon: PlusIcon,
            href: '#',
        },
        {
            title: 'Criar Relatório',
            icon: DocumentPlusIcon,
            href: '#',
        },
        {
            title: 'Adicionar Cliente',
            icon: UserPlusIcon,
            href: '#',
        },
        {
            title: 'Ver Métricas',
            icon: ChartBarIcon,
            href: '#',
        },
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
            <div className="grid grid-cols-2 gap-4">
                {actions.map((action, actionIdx) => (
                    <a
                        key={actionIdx}
                        href={action.href}
                        className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 text-center hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
                    >
                        <action.icon className="h-8 w-8 text-gray-400 group-hover:text-indigo-600 mb-2" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-800">
                            {action.title}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}