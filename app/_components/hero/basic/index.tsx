'use client'

import { PlayIcon } from '@heroicons/react/16/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQuery } from 'react-query'

import Logo from '@/core/components/media/logo'
import Poster from '@/core/components/media/poster'
import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Movie } from '@/core/types/data'

import Symbol from '../../../../core/components/symbol'

const MovieBasic = () => {
  const { data: movies } = useQuery<Movie[]>({
    queryKey: [KEY.POPULAR],
    queryFn: async () => await get.movies.popular(),
  })
  const displayedMovie = movies?.[1]

  const { data: movie } = useQuery<Movie>({
    queryKey: [KEY.MOVIE, displayedMovie?.id],
    queryFn: async () => await get.movie.details({ id: displayedMovie?.id || '' }),
    enabled: !!displayedMovie,
  })

  if (!movie) return null

  return (
    <div className="relative border border-white/25 rounded-lg p-6 pt-0 flex flex-col items-center gap-4 h-[700px]">
      <div className="h-full w-full absolute inset-0 -z-10 overflow-hidden rounded-lg">
        <Poster id={movie.id} />
      </div>
      <div className="mt-auto space-y-4 w-full">
        <div className="w-60 mx-auto">
          <Logo id={movie.id} />
        </div>
        {movie?.genres?.length && (
          <div className="flex items-center justify-center gap-3">
            {movie?.genres?.map((genre, index) => {
              const showDot = index !== movie.genres.length - 1
              return (
                <div key={genre.id} className="flex items-center">
                  <span className="text-sm text-gray-300">{genre.name}</span>
                  {showDot && <div className="w-1 h-1 rounded-full bg-gray-600 ml-2" />}
                </div>
              )
            })}
          </div>
        )}
        <Buttons movie={movie} />
      </div>
      <div className="bg-gradient-to-b from-white/10 to-primary absolute inset-0 -z-10" />
    </div>
  )
}

export default MovieBasic

const Buttons = ({ movie }: { movie: Movie }) => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-2 items-center gap-3 w-full">
      <button
        onClick={() => router.push(`/watch/${movie.id}`)}
        className="bg-white hover:bg-white/70 transition-all duration-300 px-3 lg:px-5 py-2 rounded-md flex items-center justify-center text-center gap-2 cursor-pointer"
      >
        <Symbol Icon={PlayIcon} color="black" />
        <span className="text-black font-semibold text-sm lg:text-lg">Play</span>
      </button>
      <Link href={`/?mid=${movie.id}`}>
        <div className="bg-secondary/50 hover:bg-secondary/30 transition-all duration-300 px-3 lg:px-5 py-2 rounded-md flex items-center  justify-center text-center gap-2 cursor-pointer">
          <Symbol Icon={InformationCircleIcon} />
          <span className="font-semibold text-sm lg:text-lg">More Info</span>
        </div>
      </Link>
    </div>
  )
}
