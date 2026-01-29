'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, DollarSign, Film, TrendingUp } from 'lucide-react'

const movieDetails = {
  1: {
    title: 'The Last Echo',
    status: 'In Production',
    distribution: 'Theatrical & VOD',
    budget: '$8.5M',
    releaseDate: 'Q2 2025',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=400&fit=crop',
    description: 'A gripping thriller about a detective haunted by an unsolved case that resurfaces years later, forcing him to confront his past.',
    director: 'Sarah Chen',
    producer: 'Michael Torres',
    runtime: '128 minutes',
    genre: 'Thriller, Drama',
    castMembers: ['Emma Stone', 'Ryan Gosling', 'Tilda Swinton'],
    timeline: [
      { phase: 'Pre-Production', status: 'Completed', date: 'Jan 2024' },
      { phase: 'Principal Photography', status: 'In Progress', date: 'Current' },
      { phase: 'Post-Production', status: 'Pending', date: 'Q3 2025' },
      { phase: 'Distribution', status: 'Pending', date: 'Q2 2025' },
    ],
  },
  2: {
    title: 'Neon Dreams',
    status: 'Post-Production',
    distribution: 'Streaming',
    budget: '$5.2M',
    releaseDate: 'Q1 2025',
    progress: 85,
    image: 'https://images.unsplash.com/photo-1489599849228-ed4dc6900f69?w=800&h=400&fit=crop',
    description: 'A cyberpunk narrative exploring the intersection of artificial intelligence and human consciousness in a neon-soaked metropolis.',
    director: 'James Liu',
    producer: 'Anna Kowalski',
    runtime: '115 minutes',
    genre: 'Sci-Fi, Action',
    castMembers: ['Timothée Chalamet', 'Zendaya', 'Oscar Isaac'],
    timeline: [
      { phase: 'Pre-Production', status: 'Completed', date: 'Jun 2023' },
      { phase: 'Principal Photography', status: 'Completed', date: 'Feb 2024' },
      { phase: 'Post-Production', status: 'In Progress', date: 'Current' },
      { phase: 'Distribution', status: 'Pending', date: 'Q1 2025' },
    ],
  },
  3: {
    title: 'Forgotten Paths',
    status: 'Development',
    distribution: 'Theatrical',
    budget: '$12.3M',
    releaseDate: 'Q4 2025',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=400&fit=crop',
    description: 'An epic historical drama spanning three continents, following a family\'s journey across generations and continents.',
    director: 'Sofia Rodriguez',
    producer: 'David Zhang',
    runtime: '165 minutes',
    genre: 'Drama, Historical',
    castMembers: ['Cate Blanchett', 'Dev Patel', 'Florence Pugh'],
    timeline: [
      { phase: 'Development', status: 'In Progress', date: 'Current' },
      { phase: 'Pre-Production', status: 'Pending', date: 'Q2 2025' },
      { phase: 'Principal Photography', status: 'Pending', date: 'Q3 2025' },
      { phase: 'Post-Production', status: 'Pending', date: 'Q4 2025' },
    ],
  },
  4: {
    title: 'Digital Horizons',
    status: 'Pre-Production',
    distribution: 'Theatrical & VOD',
    budget: '$9.8M',
    releaseDate: 'Q3 2025',
    progress: 55,
    image: 'https://images.unsplash.com/photo-1495535873944-a8437cb4ee44?w=800&h=400&fit=crop',
    description: 'A cutting-edge documentary examining the future of digital technology and its impact on human society.',
    director: 'Marcus Johnson',
    producer: 'Elena Vasquez',
    runtime: '95 minutes',
    genre: 'Documentary, Tech',
    castMembers: ['Stephen Hawking Archive', 'Elon Musk', 'Sundar Pichai'],
    timeline: [
      { phase: 'Pre-Production', status: 'In Progress', date: 'Current' },
      { phase: 'Principal Photography', status: 'Pending', date: 'Q2 2025' },
      { phase: 'Post-Production', status: 'Pending', date: 'Q3 2025' },
      { phase: 'Distribution', status: 'Pending', date: 'Q3 2025' },
    ],
  },
}

