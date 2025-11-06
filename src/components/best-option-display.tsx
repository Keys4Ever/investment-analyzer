import type { MejorOpcion } from "../lib/calculations"

interface BestOptionDisplayProps {
  option: MejorOpcion | null
}

export function BestOptionDisplay({ option }: BestOptionDisplayProps) {
  if (!option) return null

  const modalityLabels = {
    anual: "Inversión Anual",
    trimestral: "Inversión Trimestral",
    mensual: "Inversión Mensual",
  }

  return (
    <div className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-green-600 dark:bg-green-700 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Opción Más Rentable</h2>
      </div>
      <div className="p-8 space-y-6">
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          <div>
            <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Banco Recomendado</p>
            <p className="text-3xl font-bold text-green-900 dark:text-green-100">{option.banco}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Modalidad</p>
            <p className="text-3xl font-bold text-green-900 dark:text-green-100">{modalityLabels[option.modalidad]}</p>
          </div>
        </div>
        <div className="border-t-2 border-green-300 dark:border-green-700 pt-6">
          <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Monto Final</p>
          <p className="text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
            ${option.cantidad.toLocaleString("es-AR", { maximumFractionDigits: 2 })}
          </p>
          <p className="text-lg font-semibold text-green-700 dark:text-green-300">
            Ganancia:{" "}
            <span className="text-2xl">
              +${option.rendimiento.toLocaleString("es-AR", { maximumFractionDigits: 2 })}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
