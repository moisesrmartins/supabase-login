import {
    ArrowUpIcon,
    ArrowDownIcon,
    ArrowsRightLeftIcon
} from '@heroicons/react/20/solid'

export type TrendType = 'positive' | 'negative' | 'neutral'

interface StatsCardProps {
    title: string;
    value: string;
    change: string;
    trend: TrendType;
}

export default function StatsCard({ title, value, change, trend }: StatsCardProps) {
    const trendConfig = {
        positive: {
            bgIconColor: 'text-green-500',
            textColor: 'text-green-600',
            icon: ArrowUpIcon,
            label: 'Aumento em relação ao mês passado'
        },
        negative: {
            bgIconColor: 'text-red-500',
            textColor: 'text-red-600',
            icon: ArrowDownIcon,
            label: 'Redução em relação ao mês passado'
        },
        neutral: {
            bgIconColor: 'text-yellow-500',
            textColor: 'text-yellow-600',
            icon: ArrowsRightLeftIcon,
            label: 'Estabilidade em relação ao mês passado'
        }
    };

    const config = trendConfig[trend];
    const Icon = config.icon;

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full relative">
            <div className={`absolute top-3 right-3 opacity-10 ${config.bgIconColor}`}>
                <Icon className="h-14 w-14" />
            </div>

            <div className="p-4 relative z-10 flex flex-col h-full">
                <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>

                <div className="mt-2 flex flex-col">
                    <div className="text-2xl font-bold text-gray-900 truncate min-w-0">
                        {value}
                    </div>

                    <div className={`flex items-center text-sm font-medium ${config.textColor} mt-1`}>
                        <Icon className="h-4 w-4 mr-1" />
                        {change}
                    </div>
                </div>

                <div className="mt-2 text-xs text-gray-500 md:text-[13px]">
                    {config.label}
                </div>
            </div>
        </div>
    )
}