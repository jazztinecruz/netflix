import get from "@/core/libraries/get";
import { Page } from "@/core/types/react";
import Image from "next/image";

const Home: Page = async () => {
  const movies = await get.movies.popular();
  const upcoming = await get.movies.upcoming();
  const similar = await get.movies.similar({ id: "823464" });
  const movie = await get.movie({ id: "823464" });

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
    </div>
  );
};

export default Home;
