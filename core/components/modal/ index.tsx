'use client'

import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import VideoPlayer from '../media/video'
import Symbol from '../symbol'
import About from './about'
import Collection from './collection'
import Information from './information'
import Similar from './similar'
import VideoDetails from './video-details'

const MovieModal = () => {
  const mid = useSearchParams().get('mid') || ''
  const pathname = usePathname()
  const router = useRouter()

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
              <VideoDetails id={mid} />
              <div className="bg-gradient-to-b from-transparent to-primary absolute inset-0" />
            </div>
            <div className="p-10 pt-0 space-y-12 grid">
              <Information />
              <Collection />
              <Similar />
              <About />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MovieModal
