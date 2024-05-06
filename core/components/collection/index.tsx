import { ChevronRightIcon } from "@heroicons/react/16/solid";
import get from "@/core/libraries";
import Image from "next/image";
import { use } from "react";

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
      <div className="grid grid-flow-col gap-4 relative group">
        {movies.slice(0, 6).map((movie, index: number) => (
          <div
            key={movie.id}
            className={`aspect-video relative rounded-md bg-gray-500 grid place-items-center text-lg ${
              index === 0 && "ml-12"
            }`}>
            <Image
              src={`${process.env.IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        ))}
        <div className="absolute right-0  h-full bg-gradient-to-r from-transparent to-black grid place-items-center">
          <ChevronRightIcon className="w-10 h-10 cursor-pointer opacity-0 group-hover:opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
