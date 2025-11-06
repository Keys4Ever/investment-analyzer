"use client"

import type React from "react"

interface CapitalInputProps {
  value: number
  onChange: (value: number) => void
}

export function CapitalInput({ value, onChange }: CapitalInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number.parseFloat(e.target.value) || 0
    onChange(numValue)
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
        <svg
          className="w-4 h-4 inline-block mr-2 text-green-600 dark:text-green-400"
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
        Capital a Invertir
      </label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min="0"
        step="10000"
        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
        placeholder="Ingrese el monto a invertir"
      />
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{formatNumber(value)}</p>
    </div>
  )
}
