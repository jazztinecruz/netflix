"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";

const MovieModal = () => {
  const mid = useSearchParams().get("mid");
  const router = useRouter();

  return (
    <Transition
      show={!!mid}
      enter="duration-500 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <Dialog onClose={() => router.back()} className="relative z-50">
        <div className="fixed inset-0 flex w-screen bg-black/60 items-center justify-center p-4 overflow-y-auto">
          <DialogPanel className="max-w-5xl w-full space-y-4 border rounded-md bg-white text-black p-12">
            <DialogTitle>Movie Details</DialogTitle>
            <Description>Movie details goes here</Description>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MovieModal;
