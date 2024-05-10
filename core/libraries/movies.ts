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
  return await api({ url: `movie/${id}/similar` });
});

// single
export const getCredits = cache(async (id: string): Promise<Credit[]> => {
  const data = await api({ url: `movie/${id}/credits` });
  const credits = data.cast;
  return credits;
});

export const getCertificate = cache(async (id: string): Promise<string> => {
  const data: Certificate[] = await api({
    url: `movie/${id}/release_dates`,
  });

  const certificate: string = data.find((cert) =>
    cert.release_dates.some((rd) => rd.certification.trim() !== "")
  )?.release_dates[0].certification!;

  return certificate;
});

export const getMovie = cache(async (id: string): Promise<Movie> => {
  return await api({ url: `movie/${id}` });
});

export const getTrailer = cache(async (id: string): Promise<Video> => {
  const videos = await api({ url: `movie/${id}/videos` });
  const trailer = videos.filter(
    (video: Video) => video.name === "Official Trailer"
  )[0] as Video;

  return trailer;
});

export const getImages = cache(
  async (
    id: string
  ): Promise<{ logos: Image[]; backdrops: Image[]; posters: Image[] }> => {
    const data = await api({ url: `movie/${id}/images` });
    const logos = data.logos as Image[];
    const backdrops = data.backdrops as Image[];
    const posters = data.posters as Image[];

    return { logos, backdrops, posters };
  }
);
