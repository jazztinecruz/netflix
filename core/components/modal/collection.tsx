'use client'

import { ViewColumnsIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'

import { KEY } from '@/core/enums'
import get from '@/core/libraries'

import Card from './card'
import Group from './group'

const Collection = () => {
  const mid = useSearchParams().get('mid') || ''

  const { data: movie } = useQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
    enabled: !!mid,
  })

  const collectionId = movie?.belongs_to_collection?.id || ''

  const { data: collection } = useQuery({
    queryKey: [KEY.COLLECTION, movie?.id],
    queryFn: async () => await get.movies.collection({ id: collectionId }),
    enabled: !!collectionId,
  })

  if (!collection || !collection.parts) return null

  return (
    <Group>
      <Group.Title Icon={ViewColumnsIcon}>{collection?.name}</Group.Title>
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
        {collection?.parts?.map((movie) => <Card key={movie.id} movie={movie} />)}
      </ul>
    </Group>
  )
}

export default Collection
