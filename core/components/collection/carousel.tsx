'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { useState } from 'react'

import isMovieTrending from '@/core/libraries/isTrending'
import { Movie } from '@/core/types/data'

import TrendingBadge from '../badges/trending'
import Backdrop from '../media/backdrop'
import Poster from '../media/poster'

type Props = {
  movies: Movie[]
}

const Carousel = ({ movies }: Props) => {
  const displayCount = 6
  const [startIndex, setStartIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = Math.ceil(movies.length / displayCount)

  const handleNext = () => {
    const nextIndex = startIndex + displayCount
    setStartIndex(nextIndex >= movies.length ? 0 : nextIndex)
    setCurrentSlide((prev) => (nextIndex >= movies.length ? 0 : prev + 1))
  }

  const handlePrev = () => {
    const nextIndex = startIndex - displayCount
    setStartIndex(nextIndex < 0 ? movies.length - displayCount : nextIndex)
    setCurrentSlide((prev) => prev - 1)
  }

  const visibleMovies = Array.from({ length: displayCount }, (_, index) => {
    const movieIndex = (startIndex + index) % movies.length
    return movies[movieIndex]
  })

  return (
    <>
      {/* smaller screen */}
      <div className="lg:hidden overflow-y-scroll mx-4">
        <div className="grid grid-flow-col gap-2 ">
          {movies.map((movie) => {
            const { isTrending } = isMovieTrending(movie.id)
            return (
              <Link key={movie.id} href={`?mid=${movie.id}`} className="w-32 md:w-36 aspect-square rounded-md relative">
                <Poster id={movie.id} />
                {isTrending && (
                  <div className="absolute top-0 right-0">
                    <TrendingBadge isDifferentShape />
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </div>

      {/* larger screen */}
      <div className="hidden lg:block">
        <div className="relative overflow-hidden flex flex-col gap-3">
          <div className="flex items-center gap-1 ml-auto mr-12">
            {Array.from({ length: slides }).map((_, index) => (
              <div
                key={index}
                className={`w-[10px] h-2 border-b-2 ${currentSlide === index ? 'border-white' : 'border-secondary'}`}
              />
            ))}
          </div>
          <div className="relative group grid grid-flow-col transition-transform duration-300 ease-in-out ">
            <ul className={`grid grid-flow-col gap-2 ${startIndex === 0 && 'margin'}`}>
              {visibleMovies.map((movie) => {
                const { isTrending } = isMovieTrending(movie.id)
                return (
                  <Link
                    key={movie.id}
                    href={`?mid=${movie.id}`}
                    className="w-48 lg:w-80 aspect-video rounded-md relative"
                  >
                    <Backdrop id={movie.id} />
                    {isTrending && (
                      <div className="absolute top-0 right-0">
                        <TrendingBadge isDifferentShape />
                      </div>
                    )}
                  </Link>
                )
              })}
            </ul>
            {startIndex >= displayCount && (
              <button
                onClick={handlePrev}
                className="absolute left-0 z-10 h-full bg-gradient-to-r from-primary to-transparent w-40 grid justify-start items-center pl-2"
              >
                <ChevronLeftIcon className="w-10 h-10 cursor-pointer opacity-0 group-hover:opacity-70" />
              </button>
            )}
            {startIndex + displayCount < movies.length && (
              <button
                onClick={handleNext}
                className="absolute right-0 h-full w-40 bg-gradient-to-r from-transparent to-primary grid justify-end items-center pr-2"
              >
                <ChevronRightIcon className="w-10 h-10 cursor-pointer opacity-0 group-hover:opacity-70" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
