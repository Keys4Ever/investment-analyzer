import { CAPITAL_INICIAL } from "../lib/calculations"

export function PageHeader() {
  return (
    <div className="text-center space-y-3 mb-12">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <svg
            className="w-8 h-8 text-blue-600 dark:text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 text-balance">Analizador de Plazos Fijos</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Compara tasas anuales de los últimos 3 años y determina la mejor opción de inversión de{" "}
        <span className="font-semibold text-slate-900 dark:text-slate-100">
          ${CAPITAL_INICIAL.toLocaleString("es-AR")}
        </span>
      </p>
    </div>
  )
}
