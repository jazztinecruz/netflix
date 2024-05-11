'use client'

import Image from 'next/image'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { IdProp } from '@/core/types/react'

const Logo = ({ id }: IdProp) => {
  const { data: logo } = useQuery({
    queryKey: [KEY.LOGO, id],
    queryFn: async () => (await get.movie.logo({ id })),
  })

  if (!logo) return null

  return (
    <div className="absolute bottom-0 m-4">
      <div className="relative w-28 h-auto">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo.file_path}`}
          alt="Movie Logo"
          width={logo.width || 100}
          height={logo.height || 100}
          priority
        />
      </div>
    </div>
  )
}

export default Logo
