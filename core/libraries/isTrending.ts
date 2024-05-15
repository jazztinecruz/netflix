import { useEffect, useState } from 'react'

import get from '.'
import { Movie } from '../types/data'

const isMovieTrending = (id: string): { isTrending: boolean; place: number } => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])

  useEffect(() => {
    get.movies.trending().then(setTrendingMovies)
  }, [])

  const place: number = trendingMovies.findIndex((movie: Movie) => movie.id === id)
  const isTrending: boolean = place !== -1

  return { isTrending, place: place + 1 }
}

export default isMovieTrending
