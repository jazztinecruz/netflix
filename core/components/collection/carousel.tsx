import Link from 'next/link'
import { use } from 'react'

import get from '@/core/libraries'

import TrendingBadge from '../badges/trending'
import Backdrop from '../media/backdrop'
import Poster from '../media/poster'

type Props = {
  getMovies: () =>
    | ReturnType<typeof get.movies.upcoming>
    | ReturnType<typeof get.movies.discover>
    | ReturnType<typeof get.movies.popular>
}

const Carousel = ({ getMovies }: Props) => {
  const movies = use(getMovies())
  return (
    <>
      {/* smaller screen */}
      <div className="lg:hidden overflow-y-scroll mx-4">
        <ul className="grid grid-flow-col gap-2 ">
          {movies.map((movie) => {
            return (
              <Link key={movie.id} href={`?mid=${movie.id}`} className="w-24 md:w-36 aspect-square rounded-md relative">
                <Poster id={movie.id} />
                <TrendingBadge isDifferentShape id={movie.id} />
              </Link>
            )
          })}
        </ul>
      </div>

      {/* larger screen */}
      <div className="hidden lg:block overflow-y-scroll">
        <ul className={`grid grid-flow-col gap-2 margin`}>
          {movies.map((movie) => {
            return (
              <Link key={movie.id} href={`?mid=${movie.id}`} className="w-48 lg:w-80 aspect-video rounded-md relative">
                <Backdrop id={movie.id} />
                <TrendingBadge isDifferentShape id={movie.id} />
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Carousel
