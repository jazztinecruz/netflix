'use client'

import { NoSymbolIcon } from '@heroicons/react/24/outline'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Video } from '@/core/types/data'
import { IdProp } from '@/core/types/react'

import Symbol from '../symbol'

const VideoPlayer = ({ id }: IdProp) => {
  const { data: trailer, isFetching } = useQuery<Video>({
    queryKey: [KEY.TRAILER, id],
    queryFn: async () => await get.movie.trailer({ id }),
  })

  if (!trailer)
    return (
      <div className="h-full w-full bg-gray-500 flex items-center justify-center gap-3">
        <Symbol Icon={NoSymbolIcon} />
        <span className='text-lg'>Trailer Not Available</span>
      </div>
    )

  if (isFetching) return <div className="h-full w-full bg-gray-500 animate-pulse">Loading Trailer</div>

  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer.key}/?autoplay=1&mute=1&loop=1&controls=0`}
      title={trailer.name}
      className="h-full w-full scale-[2.3] lg:scale-150 brightness-110 z-50"
      allowFullScreen
    ></iframe>
  )
}

export default VideoPlayer
