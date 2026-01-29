
// import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { ChevronLeft, Share2, Download, ArrowUp, ArrowDown, Play, Calendar, MapPin, Film, Sun, Moon } from 'lucide-react'
// import RevenueChart from '../components/RevenueChart'
// import CostVsRevenueChart from '../components/CostVsRevenueChart'
// import ExpenseBreakdown from '../components/ExpenseBreakdown'

// // Format currency helper
// const formatCurrency = (value) => {
//   const absValue = Math.abs(value)
//   if (absValue >= 1000000) {
//     return `${value < 0 ? '-' : ''}AED ${(absValue / 1000000).toFixed(1)}M`
//   } else if (absValue >= 1000) {
//     return `${value < 0 ? '-' : ''}AED ${(absValue / 1000).toFixed(0)}K`
//   }
//   return `AED ${value.toLocaleString()}`
// }

// // Calculate percentage change
// const calcPercentage = (current, previous) => {
//   if (previous === 0) return { value: '0%', isPositive: true }
//   const change = ((current - previous) / previous) * 100
//   return {
//     value: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`,
//     isPositive: change >= 0
//   }
// }

// const mockMovieData = {
//   1: {
//     id: 1,
//     title: 'Lokah Chapter 1: Chandra',
//     distribution: 'Theatrical & VOD',
//     region: 'North America',
//     status: 'In Production',
//     tagline: 'Experience the thrill of a lifetime',
//     releaseDate: 'Q2 2025',
//     director: 'Jiyen Krishnakumar',
//     genre: 'Action, Drama',
//     budget: 12500000,
//     images: [
//       'https://i.ytimg.com/vi/uwfeRKhr7Io/maxresdefault.jpg',
//       'https://i.ytimg.com/vi/u1Pz6OVZ5js/maxresdefault.jpg',
//       'https://media.assettype.com/homegrown%2F2025-09-05%2Ft3ceubz2%2FLokahChapter1ChandraWayfarerFilms.png',
//     ],
//     financials: {
//       totalRevenue: 28400000,
//       previousRevenue: 27000000,
//       theaterSharePercent: 50,
//       producerSharePercent: 30,
//       distributorSharePercent: 20,
//       productionCost: 12500000,
//       marketingCost: 4500000,
//       transportationCost: 1200000,
//       flightsCost: 850000,
//       securityCost: 500000,
//       legalCost: 300000,
//       mgRecovery: 'Recovered',
//       mgRecoveryPercent: 100,
//     }
//   },
//   2: {
//     id: 2,
//     title: 'Thudarum',
//     distribution: 'Theatrical',
//     region: 'India',
//     status: 'Post-Production',
//     tagline: 'The journey continues...',
//     releaseDate: 'Q1 2025',
//     director: 'Tharun Moorthy',
//     genre: 'Drama, Action',
//     budget: 8200000,
//     images: [
//       'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/51/1754975720051-i',
//       'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2025/4/7/thudarum-mohanlal.jpg?w=1120&h=583',
//       'https://images.timesnownews.com/thumb/msid-151590723,width-1280,height-720,resizemode-75/151590723.jpg',
//     ],
//     financials: {
//       totalRevenue: 18600000,
//       previousRevenue: 17850000,
//       theaterSharePercent: 50,
//       producerSharePercent: 30,
//       distributorSharePercent: 20,
//       productionCost: 8200000,
//       marketingCost: 2800000,
//       transportationCost: 600000,
//       flightsCost: 450000,
//       securityCost: 300000,
//       legalCost: 200000,
//       mgRecovery: 'On Track',
//       mgRecoveryPercent: 75,
//     }
//   },
//   3: {
//     id: 3,
//     title: 'F1',
//     distribution: 'Theatrical & IMAX',
//     region: 'Global',
//     status: 'In Production',
//     tagline: 'Speed. Glory. Sacrifice.',
//     releaseDate: 'Q3 2025',
//     director: 'Joseph Kosinski',
//     genre: 'Action, Sports',
//     budget: 140000000,
//     images: [
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzMo35wF95AUNHZGRcarcDfIwztFxws3NU6jnmjkXl0C19Jk2OiK-4RZ79XAhkQI2byrRHvstS2EMxUPhfSfX7QtqOxNkP_L9Z7ovG1M&s=10',
//       'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=1200',
//       'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200',
//     ],
//     financials: {
//       totalRevenue: 0,
//       previousRevenue: 0,
//       theaterSharePercent: 50,
//       producerSharePercent: 30,
//       distributorSharePercent: 20,
//       productionCost: 140000000,
//       marketingCost: 35000000,
//       transportationCost: 5000000,
//       flightsCost: 3500000,
//       securityCost: 2000000,
//       legalCost: 1500000,
//       mgRecovery: 'Pending',
//       mgRecoveryPercent: 0,
//     }
//   },
//   4: {
//     id: 4,
//     title: 'Desert Storm',
//     distribution: 'Theatrical',
//     region: 'Middle East',
//     status: 'Pre-Production',
//     tagline: 'Where legends are born',
//     releaseDate: 'Q4 2025',
//     director: 'Ahmed Al Mansoori',
//     genre: 'Action, Adventure',
//     budget: 25000000,
//     images: [
//       'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800',
//       'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
//       'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800',
//     ],
//     financials: {
//       totalRevenue: 0,
//       previousRevenue: 0,
//       theaterSharePercent: 50,
//       producerSharePercent: 30,
//       distributorSharePercent: 20,
//       productionCost: 25000000,
//       marketingCost: 8000000,
//       transportationCost: 1500000,
//       flightsCost: 1000000,
//       securityCost: 800000,
//       legalCost: 400000,
//       mgRecovery: 'Pending',
//       mgRecoveryPercent: 0,
//     }
//   },
//   5: {
//     id: 5,
//     title: 'Midnight Tales',
//     distribution: 'Streaming',
//     region: 'Global',
//     status: 'Development',
//     tagline: 'Some stories are best told in the dark',
//     releaseDate: 'Q1 2026',
//     director: 'Sarah Chen',
//     genre: 'Horror, Thriller',
//     budget: 5000000,
//     images: [
//       'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
//       'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800',
//       'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800',
//     ],
//     financials: {
//       totalRevenue: 0,
//       previousRevenue: 0,
//       theaterSharePercent: 0,
//       producerSharePercent: 40,
//       distributorSharePercent: 60,
//       productionCost: 5000000,
//       marketingCost: 1500000,
//       transportationCost: 200000,
//       flightsCost: 150000,
//       securityCost: 100000,
//       legalCost: 100000,
//       mgRecovery: 'Pending',
//       mgRecoveryPercent: 0,
//     }
//   }
// }

