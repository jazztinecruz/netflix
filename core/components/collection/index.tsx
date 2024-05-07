import get from "@/core/libraries";
import { use } from "react";
import Carousel from "./carousel";

type Props = {
  title: string;
  getMovies: () =>
    | ReturnType<typeof get.movies.upcoming>
    | ReturnType<typeof get.movies.discover>
    | ReturnType<typeof get.movies.popular>;
};

const Collection = ({ title, getMovies }: Props) => {
  const movies = use(getMovies());

  return (
    <div className="grid grid-rows-[auto,1fr] gap-3">
      <h2 className="text-xl font-medium ml-12">{title}</h2>
      <Carousel movies={movies} />
    </div>
  );
};

export default Collection;
