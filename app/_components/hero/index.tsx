'use client'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import Backdrop from '@/core/components/preview/backdrop'
import get from '@/core/libraries'
import { Movie } from '@/core/types/data'

import VideoPlayer from '../../../core/components/preview/video'
import Details from './details'

const Hero = () => {
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['popular'],
    queryFn: async () => await get.movies.popular(),
  })
  const [showVideo, setShowVideo] = useState(false)
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0)

  const movie = movies && movies[currentMovieIndex]

  const nextMovie = () => {
    if (currentMovieIndex < 4) {
      setCurrentMovieIndex(currentMovieIndex + 1)
    } else {
      setCurrentMovieIndex(0)
    }
    setShowVideo(false)
    const timer = setTimeout(() => setShowVideo(true), 2000)
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => nextMovie(), 18000)
    return () => clearInterval(interval)
  }, [currentMovieIndex])

  if (!movie) return null

  return (
    <div className="lg:h-fit relative h-96 lg:absolute lg:inset-0 lg:-z-10 overflow-hidden">
      {!showVideo ? <Backdrop id={movie.id} /> : <VideoPlayer id={movie.id} />}
      <Details id={movie.id} />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0  z-10" />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
      <div className="hidden md:block">
        <div className="flex items-center gap-2 z-50 absolute inset-y-2/4 translate-y-2/4 mt-12 right-0">
          {movies.slice(0, 5).map((movie, index) => (
            <div key={movie.id} className="relative transition-all duration-500 ease-in">
              <div className={`h-full w-20 relative rounded-md ${currentMovieIndex === index && 'brightness-125'}`}>
                <Backdrop id={movie.id} />
              </div>
              {currentMovieIndex !== index && <div className="bg-primary/50 absolute inset-0 z-10 rounded-md " />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
