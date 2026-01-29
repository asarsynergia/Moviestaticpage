'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const mockMovies = [
  {
    id: 1,
    title: 'The Last Echo',
    status: 'In Production',
    distribution: 'Theatrical & VOD',
    budget: '$8.5M',
    releaseDate: 'Q2 2025',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Neon Dreams',
    status: 'Post-Production',
    distribution: 'Streaming',
    budget: '$5.2M',
    releaseDate: 'Q1 2025',
    progress: 85,
    image: 'https://images.unsplash.com/photo-1489599849228-ed4dc6900f69?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Forgotten Paths',
    status: 'Development',
    distribution: 'Theatrical',
    budget: '$12.3M',
    releaseDate: 'Q4 2025',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Digital Horizons',
    status: 'Pre-Production',
    distribution: 'Theatrical & VOD',
    budget: '$9.8M',
    releaseDate: 'Q3 2025',
    progress: 55,
    image: 'https://images.unsplash.com/photo-1495535873944-a8437cb4ee44?w=500&h=300&fit=crop',
  },
]

export default function MovieListing() {
  const [selectedStatus, setSelectedStatus] = useState('All')

  const statuses = ['All', 'In Production', 'Post-Production', 'Pre-Production', 'Development']

  const filteredMovies = selectedStatus === 'All'
    ? mockMovies
    : mockMovies.filter(m => m.status === selectedStatus)

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0D0D0D] overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 gap-8">
            
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-white">Movie Distribution</h1>
              <p className="text-[#CCCCCC]">Manage and track all your movie projects</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedStatus === status
                      ? 'bg-[#0de3f2] text-black'
                      : 'bg-[#1A1A1A] text-[#CCCCCC] border border-[#333333] hover:border-[#0de3f2]'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMovies.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movie/${movie.id}`}
                >
                  <div className="group cursor-pointer rounded-xl bg-[#1A1A1A] overflow-hidden border border-[#333333] hover:border-[#0de3f2] transition-all hover:shadow-[0_0_25px_rgba(13,227,242,0.2)]">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-[#0D0D0D]">
                      <img
                        src={movie.image || "/placeholder.svg"}
                        alt={movie.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 bg-[#0de3f2] text-black px-3 py-1 rounded-full text-xs font-bold">
                        {movie.status}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#0de3f2] transition-colors">
                          {movie.title}
                        </h3>
                        <p className="text-sm text-[#CCCCCC] mt-1">{movie.distribution}</p>
                      </div>

                      {/* Progress Bar */}
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-[#CCCCCC]">
                          <span>Progress</span>
                          <span>{movie.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#0de3f2] to-[#00B4D8] transition-all"
                            style={{ width: `${movie.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#333333]">
                        <div className="text-xs text-[#999999]">
                          <p className="text-[#0de3f2] font-semibold">{movie.budget}</p>
                          <p>{movie.releaseDate}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#0de3f2] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredMovies.length === 0 && (
              <div className="flex items-center justify-center py-16">
                <p className="text-[#CCCCCC] text-lg">No movies found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
