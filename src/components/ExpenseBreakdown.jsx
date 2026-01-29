// import React from 'react'
// import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

// const data = [
//   { name: 'P&A (35%)', value: 35 },
//   { name: 'Talent (25%)', value: 25 },
//   { name: 'Production (20%)', value: 20 },
//   { name: 'Other (10%)', value: 10 },
// ]

// const COLORS = ['#0de3f2', '#bf00ff', '#00ffff', '#666666']

// export default function ExpenseBreakdown() {
//   return (
//     <div className="chart-card large">
//       <div className="chart-header">
//         <p className="chart-title">Expense Breakdown</p>
//         <p className="chart-value">$12.7M Total</p>
//         <div className="chart-subtitle">
//           <span>YTD</span>
//           <span className="positive">↑ +1.2%</span>
//         </div>
//       </div>
//       <div className="expense-breakdown">
//         <ResponsiveContainer width="100%" height={220}>
//           <PieChart>
//             <Pie
//               data={data}
//               cx="40%"
//               cy="50%"
//               innerRadius={60}
//               outerRadius={90}
//               paddingAngle={2}
//               dataKey="value"
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//         <div className="expense-legend">
//           {data.map((item, index) => (
//             <div key={index} className="legend-item">
//               <div className="legend-color" style={{ backgroundColor: COLORS[index] }}></div>
//               <span className="legend-label">{item.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
// ExpenseBreakdown.jsx
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#0de3f2', '#bf00ff', '#00B4D8', '#f59e0b', '#22c55e', '#6b7280']

// Format currency helper
const formatCurrency = (value) => {
  const absValue = Math.abs(value)
  if (absValue >= 1000000) {
    return `AED ${(absValue / 1000000).toFixed(1)}M`
  } else if (absValue >= 1000) {
    return `AED ${(absValue / 1000).toFixed(0)}K`
  }
  return `AED ${value}`
}

export default function ExpenseBreakdown({ isDarkMode = true, expenses = null }) {
  // Theme colors - White for light mode
  const theme = {
    bg: isDarkMode ? '#1a1a1a' : '#ffffff',
    border: isDarkMode ? '#333333' : '#e5e7eb',
    text: isDarkMode ? '#ffffff' : '#1a1a1a',
    textMuted: isDarkMode ? '#999999' : '#6b7280',
  }

  // Default data if no expenses provided
  const defaultData = [
    { name: 'P&A (35%)', value: 35 },
    { name: 'Talent (25%)', value: 25 },
    { name: 'Production (20%)', value: 20 },
    { name: 'Other (20%)', value: 20 },
  ]

  // Calculate data from expenses if provided
  let chartData = defaultData
  let totalExpenses = 12700000

  if (expenses) {
    totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0)
    chartData = [
      { name: 'Production', value: expenses.production || 0 },
      { name: 'Marketing', value: expenses.marketing || 0 },
      { name: 'Transportation', value: expenses.transportation || 0 },
      { name: 'Flights', value: expenses.flights || 0 },
      { name: 'Security', value: expenses.security || 0 },
      { name: 'Legal', value: expenses.legal || 0 },
    ].filter(item => item.value > 0)
  }

  return (
    <div 
      className="rounded-xl p-4 sm:p-6 transition-colors duration-300"
      style={{ 
        backgroundColor: theme.bg, 
        border: `1px solid ${theme.border}`,
        boxShadow: isDarkMode ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="mb-4">
        <p className="text-sm font-medium mb-1" style={{ color: theme.text }}>
          Expense Breakdown
        </p>
        <p className="text-2xl font-bold text-[#0de3f2]">
          {formatCurrency(totalExpenses)} Total
        </p>
        <div className="flex items-center gap-2 text-xs mt-1">
          <span style={{ color: theme.textMuted }}>YTD</span>
          <span className="text-green-500">↑ +1.2%</span>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto">
          {chartData.map((item, index) => {
            const percentage = expenses 
              ? ((item.value / totalExpenses) * 100).toFixed(0)
              : item.value
            return (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm" style={{ color: theme.text }}>
                  {expenses ? `${item.name} (${percentage}%)` : item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}