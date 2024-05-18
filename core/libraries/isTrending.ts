import { useEffect, useState } from 'react'

import get from '.'
import { Movie } from '../types/data'
import { IdProp } from '../types/react'
import grabError from './error'

type TrendingResult = {
  isTrending: boolean
  place: number
}

const isMovieTrending = ({ id }: IdProp): TrendingResult => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await get.movies.trending()
        setTrendingMovies(movies)
      } catch (error) {
        return grabError(error)
      }
    }
    getTrendingMovies()
  }, [])

  const place: number = trendingMovies.findIndex((movie: Movie) => movie.id === id)
  const isTrending: boolean = place !== -1

  return { isTrending, place: place + 1 }
}

export default isMovieTrending
