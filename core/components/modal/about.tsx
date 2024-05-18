'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'

import Group from './group'

const About = () => {
  const mid = useSearchParams().get('mid') || ''

  const { data: movie } = useQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
    enabled: !!mid,
  })

  const { data: credits } = useQuery({
    queryKey: [KEY.CREDITS, movie?.id],
    queryFn: async () => await get.movie.credits({ id: movie?.id || mid }),
    enabled: !!movie,
  })

  if (!movie) return null

  return (
    <Group>
      <Group.Title>About {movie.title}</Group.Title>
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

      {movie.genres.length && (
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
  )
}

export default About
