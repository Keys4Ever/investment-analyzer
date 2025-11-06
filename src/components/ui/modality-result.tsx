import { CAPITAL_INICIAL } from "../../lib/calculations"

interface ModalityResultProps {
  label: string
  value: number
  initialCapital?: number
}

export function ModalityResult({ label, value, initialCapital = CAPITAL_INICIAL }: ModalityResultProps) {
  const gain = value - initialCapital

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{label}</p>
      <div className="flex justify-between items-end gap-4">
        <div>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            ${value.toLocaleString("es-AR", { maximumFractionDigits: 2 })}
          </p>
        </div>
        <p className="text-sm font-semibold text-green-600 dark:text-green-400">
          +${gain.toLocaleString("es-AR", { maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  )
}
