// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MovieListing from './pages/MovieListing'
// import MovieDashboard from './pages/MovieDashboard'
// import './index.css'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MovieListing />} />
//         <Route path="/movie/:id" element={<MovieDashboard />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App
// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeContext' 
import MovieListing from './pages/MovieListing'
import MovieDashboard from './pages/MovieDashboard'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MovieListing />} />
          <Route path="/movie/:id" element={<MovieDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App