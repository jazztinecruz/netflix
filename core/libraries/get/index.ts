import {
  getMovie,
  getImages,
  getVideo,
  getPopular,
  getSimilar,
  getUpcoming,
} from "./movies";

const get = {
  movie: {
    details: ({ id }: { id: string }) => getMovie(id),
    video: ({ id }: { id: string }) => getVideo(id),
    images: ({ id }: { id: string }) => getImages(id),
  },
  movies: {
    popular: () => getPopular(),
    upcoming: () => getUpcoming(),
    similar: ({ id }: { id: string }) => getSimilar(id),
  },
};

export default get;
