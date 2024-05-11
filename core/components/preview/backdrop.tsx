'use client'

import { KEY } from '@/core/enums'
import { Image as BackdropImage } from '@/core/types/data'
import { IdProp } from '@/core/types/react'
import { useQuery } from 'react-query'
import get from '@/core/libraries'
import Image from 'next/image'

const Backdrop = ({ id }: IdProp) => {
  const { data: backdrop, isFetching } = useQuery<BackdropImage>({
    queryKey: [KEY.BACKDROP, id],
    queryFn: async () => (await get.movie.images({ id })).backdrop,
  })

  if (isFetching || !backdrop) return <div className='aspect-video bg-gray-500 animate-pulse' />

  return (
    <div className={`relative aspect-${backdrop?.aspect_ratio}`}>
      <Image
        alt='Backdrop'
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${backdrop?.file_path}`}
        width={backdrop?.width}
        height={backdrop?.height}
        className='rounded-md'
      />
    </div>
  )
}

export default Backdrop
