"use client";

import { useVideo } from "@/core/contexts/video";
import { KEY } from "@/core/enums";
import get from "@/core/libraries";
import { Image as BackdropImage } from "@/core/types/data";
import { IdProp } from "@/core/types/react";
import Image from "next/image";
import { useQuery } from "react-query";

const Backdrop = ({ id }: IdProp) => {
  const { showVideo } = useVideo();
  const { data: backdrop, isLoading } = useQuery<BackdropImage>({
    queryKey: [KEY.BACKDROP, { id }],
    queryFn: async () => (await get.movie.images({ id })).backdrops[0],
  });

  if (showVideo || !backdrop) return null;
  if (isLoading)
    return (
      <div className="aspect-vide bg-gray-500 animate-pulse">
        Loading Trailer
      </div>
    );

  return (
    <div className={`relative aspect-${backdrop.aspect_ratio}`}>
      <Image
        alt="Backdrop"
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${backdrop.file_path}`}
        width={backdrop.width}
        height={backdrop.height}
      />
    </div>
  );
};

export default Backdrop;
