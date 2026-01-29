// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { ChevronRight, Film, Clapperboard, Video, FileVideo, Pencil, Sun, Moon } from 'lucide-react'

// const mockMovies = [
//   {
//     id: 1,
//     title: 'Lokah Chapter 1: Chandra',
//     status: 'In Production',
//     distribution: 'Theatrical & VOD',
//     budget: 12500000,
//     releaseDate: 'Q2 2025',
//     progress: 75,
//     image: 'https://i.ytimg.com/vi/uwfeRKhr7Io/maxresdefault.jpg',
//     revenue: 28400000,
//     netProfit: 8200000,
//   },
//   {
//     id: 2,
//     title: 'Thudarum',
//     status: 'Post-Production',
//     distribution: 'Theatrical',
//     budget: 8200000,
//     releaseDate: 'Q1 2025',
//     progress: 90,
//     image: 'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/51/1754975720051-i',
//     revenue: 18600000,
//     netProfit: 5400000,
//   },
//   {
//     id: 3,
//     title: 'F1',
//     status: 'In Production',
//     distribution: 'Theatrical & IMAX',
//     budget: 140000000,
//     releaseDate: 'Q3 2025',
//     progress: 65,
//     image: 'https://davidegates.com/wp-content/uploads/2025/07/f1-the-movie-2025-06-28-11-45-08.png',
//     revenue: 0,
//     netProfit: -45000000,
//   },
//   {
//     id: 4,
//     title: 'Kabir Singh',
//     status: 'Pre-Production',
//     distribution: 'Theatrical',
//     budget: 25000000,
//     releaseDate: 'Q4 2025',
//     progress: 25,
//     image: 'https://www.dailyexcelsior.com/wp-content/uploads/2019/07/Kabir-Singh.jpg',
//     revenue: 0,
//     netProfit: 0,
//   },
 
// ]

// // Format currency helper
// const formatCurrency = (value) => {
//   const absValue = Math.abs(value)
//   if (absValue >= 1000000) {
//     return `${value < 0 ? '-' : ''}AED ${(absValue / 1000000).toFixed(1)}M`
//   } else if (absValue >= 1000) {
//     return `${value < 0 ? '-' : ''}AED ${(absValue / 1000).toFixed(0)}K`
//   }
//   return `AED ${value}`
// }

// export default function MovieListing() {
//   const [selectedStatus, setSelectedStatus] = useState('All')
//   const [isDarkMode, setIsDarkMode] = useState(true)

//   const statuses = ['All', 'In Production', 'Post-Production', 'Pre-Production', 'Development']

//   const getStatusCount = (status) => {
//     if (status === 'All') return mockMovies.length
//     return mockMovies.filter(m => m.status === status).length
//   }

//   const statusIcons = {
//     'All': Film,
//     'In Production': Clapperboard,
//     'Post-Production': Video,
//     'Pre-Production': FileVideo,
//     'Development': Pencil,
//   }

//   const statusColors = {
//     'All': 'from-[#0de3f2] to-[#00B4D8]',
//     'In Production': 'from-yellow-400 to-orange-500',
//     'Post-Production': 'from-green-400 to-emerald-500',
//     'Pre-Production': 'from-blue-400 to-indigo-500',
//     'Development': 'from-purple-400 to-pink-500',
//   }

//   const filteredMovies = selectedStatus === 'All'
//     ? mockMovies
//     : mockMovies.filter(m => m.status === selectedStatus)

//   const totalBudget = mockMovies.reduce((sum, movie) => sum + movie.budget, 0)
//   const totalRevenue = mockMovies.reduce((sum, movie) => sum + movie.revenue, 0)
//   const totalProfit = mockMovies.reduce((sum, movie) => sum + movie.netProfit, 0)
//   const avgProgress = Math.round(mockMovies.reduce((sum, movie) => sum + movie.progress, 0) / mockMovies.length)

