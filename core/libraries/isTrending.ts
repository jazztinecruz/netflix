import { useEffect, useState } from 'react'

import get from '.'
import { Movie } from '../types/data'

const isMovieTrending = (id: string): { isTrending: boolean; index: number } => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])

  useEffect(() => {
    get.movies.trending().then(setTrendingMovies)
  }, [])

  const index: number = trendingMovies.findIndex((movie: Movie) => movie.id === id)
  const isTrending: boolean = index !== -1

  return { isTrending, index: index + 1 }
}

export default isMovieTrending
