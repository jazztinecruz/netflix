"use client";

import { KEY } from "@/core/enums";
import get from "@/core/libraries";
import { Movie } from "@/core/types/data";
import Link from "next/link";
import { useQuery } from "react-query";
import Image from "next/image";

type Props = { movie: Movie };
const Card = ({ movie }: Props) => {
  const { data: certificate } = useQuery({
    queryKey: [KEY.CERTIFICATE, movie.id],
    queryFn: async () => await get.movie.certificate({ id: movie.id }),
  });
  const { data: logo } = useQuery({
    queryKey: [KEY.LOGO, movie.id],
    queryFn: async () => (await get.movie.images({ id: movie.id })).logos[0],
  });
  const overview = movie.overview.split(".")[0];

  return (
    <Link href={`?mid=${movie.id}`} key={movie.id}>
      <li className="relative">
        <div className="relative">
          <div className={`relative aspect-video`}>
            <Image
              alt="Backdrop"
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${
                movie.backdrop_path || movie.poster_path
              }`}
              fill
              sizes="w-auto h-auto"
            />
          </div>
          {logo && (
            <div className="absolute bottom-0 m-4">
              <div className="relative w-28 h-auto">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo.file_path}`}
                  alt={movie.title}
                  width={logo.width}
                  height={logo.height}
                  priority
                />
              </div>
            </div>
          )}
        </div>
        <div className="bg-[#2F2F2F] rounded-b-md p-4 flex flex-col gap-3 h-40 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            {certificate && (
              <div className="border border-secondary px-2 py-1 w-fit">
                {certificate}
              </div>
            )}
            {movie.release_date && (
              <span>{movie.release_date.split("-")[0]}</span>
            )}
          </div>
          <p>
            {overview.length > 140 ? overview.slice(0, 140) + "..." : overview}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default Card;
