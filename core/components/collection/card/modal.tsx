"use client";

import get from "@/core/libraries";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import VideoPlayer from "../../teaser/video";
import ModalDetails from "../../teaser/details/modal";
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
              <VideoPlayer id={mid} />
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              ipsa excepturi, dolorem suscipit eius sapiente esse est, et
              praesentium quaerat velit tempore, fugit consectetur. Omnis
              distinctio nesciunt non odit atque qui perspiciatis repudiandae ea
              vitae iure, vero, eveniet itaque fugiat cumque dolore quisquam
              fuga cupiditate dolorum voluptates dolor numquam impedit.
              Asperiores velit cumque, magni libero sit, qui atque dolore quia
              ipsa reiciendis non numquam ullam eius iste nulla nesciunt?
              Pariatur quisquam unde corporis, velit laboriosam cumque iste
              dolores! Ipsam minus magni debitis quidem facere corporis
              distinctio molestias deserunt aliquid necessitatibus perspiciatis
              exercitationem beatae totam, enim assumenda laborum fuga, soluta
              accusantium architecto alias? Recusandae pariatur, vero facilis
              quos adipisci aperiam? Laboriosam impedit officia perferendis
              veniam quis, cum illum quaerat? Sint quidem unde itaque a
              eligendi, voluptas ut corporis ad modi quam nulla dicta. Culpa
              repellendus obcaecati, animi, quas sint quo, saepe mollitia
              dolorum soluta blanditiis cupiditate nisi. Dicta ipsum, corrupti
              dolorem in voluptatibus, perferendis alias quos, et ipsa
              voluptatem deleniti laboriosam obcaecati blanditiis dolore
              voluptates aliquid nulla provident fugit maiores totam ut
              molestiae libero aperiam odio! Soluta quas ab, animi obcaecati, ex
              tempora unde magnam saepe, iste ipsa voluptatibus aut atque!
              Suscipit perspiciatis sapiente saepe dolor optio, cumque mollitia
              magnam accusamus sed asperiores. Alias ut eius asperiores corporis
              dignissimos saepe, minus ipsam molestiae officia facilis est
              magnam dolore libero, sit adipisci repellat. Commodi, in excepturi
              minus itaque exercitationem laborum libero nihil eum aut
              recusandae, sequi quaerat laudantium adipisci eveniet omnis alias
              quisquam, quidem dolores voluptate enim aspernatur eaque.
              Voluptatem optio fugiat, nulla odio minima modi pariatur id dicta
              placeat quo culpa corporis? Itaque quibusdam in minima et magni
              ipsa non? Sunt alias ab eaque dignissimos assumenda, sed,
              asperiores est quo ipsam quia id debitis veritatis ratione
              sapiente mollitia iusto expedita aliquid, excepturi ipsa error at
              dolorum aliquam veniam rerum? Natus dicta provident, quisquam
              tenetur cupiditate culpa, cumque deserunt non odio dolorem nulla
              quos, numquam recusandae omnis praesentium. Exercitationem tenetur
              est neque quos quas similique, sint facere nulla perspiciatis
              blanditiis tempora quae magnam facilis dolores, beatae qui et in
              quia nemo, laborum excepturi! Perferendis repellat accusantium
              labore minima eum in est sit architecto a iusto eveniet magni
              veniam, enim delectus facilis laboriosam omnis? Numquam laudantium
              magni cum! Id veritatis molestias maiores sit error, at
              consectetur quaerat minus quasi fuga vero tenetur aperiam ducimus
              magni ut nihil temporibus sint magnam. Obcaecati impedit, dolorum
              hic perferendis provident voluptatibus. At exercitationem sint
              fuga, provident delectus quia eos laudantium ut facilis tempore
              perspiciatis dicta asperiores qui magni magnam, hic architecto
              recusandae quidem cum quam corrupti iure cupiditate unde! Deleniti
              nemo commodi, voluptatem adipisci enim provident consequatur nisi
              molestiae aliquam vel veniam quidem facere consequuntur ducimus
              repellendus aliquid. Maiores sunt voluptatem, doloribus modi
              excepturi exercitationem saepe voluptates commodi dolorum ex et
              fugiat! Magni beatae, similique molestias cum esse excepturi
              corrupti quibusdam voluptates eum maxime consequuntur assumenda
              vitae architecto nam maiores voluptas commodi repellendus quaerat!
              Corporis, assumenda cumque iusto voluptatem deleniti repellendus
              eos nisi similique aspernatur harum officiis maxime totam
              incidunt, quia quae tenetur voluptate, non unde qui!
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
