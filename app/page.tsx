import { GENRE_ID, GENRE_NAME } from "@/core/enums";
import { Page } from "@/core/types/react";
import { Suspense } from "react";

import get from "@/core/libraries";
import Collection from "@/core/components/collection";
import Hero from "./_components/hero";
import ListSkeleton from "@/core/components/collection/skeleton";

import MovieModal from "@/core/components/modal/ index";

const Home: Page = () => {
  return (
    <div className="grid">
      <Hero />
      <div className="space-y-6 lg:mt-[680px]">
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Action}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Action })}
          />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Collection
            title={GENRE_NAME.Adventure}
            getMovies={() =>
              get.movies.discover({ genreId: GENRE_ID.Adventure })
            }
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Comedy}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Comedy })}
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Romance}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Romance })}
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Horror}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Horror })}
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.ScienceFiction}
            getMovies={() =>
              get.movies.discover({ genreId: GENRE_ID.ScienceFiction })
            }
          />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <Collection
            title={GENRE_NAME.Drama}
            getMovies={() => get.movies.discover({ genreId: GENRE_ID.Drama })}
          />
        </Suspense>
      </div>
      <Suspense>
        <MovieModal />
      </Suspense>
    </div>
  );
};

export default Home;
