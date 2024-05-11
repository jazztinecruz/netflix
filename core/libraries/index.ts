import {
  getMovie,
  getImages,
  getPopular,
  getSimilar,
  getUpcoming,
  getCredits,
  getCertificate,
  getDiscover,
  getTrailer,
} from './movies'

const get = {
  movie: {
    details: ({ id }: { id: string }) => getMovie(id),
    trailer: ({ id }: { id: string }) => getTrailer(id),
    images: ({ id }: { id: string }) => getImages(id),
    certificate: ({ id }: { id: string }) => getCertificate(id),
    credits: ({ id }: { id: string }) => getCredits(id),
  },
  movies: {
    popular: () => getPopular(),
    upcoming: () => getUpcoming(),
    discover: ({ genreId }: { genreId: string }) => getDiscover(String(genreId)),
    similar: ({ id }: { id: string }) => getSimilar(id),
  },
}

export default get
