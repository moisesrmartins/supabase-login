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
            {/* Ícone sutil de fundo */}
            <div className={`absolute top-2 right-2 opacity-10 ${config.bgIconColor}`}>
                <Icon className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
            </div>

            <div className="p-3 sm:p-4 relative z-10 flex flex-col h-full">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 truncate">{title}</h3>

                <div className="mt-1 sm:mt-2 flex items-baseline">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate min-w-0">
                        {value}
                    </div>

                    <div className={`ml-1 sm:ml-2 flex items-center text-xs sm:text-sm font-medium ${config.textColor}`}>
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" />
                        {change}
                    </div>
                </div>

                <div className="mt-auto pt-1 sm:pt-2 text-[10px] xs:text-xs text-gray-500">
                    {config.label}
                </div>
            </div>
        </div>
    )
}