// // Calculate derived metrics from financials
// const calculateMetrics = (financials) => {
//   const {
//     totalRevenue,
//     previousRevenue,
//     theaterSharePercent,
//     producerSharePercent,
//     distributorSharePercent,
//     productionCost,
//     marketingCost,
//     transportationCost,
//     flightsCost,
//     securityCost,
//     legalCost,
//     mgRecovery,
//     mgRecoveryPercent
//   } = financials

//   const theaterShare = totalRevenue * (theaterSharePercent / 100)
//   const netSettlement = totalRevenue - theaterShare
//   const producerShare = netSettlement * (producerSharePercent / 100)
//   const distributorShare = netSettlement * (distributorSharePercent / 100)
//   const totalExpenses = productionCost + marketingCost + transportationCost + flightsCost + securityCost + legalCost
//   const netProfit = totalRevenue - theaterShare - totalExpenses
//   const grossProfitPercent = totalRevenue > 0 ? ((totalRevenue - theaterShare) / totalRevenue) * 100 : 0

//   // Calculate previous period values for comparison
//   const prevTheaterShare = previousRevenue * (theaterSharePercent / 100)
//   const prevNetSettlement = previousRevenue - prevTheaterShare
//   const prevProducerShare = prevNetSettlement * (producerSharePercent / 100)
//   const prevDistributorShare = prevNetSettlement * (distributorSharePercent / 100)
//   const prevTotalExpenses = totalExpenses * 0.95 // Assume 5% less expenses in previous period
//   const prevNetProfit = previousRevenue - prevTheaterShare - prevTotalExpenses
//   const prevGrossProfitPercent = previousRevenue > 0 ? ((previousRevenue - prevTheaterShare) / previousRevenue) * 100 : 0

//   return {
//     totalRevenue,
//     theaterShare,
//     netSettlement,
//     producerShare,
//     distributorShare,
//     totalExpenses,
//     netProfit,
//     grossProfitPercent,
//     mgRecovery,
//     mgRecoveryPercent,
//     expenses: {
//       production: productionCost,
//       marketing: marketingCost,
//       transportation: transportationCost,
//       flights: flightsCost,
//       security: securityCost,
//       legal: legalCost
//     },
//     changes: {
//       revenue: calcPercentage(totalRevenue, previousRevenue),
//       theaterShare: calcPercentage(theaterShare, prevTheaterShare),
//       producerShare: calcPercentage(producerShare, prevProducerShare),
//       distributorShare: calcPercentage(distributorShare, prevDistributorShare),
//       expenses: calcPercentage(totalExpenses, prevTotalExpenses),
//       netProfit: calcPercentage(netProfit, prevNetProfit),
//       grossProfit: calcPercentage(grossProfitPercent, prevGrossProfitPercent)
//     }
//   }
// }

// const MetricCard = ({ label, value, change, isPositive, isDarkMode }) => {
//   const theme = {
//     cardBg: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white',
//     cardBorder: isDarkMode ? 'border-[#333333]' : 'border-gray-200',
//     text: isDarkMode ? 'text-white' : 'text-gray-900',
//     textMuted: isDarkMode ? 'text-[#999999]' : 'text-gray-500',
//   }

//   return (
//     <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 hover:border-[#0de3f2] transition-all`}>
//       <p className={`text-xs ${theme.textMuted} mb-2`}>{label}</p>
//       <p className={`text-xl sm:text-2xl font-bold ${theme.text} mb-2`}>{value}</p>
//       <p className={`flex items-center gap-1 text-xs ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
//         {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
//         {change}
//       </p>
//     </div>
//   )
// }

// // Auto-Sliding Image Component - Responsive
// const AutoImageSlider = ({ images, title, isDarkMode }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [images.length])

//   const bgColor = isDarkMode ? '#0d0d0d' : '#f3f4f6'

//   return (
//     <>
//       {/* Mobile: Full width image at top */}
//       <div className="block lg:hidden w-full h-[250px] sm:h-[300px] relative overflow-hidden">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               currentIndex === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={image}
//               alt={`${title} - Scene ${index + 1}`}
//               className="w-full h-full object-cover object-center"
//               onError={(e) => {
//                 e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
//               }}
//             />
//           </div>
//         ))}
//         <div 
//           className="absolute inset-0"
//           style={{ background: `linear-gradient(to top, ${bgColor}, transparent)` }}
//         />
//       </div>

//       {/* Desktop: Positioned to the right */}
//       <div className="hidden lg:block absolute right-0 top-0 w-2/3 h-[500px] overflow-hidden">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               currentIndex === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={image}
//               alt={`${title} - Scene ${index + 1}`}
//               className="w-full h-full object-cover object-center"
//               onError={(e) => {
//                 e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
//               }}
//             />
//           </div>
//         ))}
//         <div 
//           className="absolute inset-0"
//           style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
//         />
//       </div>
//     </>
//   )
// }

// export default function MovieDashboard() {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const [isDarkMode, setIsDarkMode] = useState(true)
  
//   const movieData = mockMovieData[id] || mockMovieData[1]
//   const metrics = calculateMetrics(movieData.financials)

//   // Theme classes
//   const theme = {
//     bg: isDarkMode ? 'bg-[#0d0d0d]' : 'bg-gray-100',
//     cardBg: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white',
//     cardBorder: isDarkMode ? 'border-[#333333]' : 'border-gray-200',
//     text: isDarkMode ? 'text-white' : 'text-gray-900',
//     textSecondary: isDarkMode ? 'text-[#cccccc]' : 'text-gray-600',
//     textMuted: isDarkMode ? 'text-[#999999]' : 'text-gray-500',
//     innerBg: isDarkMode ? 'bg-[#0d0d0d]' : 'bg-gray-100',
//     gradientFrom: isDarkMode ? 'from-[#1a1a1a]' : 'from-white',
//     gradientTo: isDarkMode ? 'to-[#0d0d0d]' : 'to-gray-50',
//   }

//   return (
//     <div className={`min-h-screen ${theme.bg} transition-colors duration-300`}>
//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/')}
//         className={`fixed top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-[#0de3f2] hover:text-white transition-colors ${theme.cardBg}/90 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-lg border ${theme.cardBorder} hover:border-[#0de3f2] z-30 text-sm sm:text-base`}
//       >
//         <ChevronLeft size={18} />
//         <span className="hidden sm:inline">Back to Listing</span>
//         <span className="sm:hidden">Back</span>
//       </button>

//       {/* Theme Toggle Button */}
//       <button
//         onClick={() => setIsDarkMode(!isDarkMode)}
//         className={`fixed top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg ${theme.cardBg}/90 backdrop-blur-sm border ${theme.cardBorder} hover:border-[#0de3f2] transition-all z-30`}
//       >
//         {isDarkMode ? (
//           <>
//             <Sun className="w-5 h-5 text-yellow-400" />
//             <span className={`hidden sm:inline ${theme.textSecondary}`}>Light</span>
//           </>
//         ) : (
//           <>
//             <Moon className="w-5 h-5 text-indigo-500" />
//             <span className={`hidden sm:inline ${theme.textSecondary}`}>Dark</span>
//           </>
//         )}
//       </button>

