export default function RecentActivity() {
    const activities = [
        {
            id: 1,
            user: 'João Silva',
            action: 'adicionou novo cliente',
            target: 'Empresa XYZ',
            date: '2023-10-15T14:30:00Z',
        },
        {
            id: 2,
            user: 'Maria Souza',
            action: 'completou tarefa',
            target: 'Relatório Mensal',
            date: '2023-10-14T09:15:00Z',
        },
        {
            id: 3,
            user: 'Carlos Oliveira',
            action: 'atualizou informações',
            target: 'Projeto Alpha',
            date: '2023-10-13T16:45:00Z',
        },
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Atividades Recentes</h2>
            <ul role="list" className="divide-y divide-gray-200">
                {activities.map((activity) => (
                    <li key={activity.id} className="py-4">
                        <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                                <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                                    {activity.user.charAt(0)}
                                </div>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    {activity.user}{' '}
                                    <span className="text-gray-500 font-normal">
                                        {activity.action}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-500">
                                    {activity.target}
                                </p>
                                <div className="mt-1 text-sm text-gray-500">
                                    {new Date(activity.date).toLocaleDateString('pt-BR', {
                                        day: 'numeric',
                                        month: 'long',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}