//   // Theme classes
//   const theme = {
//     bg: isDarkMode ? 'bg-[#0d0d0d]' : 'bg-gray-100',
//     cardBg: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white',
//     cardBorder: isDarkMode ? 'border-[#333333]' : 'border-gray-200',
//     text: isDarkMode ? 'text-white' : 'text-gray-900',
//     textSecondary: isDarkMode ? 'text-[#cccccc]' : 'text-gray-600',
//     textMuted: isDarkMode ? 'text-[#999999]' : 'text-gray-500',
//     innerBg: isDarkMode ? 'bg-[#0d0d0d]' : 'bg-gray-100',
//     hoverBorder: 'hover:border-[#0de3f2]',
//     accent: 'text-[#0de3f2]',
//     filterBg: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white',
//     filterText: isDarkMode ? 'text-[#cccccc]' : 'text-gray-700',
//   }

//   return (
//     <div className={`min-h-screen ${theme.bg} px-4 sm:px-6 lg:px-10 xl:px-16 py-10 transition-colors duration-300`}>
//       <div className="max-w-[1800px] mx-auto w-full">
//         {/* Header with Theme Toggle */}
//         <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className={`text-4xl font-bold ${theme.text} mb-2`}>Movie Distribution Dashboard</h1>
//             <p className={theme.textSecondary}>Manage and track all your movie projects</p>
//           </div>
          