//       {/* Hero Section */}
//       <div className="relative">
//         <AutoImageSlider images={movieData.images} title={movieData.title} isDarkMode={isDarkMode} />

//         {/* Desktop: Background Gradient Overlays */}
//         <div 
//           className="hidden lg:block absolute inset-0 z-10"
//           style={{ 
//             background: isDarkMode 
//               ? 'linear-gradient(to right, #0d0d0d, rgba(13,13,13,0.9), transparent)'
//               : 'linear-gradient(to right, #f3f4f6, rgba(243,244,246,0.9), transparent)'
//           }}
//         />
//         <div 
//           className="hidden lg:block absolute inset-0 z-10"
//           style={{ 
//             background: isDarkMode 
//               ? 'linear-gradient(to top, #0d0d0d, transparent, rgba(13,13,13,0.5))'
//               : 'linear-gradient(to top, #f3f4f6, transparent, rgba(243,244,246,0.5))'
//           }}
//         />

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-24 pb-8 lg:pb-16">
//           <div className="lg:grid lg:grid-cols-2 gap-8 items-center lg:min-h-[400px]">
//             {/* Left Content */}
//             <div className="space-y-4 sm:space-y-6">
//               {/* Status & Genre Tags */}
//               <div className="flex flex-wrap items-center gap-2 sm:gap-3">
//                 <span className="bg-[#0de3f2] text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
//                   {movieData.status}
//                 </span>
//                 <span className={`${theme.cardBg} border ${theme.cardBorder} ${theme.text} px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm`}>
//                   {movieData.genre}
//                 </span>
//               </div>

//               {/* Title */}
//               <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${theme.text} leading-tight`}>
//                 {movieData.title}
//               </h1>

//               {/* Tagline */}
//               <p className={`text-base sm:text-lg lg:text-xl ${theme.textMuted} italic`}>
//                 "{movieData.tagline}"
//               </p>

//               {/* Movie Info */}
//               <div className={`flex flex-wrap items-center gap-3 sm:gap-6 ${theme.textSecondary} text-sm sm:text-base`}>
//                 <div className="flex items-center gap-2">
//                   <Film size={16} className="text-[#0de3f2]" />
//                   <span>{movieData.distribution}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin size={16} className="text-[#0de3f2]" />
//                   <span>{movieData.region}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Calendar size={16} className="text-[#0de3f2]" />
//                   <span>{movieData.releaseDate}</span>
//                 </div>
//               </div>

//               {/* Director & Budget */}
//               <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
//                 <p className={theme.textMuted}>
//                   Directed by <span className={`${theme.text} font-semibold`}>{movieData.director}</span>
//                 </p>
//                 <span className={`${theme.cardBorder} hidden sm:inline`}>•</span>
//                 <p className={theme.textMuted}>
//                   Budget: <span className="text-[#0de3f2] font-semibold">{formatCurrency(movieData.budget)}</span>
//                 </p>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
//                 <button className="flex items-center gap-2 bg-[#0de3f2] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#0de3f2]/80 transition-all text-sm sm:text-base">
//                   <Play size={18} fill="currentColor" />
//                   <span className="hidden sm:inline">Watch Trailer</span>
//                   <span className="sm:hidden">Trailer</span>
//                 </button>
//                 <button className={`flex items-center gap-2 ${theme.cardBg} border ${theme.cardBorder} hover:border-[#0de3f2] ${theme.text} px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base`}>
//                   <Share2 size={16} />
//                   <span className="hidden sm:inline">Share</span>
//                 </button>
//                 <button className={`flex items-center gap-2 ${theme.cardBg} border ${theme.cardBorder} hover:border-[#0de3f2] ${theme.text} px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base`}>
//                   <Download size={16} />
//                   <span className="hidden sm:inline">Download</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
//         {/* Quick Stats Bar */}
//         <div className={`bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} border ${theme.cardBorder} rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 lg:-mt-8 relative z-10`}>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//             <div className="text-center">
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Box Office</p>
//               <p className="text-[#0de3f2] text-lg sm:text-2xl font-bold">
//                 {metrics.totalRevenue > 0 ? formatCurrency(metrics.totalRevenue) : 'N/A'}
//               </p>
//             </div>
//             <div className={`text-center md:border-l ${theme.cardBorder}`}>
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Net Profit</p>
//               <p className={`text-lg sm:text-2xl font-bold ${
//                 metrics.netProfit === 0 && metrics.totalRevenue === 0 
//                   ? theme.textMuted 
//                   : metrics.netProfit >= 0 ? 'text-green-400' : 'text-red-400'
//               }`}>
//                 {metrics.totalRevenue === 0 ? 'N/A' : formatCurrency(metrics.netProfit)}
//               </p>
//             </div>
//             <div className={`text-center md:border-l ${theme.cardBorder}`}>
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Gross Margin</p>
//               <p className={`${theme.text} text-lg sm:text-2xl font-bold`}>
//                 {metrics.totalRevenue > 0 ? `${metrics.grossProfitPercent.toFixed(1)}%` : 'N/A'}
//               </p>
//             </div>
//             <div className={`text-center md:border-l ${theme.cardBorder}`}>
//               <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>MG Status</p>
//               <p className="text-[#0de3f2] text-lg sm:text-2xl font-bold">{metrics.mgRecovery}</p>
//             </div>
//           </div>
//         </div>

