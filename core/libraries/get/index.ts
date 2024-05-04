import {
  getMovie,
  getMovieVideo,
  getMovies,
  getSimilarMovies,
  getUpcomingMovies,
} from "./movies";

const get = {
  movie: {
    details: ({ id }: { id: string }) => getMovie(id),
    video: ({ id }: { id: string }) => getMovieVideo(id),
  },
  movies: {
    popular: () => getMovies(),
    upcoming: () => getUpcomingMovies(),
    similar: ({ id }: { id: string }) => getSimilarMovies(id),
  },
};

export default get;
