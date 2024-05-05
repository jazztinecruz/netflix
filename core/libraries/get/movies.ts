import { cache } from "react";
import api from "./api";

//multiple
export const getPopular = cache(async () => {
  return await api({ url: "movie/popular" });
});

export const getUpcoming = cache(async () => {
  return await api({ url: "movie/upcoming" });
});

export const getDiscover = cache(async (genreId: string) => {
  return await api({ url: `discover/movie?with_genres=${genreId}` });
});

export const getSimilar = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `movie/${id}/similar` });
});

// single
export const getCredits = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `movie/${id}/credits` });
});

export const getCertificate = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `movie/${id}/release_dates` });
});

export const getMovie = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `movie/${id}` });
});

export const getVideo = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `movie/${id}/videos` });
});

export const getImages = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `movie/${id}/images` });
});