//         {/* Metrics Grid */}
//         <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Financial Metrics</h2>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
//           <MetricCard 
//             label="Total Revenue" 
//             value={metrics.totalRevenue > 0 ? formatCurrency(metrics.totalRevenue) : 'N/A'} 
//             change={metrics.changes.revenue.value} 
//             isPositive={metrics.changes.revenue.isPositive} 
//             isDarkMode={isDarkMode}
//           />
//           <MetricCard 
//             label="Theater Share (50%)" 
//             value={metrics.theaterShare > 0 ? formatCurrency(metrics.theaterShare) : 'N/A'} 
//             change={metrics.changes.theaterShare.value} 
//             isPositive={metrics.changes.theaterShare.isPositive} 
//             isDarkMode={isDarkMode}
//           />
//           <MetricCard 
//             label="Producer Share (30%)" 
//             value={metrics.producerShare > 0 ? formatCurrency(metrics.producerShare) : 'N/A'} 
//             change={metrics.changes.producerShare.value} 
//             isPositive={metrics.changes.producerShare.isPositive} 
//             isDarkMode={isDarkMode}
//           />
//           <MetricCard 
//             label="Distributor Share (20%)" 
//             value={metrics.distributorShare > 0 ? formatCurrency(metrics.distributorShare) : 'N/A'} 
//             change={metrics.changes.distributorShare.value} 
//             isPositive={metrics.changes.distributorShare.isPositive} 
//             isDarkMode={isDarkMode}
//           />
//           <MetricCard 
//             label="Gross Profit %" 
//             value={metrics.totalRevenue > 0 ? `${metrics.grossProfitPercent.toFixed(1)}%` : 'N/A'} 
//             change={metrics.changes.grossProfit.value} 
//             isPositive={metrics.changes.grossProfit.isPositive} 
//             isDarkMode={isDarkMode}
//           />
//           <MetricCard 
//             label="Total Expenses" 
//             value={formatCurrency(metrics.totalExpenses)} 
//             change={metrics.changes.expenses.value} 
//             isPositive={!metrics.changes.expenses.isPositive} 
//             isDarkMode={isDarkMode}
//           />
//           <MetricCard 
//             label="Net Profit" 
//             value={metrics.totalRevenue === 0 ? 'N/A' : formatCurrency(metrics.netProfit)} 
//             change={metrics.changes.netProfit.value} 
//             isPositive={metrics.changes.netProfit.isPositive} 
//             isDarkMode={isDarkMode}
//           />
//           <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4`}>
//             <p className={`text-xs ${theme.textMuted} mb-2`}>MG Recovery</p>
//             <p className={`text-xl sm:text-2xl font-bold ${theme.text}`}>{metrics.mgRecovery}</p>
//             <div className={`mt-2 h-2 ${isDarkMode ? 'bg-[#333333]' : 'bg-gray-200'} rounded-full overflow-hidden`}>
//               <div 
//                 className="h-full bg-gradient-to-r from-[#0de3f2] to-green-400 rounded-full transition-all duration-500" 
//                 style={{ width: `${metrics.mgRecoveryPercent}%` }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* ROI Summary */}
//         <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 sm:p-6 mb-6 sm:mb-8`}>
//           <h3 className={`${theme.text} font-bold text-lg mb-4`}>Investment Summary</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>Total Investment</p>
//               <p className="text-xl font-bold text-[#0de3f2]">{formatCurrency(movieData.budget)}</p>
//             </div>
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>Total Expenses</p>
//               <p className={`text-xl font-bold ${theme.text}`}>{formatCurrency(metrics.totalExpenses)}</p>
//             </div>
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>ROI</p>
//               <p className={`text-xl font-bold ${
//                 metrics.totalRevenue === 0 
//                   ? theme.textMuted 
//                   : metrics.netProfit >= 0 ? 'text-green-400' : 'text-red-400'
//               }`}>
//                 {metrics.totalRevenue === 0 
//                   ? 'N/A' 
//                   : `${((metrics.netProfit / movieData.budget) * 100).toFixed(1)}%`
//                 }
//               </p>
//             </div>
//             <div>
//               <p className={`text-xs ${theme.textMuted} mb-1`}>Break-even Progress</p>
//               <div className="flex items-center gap-2">
//                 <div className={`flex-1 h-2 ${isDarkMode ? 'bg-[#333333]' : 'bg-gray-200'} rounded-full overflow-hidden`}>
//                   <div 
//                     className="h-full bg-gradient-to-r from-[#0de3f2] to-green-400 transition-all duration-500" 
//                     style={{ width: `${Math.min((metrics.totalRevenue / metrics.totalExpenses) * 100, 100)}%` }}
//                   />
//                 </div>
//                 <span className="text-[#0de3f2] font-bold text-sm">
//                   {metrics.totalExpenses > 0 
//                     ? `${Math.min((metrics.totalRevenue / metrics.totalExpenses) * 100, 100).toFixed(0)}%`
//                     : '0%'
//                   }
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Visual Analytics Section */}
//         <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Visual Analytics Zone</h2>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
//           <RevenueChart isDarkMode={isDarkMode} />
//           <CostVsRevenueChart isDarkMode={isDarkMode} />
//           <ExpenseBreakdown isDarkMode={isDarkMode} expenses={metrics.expenses} />
//         </div>

//         {/* Financial Breakdown Table */}
//         <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Financial Breakdown</h2>
//         <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl overflow-hidden mb-6 sm:mb-8 overflow-x-auto`}>
//           <table className="w-full min-w-[500px]">
//             <thead className={`${theme.innerBg} border-b ${theme.cardBorder}`}>
//               <tr>
//                 <th className={`text-left px-4 sm:px-6 py-3 ${theme.textSecondary} text-xs sm:text-sm font-semibold`}>Category</th>
//                 <th className={`text-left px-4 sm:px-6 py-3 ${theme.textSecondary} text-xs sm:text-sm font-semibold`}>Amount</th>
//                 <th className={`text-left px-4 sm:px-6 py-3 ${theme.textSecondary} text-xs sm:text-sm font-semibold`}>Notes</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { 
//                   cat: 'Total Gross Collection', 
//                   amt: metrics.totalRevenue > 0 ? formatCurrency(metrics.totalRevenue) : 'N/A', 
//                   note: 'Domestic + International',
//                   isDeduction: false
//                 },
//                 { 
//                   cat: 'Theater Share (50%)', 
//                   amt: metrics.theaterShare > 0 ? `(${formatCurrency(metrics.theaterShare)})` : 'N/A', 
//                   note: '50% of Box Office',
//                   isDeduction: true
//                 },
//                 { 
//                   cat: 'Net Settlement', 
//                   amt: metrics.netSettlement > 0 ? formatCurrency(metrics.netSettlement) : 'N/A', 
//                   note: 'Producer + Distributor Share',
//                   isDeduction: false
//                 },
//                 { 
//                   cat: 'Total Expenses', 
//                   amt: `(${formatCurrency(metrics.totalExpenses)})`, 
//                   note: 'Production, P&A, Operations',
//                   isDeduction: true
//                 },
//               ].map((row, idx) => (
//                 <tr key={idx} className={`border-b ${theme.cardBorder}`}>
//                   <td className={`px-4 sm:px-6 py-3 ${theme.text} text-sm`}>{row.cat}</td>
//                   <td className={`px-4 sm:px-6 py-3 ${row.isDeduction ? 'text-red-400' : 'text-[#0de3f2]'} font-semibold text-sm`}>{row.amt}</td>
//                   <td className={`px-4 sm:px-6 py-3 ${theme.textSecondary} text-sm`}>{row.note}</td>
//                 </tr>
//               ))}
//               <tr className="bg-[#0de3f2]">
//                 <td className="px-4 sm:px-6 py-3 text-black font-bold text-sm">Net Profit / Loss</td>
//                 <td className="px-4 sm:px-6 py-3 text-black font-bold text-sm">
//                   {metrics.totalRevenue === 0 ? 'N/A' : formatCurrency(metrics.netProfit)}
//                 </td>
//                 <td className="px-4 sm:px-6 py-3 text-black font-bold text-sm">
//                   {metrics.totalRevenue === 0 ? 'Pre-Release' : metrics.netProfit >= 0 ? 'In Profit' : 'In Loss'}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Expense Summary */}
//         <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Expense Summary</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8">
//           {[
//             { label: 'Production', amount: metrics.expenses.production },
//             { label: 'Marketing', amount: metrics.expenses.marketing },
//             { label: 'Transportation', amount: metrics.expenses.transportation },
//             { label: 'Flights', amount: metrics.expenses.flights },
//             { label: 'Security', amount: metrics.expenses.security },
//             { label: 'Legal', amount: metrics.expenses.legal },
//           ].map((exp, idx) => (
//             <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-3 sm:p-4 hover:border-[#0de3f2] transition-all`}>
//               <p className={`text-xs sm:text-sm ${theme.textMuted} mb-1 sm:mb-2`}>{exp.label}</p>
//               <p className="text-lg sm:text-xl font-bold text-[#0de3f2]">{formatCurrency(exp.amount)}</p>
//               <p className={`text-xs ${theme.textMuted} mt-1`}>
//                 {((exp.amount / metrics.totalExpenses) * 100).toFixed(1)}% of total
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Activity Timeline */}
//         <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Project Activity Timeline</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
//           {[
//             { title: 'LOI Signing', date: 'Jan 15, 2023', status: 'Completed', color: 'text-green-400', bgColor: '#22c55e' },
//             { title: 'Rights Acquisition', date: 'Feb 01, 2023', status: 'Completed', color: 'text-green-400', bgColor: '#22c55e' },
//             { title: 'Settlements', date: 'Ongoing', status: 'In Progress', color: 'text-yellow-400', bgColor: '#eab308' },
//             { title: 'Final Closure', date: `ETA: ${movieData.releaseDate}`, status: 'Pending', color: 'text-orange-400', bgColor: '#f97316' },
//           ].map((item, idx) => (
//             <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-3 sm:p-4`}>
//               <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mb-2 sm:mb-3" style={{ backgroundColor: item.bgColor }}></div>
//               <p className={`font-semibold ${theme.text} mb-1 text-sm sm:text-base`}>{item.title}</p>
//               <p className={`text-xs ${theme.textMuted} mb-1 sm:mb-2`}>{item.date}</p>
//               <p className={`text-xs font-semibold ${item.color}`}>{item.status}</p>
//             </div>
//           ))}
//         </div>

