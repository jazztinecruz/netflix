import { cache } from 'react'
import api from './api'
import { Certificate, Credit, Image, Movie, Video } from '@/core/types/data'

//multiple
export const getPopular = cache(async (): Promise<Movie[]> => {
  return await api({ url: 'movie/popular' })
})

export const getUpcoming = cache(async (): Promise<Movie[]> => {
  return await api({ url: 'movie/upcoming' })
})

export const getDiscover = cache(async (genreId: string): Promise<Movie[]> => {
  return await api({ url: `discover/movie?with_genres=${genreId}` })
})

export const getSimilar = cache(async (id: string): Promise<Movie[]> => {
  return await api({ url: `movie/${id}/similar` })
})

// single
export const getCredits = cache(async (id: string): Promise<Credit[]> => {
  const data = await api({ url: `movie/${id}/credits` })
  const credits = data.cast
  return credits
})

export const getCertificate = cache(async (id: string): Promise<string> => {
  const data: Certificate[] = await api({
    url: `movie/${id}/release_dates`,
  })

  const certificate: string = data.find((cert) => cert.release_dates.some((rd) => rd.certification.trim() !== ''))
    ?.release_dates[0].certification!

  return certificate
})

export const getMovie = cache(async (id: string): Promise<Movie> => {
  return await api({ url: `movie/${id}` })
})

export const getTrailer = cache(async (id: string): Promise<Video> => {
  const videos = await api({ url: `movie/${id}/videos` })
  const trailer = videos.filter((video: Video) => video.type === 'Trailer')[0] as Video

  return trailer
})

export const getImages = cache(async (id: string): Promise<{ logo: Image; backdrop: Image; poster: Image }> => {
  const data = await api({ url: `movie/${id}/images` })
  const { logos, backdrops, posters } = data

  const logo = logos.find((logo: Image) => logo.file_path !== '' && logo.width && logo.height)
  const backdrop = backdrops.find(
    (backdrop: Image) => backdrop.file_path !== '' && backdrop.width && backdrop.height && backdrop.aspect_ratio,
  )
  const poster = posters.find((poster: Image) => poster.file_path !== '' && poster.width && poster.height)

  return { logo, backdrop, poster }
})
