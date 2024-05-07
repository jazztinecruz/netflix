"use client";

import { Children } from "../types/react";
import { VideoProvider } from "./video";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: Children;
};

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient} contextSharing>
        <VideoProvider>{children}</VideoProvider>
      </QueryClientProvider>
    </div>
  );
};

export default Providers;
