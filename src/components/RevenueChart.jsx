// import React from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// const data = [
//   { month: 'Jan', revenue: 2100000 },
//   { month: 'Feb', revenue: 1800000 },
//   { month: 'Mar', revenue: 2300000 },
//   { month: 'Apr', revenue: 2200000 },
//   { month: 'May', revenue: 2900000 },
//   { month: 'Jun', revenue: 3500000 },
// ]

// export default function RevenueChart() {
//   return (
//     <div className="chart-card large">
//       <div className="chart-header">
//         <p className="chart-title">Revenue Trend</p>
//         <p className="chart-value">$15,800,000</p>
//         <div className="chart-subtitle">
//           <span>Last 6 Months</span>
//           <span className="positive">↑ +5.2%</span>
//         </div>
//       </div>
//       <ResponsiveContainer width="100%" height={220}>
//         <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
//           <XAxis dataKey="month" stroke="#cccccc" style={{ fontSize: '12px' }} />
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
//           <Line
//             type="monotone"
//             dataKey="revenue"
//             stroke="#0de3f2"
//             strokeWidth={3}
//             dot={false}
//             isAnimationActive={true}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }
// RevenueChart.jsx
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', revenue: 2100000 },
  { month: 'Feb', revenue: 1800000 },
  { month: 'Mar', revenue: 2300000 },
  { month: 'Apr', revenue: 2200000 },
  { month: 'May', revenue: 2900000 },
  { month: 'Jun', revenue: 3500000 },
]

export default function RevenueChart({ isDarkMode = true }) {
  // Theme colors - White for light mode
  const theme = {
    bg: isDarkMode ? '#1a1a1a' : '#ffffff',
    border: isDarkMode ? '#333333' : '#e5e7eb',
    text: isDarkMode ? '#ffffff' : '#1a1a1a',
    textMuted: isDarkMode ? '#999999' : '#6b7280',
    gridLine: isDarkMode ? '#333333' : '#e5e7eb',
    tooltipBg: isDarkMode ? '#262626' : '#ffffff',
    dotFill: isDarkMode ? '#1a1a1a' : '#ffffff',
  }

  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0)

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
        <p className="text-sm font-medium mb-1" style={{ color: theme.textMuted }}>
          Revenue Trend
        </p>
        <div className="flex flex-wrap items-baseline gap-2">
          <p className="text-2xl font-bold text-[#0de3f2]">
            AED {(totalRevenue / 1000000).toFixed(1)}M
          </p>
          <div className="text-sm flex items-center gap-1">
            <span style={{ color: theme.textMuted }}>Last 6 Months</span>
            <span className="text-green-500 ml-1">↑ +5.2%</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={theme.gridLine} 
            vertical={false} 
          />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.textMuted, fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme.textMuted, fontSize: 12 }} 
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
            cursor={{ stroke: theme.gridLine, strokeWidth: 1 }}
            formatter={(value) => [`AED ${(value / 1000000).toFixed(1)}M`, 'Revenue']}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#0de3f2"
            strokeWidth={3}
            dot={{ r: 4, fill: theme.dotFill, stroke: '#0de3f2', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#0de3f2' }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Mini Stats */}
      <div className="grid grid-cols-3 gap-2 mt-4 pt-4" style={{ borderTop: `1px solid ${theme.border}` }}>
        <div className="text-center">
          <p className="text-xs" style={{ color: theme.textMuted }}>Highest</p>
          <p className="text-sm font-bold text-green-500">AED 3.5M</p>
        </div>
        <div className="text-center" style={{ borderLeft: `1px solid ${theme.border}`, borderRight: `1px solid ${theme.border}` }}>
          <p className="text-xs" style={{ color: theme.textMuted }}>Lowest</p>
          <p className="text-sm font-bold text-red-500">AED 1.8M</p>
        </div>
        <div className="text-center">
          <p className="text-xs" style={{ color: theme.textMuted }}>Average</p>
          <p className="text-sm font-bold text-[#0de3f2]">AED 2.5M</p>
        </div>
      </div>
    </div>
  )
}