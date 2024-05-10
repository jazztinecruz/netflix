"use client";

import { Image as Logo, Movie } from "@/core/types/data";
import { PlayIcon } from "@heroicons/react/16/solid";
import {
  InformationCircleIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import Symbol from "../symbol";
import { IdProp } from "@/core/types/react";
import { useQuery } from "react-query";
import get from "@/core/libraries";
import { KEY } from "@/core/enums";

const Details = ({ id }: IdProp) => {
  const { data: movie } = useQuery<Movie>({
    queryKey: [KEY.MOVIE, { id }],
    queryFn: async () => await get.movie.details({ id }),
  });

  const { data: logo } = useQuery<Logo>({
    queryKey: [KEY.LOGO, { id }],
    queryFn: async () => (await get.movie.images({ id })).logo,
  });

  const { data: certificate } = useQuery<String>({
    queryKey: [KEY.CERTIFICATE, { id }],
    queryFn: async () => await get.movie.certificate({ id }),
  });

  const [showOverview, setShowOverview] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowOverview(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const overviewOpacity = showOverview ? "opacity-100" : "opacity-0";
  const translatePosition = showOverview
    ? ""
    : "translate-y-3/4 md:translate-y-2/4";

  if (!movie) return null;

  return (
    <div className="margin w-full flex justify-between items-end h-fit absolute inset-y-2/4 -translate-y-2/4 z-50">
      <div className={`relative max-w-lg transition-all flex flex-col gap-4`}>
        <div
          className={`${translatePosition} transition-transform duration-500 ease-in flex flex-col gap-2`}>
          <div className="flex items-center -ml-2 lg:-ml-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
              <Image
                src="/logo/n-symbol.png"
                alt={movie.title}
                fill
                sizes="w-auto h-auto"
              />
            </div>
            <span className="tracking-wider font-semibold text-slate-300 text-lglg:text-xl">
              F I L M
            </span>
          </div>
          <div className="w-52 lg:w-auto lg:h-auto relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo?.file_path}`}
              alt={movie.title}
              width={logo?.width}
              height={logo?.height}
              priority
            />
          </div>
        </div>
        <p
          className={`transition-opacity duration-200 text-xs lg:text-lg ${overviewOpacity} `}>
          {movie.overview}
        </p>
        <div className="flex items-center gap-3">
          <button className="bg-white px-3 lg:px-5 py-2 rounded-md flex items-center gap-2 cursor-pointer">
            <Symbol Icon={PlayIcon} color="black" />
            <span className="text-black font-semibold text-sm lg:text-lg">
              Play
            </span>
          </button>
          <button className="bg-secondary px-3 lg:px-5 py-2 rounded-md flex items-center gap-2">
            <Symbol Icon={InformationCircleIcon} />
            <span className="font-semibold text-sm lg:text-lg">More Info</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="border rounded-full w-fit p-2">
          <Symbol Icon={SpeakerXMarkIcon} />
        </div>
        <div className="bg-black/30 border-l-2 w-24 lg:w-40 h-10 lg:h-12 pl-4 flex items-center text-sm lg:text-lg">
          {certificate}
        </div>
      </div>
    </div>
  );
};

export default Details;
