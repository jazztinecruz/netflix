import { use } from "react";
import get from "@/core/libraries";
import VideoPlayer from "../../../core/components/teaser/video";
import Details from "../../../core/components/teaser/details";
import Backdrop from "@/core/components/teaser/backdrop";

const Hero = () => {
  const movie = use(get.movies.popular())[0];
  const videos = use(get.movie.video({ id: movie.id }));
  const backdrop = use(get.movie.images({ id: movie.id })).backdrops[0];
  const trailer = videos.filter(
    (video) => video.name === "Official Trailer"
  )[0];

  return (
    <div className="h-screen absolute inset-0 -z-10 overflow-hidden">
      <Backdrop backdrop={backdrop} />
      <VideoPlayer trailer={trailer} />
      <Details id={movie.id} />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
    </div>
  );
};

export default Hero;
