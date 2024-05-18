import { ChildrenProp } from '@/core/types/react'

import Carousel from './carousel'
import ListSkeleton from './skeleton'

const Collection = ({ children }: ChildrenProp) => {
  return <div className="grid grid-rows-[auto,1fr] gap-6">{children}</div>
}

const Title = ({ children }: ChildrenProp) => {
  return <h2 className="text-xl lg:text-2xl font-semibold margin">{children}</h2>
}

Collection.Carousel = Carousel
Collection.Title = Title
Collection.Skeleton = ListSkeleton

export default Collection
