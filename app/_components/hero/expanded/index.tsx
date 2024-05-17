'use client'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import Backdrop from '@/core/components/media/backdrop'
import get from '@/core/libraries'
import { Movie } from '@/core/types/data'

import VideoPlayer from '../../../../core/components/media/video'
import Details from './details'

const MovieExpanded = () => {
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['popular'],
    queryFn: async () => await get.movies.popular(),
  })
  const [showVideo, setShowVideo] = useState(false)

  const movie = movies && movies[0]

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!movie) return null

  return (
    <div className="lg:h-screen relative h-96 lg:absolute lg:inset-0 lg:-z-10 overflow-hidden">
      {!showVideo ? <Backdrop id={movie.id} /> : <VideoPlayer id={movie.id} />}
      <div className="absolute inset-0 z-50">
        <div className="relative h-full grid items-center">
          <Details id={movie.id} />
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0  z-10" />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
    </div>
  )
}

export default MovieExpanded
