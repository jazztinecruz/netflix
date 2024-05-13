'use client'

import Image from 'next/image'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Image as BackdropImage } from '@/core/types/data'
import { IdProp } from '@/core/types/react'

const Backdrop = ({ id }: IdProp) => {
  const { data: backdrop, isFetching } = useQuery<BackdropImage>({
    queryKey: [KEY.BACKDROP, id],
    queryFn: async () => await get.movie.backdrop({ id }),
  })

  if (isFetching || !backdrop) return <div className="aspect-video bg-gray-500 animate-pulse rounded-md" />

  return (
    <Image
      alt="Backdrop"
      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${backdrop?.file_path}`}
      fill
      sizes="w-auto h-auto"
      className="rounded-md absolute inset-0"
    />
  )
}

export default Backdrop
