"use client";

import get from "@/core/libraries";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import ModalDetails from "./details";
import { KEY } from "@/core/enums";
import { Movie } from "@/core/types/data";
import Card from "./card";
import VideoPlayer from "../preview/video";

const MovieModal = () => {
  const mid = useSearchParams().get("mid") || "";
  const router = useRouter();

  const { data: movie } = useQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
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
  const { data: certificate } = useQuery({
    queryKey: [KEY.CERTIFICATE, mid],
    queryFn: async () => await get.movie.certificate({ id: mid }),
    enabled: !!mid,
  });
  const { data: trailer } = useQuery({
    queryKey: [KEY.TRAILER, mid],
    queryFn: async () => await get.movie.trailer({ id: mid }),
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
        <div className="fixed inset-0 flex w-screen bg-black/60 items-center justify-center p-4">
          <DialogPanel className="max-w-5xl w-full relative rounded-md bg-primary space-y-4 h-screen overflow-y-auto">
            <div className="relative h-[500px] overflow-hidden">
              <VideoPlayer id={mid} />
              <ModalDetails id={mid} />
              <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0" />
            </div>
            <div className="p-10 space-y-12 grid">
              <div className="space-y-1">
                {certificate && (
                  <div className="border border-secondary px-2 py-1 w-fit text-sm">
                    {certificate}
                  </div>
                )}
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
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">More Like This</h2>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {similar?.slice(0, 9).map((movie) => (
                    <Card key={movie.id} movie={movie} />
                  ))}
                </ul>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MovieModal;