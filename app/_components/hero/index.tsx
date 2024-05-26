import { use } from 'react'

import get from '@/core/libraries'

import MovieBasic from './basic'
import MovieExpanded from './expanded'

const Hero = () => {
  const movie = use(get.movies.popular())[0]
  if (!movie) return null

  return (
    <>
      <div className="lg:hidden m-4">
        <MovieBasic movie={movie} />
      </div>
      <div className="hidden lg:block">
        <MovieExpanded movie={movie} />
      </div>
    </>
  )
}

export default Hero
