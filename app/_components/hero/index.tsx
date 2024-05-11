'use client'

import get from '@/core/libraries'
import VideoPlayer from '../../../core/components/preview/video'
import Details from '../../../core/components/preview/details'
import Backdrop from '@/core/components/preview/backdrop'
import { useQuery } from 'react-query'
import { Movie } from '@/core/types/data'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['popular'],
    queryFn: async () => await get.movies.popular(),
  })
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const movie = movies?.[0]
  if (!movie) return null
  return (
    <div className='lg:h-screen relative h-96 lg:absolute lg:inset-0 lg:-z-10 overflow-hidden'>
      {!showVideo ? <Backdrop id={movie.id} /> : <VideoPlayer id={movie.id} />}
      <Details id={movie.id} />
      <div className='bg-gradient-to-b from-transparent to-primary absolute inset-0  z-10' />
      <div className='bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10' />
    </div>
  )
}

export default Hero
