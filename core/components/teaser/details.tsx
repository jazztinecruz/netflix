"use client";

import { Image as Logo, Movie } from "@/core/types/data";
import { PlayIcon } from "@heroicons/react/16/solid";
import {
  InformationCircleIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  movie: Movie;
  logo: Logo;
  certificate: string;
};

const Details = ({ movie, logo, certificate }: Props) => {
  const [showOverview, setShowOverview] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverview(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const overviewOpacity = showOverview ? "opacity-100" : "opacity-0";
  const translatePosition = showOverview ? "" : "translate-y-2/4";

  return (
    <div className="ml-10 w-full flex justify-between items-end h-fit absolute inset-y-2/4 -translate-y-2/4 z-50">
      <div className={`relative max-w-lg transition-all flex flex-col gap-4`}>
        <div
          className={`${translatePosition} transition-transform duration-500 ease-in flex flex-col gap-2`}>
          <div className="flex items-center -ml-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo/n-symbol.png"
                alt={movie.title}
                fill
                sizes="w-auto h-auto"
              />
            </div>
            <span className="tracking-wider font-semibold text-slate-300 text-xl">
              F I L M
            </span>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo.file_path}`}
            alt={movie.title}
            width={logo.width}
            height={logo.height}
            priority
          />
        </div>
        <p
          className={`transition-opacity duration-200 text-lg ${overviewOpacity}`}>
          {movie.overview}
        </p>
        <div className="flex items-center gap-3">
          <button className="bg-white px-5 py-2 rounded-md flex items-center gap-2 cursor-pointer">
            <PlayIcon className="text-primary w-8 h-8" />
            <span className="text-black font-semibold text-lg">Play</span>
          </button>
          <button className="bg-secondary px-5 py-2 rounded-md flex items-center gap-2">
            <InformationCircleIcon className="w-8 h-8" />
            <span className="font-semibold text-lg">More Info</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="border rounded-full w-fit p-2">
          <SpeakerXMarkIcon className="w-6 h-6" />
        </div>
        <div className="bg-black/30 border-l-2 w-40 h-12 pl-4 flex items-center text-lg">
          {certificate}
        </div>
      </div>
    </div>
  );
};

export default Details;
