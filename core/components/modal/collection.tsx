'use client'

import { ViewColumnsIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'next/navigation'

import { KEY } from '@/core/enums'
import useCustomQuery from '@/core/hook/custom-query'
import get from '@/core/libraries'

import Card from './card'
import Group from './group'

const Collection = () => {
  const mid = useSearchParams().get('mid') || ''

  const { data: movie } = useCustomQuery({
    queryKey: [KEY.MOVIE, mid],
    queryFn: async () => await get.movie.details({ id: mid }),
    enabled: !!mid,
  })

  const collectionId = movie?.belongs_to_collection?.id || ''

  const { data: collection } = useCustomQuery({
    queryKey: [KEY.COLLECTION, mid],
    queryFn: async () => await get.movies.collection({ id: collectionId }),
    enabled: !!collectionId,
  })

  if (!collection || !collection.parts) return null

  return (
    <Group>
      <Group.Title Icon={ViewColumnsIcon}>{collection?.name}</Group.Title>
      <Group.List>{collection?.parts?.map((movie) => <Card key={movie.id} movie={movie} />)}</Group.List>
    </Group>
  )
}

export default Collection
