// import React from 'react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// const data = [
//   { name: 'Revenue', value: 15800000 },
//   { name: 'Cost', value: 12700000 },
// ]

// export default function CostVsRevenueChart() {
//   return (
//     <div className="chart-card">
//       <div className="chart-header">
//         <p className="chart-title">Cost vs Revenue</p>
//         <p className="chart-value">$3.1M Net</p>
//         <div className="chart-subtitle">
//           <span>YTD</span>
//           <span className="positive">↑ +19.2%</span>
//         </div>
//       </div>
//       <ResponsiveContainer width="100%" height={220}>
//         <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
//           <XAxis dataKey="name" stroke="#cccccc" style={{ fontSize: '12px' }} />
//           <YAxis stroke="#cccccc" style={{ fontSize: '12px' }} />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: '#1a1a1a',
//               border: '1px solid #333333',
//               borderRadius: '8px',
//               color: '#ffffff'
//             }}
//             formatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
//           />
//           <Bar dataKey="value" fill="#0de3f2" />
//           <Bar dataKey="value" fill="#bf00ff" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }
// CostVsRevenueChart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Revenue', value: 15800000, fill: '#0de3f2' },
  { name: 'Cost', value: 12700000, fill: '#bf00ff' },
]

export default function CostVsRevenueChart({ isDarkMode = true }) {
  // Theme colors - White for light mode
  const theme = {
    bg: isDarkMode ? '#1a1a1a' : '#ffffff',
    border: isDarkMode ? '#333333' : '#e5e7eb',
    text: isDarkMode ? '#ffffff' : '#1a1a1a',
    textMuted: isDarkMode ? '#999999' : '#6b7280',
    gridLine: isDarkMode ? '#333333' : '#e5e7eb',
    tooltipBg: isDarkMode ? '#1a1a1a' : '#ffffff',
    cursorFill: isDarkMode ? 'rgba(13, 227, 242, 0.1)' : 'rgba(13, 227, 242, 0.15)',
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
          Cost vs Revenue
        </p>
        <p className="text-2xl font-bold text-[#0de3f2]">AED 3.1M Net</p>
        <div className="flex items-center gap-2 text-xs mt-1">
          <span style={{ color: theme.textMuted }}>YTD</span>
          <span className="text-green-500">↑ +19.2%</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={theme.gridLine} 
            vertical={false} 
          />
          <XAxis 
            dataKey="name" 
            stroke={theme.text} 
            tick={{ fill: theme.text, fontSize: 12 }}
            axisLine={{ stroke: theme.gridLine }}
            tickLine={{ stroke: theme.gridLine }}
          />
          <YAxis 
            stroke={theme.text} 
            tick={{ fill: theme.text, fontSize: 12 }}
            axisLine={{ stroke: theme.gridLine }}
            tickLine={{ stroke: theme.gridLine }}
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.tooltipBg,
              border: `1px solid ${theme.border}`,
              borderRadius: '8px',
              color: theme.text,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            labelStyle={{ color: theme.text, fontWeight: 'bold' }}
            itemStyle={{ color: '#0de3f2' }}
            formatter={(value) => [`AED ${(value / 1000000).toFixed(1)}M`, '']}
            cursor={{ fill: theme.cursorFill }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0de3f2]"></div>
          <span className="text-sm" style={{ color: theme.text }}>Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#bf00ff]"></div>
          <span className="text-sm" style={{ color: theme.text }}>Cost</span>
        </div>
      </div>
    </div>
  )
}