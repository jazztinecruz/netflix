import { Image as Logo, Movie } from "@/core/types/data";
import { PlayIcon } from "@heroicons/react/16/solid";
import {
  InformationCircleIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  movie: Movie;
  logo: Logo;
};

const Details = ({ movie, logo }: Props) => {
  return (
    <div className="ml-10 w-full flex justify-between items-end h-fit absolute inset-y-2/4 -translate-y-2/4 z-50">
      <div className="max-w-lg flex flex-col gap-4">
        <div className="flex items-center -ml-3">
          <Image
            src="/logo/n-symbol.png"
            alt={movie.title}
            width={50}
            height={60}
          />
          <span className="tracking-wider font-semibold text-slate-300 text-xl">
            F I L M
          </span>
        </div>
        <div className="w-full h-40 relative">
          <Image
            src={`${process.env.IMAGE_BASE_URL}${logo.file_path}`}
            alt={movie.title}
            fill
            className="object-fill"
          />
        </div>
        <p>{movie.overview}</p>
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
          <SpeakerWaveIcon className="w-6 h-6" />
        </div>
        <div className="bg-black/30 border-l-2 w-40 h-12 pl-4 flex items-center text-lg">
          13+
        </div>
      </div>
    </div>
  );
};

export default Details;
