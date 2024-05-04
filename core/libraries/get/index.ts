import {
  getMovie,
  getMovies,
  getSimilarMovies,
  getUpcomingMovies,
} from "./movies";

const get = {
  movie: ({ id }: { id: string }) => getMovie(id),
  movies: {
    popular: () => getMovies(),
    upcoming: () => getUpcomingMovies(),
    similar: ({ id }: { id: string }) => getSimilarMovies(id),
  },
};

export default get;
