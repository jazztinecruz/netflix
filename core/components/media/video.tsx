'use client'

import { KEY } from '@/core/enums'
import useCustomQuery from '@/core/hook/custom-query'
import get from '@/core/libraries'
import { Video } from '@/core/types/data'
import { IdProp } from '@/core/types/react'

import NotAvailable from './not-available'

const VideoPlayer = ({ id }: IdProp) => {
  const { data: trailer, isFetching } = useCustomQuery<Video>({
    queryKey: [KEY.TRAILER, id],
    queryFn: async () => await get.movie.trailer({ id }),
    enabled: !!id,
  })

  if (isFetching) return <div className="h-full w-full bg-gray-500 animate-pulse">Loading Trailer</div>
  if (!trailer) return <NotAvailable />

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
