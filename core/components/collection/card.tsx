import { Movie } from "@/core/types/data";
import Image from "next/image";

type Props = {
  movie: Movie;
};

const Card = ({ movie }: Props) => {
  return (
    <div className="w-48 lg:w-64 aspect-video relative rounded-md">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        fill
        sizes="h-auto w-auto"
        className="object-cover rounded-md"
        priority
      />
    </div>
  );
};

export default Card;