//         {/* Legal & Compliance & Document Repository */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//           <div>
//             <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Legal & Compliance</h2>
//             <div className="grid gap-3 sm:gap-4">
//               {[
//                 { title: 'Censor Certificate', status: movieData.status === 'In Production' || movieData.status === 'Post-Production' ? 'Approved' : 'Pending' },
//                 { title: 'Satellite Authorization', status: movieData.status === 'Post-Production' ? 'Approved' : 'Pending' },
//                 { title: 'Distribution Rights', status: 'Approved' },
//               ].map((item, idx) => (
//                 <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4`}>
//                   <p className={`font-semibold ${theme.text} mb-2 text-sm sm:text-base`}>{item.title}</p>
//                   <p className={`text-xs font-bold mb-3 inline-block px-2 py-1 rounded ${item.status === 'Approved' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'}`}>
//                     {item.status}
//                   </p>
//                   <button className="w-full bg-[#0de3f2] text-black px-3 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity">
//                     View Document
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Document Repository</h2>
//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               {[
//                 { name: 'Contracts', count: 12 }, 
//                 { name: 'Expense Bills', count: 48 },
//                 { name: 'Legal Documents', count: 8 },
//                 { name: 'Reports', count: 15 }
//               ].map((doc, idx) => (
//                 <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center hover:border-[#0de3f2] transition-all cursor-pointer`}>
//                   <span className="text-3xl sm:text-4xl mb-2">📁</span>
//                   <p className={`${theme.text} font-semibold text-center text-sm sm:text-base`}>{doc.name}</p>
//                   <p className={`text-xs ${theme.textMuted} mt-1`}>{doc.count} files</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// src/pages/MovieDashboard.jsx

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Share2, Download, ArrowUp, Play, Calendar, MapPin, Film, Sun, Moon } from 'lucide-react'
import { useTheme } from '../components/ThemeContext' 
import RevenueChart from '../components/RevenueChart'
import CostVsRevenueChart from '../components/CostVsRevenueChart'
import ExpenseBreakdown from '../components/ExpenseBreakdown'
import { getMovieById, formatCurrency, calculateMetrics } from '../pages/moviesData'

