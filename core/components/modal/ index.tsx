'use client'

import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { ViewColumnsIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Movie } from '@/core/types/data'

import VideoPlayer from '../media/video'
import Symbol from '../symbol'
import Card from './card'
import ModalDetails from './details'
import Group from './group'

const MovieModal = () => {
  const mid = useSearchParams().get('mid') || ''
  const pathname = usePathname()
  const router = useRouter()

  const { data: movie } = useQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
    enabled: !!mid,
  })
  const { data: credits } = useQuery({
    queryKey: [KEY.CREDITS, mid],
    queryFn: async () => await get.movie.credits({ id: mid }),
    enabled: !!mid,
  })
  const { data: similar } = useQuery<Movie[]>({
    queryKey: [KEY.SIMILAR, mid],
    queryFn: async () => await get.movies.similar({ id: mid }),
    enabled: !!mid,
  })
  const { data: certificate } = useQuery({
    queryKey: [KEY.CERTIFICATE, mid],
    queryFn: async () => await get.movie.certificate({ id: mid }),
    enabled: !!mid,
  })
  const { data: collection } = useQuery({
    queryKey: [KEY.COLLECTION, mid],
    queryFn: async () => await get.movies.collection({ id: movie?.belongs_to_collection?.id || '' }),
    enabled: !!mid && !!movie?.belongs_to_collection?.id,
  })

  const handleClose = () => router.push(pathname)

  if (!mid) return null

  return (
    <Transition
      show={!!mid}
      enter="duration-500 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog onClose={handleClose} className="relative z-[999]">
        <div className="fixed inset-0 flex w-screen bg-black/60 items-center justify-center p-4">
          <DialogPanel className="max-w-6xl w-full relative rounded-md bg-primary space-y-4 h-screen overflow-y-auto">
            <div className="relative h-[500px] overflow-hidden">
              <button onClick={handleClose} className="bg-primary rounded-full absolute top-5 right-5 z-10 p-2">
                <Symbol Icon={XMarkIcon} color="white" />
              </button>
              <VideoPlayer id={mid} />
              <ModalDetails id={mid} />
              <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0" />
            </div>
            <div className="p-10 pt-0 space-y-12 grid">
              <div className="space-y-3">
                {certificate && <div className="border border-secondary px-2 py-1 w-fit text-sm">{certificate}</div>}
                <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between">
                  <p className="text-sm w-full max-w-xl">{movie?.overview}</p>
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

                    {movie?.genres.length && (
                      <div className="flex flex-wrap gap-1">
                        <span className="text-sm text-secondary">Genres:</span>
                        {movie?.genres?.map((genre) => (
                          <span key={genre.id} className="text-sm">
                            {genre.name},
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {collection && (
                <Group>
                  <Group.Title Icon={ViewColumnsIcon}>{collection?.name}</Group.Title>
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {collection?.parts?.map((movie) => <Card key={movie.id} movie={movie} />)}
                  </ul>
                </Group>
              )}

              <Group>
                <Group.Title>More Like This</Group.Title>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {similar?.slice(0, 9).map((movie) => <Card key={movie.id} movie={movie} />)}
                </ul>
              </Group>

              <Group>
                <Group.Title>About {movie?.title}</Group.Title>
                {credits && (
                  <div className="flex flex-wrap gap-1">
                    <span className="text-sm text-secondary">Cast:</span>
                    {credits.map((credit) => (
                      <span key={credit.id} className="text-sm">
                        {credit.name},
                      </span>
                    ))}
                  </div>
                )}

                {movie?.genres.length && (
                  <div className="flex flex-wrap gap-1">
                    <span className="text-sm text-secondary">Genres:</span>
                    {movie?.genres?.map((genre) => (
                      <span key={genre.id} className="text-sm">
                        {genre.name},
                      </span>
                    ))}
                  </div>
                )}
              </Group>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MovieModal
