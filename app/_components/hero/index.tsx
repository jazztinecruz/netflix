import { use } from "react";
import get from "@/core/libraries";
import VideoPlayer from "../../../core/components/teaser/video";
import Details from "../../../core/components/teaser/details";
import Backdrop from "@/core/components/teaser/backdrop";

const Hero = () => {
  const movie = use(get.movies.popular())[0];

  return (
    <div className="h-screen absolute inset-0 -z-10 overflow-hidden">
      <Backdrop id={movie.id} /> <VideoPlayer id={movie.id} />
      <Details id={movie.id} />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
    </div>
  );
};

export default Hero;
