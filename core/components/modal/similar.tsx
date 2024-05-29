'use client'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { KEY } from '@/core/enums'
import useCustomQuery from '@/core/hook/custom-query'
import get from '@/core/libraries'
import { Movie } from '@/core/types/data'

import Symbol from '../symbol'
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

  const [expand, setExpand] = useState(false)

  if (!similar || !similar.length) return null
  const cutOffCount = expand ? similar.length : 6

  return (
    <Group>
      <Group.Title>More Like This</Group.Title>
      <Group.List>{similar?.slice(0, cutOffCount).map((movie) => <Card key={movie.id} movie={movie} />)}</Group.List>

      <div className="relative grid">
        <button
          onClick={() => setExpand((prev) => !prev)}
          className="grid z-10 place-items-center bg-secondary/10 border border-secondary rounded-full p-1.5 mx-auto hover:border-white"
        >
          <Symbol Icon={expand ? ChevronDownIcon : ChevronUpIcon} />
        </button>
        <div className="border w-full absolute inset-y-2/4 translate-y-2/4 border-secondary" />
      </div>
    </Group>
  )
}

export default Similar