export default function MovieDetail() {
  const params = useParams()
  const movieId = params?.id as string
  const movie = movieDetails[movieId as keyof typeof movieDetails]

  if (!movie) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0D0D0D] overflow-x-hidden">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-[#CCCCCC] text-lg mb-6">Movie not found</p>
            <Link href="/">
              <button className="px-6 py-2 bg-[#0de3f2] text-black rounded-lg font-bold hover:opacity-90 transition-opacity">
                Back to Movies
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0D0D0D] overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 gap-8">
            
            {/* Back Button */}
            <Link href="/">
              <button className="flex items-center gap-2 text-[#0de3f2] hover:opacity-80 transition-opacity font-medium">
                <ArrowLeft className="w-4 h-4" />
                Back to Movies
              </button>
            </Link>

            {/* Hero Section */}
            <div className="rounded-xl overflow-hidden">
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{movie.title}</h1>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#0de3f2] text-black px-4 py-1 rounded-full text-sm font-bold">
                      {movie.status}
                    </span>
                    <span className="bg-[#1A1A1A] text-[#0de3f2] px-4 py-1 rounded-full text-sm font-medium border border-[#0de3f2]">
                      {movie.distribution}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Description */}
                <div className="rounded-xl bg-[#1A1A1A] p-6 border border-[#333333]">
                  <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                  <p className="text-[#CCCCCC] leading-relaxed">{movie.description}</p>
                </div>

                {/* Cast & Crew */}
                <div className="rounded-xl bg-[#1A1A1A] p-6 border border-[#333333]">
                  <h2 className="text-xl font-bold text-white mb-4">Cast & Crew</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[#999999] text-sm mb-1">Director</p>
                      <p className="text-white font-medium">{movie.director}</p>
                    </div>
                    <div>
                      <p className="text-[#999999] text-sm mb-1">Producer</p>
                      <p className="text-white font-medium">{movie.producer}</p>
                    </div>
                    <div>
                      <p className="text-[#999999] text-sm mb-1">Runtime</p>
                      <p className="text-white font-medium">{movie.runtime}</p>
                    </div>
                    <div>
                      <p className="text-[#999999] text-sm mb-1">Genre</p>
                      <p className="text-white font-medium">{movie.genre}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#333333]">
                    <p className="text-[#999999] text-sm mb-3">Cast</p>
                    <div className="flex flex-wrap gap-2">
                      {movie.castMembers.map((member, idx) => (
                        <span key={idx} className="bg-[#0D0D0D] text-[#0de3f2] px-3 py-1 rounded-lg text-sm">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="rounded-xl bg-[#1A1A1A] p-6 border border-[#333333]">
                  <h2 className="text-xl font-bold text-white mb-6">Production Timeline</h2>
                  <div className="space-y-4">
                    {movie.timeline.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <div className={`w-4 h-4 rounded-full ${
                            item.status === 'Completed' ? 'bg-[#0de3f2]' : item.status === 'In Progress' ? 'bg-[#FFA500]' : 'bg-[#333333]'
                          }`} />
                          {idx < movie.timeline.length - 1 && <div className="w-0.5 h-12 bg-[#333333]" />}
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-center justify-between">
                            <p className="text-white font-medium">{item.phase}</p>
                            <span className={`text-xs px-2 py-1 rounded ${
                              item.status === 'Completed' ? 'bg-[#0de3f2] text-black' : item.status === 'In Progress' ? 'bg-[#FFA500] text-black' : 'bg-[#333333] text-[#CCCCCC]'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-[#999999] text-sm mt-1">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                {/* Key Metrics */}
                <div className="rounded-xl bg-[#1A1A1A] p-6 border border-[#333333]">
                  <h2 className="text-xl font-bold text-white mb-4">Key Metrics</h2>
                  <div className="space-y-4">
                    {/* Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-[#CCCCCC]">
                          <TrendingUp className="w-4 h-4 text-[#0de3f2]" />
                          <span>Overall Progress</span>
                        </div>
                        <span className="text-[#0de3f2] font-bold">{movie.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0de3f2] to-[#00B4D8] transition-all"
                          style={{ width: `${movie.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
                      <div className="flex items-center gap-2 text-[#CCCCCC]">
                        <DollarSign className="w-4 h-4 text-[#0de3f2]" />
                        <span>Budget</span>
                      </div>
                      <span className="text-white font-bold">{movie.budget}</span>
                    </div>

                    {/* Release Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
                      <div className="flex items-center gap-2 text-[#CCCCCC]">
                        <Calendar className="w-4 h-4 text-[#0de3f2]" />
                        <span>Release Date</span>
                      </div>
                      <span className="text-white font-bold">{movie.releaseDate}</span>
                    </div>

                    {/* Distribution */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
                      <div className="flex items-center gap-2 text-[#CCCCCC]">
                        <Film className="w-4 h-4 text-[#0de3f2]" />
                        <span>Distribution</span>
                      </div>
                    </div>
                    <p className="text-[#0de3f2] font-medium">{movie.distribution}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="rounded-xl bg-[#1A1A1A] p-6 border border-[#0de3f2] border-opacity-50 shadow-[0_0_20px_rgba(13,227,242,0.1)]">
                  <p className="text-[#999999] text-sm mb-2">Current Status</p>
                  <p className="text-2xl font-bold text-[#0de3f2]">{movie.status}</p>
                  <p className="text-[#CCCCCC] text-sm mt-4">
                    This project is actively being managed and tracked in our distribution system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
