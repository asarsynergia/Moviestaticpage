// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Initialize from localStorage, default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('movieDashboardTheme')
    return saved !== null ? JSON.parse(saved) : true
  })

  // Save to localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('movieDashboardTheme', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  // Common accent color based on mode
  const accentColor = isDarkMode ? '#0de3f2' : '#0891b2'

  // Common theme object
  const theme = {
    isDarkMode,
    accentColor,
    bg: isDarkMode ? 'bg-[#0d0d0d]' : 'bg-[#faf9f7]',
    cardBg: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white',
    cardBorder: isDarkMode ? 'border-[#333333]' : 'border-gray-200',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-[#cccccc]' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-[#999999]' : 'text-gray-500',
    innerBg: isDarkMode ? 'bg-[#0d0d0d]' : 'bg-[#f5f4f2]',
    gradientFrom: isDarkMode ? 'from-[#1a1a1a]' : 'from-white',
    gradientTo: isDarkMode ? 'to-[#0d0d0d]' : 'to-[#f5f4f2]',
    accent: isDarkMode ? 'text-[#0de3f2]' : 'text-[#0891b2]',
    accentBg: isDarkMode ? 'bg-[#0de3f2]' : 'bg-[#0891b2]',
    accentHover: isDarkMode ? 'hover:border-[#0de3f2]' : 'hover:border-[#0891b2]',
    accentBgHover: isDarkMode ? 'hover:bg-[#0de3f2]/80' : 'hover:bg-[#0891b2]/80',
    hoverBorder: isDarkMode ? 'hover:border-[#0de3f2]' : 'hover:border-[#0891b2]',
    filterBg: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white',
    filterText: isDarkMode ? 'text-[#cccccc]' : 'text-gray-700',
    progressBg: isDarkMode ? 'bg-[#333333]' : 'bg-gray-200',
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme, accentColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext