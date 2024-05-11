import { use } from 'react'

import get from '@/core/libraries'

import Carousel from './carousel'

type Props = {
  title: string
  getMovies: () =>
    | ReturnType<typeof get.movies.upcoming>
    | ReturnType<typeof get.movies.discover>
    | ReturnType<typeof get.movies.popular>
}

const Collection = ({ title, getMovies }: Props) => {
  const movies = use(getMovies())

  return (
    <div className="grid grid-rows-[auto,1fr] gap-2 lg:gap-3">
      <h2 className="text-lg lg:text-xl font-medium margin">{title}</h2>
      <Carousel movies={movies} />
    </div>
  )
}

export default Collection
