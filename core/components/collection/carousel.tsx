"use client";

import { Movie } from "@/core/types/data";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Card from "./card";

type Props = {
  movies: Movie[];
};

const Carousel = ({ movies }: Props) => {
  const displayCount = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Math.ceil(movies.length / displayCount);

  const handleNext = () => {
    const nextIndex = startIndex + displayCount;
    setStartIndex(nextIndex >= movies.length ? 0 : nextIndex);
    setCurrentSlide((prev) => (nextIndex >= movies.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    const nextIndex = startIndex - displayCount;
    setStartIndex(nextIndex < 0 ? movies.length - displayCount : nextIndex);
    setCurrentSlide((prev) => prev - 1);
  };

  const visibleMovies = Array.from({ length: displayCount }, (_, index) => {
    const movieIndex = (startIndex + index) % movies.length;
    return movies[movieIndex];
  });

  return (
    <div className="relative overflow-hidden flex flex-col gap-3">
      <div className="flex items-center gap-1 ml-auto mr-12">
        {Array.from({ length: slides }).map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-2 border-b-2 ${
              currentSlide === index ? "border-white" : "border-secondary"
            }`}
          />
        ))}
      </div>
      <div className="relative group grid grid-flow-col transition-transform duration-300 ease-in-out ">
        <div
          className={`grid grid-flow-col gap-4 transform transition-transform ${
            startIndex === 0 && "margin"
          }`}>
          {visibleMovies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
        {startIndex >= displayCount && (
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 h-full bg-gradient-to-r from-primary to-transparent w-40 grid justify-start items-center pl-2">
            <ChevronLeftIcon className="w-10 h-10 cursor-pointer opacity-0 group-hover:opacity-70" />
          </button>
        )}
        {startIndex + displayCount < movies.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 h-full w-40 bg-gradient-to-r from-transparent to-primary grid justify-end items-center pr-2">
            <ChevronRightIcon className="w-10 h-10 cursor-pointer opacity-0 group-hover:opacity-70" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
