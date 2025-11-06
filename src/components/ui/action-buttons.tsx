"use client"

interface ActionButtonsProps {
  onCalculate: () => void
  onReset: () => void
  isLoading?: boolean
}

export function ActionButtons({ onCalculate, onReset, isLoading = false }: ActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={onCalculate}
        disabled={isLoading}
        className="h-12 px-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H6v10h7V7z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2v-2"
          />
        </svg>
        Calcular Inversiones
      </button>
      <button
        onClick={onReset}
        className="h-12 px-8 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-semibold rounded-lg transition-colors shadow-md"
      >
        Limpiar Datos
      </button>
    </div>
  )
}
