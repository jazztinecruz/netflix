'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'
import { Movie } from '@/core/types/data'

import Card from './card'
import Group from './group'

const Similar = () => {
  const mid = useSearchParams().get('mid') || ''

  const { data: movie } = useQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
    enabled: !!mid,
  })

  const { data: similar } = useQuery<Movie[]>({
    queryKey: [KEY.SIMILAR, movie?.id],
    queryFn: async () => await get.movies.similar({ id: movie?.id || mid }),
    enabled: !!mid,
  })

  if (!similar) return null

  return (
    <Group>
      <Group.Title>More Like This</Group.Title>
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
        {similar?.map((movie) => <Card key={movie.id} movie={movie} />)}
      </ul>
    </Group>
  )
}

export default Similar
