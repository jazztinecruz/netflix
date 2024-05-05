import { use } from "react";
import get from "@/core/libraries/get";
import VideoPlayer from "./video";

const Hero = () => {
  const movie = use(get.movies.popular())[0];
  const videos = use(get.movie.video({ id: movie.id }));
  const trailer = videos.filter(
    (video) => video.name === "Official Trailer"
  )[0];

  return (
    <div className="h-screen absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
      <VideoPlayer video={trailer} />
    </div>
  );
};

export default Hero;
