'use client'

import Image from 'next/image'

import { KEY } from '@/core/enums'
import useCustomQuery from '@/core/hook/custom-query'
import get from '@/core/libraries'
import { Image as LogoImage } from '@/core/types/data'
import { IdProp } from '@/core/types/react'

import NotAvailable from './not-available'

const Logo = ({ id }: IdProp) => {
  const { data: logo, isFetching } = useCustomQuery<LogoImage>({
    queryKey: [KEY.LOGO, id],
    queryFn: async () => await get.movie.logo({ id }),
    enabled: !!id,
  })

  if (isFetching) return <div className="aspect-square w-full h-full bg-gray-500 animate-pulse rounded-md" />
  if (!logo) return <NotAvailable type="logo" />

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
