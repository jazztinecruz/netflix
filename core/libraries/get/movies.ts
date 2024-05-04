import { cache } from "react";
import api from "./api";

export const getMovies = cache(async () => {
  return await api({ url: "/3/movie/popular" });
});

export const getUpcomingMovies = cache(async () => {
  return await api({ url: "/3/movie/upcoming" });
});

export const getSimilarMovies = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/similar` });
});

export const getMovie = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}` });
});

export const getMovieVideo = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/videos` });
});

export const getMovieImages = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/images` });
});
