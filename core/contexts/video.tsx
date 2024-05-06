"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type VideoContextType = {
  showVideo: boolean;
  handleShowVideo: () => void;
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo((prevState) => !prevState);
  };

  return (
    <VideoContext.Provider value={{ showVideo, handleShowVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};
