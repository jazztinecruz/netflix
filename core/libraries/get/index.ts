import {
  getMovie,
  getImages,
  getVideo,
  getPopular,
  getSimilar,
  getUpcoming,
  getCredits,
  getCertificate,
} from "./movies";

const get = {
  movie: {
    details: ({ id }: { id: string }) => getMovie(id),
    video: ({ id }: { id: string }) => getVideo(id),
    images: ({ id }: { id: string }) => getImages(id),
    certificate: ({ id }: { id: string }) => getCertificate(id),
  },
  movies: {
    popular: () => getPopular(),
    upcoming: () => getUpcoming(),
    similar: ({ id }: { id: string }) => getSimilar(id),
    credits: ({ id }: { id: string }) => getCredits(id),
  },
};

export default get;
