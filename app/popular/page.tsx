import { GENRE_ID, GENRE_NAME } from "@/core/enums";
import { Page } from "@/core/types/react";
import { Suspense } from "react";

import get from "@/core/libraries";
import Collection from "@/core/components/collection";
import ListSkeleton from "@/core/components/collection/skeleton";
import Hero from "../_components/hero";

const Popular: Page = () => {
  return (
    <div className="grid">
      <Hero />
      <div className="space-y-6 lg:mt-[680px]">
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title="Popular Movies"
            getMovies={() => get.movies.popular()}
          />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Collection
            title="Upcoming Movies"
            getMovies={() => get.movies.upcoming()}
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title="New Releases"
            getMovies={() =>
              get.movies.discover({ genreId: GENRE_ID.Animation })
            }
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Crime}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Crime })}
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Fantasy}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Fantasy })}
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Thriller}
            getMovies={() =>
              get.movies.discover({ genreId: GENRE_ID.Thriller })
            }
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Mystery}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Mystery })}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Popular;
