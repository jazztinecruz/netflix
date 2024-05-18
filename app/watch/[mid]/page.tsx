'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Video } from '@/core/types/data'

type Props = {
  params: {
    mid: string
  }
}

const Watch = ({ params }: Props) => {
  const { mid } = params

  const { data: trailer } = useQuery<Video>({
    queryKey: [KEY.TRAILER, mid],
    queryFn: async () => await get.movie.trailer({ id: mid }),
    enabled: !!mid,
  })

  const router = useRouter()

  if (!trailer || !mid) return null

  return (
    <div className="h-screen w-screen relative">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}/?autoplay=1&controls=1`}
        title={trailer.name}
        className="h-full w-full"
        allowFullScreen
      ></iframe>
      <button onClick={() => router.back()} className="absolute top-16 left-10 z-50">
        <ArrowLeftIcon className="w-12 h-12" />
      </button>
      <div className="bg-black absolute top-0 w-full z-10 h-16" />
    </div>
  )
}

export default Watch
