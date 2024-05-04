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
  const images = await get.movie.images({ id: "823464" });

  if (!movie || !movies || !upcoming || !similar) return null;

  console.log(
    `${process.env.IMAGE_BASE_URL}/t/p/w300${images.logos[0].file_path}`
  );

  return (
    <div>
      <div className="w-64 h-64 relative">
        <Image
          src={`${process.env.IMAGE_BASE_URL}${images.posters[1].file_path}`}
          alt="jpg"
          fill
          className="object-center"
        />
      </div>

      <div className="w-64 h-64 relative bg-black">
        <Image
          src={`${process.env.IMAGE_BASE_URL}${images.logos[1].file_path}`}
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
