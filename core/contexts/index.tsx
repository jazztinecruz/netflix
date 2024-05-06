"use client";

import { Children } from "../types/react";
import { VideoProvider } from "./video";

type Props = {
  children: Children;
};

const Providers = ({ children }: Props) => {
  return (
    <div>
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
};

export default Providers;
