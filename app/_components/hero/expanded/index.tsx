'use client'

import { useEffect, useState } from 'react'

import Backdrop from '@/core/components/media/backdrop'
import { MovieProp } from '@/core/types/react'

import VideoPlayer from '../../../../core/components/media/video'
import Details from './details'

const MovieExpanded = ({ movie }: MovieProp) => {
  const [showVideo, setShowVideo] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-96 lg:h-screen relative overflow-hidden lg:absolute lg:inset-0">
      {!showVideo ? <Backdrop id={movie.id} /> : <VideoPlayer id={movie.id} />}
      <div className="absolute top-1/4 z-50 w-full">
        <Details movie={movie} />
      </div>
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0" />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0" />
    </div>
  )
}

export default MovieExpanded
