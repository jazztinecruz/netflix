import { cache } from "react";
import api from "./api";
import { Certificate, Credit, Image, Movie, Video } from "@/core/types/data";

//multiple
export const getPopular = cache(async (): Promise<Movie[]> => {
  return await api({ url: "movie/popular" });
});

export const getUpcoming = cache(async (): Promise<Movie[]> => {
  return await api({ url: "movie/upcoming" });
});

export const getDiscover = cache(async (genreId: string): Promise<Movie[]> => {
  return await api({ url: `discover/movie?with_genres=${genreId}` });
});

export const getSimilar = cache(async (id: string): Promise<Movie[]> => {
  if (!id) return [];
  return await api({ url: `movie/${id}/similar` });
});

// single
export const getCredits = cache(async (id: string): Promise<Credit[]> => {
  if (!id) return [];
  return await api({ url: `movie/${id}/credits` });
});

export const getCertificate = cache(
  async (id: string): Promise<Certificate[]> => {
    if (!id) return [];
    return await api({ url: `movie/${id}/release_dates` });
  }
);

export const getMovie = cache(async (id: string): Promise<Movie> => {
  return await api({ url: `movie/${id}` });
});

export const getVideo = cache(async (id: string): Promise<Video[]> => {
  return await api({ url: `movie/${id}/videos` });
});

export const getImages = cache(
  async (
    id: string
  ): Promise<{
    backdrops: Image[];
    logos: Image[];
    posters: Image[];
  }> => {
    return await api({ url: `movie/${id}/images` });
  }
);