//           {/* Theme Toggle Button */}
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} transition-all self-start sm:self-auto`}
//           >
//             {isDarkMode ? (
//               <>
//                 <Sun className="w-5 h-5 text-yellow-400" />
//                 <span className={theme.textSecondary}>Light Mode</span>
//               </>
//             ) : (
//               <>
//                 <Moon className="w-5 h-5 text-indigo-500" />
//                 <span className={theme.textSecondary}>Dark Mode</span>
//               </>
//             )}
//           </button>
//         </div>

//         {/* Stats Overview Cards */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
//           {statuses.map((status) => {
//             const IconComponent = statusIcons[status]
//             const count = getStatusCount(status)
//             return (
//               <div
//                 key={status}
//                 onClick={() => setSelectedStatus(status)}
//                 className={`cursor-pointer rounded-xl p-4 border transition-all ${
//                   selectedStatus === status
//                     ? `${theme.cardBg} border-[#0de3f2] shadow-[0_0_15px_rgba(13,227,242,0.3)]`
//                     : `${theme.cardBg} ${theme.cardBorder} ${theme.hoverBorder}`
//                 }`}
//               >
//                 <div className="flex items-center justify-between mb-2">
//                   <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${statusColors[status]} flex items-center justify-center`}>
//                     <IconComponent className="w-5 h-5 text-white" />
//                   </div>
//                   <span className={`text-2xl font-bold ${selectedStatus === status ? 'text-[#0de3f2]' : theme.text}`}>
//                     {count}
//                   </span>
//                 </div>
//                 <p className={`text-xs ${theme.textMuted} truncate`}>{status}</p>
//               </div>
//             )
//           })}
          
//           {/* Total Budget Card */}
//           <div className={`rounded-xl p-4 border ${theme.cardBorder} ${theme.cardBg}`}>
//             <div className="flex items-center justify-between mb-2">
//               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">AED</span>
//               </div>
//             </div>
//             <p className="text-lg font-bold text-[#0de3f2]">{formatCurrency(totalBudget)}</p>
//             <p className={`text-xs ${theme.textMuted}`}>Total Budget</p>
//           </div>
//         </div>

//         {/* Summary Bar */}
//         <div className={`bg-gradient-to-r ${isDarkMode ? 'from-[#1a1a1a] to-[#0d0d0d]' : 'from-white to-gray-50'} border ${theme.cardBorder} rounded-xl p-4 sm:p-6 mb-8`}>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
//             <div className="text-center">
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Total Movies</p>
//               <p className="text-[#0de3f2] text-2xl sm:text-3xl font-bold">{mockMovies.length}</p>
//             </div>
//             <div className={`text-center md:border-l ${theme.cardBorder}`}>
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>In Production</p>
//               <p className="text-yellow-400 text-2xl sm:text-3xl font-bold">{getStatusCount('In Production')}</p>
//             </div>
//             <div className={`text-center md:border-l ${theme.cardBorder}`}>
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Total Budget</p>
//               <p className={`${theme.text} text-2xl sm:text-3xl font-bold`}>{formatCurrency(totalBudget)}</p>
//             </div>
//             <div className={`text-center md:border-l ${theme.cardBorder}`}>
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Total Revenue</p>
//               <p className="text-green-400 text-2xl sm:text-3xl font-bold">{formatCurrency(totalRevenue)}</p>
//             </div>
//             <div className={`text-center md:border-l ${theme.cardBorder}`}>
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Net Profit</p>
//               <p className={`text-2xl sm:text-3xl font-bold ${totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
//                 {formatCurrency(totalProfit)}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Filter Buttons with Counts */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           {statuses.map((status) => {
//             const count = getStatusCount(status)
//             return (
//               <button
//                 key={status}
//                 onClick={() => setSelectedStatus(status)}
//                 className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
//                   selectedStatus === status
//                     ? 'bg-[#0de3f2] text-black'
//                     : `${theme.filterBg} ${theme.filterText} border ${theme.cardBorder} ${theme.hoverBorder}`
//                 }`}
//               >
//                 {status}
//                 <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
//                   selectedStatus === status
//                     ? 'bg-black/20 text-black'
//                     : `${isDarkMode ? 'bg-[#333333]' : 'bg-gray-200'} ${theme.filterText}`
//                 }`}>
//                   {count}
//                 </span>
//               </button>
//             )
//           })}
//         </div>

        
        

//         {/* Movies Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredMovies.map((movie) => (
//             <Link 
//               key={movie.id} 
//               to={`/movie/${movie.id}`}
//               className={`group cursor-pointer rounded-xl ${theme.cardBg} overflow-hidden border ${theme.cardBorder} hover:border-[#0de3f2] transition-all hover:shadow-[0_0_25px_rgba(13,227,242,0.2)] block`}
//             >
//               {/* Image */}
//               <div className={`relative h-48 overflow-hidden ${theme.innerBg}`}>
//                 <img
//                   src={movie.image || "/placeholder.svg"}
//                   alt={movie.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   onError={(e) => {
//                     e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
//                   }}
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-[#0d0d0d]' : 'from-white'} via-transparent to-transparent`} />
//                 <div className="absolute top-3 right-3 bg-[#0de3f2] text-black px-3 py-1 rounded-full text-xs font-bold">
//                   {movie.status}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5 flex flex-col gap-4">
//                 <div>
//                   <h3 className={`text-lg font-bold ${theme.text} group-hover:text-[#0de3f2] transition-colors`}>
//                     {movie.title}
//                   </h3>
//                   <p className={`text-sm ${theme.textSecondary} mt-1`}>{movie.distribution}</p>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="flex flex-col gap-2">
//                   <div className={`flex justify-between text-xs ${theme.textSecondary}`}>
//                     <span>Progress</span>
//                     <span>{movie.progress}%</span>
//                   </div>
//                   <div className={`w-full h-2 ${theme.innerBg} rounded-full overflow-hidden`}>
//                     <div
//                       className="h-full bg-gradient-to-r from-[#0de3f2] to-[#00B4D8] transition-all"
//                       style={{ width: `${movie.progress}%` }}
//                     />
//                   </div>
//                 </div>

//                 {/* Revenue & Profit Row */}
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className={`${theme.innerBg} rounded-lg p-2`}>
//                     <p className={`text-xs ${theme.textMuted}`}>Revenue</p>
//                     <p className="text-sm font-semibold text-green-400">
//                       {movie.revenue > 0 ? formatCurrency(movie.revenue) : 'N/A'}
//                     </p>
//                   </div>
//                   <div className={`${theme.innerBg} rounded-lg p-2`}>
//                     <p className={`text-xs ${theme.textMuted}`}>Net Profit</p>
//                     <p className={`text-sm font-semibold ${
//                       movie.netProfit === 0 ? theme.textMuted :
//                       movie.netProfit < 0 ? 'text-red-400' : 'text-[#0de3f2]'
//                     }`}>
//                       {movie.netProfit === 0 && movie.revenue === 0 ? 'N/A' : formatCurrency(movie.netProfit)}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Footer */}
//                 <div className={`flex items-center justify-between pt-2 border-t ${theme.cardBorder}`}>
//                   <div className={`text-xs ${theme.textMuted}`}>
//                     <p className="text-[#0de3f2] font-semibold">{formatCurrency(movie.budget)}</p>
//                     <p>{movie.releaseDate}</p>
//                   </div>
//                   <ChevronRight className="w-4 h-4 text-[#0de3f2] group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredMovies.length === 0 && (
//           <div className="flex flex-col items-center justify-center py-16">
//             <Film className={`w-16 h-16 ${theme.cardBorder} mb-4`} />
//             <p className={`${theme.textSecondary} text-lg`}>No movies found in this category</p>
//             <button
//               onClick={() => setSelectedStatus('All')}
//               className="mt-4 text-[#0de3f2] hover:underline"
//             >
//               View all movies
//             </button>
//           </div>
//         )}

//         {/* Footer Stats */}
//         <div className={`mt-12 ${theme.cardBg} border ${theme.cardBorder} rounded-xl p-6`}>
//           <h3 className={`${theme.text} font-bold text-lg mb-4`}>Portfolio Summary</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>Average Progress</p>
//               <div className="flex items-center gap-2">
//                 <div className={`flex-1 h-2 ${theme.innerBg} rounded-full overflow-hidden`}>
//                   <div
//                     className="h-full bg-gradient-to-r from-[#0de3f2] to-[#00B4D8]"
//                     style={{ width: `${avgProgress}%` }}
//                   />
//                 </div>
//                 <span className="text-[#0de3f2] font-bold text-sm">{avgProgress}%</span>
//               </div>
//             </div>
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>ROI</p>
//               <p className={`text-xl font-bold ${totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
//                 {totalBudget > 0 ? ((totalProfit / totalBudget) * 100).toFixed(1) : 0}%
//               </p>
//             </div>
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>Revenue vs Budget</p>
//               <p className={`text-xl font-bold ${totalRevenue >= totalBudget ? 'text-green-400' : 'text-yellow-400'}`}>
//                 {totalBudget > 0 ? ((totalRevenue / totalBudget) * 100).toFixed(0) : 0}%
//               </p>
//             </div>
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>Profitable Movies</p>
//               <p className="text-xl font-bold text-[#0de3f2]">
//                 {mockMovies.filter(m => m.netProfit > 0).length} / {mockMovies.length}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// src/pages/MovieListing.jsx

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Film, Clapperboard, Video, FileVideo, Pencil, Sun, Moon } from 'lucide-react'
import { useTheme } from '../components/ThemeContext'
import { 
  moviesData, 
  getMoviesByStatus, 
  getStatusCounts, 
  getPortfolioStats, 
  statusList, 
  formatCurrency 
} from '../pages/moviesData'

export default function MovieListing() {
  const [selectedStatus, setSelectedStatus] = useState('All')
  const { isDarkMode, toggleTheme, theme, accentColor } = useTheme()

  const statusCounts = getStatusCounts()
  const portfolioStats = getPortfolioStats()

  const statusIcons = {
    'All': Film,
    'In Production': Clapperboard,
    'Post-Production': Video,
    'Pre-Production': FileVideo,
    'Development': Pencil,
  }

  const statusColors = {
    'All': 'from-[#0de3f2] to-[#00B4D8]',
    'In Production': 'from-yellow-400 to-orange-500',
    'Post-Production': 'from-green-400 to-emerald-500',
    'Pre-Production': 'from-blue-400 to-indigo-500',
    'Development': 'from-purple-400 to-pink-500',
  }

  const filteredMovies = getMoviesByStatus(selectedStatus)

  return (
    <div className={`min-h-screen ${theme.bg} px-4 sm:px-6 lg:px-10 xl:px-16 py-10 transition-colors duration-300`}>
      <div className="max-w-[1800px] mx-auto w-full">
        {/* Header with Theme Toggle */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className={`text-4xl font-bold ${theme.text} mb-2`}>Movie Distribution Dashboard</h1>
            <p className={theme.textSecondary}>Manage and track all your movie projects</p>
          </div>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} transition-all self-start sm:self-auto shadow-md`}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-5 h-5 text-yellow-400" />
                <span className={theme.textSecondary}>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-indigo-500" />
                <span className={theme.textSecondary}>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {statusList.map((status) => {
            const IconComponent = statusIcons[status]
            const count = statusCounts[status]
            return (
              <div
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`cursor-pointer rounded-xl p-4 border transition-all ${
                  selectedStatus === status
                    ? `${theme.cardBg} border-[#0de3f2] shadow-[0_0_15px_rgba(13,227,242,0.3)]`
                    : `${theme.cardBg} ${theme.cardBorder} ${theme.hoverBorder}`
                }`}
                style={selectedStatus === status ? { borderColor: accentColor } : {}}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${statusColors[status]} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-2xl font-bold`} style={{ color: selectedStatus === status ? accentColor : (isDarkMode ? '#fff' : '#111') }}>
                    {count}
                  </span>
                </div>
                <p className={`text-xs ${theme.textMuted} truncate`}>{status}</p>
              </div>
            )
          })}
          
          {/* Total Budget Card */}
          <div className={`rounded-xl p-4 border ${theme.cardBorder} ${theme.cardBg}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AED</span>
              </div>
            </div>
            <p className={`text-lg font-bold ${theme.accent}`}>{formatCurrency(portfolioStats.totalBudget)}</p>
            <p className={`text-xs ${theme.textMuted}`}>Total Budget</p>
          </div>
        </div>

        {/* Summary Bar */}
        <div className={`bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} border ${theme.cardBorder} rounded-xl p-4 sm:p-6 mb-8 shadow-sm`}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            <div className="text-center">
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Total Movies</p>
              <p className={`${theme.accent} text-2xl sm:text-3xl font-bold`}>{portfolioStats.totalMovies}</p>
            </div>
            <div className={`text-center md:border-l ${theme.cardBorder}`}>
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>In Production</p>
              <p className="text-yellow-400 text-2xl sm:text-3xl font-bold">{statusCounts['In Production']}</p>
            </div>
            <div className={`text-center md:border-l ${theme.cardBorder}`}>
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Total Budget</p>
              <p className={`${theme.text} text-2xl sm:text-3xl font-bold`}>{formatCurrency(portfolioStats.totalBudget)}</p>
            </div>
            <div className={`text-center md:border-l ${theme.cardBorder}`}>
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Total Revenue</p>
              <p className="text-green-400 text-2xl sm:text-3xl font-bold">{formatCurrency(portfolioStats.totalRevenue)}</p>
            </div>
            <div className={`text-center md:border-l ${theme.cardBorder}`}>
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Net Profit</p>
              <p className="text-green-400 text-2xl sm:text-3xl font-bold">
                {formatCurrency(portfolioStats.totalProfit)}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons with Counts */}
        <div className="flex flex-wrap gap-3 mb-8">
          {statusList.map((status) => {
            const count = statusCounts[status]
            return (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedStatus === status
                    ? 'text-white'
                    : `${theme.filterBg} ${theme.filterText} border ${theme.cardBorder} ${theme.hoverBorder}`
                }`}
                style={selectedStatus === status ? { backgroundColor: accentColor } : {}}
              >
                {status}
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  selectedStatus === status
                    ? 'bg-black/20 text-white'
                    : `${theme.progressBg} ${theme.filterText}`
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <Link 
              key={movie.id} 
              to={`/movie/${movie.id}`}
              className={`group cursor-pointer rounded-xl ${theme.cardBg} overflow-hidden border ${theme.cardBorder} ${theme.hoverBorder} transition-all hover:shadow-lg block`}
            >
              {/* Image */}
              {/* Image */}
