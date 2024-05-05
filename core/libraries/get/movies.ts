import { cache } from "react";
import api from "./api";

export const getPopular = cache(async () => {
  return await api({ url: "popular" });
});

export const getUpcoming = cache(async () => {
  return await api({ url: "upcoming" });
});

export const getSimilar = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `${id}/similar` });
});

export const getCredits = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `${id}/credits` });
});

export const getCertificate = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `${id}/release_dates` });
});

export const getMovie = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: id });
});

export const getVideo = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `${id}/videos` });
});

export const getImages = cache(async (id: string) => {
  if (!id) return;
  return await api({ url: `${id}/images` });
});
