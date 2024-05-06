"use client";

import { useEffect } from "react";
import { Video } from "@/core/types/data";
import { useVideo } from "@/core/contexts/video";

type Props = {
  trailer: Video;
};

const VideoPlayer = ({ trailer }: Props) => {
  const { showVideo, handleShowVideo } = useVideo();

  useEffect(() => {
    const timer = setTimeout(() => handleShowVideo(), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!showVideo) return null;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer.key}/?autoplay=1&mute=1&loop=1&controls=0`}
      title={trailer.name}
      className="h-full w-full scale-150 brightness-110"></iframe>
  );
};

export default VideoPlayer;
