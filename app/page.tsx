import get from "@/core/libraries/get";
import { Page } from "@/core/types/react";

const Home: Page = async () => {
  const movies = await get.movies.popular();
  const upcoming = await get.movies.upcoming();
  const similar = await get.movies.similar({ id: "823464" });
  const movie = await get.movie({ id: "823464" });

  return <div>Home</div>;
};

export default Home;
