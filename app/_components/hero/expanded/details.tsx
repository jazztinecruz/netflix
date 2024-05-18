'use client'

import { PlayIcon } from '@heroicons/react/16/solid'
import { InformationCircleIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Image as Logo, Movie } from '@/core/types/data'
import { IdProp } from '@/core/types/react'

import Symbol from '../../../../core/components/symbol'

const Details = ({ id }: IdProp) => {
  const { data: movie } = useQuery<Movie>({
    queryKey: [KEY.MOVIE, id],
    queryFn: async () => await get.movie.details({ id }),
    enabled: !!id,
  })

  const { data: logo } = useQuery<Logo>({
    queryKey: [KEY.LOGO, id],
    queryFn: async () => await get.movie.logo({ id }),
    enabled: !!id,
  })

  const { data: certificate } = useQuery<String>({
    queryKey: [KEY.CERTIFICATE, id],
    queryFn: async () => await get.movie.certificate({ id }),
    enabled: !!id,
  })

  if (!movie) return null

  return (
    <div className="margin w-full flex justify-between items-end">
      <div className="relative max-w-lg grid grid-rows-[1fr,auto] gap-4 h-full">
        <div className="flex flex-col gap-2">
          <MovieLogo movie={movie} logo={logo!} />
          <p className={`text-xs lg:text-lg`}>{movie.overview.split('.')[0]}</p>
        </div>
        <Buttons movie={movie} />
      </div>
      <div className="flex items-center gap-6">
        <div className="border rounded-full w-fit p-2">
          <Symbol Icon={SpeakerXMarkIcon} />
        </div>
        {certificate && (
          <div className="bg-black/30 border-l-2 w-24 lg:w-40 h-10 lg:h-12 pl-4 flex items-center text-sm lg:text-lg">
            {certificate}
          </div>
        )}
      </div>
    </div>
  )
}

export default Details

const MovieLogo = ({ movie, logo }: { movie: Movie; logo: Logo }) => {
  if (!logo) return null

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center -ml-2 lg:-ml-3">
        <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
          <Image src="/logo/n-symbol.png" alt={movie.title} fill sizes="w-auto h-auto" />
        </div>
        <span className="tracking-wider font-semibold text-slate-300 text-lglg:text-xl">F I L M</span>
      </div>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo?.file_path}`}
        alt={movie.title}
        width={600}
        height={400}
        priority
      />
    </div>
  )
}

const Buttons = ({ movie }: { movie: Movie }) => {
  return (
    <div className="flex items-center gap-3">
      <button className="bg-white hover:bg-white/70 transition-all duration-300 px-3 lg:px-5 py-2 rounded-md flex items-center gap-2 cursor-pointer">
        <Symbol Icon={PlayIcon} color="black" />
        <span className="text-black font-semibold text-sm lg:text-lg">Play</span>
      </button>
      <Link href={`/?mid=${movie.id}`}>
        <div className="bg-secondary/50 hover:bg-secondary/30 transition-all duration-300 px-3 lg:px-5 py-2 rounded-md flex items-center gap-2 cursor-pointer">
          <Symbol Icon={InformationCircleIcon} />
          <span className="font-semibold text-sm lg:text-lg">More Info</span>
        </div>
      </Link>
    </div>
  )
}
