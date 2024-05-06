import { use } from "react";
import get from "@/core/libraries";
import VideoPlayer from "../../../core/components/teaser/video";
import Details from "../../../core/components/teaser/details";
import Backdrop from "@/core/components/teaser/backdrop";

const Hero = () => {
  const movie = use(get.movies.popular())[0];

  const trailer = use(get.movie.trailer({ id: movie.id }));
  const logo = use(get.movie.images({ id: movie.id })).logos[0];
  const certificate = use(get.movie.certificate({ id: movie.id }));
  const backdrop = use(get.movie.images({ id: movie.id })).backdrops[0];

  return (
    <div className="h-screen absolute inset-0 -z-10 overflow-hidden">
      <Backdrop backdrop={backdrop} />
      <VideoPlayer trailer={trailer} />
      <Details movie={movie} logo={logo} certificate={certificate} />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
      <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0 z-10" />
    </div>
  );
};

export default Hero;
