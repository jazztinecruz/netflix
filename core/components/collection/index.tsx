import { Children } from '@/core/types/react'

import Carousel from './carousel'
import ListSkeleton from './skeleton'

type Props = {
  children: Children
}

const Collection = ({ children }: Props) => {
  return <div className="grid grid-rows-[auto,1fr] gap-6">{children}</div>
}

const Title = ({ children }: Props) => {
  return <h2 className="text-xl lg:text-2xl font-semibold margin">{children}</h2>
}

Collection.Carousel = Carousel
Collection.Title = Title
Collection.Skeleton = ListSkeleton

export default Collection
