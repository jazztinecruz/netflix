import get from "@/core/libraries";
import Image from "next/image";
import { Movie } from "@/core/types/data";
import { use } from "react";

type Props = {
  movie: Movie;
};

const Card = ({ movie }: Props) => {
  const logo = use(get.movie.images({ id: movie.id })).logos[0];
  const backdrop = use(get.movie.images({ id: movie.id })).backdrops[0];

  return (
    <div className="w-48 lg:w-64 aspect-video rounded-md relative grid p-2">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${backdrop.file_path}`}
        alt={movie.title}
        width={backdrop.width}
        height={backdrop.height}
        className="rounded-md absolute inset-0"
        priority
      />

      <div className="relative w-24 md:w-32 lg::w-36 mt-auto">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo.file_path}`}
          alt={movie.title}
          width={logo.width}
          height={logo.height}
          priority
        />
      </div>
    </div>
  );
};

export default Card;
