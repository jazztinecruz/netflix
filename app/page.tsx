import { Suspense } from 'react'

import Collection from '@/core/components/collection'
import TopTrending from '@/core/components/top'
import { GENRE_ID, GENRE_NAME } from '@/core/enums'
import get from '@/core/libraries'
import { Page } from '@/core/types/react'

import Hero from './_components/hero'

const Home: Page = () => {
  return (
    <div className="grid">
      <Hero />
      <div className="space-y-10 md:space-y-12 lg:mt-[820px]">
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Action}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Action })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <TopTrending />
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Adventure}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Adventure })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Comedy}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Comedy })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Romance}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Romance })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Horror}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Horror })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.ScienceFiction}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.ScienceFiction })} />
          </Collection>
        </Suspense>
        <Suspense fallback={<Collection.Skeleton />}>
          <Collection>
            <Collection.Title>{GENRE_NAME.Drama}</Collection.Title>
            <Collection.Carousel getMovies={() => get.movies.discover({ genreId: GENRE_ID.Drama })} />
          </Collection>
        </Suspense>
      </div>
    </div>
  )
}

export default Home