const MetricCard = ({ label, value, change, isPositive, theme, accentColor }) => {
  return (
    <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 ${theme.hoverBorder} transition-all`}>
      <p className={`text-xs ${theme.textMuted} mb-2`}>{label}</p>
      <p className={`text-xl sm:text-2xl font-bold ${theme.text} mb-2`}>{value}</p>
      <p className={`flex items-center gap-1 text-xs ${isPositive ? 'text-green-500' : 'text-amber-500'}`}>
        <ArrowUp size={14} />
        {change}
      </p>
    </div>
  )
}

// Auto-Sliding Image Component
// const AutoImageSlider = ({ images, title, isDarkMode }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [images.length])

//   return (
//     <>
//       {/* Mobile: Full width image at top */}
//       <div className="block lg:hidden w-full h-[250px] sm:h-[300px] relative overflow-hidden">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               currentIndex === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={image}
//               alt={`${title} - Scene ${index + 1}`}
//               className="w-full h-full object-cover object-center"
//               onError={(e) => {
//                 e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
//               }}
//             />
//           </div>
//         ))}
//         <div 
//           className="absolute inset-0"
//           style={{ 
//             background: isDarkMode 
//               ? 'linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.5) 50%, transparent 100%)'
//               : 'linear-gradient(to top, #faf9f7 0%, rgba(250,249,247,0.3) 50%, transparent 100%)'
//           }}
//         />
//       </div>

//       {/* Desktop: Positioned to the right */}
//       <div className="hidden lg:block absolute right-0 top-0 w-2/3 h-[500px] overflow-hidden">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               currentIndex === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={image}
//               alt={`${title} - Scene ${index + 1}`}
//               className="w-full h-full object-cover object-center"
//               onError={(e) => {
//                 e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
//               }}
//             />
//           </div>
//         ))}
//         <div 
//           className="absolute inset-0"
//           style={{ 
//             background: isDarkMode 
//               ? 'linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.7) 30%, transparent 60%)'
//               : 'linear-gradient(to right, #faf9f7 0%, rgba(250,249,247,0.5) 25%, transparent 50%)'
//           }}
//         />
//       </div>
//     </>
//   )
// }
// Auto-Sliding Image Component
const AutoImageSlider = ({ images, title, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      {/* Mobile: Full width image at top */}
      <div className="block lg:hidden w-full h-[250px] sm:h-[300px] relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${title} - Scene ${index + 1}`}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
              }}
            />
          </div>
        ))}
        <div 
          className="absolute inset-0"
          style={{ 
            background: isDarkMode 
              ? 'linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.5) 50%, transparent 100%)'
              : 'linear-gradient(to top, #faf9f7 0%, rgba(250,249,247,0.1) 30%, transparent 60%)'
          }}
        />
      </div>

      {/* Desktop: Positioned to the right */}
      <div className="hidden lg:block absolute right-0 top-0 w-2/3 h-[500px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${title} - Scene ${index + 1}`}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
              }}
            />
          </div>
        ))}
        <div 
          className="absolute inset-0"
          style={{ 
            background: isDarkMode 
              ? 'linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.7) 30%, transparent 60%)'
              : 'linear-gradient(to right, #faf9f7 0%, rgba(250,249,247,0.2) 15%, transparent 40%)'
          }}
        />
      </div>
    </>
  )
}
export default function MovieDashboard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isDarkMode, toggleTheme, theme, accentColor } = useTheme()
  
  // Get movie data from common data file
  const movieData = getMovieById(id)
  const metrics = calculateMetrics(movieData.financials)

  // Get timeline data from movie
  const timelineItems = [
    { 
      title: 'LOI Signing', 
      date: movieData.timeline.loiSigning.date, 
      status: movieData.timeline.loiSigning.status, 
      color: movieData.timeline.loiSigning.status === 'Completed' ? 'text-green-500' : (movieData.timeline.loiSigning.status === 'In Progress' ? (isDarkMode ? 'text-yellow-400' : 'text-yellow-600') : (isDarkMode ? 'text-orange-400' : 'text-orange-600')),
      bgColor: movieData.timeline.loiSigning.status === 'Completed' ? '#22c55e' : (movieData.timeline.loiSigning.status === 'In Progress' ? '#eab308' : '#f97316')
    },
    { 
      title: 'Rights Acquisition', 
      date: movieData.timeline.rightsAcquisition.date, 
      status: movieData.timeline.rightsAcquisition.status, 
      color: movieData.timeline.rightsAcquisition.status === 'Completed' ? 'text-green-500' : (movieData.timeline.rightsAcquisition.status === 'In Progress' ? (isDarkMode ? 'text-yellow-400' : 'text-yellow-600') : (isDarkMode ? 'text-orange-400' : 'text-orange-600')),
      bgColor: movieData.timeline.rightsAcquisition.status === 'Completed' ? '#22c55e' : (movieData.timeline.rightsAcquisition.status === 'In Progress' ? '#eab308' : '#f97316')
    },
    { 
      title: 'Settlements', 
      date: movieData.timeline.settlements.date, 
      status: movieData.timeline.settlements.status, 
      color: movieData.timeline.settlements.status === 'Completed' ? 'text-green-500' : (movieData.timeline.settlements.status === 'In Progress' ? (isDarkMode ? 'text-yellow-400' : 'text-yellow-600') : (isDarkMode ? 'text-orange-400' : 'text-orange-600')),
      bgColor: movieData.timeline.settlements.status === 'Completed' ? '#22c55e' : (movieData.timeline.settlements.status === 'In Progress' ? '#eab308' : '#f97316')
    },
    { 
      title: 'Final Closure', 
      date: `ETA: ${movieData.timeline.finalClosure.date}`, 
      status: movieData.timeline.finalClosure.status, 
      color: movieData.timeline.finalClosure.status === 'Completed' ? 'text-green-500' : (movieData.timeline.finalClosure.status === 'In Progress' ? (isDarkMode ? 'text-yellow-400' : 'text-yellow-600') : (isDarkMode ? 'text-orange-400' : 'text-orange-600')),
      bgColor: movieData.timeline.finalClosure.status === 'Completed' ? '#22c55e' : (movieData.timeline.finalClosure.status === 'In Progress' ? '#eab308' : '#f97316')
    },
  ]

  // Get legal documents from movie
  const legalItems = [
    { title: 'Censor Certificate', status: movieData.legal.censorCertificate },
    { title: 'Satellite Authorization', status: movieData.legal.satelliteAuthorization },
    { title: 'Distribution Rights', status: movieData.legal.distributionRights },
  ]

  // Get document counts from movie
  const documentItems = [
    { name: 'Contracts', count: movieData.documents.contracts }, 
    { name: 'Expense Bills', count: movieData.documents.expenseBills },
    { name: 'Legal Documents', count: movieData.documents.legalDocuments },
    { name: 'Reports', count: movieData.documents.reports }
  ]

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-300`}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className={`fixed top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 ${theme.accent} hover:opacity-80 transition-all ${theme.cardBg}/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-lg border ${theme.cardBorder} ${theme.accentHover} z-30 text-sm sm:text-base shadow-lg`}
      >
        <ChevronLeft size={18} />
        <span className="hidden sm:inline">Back to Listing</span>
        <span className="sm:hidden">Back</span>
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg ${theme.cardBg}/95 backdrop-blur-sm border ${theme.cardBorder} ${theme.accentHover} transition-all z-30 shadow-lg`}
      >
        {isDarkMode ? (
          <>
            <Sun className="w-5 h-5 text-yellow-400" />
            <span className={`hidden sm:inline ${theme.textSecondary}`}>Light</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5 text-indigo-500" />
            <span className={`hidden sm:inline ${theme.textSecondary}`}>Dark</span>
          </>
        )}
      </button>

      {/* Hero Section */}
      <div className="relative">
        <AutoImageSlider images={movieData.images} title={movieData.title} isDarkMode={isDarkMode} />

        {/* Desktop: Background Gradient Overlays */}
       
<div 
  className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
  style={{ 
    background: isDarkMode 
      ? 'linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.85) 35%, rgba(13,13,13,0.4) 50%, transparent 70%)'
      : 'linear-gradient(to right, #faf9f7 0%, rgba(250,249,247,0.4) 20%, rgba(250,249,247,0.1) 35%, transparent 50%)'
  }}
/>
<div 
  className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
  style={{ 
    background: isDarkMode 
      ? 'linear-gradient(to top, #0d0d0d 0%, transparent 40%, rgba(13,13,13,0.3) 100%)'
      : 'linear-gradient(to top, #faf9f7 0%, rgba(250,249,247,0.3) 20%, transparent 40%)'
  }}
