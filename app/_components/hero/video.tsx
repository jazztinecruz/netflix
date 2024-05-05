import { Video } from "@/core/types/data";

type Props = {
  video: Video;
};

const VideoPlayer = ({ video }: Props) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${video.key}/?autoplay=1&mute=0&loop=1&controls=0`}
      title={video.name}
      className="h-full w-full scale-150 brightness-110"></iframe>
  );
};

export default VideoPlayer;