<div className={`relative h-48 overflow-hidden ${theme.innerBg}`}>
  <img
    src={movie.image || "/placeholder.svg"}
    alt={movie.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    onError={(e) => {
      e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
    }}
  />
  <div 
    className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
    style={{
      backgroundImage: isDarkMode 
        ? 'linear-gradient(to top, #0d0d0d 0%, transparent 60%)'
        : 'linear-gradient(to top, rgba(255,255,255,0.3) 0%, transparent 50%)'
    }}
  />
  <div 
    className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs font-bold"
    style={{ backgroundColor: accentColor }}
  >
    {movie.status}
  </div>
</div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <h3 className={`text-lg font-bold ${theme.text} group-hover:${theme.accent} transition-colors`}>
                    {movie.title}
                  </h3>
                  <p className={`text-sm ${theme.textSecondary} mt-1`}>{movie.distribution}</p>
                </div>

                {/* Progress Bar */}
                <div className="flex flex-col gap-2">
                  <div className={`flex justify-between text-xs ${theme.textSecondary}`}>
                    <span>Progress</span>
                    <span>{movie.progress}%</span>
                  </div>
                  <div className={`w-full h-2 ${theme.progressBg} rounded-full overflow-hidden`}>
                    <div
                      className="h-full transition-all"
                      style={{ 
                        width: `${movie.progress}%`,
                        background: `linear-gradient(to right, ${accentColor}, #00B4D8)`
                      }}
                    />
                  </div>
                </div>

                {/* Revenue & Profit Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className={`${theme.innerBg} rounded-lg p-2`}>
                    <p className={`text-xs ${theme.textMuted}`}>Revenue</p>
                    <p className="text-sm font-semibold text-green-400">
                      {movie.revenue > 0 ? formatCurrency(movie.revenue) : 'N/A'}
                    </p>
                  </div>
                  <div className={`${theme.innerBg} rounded-lg p-2`}>
                    <p className={`text-xs ${theme.textMuted}`}>Net Profit</p>
                    <p className={`text-sm font-semibold ${theme.accent}`}>
                      {movie.netProfit > 0 ? formatCurrency(movie.netProfit) : 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className={`flex items-center justify-between pt-2 border-t ${theme.cardBorder}`}>
                  <div className={`text-xs ${theme.textMuted}`}>
                    <p className={`${theme.accent} font-semibold`}>{formatCurrency(movie.budget)}</p>
                    <p>{movie.releaseDate}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform`} style={{ color: accentColor }} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <Film className={`w-16 h-16 ${theme.textMuted} mb-4`} />
            <p className={`${theme.textSecondary} text-lg`}>No movies found in this category</p>
            <button
              onClick={() => setSelectedStatus('All')}
              className={`mt-4 ${theme.accent} hover:underline`}
            >
              View all movies
            </button>
          </div>
        )}

        {/* Footer Stats */}
        <div className={`mt-12 ${theme.cardBg} border ${theme.cardBorder} rounded-xl p-6 shadow-sm`}>
          <h3 className={`${theme.text} font-bold text-lg mb-4`}>Portfolio Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>Average Progress</p>
              <div className="flex items-center gap-2">
                <div className={`flex-1 h-2 ${theme.progressBg} rounded-full overflow-hidden`}>
                  <div
                    className="h-full"
                    style={{ 
                      width: `${portfolioStats.avgProgress}%`,
                      background: `linear-gradient(to right, ${accentColor}, #00B4D8)`
                    }}
                  />
                </div>
                <span className={`${theme.accent} font-bold text-sm`}>{portfolioStats.avgProgress}%</span>
              </div>
            </div>
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>ROI</p>
              <p className="text-xl font-bold text-green-400">
                {portfolioStats.roi.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>Revenue vs Budget</p>
              <p className="text-xl font-bold text-green-400">
                {portfolioStats.revenueVsBudget.toFixed(0)}%
              </p>
            </div>
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>Profitable Movies</p>
              <p className={`text-xl font-bold ${theme.accent}`}>
                {portfolioStats.profitableCount} / {portfolioStats.totalMovies}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}