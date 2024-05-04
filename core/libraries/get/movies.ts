import api from "./api";

export const getMovies = async () => {
  return await api({ url: "/3/movie/popular" });
};

export const getUpcomingMovies = async () => {
  return await api({ url: "/3/movie/upcoming" });
};

export const getMovie = async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}` });
};

export const getSimilarMovies = async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/similar` });
};
