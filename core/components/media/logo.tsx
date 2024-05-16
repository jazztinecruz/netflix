'use client'

import Image from 'next/image'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Image as LogoImage } from '@/core/types/data'
import { IdProp } from '@/core/types/react'

const Logo = ({ id }: IdProp) => {
  const { data: logo, isFetching } = useQuery<LogoImage>({
    queryKey: [KEY.LOGO, id],
    queryFn: async () => await get.movie.logo({ id }),
  })

  if (isFetching || !logo) return <div className="aspect-square w-full h-full bg-gray-500 animate-pulse rounded-md" />

  return (
    <Image
      alt="Logo"
      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo?.file_path}`}
      width={logo.width}
      height={logo.height}
      className="rounded-md"
    />
  )
}

export default Logo
