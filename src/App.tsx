"use client"

import { useState } from "react"
import { BankInputCard } from "./components/bank-input-card"
import { BestOptionDisplay } from "./components/best-option-display"
import { ResultsCard } from "./components/results-card"
import { ResultsTable } from "./components/results-table"
import { ActionButtons } from "./components/ui/action-buttons"
import { PageHeader } from "./components/page-header"
import { CapitalInput } from "./components/capital-input"
import {
  calcularPromedioTasas,
  calcularInversionAnual,
  calcularInversionTrimestral,
  calcularInversionMensual,
  encontrarMejorOpcion,
  CAPITAL_INICIAL,
  type InversionResultados,
} from "./lib/calculations"

interface BankRates {
  nombre: string
  tasas: [string, string, string]
}

interface BankResults {
  nombre: string
  tasaPromedio: number
  resultados: InversionResultados
}

const BANCOS_INICIALES: BankRates[] = [
  { nombre: "Banco Provincia", tasas: ["", "", ""] },
  { nombre: "Banco Nación", tasas: ["", "", ""] },
  { nombre: "Banco Hipotecario", tasas: ["", "", ""] },
]

export function InvestmentAnalyzer() {
  const [bancos, setBancos] = useState<BankRates[]>(BANCOS_INICIALES)
  const [capital, setCapital] = useState(CAPITAL_INICIAL)
  const [resultados, setResultados] = useState<BankResults[] | null>(null)
  const [hasCalculated, setHasCalculated] = useState(false)

  const handleTasaChange = (bancoIndex: number, year: number, value: string) => {
    const newBancos = [...bancos]
    newBancos[bancoIndex].tasas[year] = value
    setBancos(newBancos)
  }

  const handleCalcular = () => {
    const nuevosResultados = bancos.map((banco) => {
      const promedio = calcularPromedioTasas(banco.tasas)
      return {
        nombre: banco.nombre,
        tasaPromedio: promedio,
        resultados: {
          anual: calcularInversionAnual(promedio, capital),
          trimestral: calcularInversionTrimestral(promedio, capital),
          mensual: calcularInversionMensual(promedio, capital),
        },
      }
    })

    setResultados(nuevosResultados)
    setHasCalculated(true)
  }

  const handleReset = () => {
    setBancos(BANCOS_INICIALES)
    setCapital(CAPITAL_INICIAL)
    setResultados(null)
    setHasCalculated(false)
  }

  const mejorOpcion = resultados ? encontrarMejorOpcion(resultados, capital) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <PageHeader />

        <CapitalInput value={capital} onChange={setCapital} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bancos.map((banco, bancoIndex) => (
            <BankInputCard
              key={bancoIndex}
              bankName={banco.nombre}
              rates={banco.tasas}
              onRateChange={(year, value) => handleTasaChange(bancoIndex, year, value)}
            />
          ))}
        </div>

        <ActionButtons onCalculate={handleCalcular} onReset={handleReset} />

        {hasCalculated && resultados && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <BestOptionDisplay option={mejorOpcion} />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H6v10h7V7z" />
                </svg>
                Comparativa Completa
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {resultados.map((resultado, idx) => (
                  <ResultsCard
                    key={idx}
                    bankName={resultado.nombre}
                    averageRate={resultado.tasaPromedio}
                    results={resultado.resultados}
                    isHighlighted={mejorOpcion?.banco === resultado.nombre}
                    initialCapital={capital}
                  />
                ))}
              </div>
            </div>

            <ResultsTable results={resultados} />
          </div>
        )}
      </div>
    </div>
  )
}
