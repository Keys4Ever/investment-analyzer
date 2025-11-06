import { TableRow } from "./ui/table-row"
import type { InversionResultados } from "../lib/calculations"

interface BankResult {
  nombre: string
  tasaPromedio: number
  resultados: InversionResultados
}

interface ResultsTableProps {
  results: BankResult[]
}

export function ResultsTable({ results }: ResultsTableProps) {
  return (
    <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg shadow-md overflow-hidden">
      <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabla Resumen de Resultados</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <TableRow isHeader cells={["Banco", "Tasa Promedio", "Anual", "Trimestral", "Mensual"]} />
          </thead>
          <tbody>
            {results.map((resultado, idx) => (
              <TableRow
                key={idx}
                cells={[
                  resultado.nombre,
                  `${resultado.tasaPromedio.toFixed(2)}%`,
                  `$${resultado.resultados.anual.toLocaleString("es-AR", { maximumFractionDigits: 2 })}`,
                  `$${resultado.resultados.trimestral.toLocaleString("es-AR", { maximumFractionDigits: 2 })}`,
                  `$${resultado.resultados.mensual.toLocaleString("es-AR", { maximumFractionDigits: 2 })}`,
                ]}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
