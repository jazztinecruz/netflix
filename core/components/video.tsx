"use client";

import { Video } from "@/core/types/data";
import YouTube from "react-youtube";

type Props = {
  video: Video;
};

const VideoPlayer = ({ video }: Props) => {
  const opts = {
    size: video.size,
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={video.key} opts={opts} />;
};

export default VideoPlayer;
