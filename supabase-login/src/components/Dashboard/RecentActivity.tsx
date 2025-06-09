'use client'

import { useState, useEffect } from 'react';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';

interface Activity {
    id: number;
    user: string;
    action: string;
    target: string;
    date: string;
}
interface RecentActivityProps {
    onExpandToggle?: (expanded: boolean) => void;
}

export default function RecentActivity({ onExpandToggle }: RecentActivityProps) {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expanded, setExpanded] = useState(false);

    const mockActivities: Activity[] = [
        {
            id: 1,
            user: 'Luísa Mendes',
            action: 'agendou reunião',
            target: 'Equipe de Desenvolvimento',
            date: new Date().toISOString(),
        },
        {
            id: 2,
            user: 'Pedro Alves',
            action: 'revisou documento',
            target: 'Contrato #123',
            date: new Date().toISOString(),
        },
        {
            id: 3,
            user: 'Ana Costa',
            action: 'enviou proposta',
            target: 'Cliente ABC',
            date: new Date().toISOString(),
        },
        {
            id: 4,
            user: 'Carlos Oliveira',
            action: 'atualizou informações',
            target: 'Projeto Alpha',
            date: new Date().toISOString(),
        },
        {
            id: 5,
            user: 'Maria Souza',
            action: 'completou tarefa',
            target: 'Relatório Mensal',
            date: new Date().toISOString(),
        },
        {
            id: 6,
            user: 'João Silva',
            action: 'adicionou novo cliente',
            target: 'Empresa XYZ',
            date: new Date().toISOString(),
        },
    ];

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                setActivities(mockActivities);
            } catch (err: any) {
                setActivities(mockActivities);
                setError('Erro ao carregar atividades. Mostrando dados de exemplo.');
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    const toggleExpand = () => {
        const newExpanded = !expanded;
        setExpanded(newExpanded);

        if (onExpandToggle) {
            onExpandToggle(newExpanded);
        }
    };

    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Atividades Recentes</h2>
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={`bg-white rounded-xl shadow-sm p-6 transition-all duration-300 ${expanded ? 'w-full' : ''}`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Atividades Recentes</h2>

                <div className="flex items-center space-x-3">
                    <button
                        onClick={toggleExpand}
                        className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                        aria-label={expanded ? "Recolher visualização" : "Expandir visualização"}
                    >
                        {expanded ? (
                            <>
                                <ArrowsPointingInIcon className="h-4 w-4 mr-1" />
                                Recolher
                            </>
                        ) : (
                            <>
                                <ArrowsPointingOutIcon className="h-4 w-4 mr-1" />
                                Expandir
                            </>
                        )}
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                    <p className="text-sm text-yellow-700">{error}</p>
                </div>
            )}

            {!expanded && (
                <ul role="list" className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
                    {activities.map((activity) => (
                        <li
                            key={activity.id}
                            className={`py-4 ${activity.id <= 3 ? 'bg-indigo-50 -mx-2 px-2 rounded' : ''}`}
                        >
                            <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                                        {activity.user.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-gray-900">
                                            {activity.user}
                                        </p>
                                        <div className="text-xs text-gray-500">
                                            {new Date(activity.date).toLocaleDateString('pt-BR', {
                                                day: 'numeric',
                                                month: 'short'
                                            })}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mt-1">
                                        <span className="font-medium text-gray-900">{activity.action}</span> - {activity.target}
                                    </p>

                                    <div className="mt-1 text-xs text-gray-500">
                                        {new Date(activity.date).toLocaleTimeString('pt-BR', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {expanded && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
                        >
                            <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                                        {activity.user.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium text-gray-900">
                                            {activity.user}
                                        </p>
                                        <div className="text-xs text-gray-500">
                                            {new Date(activity.date).toLocaleDateString('pt-BR', {
                                                day: 'numeric',
                                                month: 'short'
                                            })}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mt-1">
                                        <span className="font-medium text-gray-900">{activity.action}</span> - {activity.target}
                                    </p>

                                    <div className="mt-1 text-xs text-gray-500">
                                        {new Date(activity.date).toLocaleTimeString('pt-BR', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}