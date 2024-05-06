"use client";

import { useVideo } from "@/core/contexts/video";
import { Image as BackdropImage } from "@/core/types/data";
import Image from "next/image";

type Props = {
  backdrop: BackdropImage;
};

const Backdrop = ({ backdrop }: Props) => {
  const { showVideo } = useVideo();

  if (showVideo) return null;

  return (
    <div className="relative h-full w-full">
      <Image
        alt="Backdrop"
        src={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
        fill
      />
    </div>
  );
};

export default Backdrop;
