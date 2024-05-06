import get from "@/core/libraries";
import Image from "next/image";
import { use } from "react";

type Props = {
  id: string;
};

const Backdrop = ({ id }: Props) => {
  const backdrop = use(get.movie.images({ id })).backdrops[0];

  return (
    <div className="relative h-full w-full">
      <Image
        alt="Backdrop"
        src={`${process.env.IMAGE_BASE_URL}${backdrop.file_path}`}
        fill
        fetchPriority="auto"
      />
    </div>
  );
};

export default Backdrop;
