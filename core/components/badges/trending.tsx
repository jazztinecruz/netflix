'use client'

import isMovieTrending from '@/core/libraries/isTrending'

type Props = {
  isDifferentShape?: boolean
  isNotAbsolute?: boolean
  id: string
}

const TrendingBadge = ({ isDifferentShape = false, isNotAbsolute = false, id }: Props) => {
  const { isTrending } = isMovieTrending({ id })

  if (!isTrending) return null

  return (
    <div className={` ${isNotAbsolute ? 'relative' : 'absolute top-0 right-0'}`}>
      <div
        className={`bg-red-600 text-white font-bold  items-center text-center flex flex-col w-fit ${isDifferentShape ? 'py-1 px-1.5' : 'rounded-md px-2 py-1 '}`}
      >
        <span className={`${isDifferentShape ? 'text-[9px]' : 'text-xs'}`}>TOP</span>
        <span className="-mt-1.5">10</span>
      </div>
    </div>
  )
}

export default TrendingBadge
