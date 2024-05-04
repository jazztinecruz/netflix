import get from "@/core/libraries/get";
import { Page } from "@/core/types/react";
import Image from "next/image";
import VideoPlayer from "./video";

const Home: Page = async () => {
  const movies = await get.movies.popular();
  const upcoming = await get.movies.upcoming();
  const similar = await get.movies.similar({ id: "823464" });

  const movie = await get.movie.details({ id: "823464" });
  const video = await get.movie.video({ id: "823464" });

  if (!movie || !movies || !upcoming || !similar) return null;

  return (
    <div>
      <div className="w-64 h-64 relative">
        <Image
          src={`${process.env.IMAGE_BASE_URL}${movie.poster_path}`}
          alt="jpg"
          fill
          className="object-center"
        />
      </div>
      <VideoPlayer video={video[video.length - 2]} />
    </div>
  );
};

export default Home;
