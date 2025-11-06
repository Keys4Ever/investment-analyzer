interface BankHeaderProps {
    bankName: string
    averageRate?: number
  }
  
  export function BankHeader({ bankName, averageRate }: BankHeaderProps) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-b border-blue-200 dark:border-blue-800 px-6 py-4 rounded-t-lg">
        <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">{bankName}</h3>
        {averageRate !== undefined && (
          <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
            Tasa Promedio: <span className="font-semibold">{averageRate.toFixed(2)}%</span>
          </p>
        )}
      </div>
    )
  }
  