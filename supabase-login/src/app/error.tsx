'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center p-4">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">
                        Ocorreu um erro!
                    </h2>
                    <details className="bg-red-50 p-4 rounded mb-4 max-w-2xl">
                        <summary className="font-medium cursor-pointer">
                            Detalhes do erro
                        </summary>
                        <pre className="mt-2 overflow-auto p-4 bg-white">
                            {error.message}
                        </pre>
                    </details>
                    <button
                        onClick={() => reset()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Tentar novamente
                    </button>
                </div>
            </body>
        </html>
    )
}