import {
  getMovie,
  getPopular,
  getSimilar,
  getUpcoming,
  getCredits,
  getCertificate,
  getDiscover,
  getTrailer,
  getCollection,
  getLogo,
  getBackdrop,
  getPoster,
} from './movies'

const get = {
  movie: {
    details: ({ id }: { id: string }) => getMovie(id),
    trailer: ({ id }: { id: string }) => getTrailer(id),
    logo: ({ id }: { id: string }) => getLogo(id),
    backdrop: ({ id }: { id: string }) => getBackdrop(id),
    poster: ({ id }: { id: string }) => getPoster(id),
    certificate: ({ id }: { id: string }) => getCertificate(id),
    credits: ({ id }: { id: string }) => getCredits(id),
  },
  movies: {
    popular: () => getPopular(),
    upcoming: () => getUpcoming(),
    discover: ({ genreId }: { genreId: string }) => getDiscover(String(genreId)),
    similar: ({ id }: { id: string }) => getSimilar(id),
    collection: ({ id }: { id: string }) => getCollection(id),
  },
}

export default get
