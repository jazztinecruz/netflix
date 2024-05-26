'use client'

import { useSearchParams } from 'next/navigation'

import { KEY } from '@/core/enums'
import useCustomQuery from '@/core/hook/custom-query'
import get from '@/core/libraries'
import { Movie } from '@/core/types/data'

import Card from './card'
import Group from './group'

const Similar = () => {
  const mid = useSearchParams().get('mid') || ''

  const { data: movie } = useCustomQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
    enabled: !!mid,
  })

  const { data: similar } = useCustomQuery<Movie[]>({
    queryKey: [KEY.SIMILAR, mid],
    queryFn: async () => await get.movies.similar({ id: movie?.id || mid }),
    enabled: !!mid,
  })

  if (!similar || !similar.length) return null

  return (
    <Group>
      <Group.Title>More Like This</Group.Title>
      <Group.List>{similar?.map((movie) => <Card key={movie.id} movie={movie} />)}</Group.List>
    </Group>
  )
}

export default Similar
