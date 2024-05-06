import get from "@/core/libraries";
import { use } from "react";

type Props = {
  id: string;
};

const VideoPlayer = ({ id }: Props) => {
  const videos = use(get.movie.video({ id }));
  const trailer = videos.filter(
    (video) => video.name === "Official Trailer"
  )[0];

  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer.key}/?autoplay=1&mute=1&loop=1&controls=0`}
      title={trailer.name}
      className="h-full w-full scale-150 brightness-110"></iframe>
  );
};

export default VideoPlayer;
