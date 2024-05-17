import Link from 'next/link'
import { use } from 'react'

import get from '@/core/libraries'

import Collection from '../collection'
import Poster from '../media/poster'

const TopTrending = () => {
  const movies = use(get.movies.trending())

  return (
    <Collection>
      <Collection.Title>Top 10 Movies in Philippines Today</Collection.Title>
      <ul className="grid grid-flow-col gap-4 overflow-y-scroll margin">
        {movies.slice(0, 10).map((movie, index) => {
          const place = index + 1
          return (
            <Link
              key={movie.id}
              href={`?mid=${movie.id}`}
              className="w-48 lg:w-80 aspect-video rounded-md relative grid grid-cols-2 items-center"
            >
              <span className="text-9xl lg:text-[190px] font-extrabold text-secondary ml-auto -mr-4 lg:-mr-6">
                {place}
              </span>
              <Poster id={movie.id} />
            </Link>
          )
        })}
      </ul>
    </Collection>
  )
}

export default TopTrending
