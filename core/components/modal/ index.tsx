"use client";

import get from "@/core/libraries";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import VideoPlayer from "../teaser/video";
import ModalDetails from "./details";
import { KEY } from "@/core/enums";
import { Movie } from "@/core/types/data";

const MovieModal = () => {
  const mid = useSearchParams().get("mid") || "";
  const router = useRouter();

  const { data: movie } = useQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
    enabled: !!mid,
  });
  const { data: trailer } = useQuery({
    queryKey: [KEY.TRAILER, mid],
    queryFn: async () => await get.movie.trailer({ id: mid }),
    enabled: !!mid,
  });
  const { data: credits } = useQuery({
    queryKey: [KEY.CREDITS, mid],
    queryFn: async () => await get.movie.credits({ id: mid }),
    enabled: !!mid,
  });
  const { data: similar } = useQuery<Movie[]>({
    queryKey: [KEY.SIMILAR, mid],
    queryFn: async () => await get.movies.similar({ id: mid }),
    enabled: !!mid,
  });

  if (!mid) return null;

  return (
    <Transition
      show={!!mid}
      enter="duration-500 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <Dialog onClose={() => router.back()} className="relative z-[999]">
        <div className="fixed inset-0 flex w-screen bg-black/60 items-center justify-center p-4 overflow-y-auto">
          <DialogPanel className="max-w-5xl w-full relative rounded-md bg-primary">
            <div className="h-[500px] relative grid p-12 border-4">
              {trailer && <VideoPlayer video={trailer} />}
              <ModalDetails id={mid} />
            </div>
            <div className="p-12 pt-0 space-y-4">
              <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between">
                <div className="w-full max-w-xl">
                  <p className="text-sm">{movie?.overview}</p>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-xs">
                  {credits && (
                    <div className="flex flex-wrap gap-1">
                      <span className="text-sm text-secondary">Cast:</span>
                      {credits.slice(0, 4).map((credit) => (
                        <span key={credit.id} className="text-sm">
                          {credit.name},
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1">
                    <span className="text-sm text-secondary">Genres:</span>
                    {movie?.genres?.map((genre) => (
                      <span key={genre.id} className="text-sm">
                        {genre.name},
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="space-y-4">
                <h2 className="text-xl font-bold">More Like This</h2>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {similar?.slice(0, 9).map((movie) => (
                    <li key={movie.id} className="relative">
                      <div className="aspect-video bg-gray-500" />
                      <div className="bg-[#2F2F2F] rounded-b-md p-4 flex flex-col gap-3 h-40 overflow-hidden ">
                        <p className="text-sm">{movie.overview}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MovieModal;
