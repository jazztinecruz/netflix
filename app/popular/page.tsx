import { Suspense } from 'react'

import Collection from '@/core/components/collection'
import TopTrending from '@/core/components/top'
import { GENRE_ID, GENRE_NAME } from '@/core/enums'
import get from '@/core/libraries'
import { Page } from '@/core/types/react'

import Hero from '../_components/hero'
import Navbar from '../_components/navbar'

const Popular: Page = () => {
  const GENRES: { name: GENRE_NAME; id: GENRE_ID }[] = Object.keys(GENRE_NAME).map((key) => ({
    name: GENRE_NAME[key as keyof typeof GENRE_NAME],
    id: GENRE_ID[key as keyof typeof GENRE_ID],
  }))

  return (
    <div className="grid grid-rows-[auto,1fr]">
      <Navbar />
      <div className="lg:grid">
        <Hero />
        <div className="space-y-10 md:space-y-12 mt-4 lg:mt-[820px] z-50">
          <Suspense fallback={<Collection.Skeleton />}>
            <Collection>
              <Collection.Title>Popular Movies</Collection.Title>
              <Collection.Carousel getMovies={() => get.movies.popular()} />
            </Collection>
          </Suspense>
          <Suspense fallback={<Collection.Skeleton />}>
            <TopTrending />
          </Suspense>
          <Suspense fallback={<Collection.Skeleton />}>
            <Collection>
              <Collection.Title>Upcoming Movies</Collection.Title>
              <Collection.Carousel getMovies={() => get.movies.upcoming()} />
            </Collection>
          </Suspense>
          {GENRES.map((genre) => (
            <Suspense key={genre.id} fallback={<Collection.Skeleton />}>
              <Collection>
                <Collection.Title>{genre.name}</Collection.Title>
                <Collection.Carousel getMovies={() => get.movies.discover({ genreId: genre.id })} />
              </Collection>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
