export const CAPITAL_INICIAL = 850000

export interface InversionResultados {
  anual: number
  trimestral: number
  mensual: number
}

export const calcularPromedioTasas = (tasas: [string, string, string]): number => {
  const valores = tasas.map((t) => Number.parseFloat(t) || 0)
  return valores.reduce((a, b) => a + b, 0) / 3
}

export const calcularInversionAnual = (tasaAnual: number, capital: number = CAPITAL_INICIAL): number => {
  return capital * (1 + tasaAnual / 100)
}

export const calcularInversionTrimestral = (tasaAnual: number, capital: number = CAPITAL_INICIAL): number => {
  const tasaTrimestral = tasaAnual / 4
  let capitalActual = capital
  for (let i = 0; i < 4; i++) {
    capitalActual = capitalActual * (1 + tasaTrimestral / 100)
  }
  return capitalActual
}

export const calcularInversionMensual = (tasaAnual: number, capital: number = CAPITAL_INICIAL): number => {
  const tasaMensual = tasaAnual / 12
  let capitalActual = capital
  for (let i = 0; i < 12; i++) {
    capitalActual = capitalActual * (1 + tasaMensual / 100)
  }
  return capitalActual
}

export interface MejorOpcion {
  banco: string
  modalidad: "anual" | "trimestral" | "mensual"
  cantidad: number
  rendimiento: number
}

export const encontrarMejorOpcion = (
  resultados: Array<{
    nombre: string
    tasaPromedio: number
    resultados: InversionResultados
  }>,
  capital: number = CAPITAL_INICIAL,
): MejorOpcion | null => {
  if (!resultados || resultados.length === 0) return null

  let mejorResultado: MejorOpcion = {
    banco: resultados[0].nombre,
    modalidad: "anual",
    cantidad: resultados[0].resultados.anual,
    rendimiento: resultados[0].resultados.anual - capital,
  }

  resultados.forEach((resultado) => {
    ;(["anual", "trimestral", "mensual"] as const).forEach((modalidad) => {
      if (resultado.resultados[modalidad] > mejorResultado.cantidad) {
        mejorResultado = {
          banco: resultado.nombre,
          modalidad,
          cantidad: resultado.resultados[modalidad],
          rendimiento: resultado.resultados[modalidad] - capital,
        }
      }
    })
  })

  return mejorResultado
}
