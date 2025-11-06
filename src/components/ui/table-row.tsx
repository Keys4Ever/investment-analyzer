interface TableRowProps {
    isHeader?: boolean
    cells: string[]
  }
  
  export function TableRow({ isHeader = false, cells }: TableRowProps) {
    if (isHeader) {
      return (
        <tr className="bg-slate-100 dark:bg-slate-800 border-b-2 border-slate-300 dark:border-slate-600">
          {cells.map((cell, idx) => (
            <th key={idx} className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 text-left">
              {cell}
            </th>
          ))}
        </tr>
      )
    }
  
    return (
      <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
        {cells.map((cell, idx) => (
          <td key={idx} className="px-4 py-4 text-slate-900 dark:text-slate-100">
            {cell}
          </td>
        ))}
      </tr>
    )
  }
  