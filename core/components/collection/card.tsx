import get from "@/core/libraries";
import Image from "next/image";
import { Movie } from "@/core/types/data";
import { use } from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { KEY } from "@/core/enums";

type Props = {
  movie: Movie;
};

const Card = ({ movie }: Props) => {
  const { data } = useQuery({
    queryKey: [KEY.LOGO, movie.id],
    queryFn: async () => get.movie.images({ id: movie.id }),
  });

  const backdrop = data?.backdrops.filter(
    (backdrop) => backdrop.file_path !== ""
  )[0];
  const logo = data?.logos.filter((logo) => logo.file_path !== "")[0];

  if (!backdrop || !logo) return null;

  return (
    <Link
      href={`?mid=${movie.id}`}
      className="w-48 lg:w-64 aspect-video rounded-md relative grid p-2">
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
    </Link>
  );
};

export default Card;
