import { ModalityResult } from "./ui/modality-result"
import { BankHeader } from "./ui/bank-header"
import type { InversionResultados } from "../lib/calculations"

interface ResultsCardProps {
  bankName: string
  averageRate: number
  results: InversionResultados
  isHighlighted?: boolean
  initialCapital?: number
}

export function ResultsCard({ bankName, averageRate, results, isHighlighted = false, initialCapital }: ResultsCardProps) {
  const borderColor = isHighlighted ? "border-green-500" : "border-slate-200 dark:border-slate-700"
  const bgColor = isHighlighted ? "bg-green-50 dark:bg-green-950" : "bg-white dark:bg-slate-900"

  return (
    <div className={`border-2 ${borderColor} rounded-lg shadow-md overflow-hidden ${bgColor}`}>
      <BankHeader bankName={bankName} averageRate={averageRate} />
      <div className="p-6 space-y-6">
        <ModalityResult label="Inversión Anual" value={results.anual} initialCapital={initialCapital} />
        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
          <ModalityResult label="Inversión Trimestral" value={results.trimestral} initialCapital={initialCapital} />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
          <ModalityResult label="Inversión Mensual" value={results.mensual} initialCapital={initialCapital} />
        </div>
      </div>
    </div>
  )
}
