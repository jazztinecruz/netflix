import { cache } from "react";
import api from "./api";

export const getPopular = cache(async () => {
  return await api({ url: "/3/movie/popular" });
});

export const getUpcoming = cache(async () => {
  return await api({ url: "/3/movie/upcoming" });
});

export const getDiscover = cache(async () => {
  return await api({ url: "/3/discover/movie" });
});

export const getSimilar = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/similar` });
});

export const getCredits = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/credits` });
});

export const getCertificate = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/release_dates` });
});

export const getMovie = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}` });
});

export const getVideo = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/videos` });
});

export const getImages = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `/3/movie/${id}/images` });
});
