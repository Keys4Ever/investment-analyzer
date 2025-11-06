"use client"

export interface RateInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RateInput({ label, value, onChange, placeholder = "Ej: 8.5" }: RateInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</label>
      <div className="relative">
        <input
          type="number"
          step="0.01"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">%</span>
      </div>
    </div>
  )
}