/>

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-24 pb-8 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 gap-8 items-center lg:min-h-[400px]">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Status & Genre Tags */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span 
                  className="text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-md"
                  style={{ backgroundColor: accentColor }}
                >
                  {movieData.status}
                </span>
                <span className={`${theme.cardBg} border ${theme.cardBorder} ${theme.text} px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm shadow-sm`}>
                  {movieData.genre}
                </span>
              </div>

              {/* Title */}
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${theme.text} leading-tight`}>
                {movieData.title}
              </h1>

              {/* Tagline */}
              <p className={`text-base sm:text-lg lg:text-xl ${theme.textMuted} italic`}>
                "{movieData.tagline}"
              </p>

              {/* Movie Info */}
              <div className={`flex flex-wrap items-center gap-3 sm:gap-6 ${theme.textSecondary} text-sm sm:text-base`}>
                <div className="flex items-center gap-2">
                  <Film size={16} style={{ color: accentColor }} />
                  <span>{movieData.distribution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} style={{ color: accentColor }} />
                  <span>{movieData.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} style={{ color: accentColor }} />
                  <span>{movieData.releaseDate}</span>
                </div>
              </div>

              {/* Director & Budget */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
                <p className={theme.textMuted}>
                  Directed by <span className={`${theme.text} font-semibold`}>{movieData.director}</span>
                </p>
                <span className={`hidden sm:inline ${theme.textMuted}`}>•</span>
                <p className={theme.textMuted}>
                  Budget: <span className={`${theme.accent} font-semibold`}>{formatCurrency(movieData.budget)}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
                <button 
                  className="flex items-center gap-2 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:opacity-90 transition-all text-sm sm:text-base shadow-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  <Play size={18} fill="currentColor" />
                  <span className="hidden sm:inline">Watch Trailer</span>
                  <span className="sm:hidden">Trailer</span>
                </button>
                <button className={`flex items-center gap-2 ${theme.cardBg} border ${theme.cardBorder} ${theme.accentHover} ${theme.text} px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base shadow-md`}>
                  <Share2 size={16} />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button className={`flex items-center gap-2 ${theme.cardBg} border ${theme.cardBorder} ${theme.accentHover} ${theme.text} px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base shadow-md`}>
                  <Download size={16} />
                  <span className="hidden sm:inline">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        {/* Quick Stats Bar */}
        <div className={`bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} border ${theme.cardBorder} rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 lg:-mt-8 relative z-20 shadow-lg`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Box Office</p>
              <p className={`${theme.accent} text-lg sm:text-2xl font-bold`}>
                {metrics.totalRevenue > 0 ? formatCurrency(metrics.totalRevenue) : 'N/A'}
              </p>
            </div>
            <div className={`text-center md:border-l ${theme.cardBorder}`}>
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Net Profit</p>
              <p className={`text-lg sm:text-2xl font-bold ${
                metrics.totalRevenue === 0 
                  ? theme.textMuted 
                  : 'text-green-500'
              }`}>
                {metrics.totalRevenue === 0 ? 'N/A' : formatCurrency(metrics.netProfit)}
              </p>
            </div>
            <div className={`text-center md:border-l ${theme.cardBorder}`}>
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>Gross Margin</p>
              <p className={`${theme.text} text-lg sm:text-2xl font-bold`}>
                {metrics.totalRevenue > 0 ? `${metrics.grossProfitPercent.toFixed(1)}%` : 'N/A'}
              </p>
            </div>
            <div className={`text-center md:border-l ${theme.cardBorder}`}>
              <p className={`${theme.textMuted} text-xs sm:text-sm mb-1`}>MG Status</p>
              <p className={`${theme.accent} text-lg sm:text-2xl font-bold`}>{metrics.mgRecovery}</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Financial Metrics</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <MetricCard 
            label="Total Revenue" 
            value={metrics.totalRevenue > 0 ? formatCurrency(metrics.totalRevenue) : 'N/A'} 
            change={metrics.changes.revenue.value} 
            isPositive={metrics.changes.revenue.isPositive} 
            theme={theme}
            accentColor={accentColor}
          />
          <MetricCard 
            label="Theater Share (50%)" 
            value={metrics.theaterShare > 0 ? formatCurrency(metrics.theaterShare) : 'N/A'} 
            change={metrics.changes.theaterShare.value} 
            isPositive={metrics.changes.theaterShare.isPositive} 
            theme={theme}
            accentColor={accentColor}
          />
          <MetricCard 
            label="Producer Share (30%)" 
            value={metrics.producerShare > 0 ? formatCurrency(metrics.producerShare) : 'N/A'} 
            change={metrics.changes.producerShare.value} 
            isPositive={metrics.changes.producerShare.isPositive} 
            theme={theme}
            accentColor={accentColor}
          />
          <MetricCard 
            label="Distributor Share (20%)" 
            value={metrics.distributorShare > 0 ? formatCurrency(metrics.distributorShare) : 'N/A'} 
            change={metrics.changes.distributorShare.value} 
            isPositive={metrics.changes.distributorShare.isPositive} 
            theme={theme}
            accentColor={accentColor}
          />
          <MetricCard 
            label="Gross Profit %" 
            value={metrics.totalRevenue > 0 ? `${metrics.grossProfitPercent.toFixed(1)}%` : 'N/A'} 
            change={metrics.changes.grossProfit.value} 
            isPositive={metrics.changes.grossProfit.isPositive} 
            theme={theme}
            accentColor={accentColor}
          />
          <MetricCard 
            label="Total Expenses" 
            value={formatCurrency(metrics.totalExpenses)} 
            change={metrics.changes.expenses.value} 
            isPositive={true} 
            theme={theme}
            accentColor={accentColor}
          />
          <MetricCard 
            label="Net Profit" 
            value={metrics.totalRevenue === 0 ? 'N/A' : formatCurrency(metrics.netProfit)} 
            change={metrics.changes.netProfit.value} 
            isPositive={metrics.changes.netProfit.isPositive} 
            theme={theme}
            accentColor={accentColor}
          />
          <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 shadow-sm`}>
            <p className={`text-xs ${theme.textMuted} mb-2`}>MG Recovery</p>
            <p className={`text-xl sm:text-2xl font-bold ${theme.text}`}>{metrics.mgRecovery}</p>
            <div className={`mt-2 h-2 ${theme.progressBg} rounded-full overflow-hidden`}>
              <div 
                className="h-full rounded-full transition-all duration-500" 
                style={{ 
                  width: `${metrics.mgRecoveryPercent}%`,
                  background: `linear-gradient(to right, ${accentColor}, #22c55e)`
                }}
              />
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm`}>
          <h3 className={`${theme.text} font-bold text-lg mb-4`}>Investment Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>Total Investment</p>
              <p className={`text-xl font-bold ${theme.accent}`}>{formatCurrency(movieData.budget)}</p>
            </div>
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>Total Expenses</p>
              <p className={`text-xl font-bold ${theme.text}`}>{formatCurrency(metrics.totalExpenses)}</p>
            </div>
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>ROI</p>
              <p className={`text-xl font-bold ${
                metrics.totalRevenue === 0 
                  ? theme.textMuted 
                  : 'text-green-500'
              }`}>
                {metrics.totalRevenue === 0 
                  ? 'N/A' 
                  : `${Math.max(0, ((metrics.netProfit / movieData.budget) * 100)).toFixed(1)}%`
                }
              </p>
            </div>
            <div>
              <p className={`text-xs ${theme.textMuted} mb-1`}>Break-even Progress</p>
              <div className="flex items-center gap-2">
                <div className={`flex-1 h-2 ${theme.progressBg} rounded-full overflow-hidden`}>
                  <div 
                    className="h-full transition-all duration-500" 
                    style={{ 
                      width: `${Math.min((metrics.totalRevenue / metrics.totalExpenses) * 100, 100)}%`,
                      background: `linear-gradient(to right, ${accentColor}, #22c55e)`
                    }}
                  />
                </div>
                <span className={`${theme.accent} font-bold text-sm`}>
                  {metrics.totalExpenses > 0 
                    ? `${Math.min((metrics.totalRevenue / metrics.totalExpenses) * 100, 100).toFixed(0)}%`
                    : '0%'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Analytics Section */}
        <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Visual Analytics Zone</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <RevenueChart isDarkMode={isDarkMode} movieData={movieData} />
          <CostVsRevenueChart isDarkMode={isDarkMode} movieData={movieData} />
          <ExpenseBreakdown isDarkMode={isDarkMode} expenses={metrics.expenses} />
        </div>

        {/* Financial Breakdown Table */}
        <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Financial Breakdown</h2>
        <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl overflow-hidden mb-6 sm:mb-8 overflow-x-auto shadow-sm`}>
          <table className="w-full min-w-[500px]">
            <thead className={`${theme.innerBg} border-b ${theme.cardBorder}`}>
              <tr>
                <th className={`text-left px-4 sm:px-6 py-3 ${theme.textSecondary} text-xs sm:text-sm font-semibold`}>Category</th>
                <th className={`text-left px-4 sm:px-6 py-3 ${theme.textSecondary} text-xs sm:text-sm font-semibold`}>Amount</th>
                <th className={`text-left px-4 sm:px-6 py-3 ${theme.textSecondary} text-xs sm:text-sm font-semibold`}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { 
                  cat: 'Total Gross Collection', 
                  amt: metrics.totalRevenue > 0 ? formatCurrency(metrics.totalRevenue) : 'N/A', 
                  note: 'Domestic + International',
                  isAccent: true
                },
                { 
                  cat: 'Theater Share (50%)', 
                  amt: metrics.theaterShare > 0 ? formatCurrency(metrics.theaterShare) : 'N/A', 
                  note: '50% of Box Office',
                  isAccent: false
                },
                { 
                  cat: 'Net Settlement', 
                  amt: metrics.netSettlement > 0 ? formatCurrency(metrics.netSettlement) : 'N/A', 
                  note: 'Producer + Distributor Share',
                  isAccent: true
                },
                { 
                  cat: 'Total Expenses', 
                  amt: formatCurrency(metrics.totalExpenses), 
                  note: 'Production, P&A, Operations',
                  isAccent: false
                },
              ].map((row, idx) => (
                <tr key={idx} className={`border-b ${theme.cardBorder}`}>
                  <td className={`px-4 sm:px-6 py-3 ${theme.text} text-sm`}>{row.cat}</td>
                  <td className={`px-4 sm:px-6 py-3 font-semibold text-sm`} style={{ color: row.isAccent ? accentColor : (isDarkMode ? '#fff' : '#111') }}>{row.amt}</td>
                  <td className={`px-4 sm:px-6 py-3 ${theme.textSecondary} text-sm`}>{row.note}</td>
                </tr>
              ))}
              <tr style={{ backgroundColor: accentColor }}>
                <td className="px-4 sm:px-6 py-3 text-white font-bold text-sm">Net Profit</td>
                <td className="px-4 sm:px-6 py-3 text-white font-bold text-sm">
                  {metrics.totalRevenue === 0 ? 'N/A' : formatCurrency(metrics.netProfit)}
                </td>
                <td className="px-4 sm:px-6 py-3 text-white font-bold text-sm">
                  {metrics.totalRevenue === 0 ? 'Pre-Release' : metrics.isInProfit ? 'In Profit' : 'Building Revenue'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expense Summary */}
        <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Expense Summary</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { label: 'Production', amount: metrics.expenses.production },
            { label: 'Marketing', amount: metrics.expenses.marketing },
            { label: 'Transportation', amount: metrics.expenses.transportation },
            { label: 'Flights', amount: metrics.expenses.flights },
            { label: 'Security', amount: metrics.expenses.security },
            { label: 'Legal', amount: metrics.expenses.legal },
          ].map((exp, idx) => (
            <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-3 sm:p-4 ${theme.accentHover} transition-all shadow-sm`}>
              <p className={`text-xs sm:text-sm ${theme.textMuted} mb-1 sm:mb-2`}>{exp.label}</p>
              <p className={`text-lg sm:text-xl font-bold ${theme.accent}`}>{formatCurrency(exp.amount)}</p>
              <p className={`text-xs ${theme.textMuted} mt-1`}>
                {((exp.amount / metrics.totalExpenses) * 100).toFixed(1)}% of total
              </p>
            </div>
          ))}
        </div>

        {/* Activity Timeline */}
        <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Project Activity Timeline</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {timelineItems.map((item, idx) => (
            <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-3 sm:p-4 shadow-sm`}>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mb-2 sm:mb-3" style={{ backgroundColor: item.bgColor }}></div>
              <p className={`font-semibold ${theme.text} mb-1 text-sm sm:text-base`}>{item.title}</p>
              <p className={`text-xs ${theme.textMuted} mb-1 sm:mb-2`}>{item.date}</p>
              <p className={`text-xs font-semibold ${item.color}`}>{item.status}</p>
            </div>
          ))}
        </div>

        {/* Legal & Compliance & Document Repository */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Legal & Compliance</h2>
            <div className="grid gap-3 sm:gap-4">
              {legalItems.map((item, idx) => (
                <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 shadow-sm`}>
                  <p className={`font-semibold ${theme.text} mb-2 text-sm sm:text-base`}>{item.title}</p>
                  <p className={`text-xs font-bold mb-3 inline-block px-2 py-1 rounded ${item.status === 'Approved' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-600'}`}>
                    {item.status}
                  </p>
                  <button 
                    className="w-full text-white px-3 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: accentColor }}
                  >
                    View Document
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className={`text-xl sm:text-2xl font-bold ${theme.text} mb-4 sm:mb-6`}>Document Repository</h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {documentItems.map((doc, idx) => (
                <div key={idx} className={`${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center ${theme.accentHover} transition-all cursor-pointer shadow-sm`}>
                  <span className="text-3xl sm:text-4xl mb-2">📁</span>
                  <p className={`${theme.text} font-semibold text-center text-sm sm:text-base`}>{doc.name}</p>
                  <p className={`text-xs ${theme.textMuted} mt-1`}>{doc.count} files</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}