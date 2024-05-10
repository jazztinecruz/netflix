import { KEY } from "@/core/enums";
import get from "@/core/libraries";
import { Image as Logo, Movie } from "@/core/types/data";
import { IdProp } from "@/core/types/react";
import Image from "next/image";
import { useQuery } from "react-query";
import Symbol from "../../symbol";
import {
  HandThumbUpIcon,
  PlusIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/16/solid";

const ModalDetails = ({ id }: IdProp) => {
  const { data: movie, isLoading: fetchingMovie } = useQuery<Movie>({
    queryKey: [KEY.MOVIE, { id }],
    queryFn: async () => await get.movie.details({ id }),
  });

  const { data: logo, isLoading: fetchingLogo } = useQuery<Logo>({
    queryKey: [KEY.LOGO, { id }],
    queryFn: async () => (await get.movie.images({ id })).logos[0],
  });

  if (!movie) return null;

  return (
    <div className="flex justify-between items-end mt-auto">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <div className="w-8 h-8 relative">
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
          <div className="w-40 h-auto relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${logo?.file_path}`}
              alt={movie.title}
              width={logo?.width}
              height={logo?.height}
              priority
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white px-3 lg:px-5 py-2 rounded-md flex items-center gap-2 cursor-pointer">
            <Symbol Icon={PlayIcon} color="black" />
            <span className="text-black font-semibold text-sm lg:text-lg">
              Play
            </span>
          </button>
          <div className="border rounded-full w-fit p-2">
            <Symbol Icon={PlusIcon} />
          </div>
          <div className="border rounded-full w-fit p-2">
            <Symbol Icon={HandThumbUpIcon} />
          </div>
        </div>
      </div>

      <div className="border rounded-full w-fit p-2">
        <Symbol Icon={SpeakerXMarkIcon} />
      </div>
    </div>
  );
};

export default ModalDetails;
