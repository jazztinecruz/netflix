"use client";

import { useEffect } from "react";
import { Video } from "@/core/types/data";
import { useVideo } from "@/core/contexts/video";
import { useQuery } from "react-query";
import get from "@/core/libraries";
import { IdProp } from "@/core/types/react";
import { KEY } from "@/core/enums";

const VideoPlayer = ({ id }: IdProp) => {
  const { showVideo, handleShowVideo } = useVideo();
  const { data: trailer, isLoading } = useQuery<Video>({
    queryKey: [KEY.TRAILER, { id }],
    queryFn: async () => await get.movie.trailer({ id }),
  });

  useEffect(() => {
    const timer = setTimeout(() => handleShowVideo(), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showVideo || !trailer)
    return <div className="h-full w-full bg-gray-500">no trailer</div>;

  if (isLoading)
    return <div className="h-full w-full bg-gray-500">Loading Trailer</div>;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer.key}/?autoplay=1&mute=1&loop=1&controls=0`}
      title={trailer.name}
      className="h-full w-full scale-[2.3] lg:scale-150 brightness-110 z-50"></iframe>
  );
};

export default VideoPlayer;
