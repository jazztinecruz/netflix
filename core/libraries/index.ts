import { IdProp } from '../types/react'
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
  getTrending,
} from './movies'

const get = {
  movie: {
    details: ({ id }: IdProp) => getMovie(id),
    trailer: ({ id }: IdProp) => getTrailer(id),
    logo: ({ id }: IdProp) => getLogo(id),
    backdrop: ({ id }: IdProp) => getBackdrop(id),
    poster: ({ id }: IdProp) => getPoster(id),
    certificate: ({ id }: IdProp) => getCertificate(id),
    credits: ({ id }: IdProp) => getCredits(id),
  },
  movies: {
    popular: () => getPopular(),
    upcoming: () => getUpcoming(),
    trending: () => getTrending(),
    discover: ({ genreId }: { genreId: string }) => getDiscover(String(genreId)),
    similar: ({ id }: IdProp) => getSimilar(id),
    collection: ({ id }: IdProp) => getCollection(id),
  },
}

export default get
