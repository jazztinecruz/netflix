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
