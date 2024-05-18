'use client'

import Image from 'next/image'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Image as PosterImage } from '@/core/types/data'
import { IdProp } from '@/core/types/react'

import NotAvailable from './not-available'

const Poster = ({ id }: IdProp) => {
  const { data: poster, isFetching } = useQuery<PosterImage>({
    queryKey: [KEY.POSTER, id],
    queryFn: async () => await get.movie.poster({ id }),
    enabled: !!id,
  })

  if (isFetching) return <div className="aspect-square w-full h-full bg-gray-500 animate-pulse rounded-md" />
  if (!poster) return <NotAvailable aspectRatio="square" type="poster" />

  return (
    <Image
      alt="Poster"
      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${poster?.file_path}`}
      width={poster.width}
      height={poster.height}
      className="rounded-md"
    />
  )
}

export default Poster
