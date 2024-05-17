import { Suspense } from 'react'

import Collection from '@/core/components/collection'
import { GENRE_ID, GENRE_NAME } from '@/core/enums'
import get from '@/core/libraries'
import { Page } from '@/core/types/react'

import Hero from '../_components/hero'

const Popular: Page = () => {
  return (
    <div className="grid">
      <Hero />
      <div className="space-y-10 md:space-y-12 lg:mt-[820px]">
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>Popular Movies</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.popular()} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>Upcoming Movies</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.upcoming()} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>New Releases</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Animation })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Crime}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Crime })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Fantasy}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Fantasy })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Thriller}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Thriller })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Mystery}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Mystery })} />
          </Collection>
        </Suspense>
      </div>
    </div>
  )
}

export default Popular
