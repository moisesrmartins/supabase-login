interface StatsCardProps {
    title: string
    value: string
    change: string
    isPositive: boolean
}

export default function StatsCard({ title, value, change, isPositive }: StatsCardProps) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-md bg-indigo-600 flex items-center justify-center text-white">
                            {value}
                        </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                {title}
                            </dt>
                            <dd className="flex items-baseline">
                                <div className="text-2xl font-semibold text-gray-900">
                                    {value}
                                </div>
                                <div
                                    className={`ml-2 flex items-baseline text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'
                                        }`}
                                >
                                    {isPositive ? '↑' : '↓'} {change}
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}