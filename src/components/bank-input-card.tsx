"use client"

import { RateInput } from "./ui/rate-input"
import { BankHeader } from "./ui/bank-header"

interface BankInputCardProps {
  bankName: string
  rates: [string, string, string]
  onRateChange: (year: number, value: string) => void
}

export function BankInputCard({ bankName, rates, onRateChange }: BankInputCardProps) {
  return (
    <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <BankHeader bankName={bankName} />
      <div className="p-6 space-y-4 bg-white dark:bg-slate-900">
        {[0, 1, 2].map((year) => (
          <RateInput
            key={year}
            label={`Año ${year + 1}`}
            value={rates[year]}
            onChange={(value) => onRateChange(year, value)}
          />
        ))}
      </div>
    </div>
  )
}
