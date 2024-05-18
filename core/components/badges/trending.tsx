'use client'

import isMovieTrending from '@/core/libraries/isTrending'

type Props = {
  isDifferentShape?: boolean
  id: string
}

const TrendingBadge = ({ isDifferentShape = false, id }: Props) => {
  const { isTrending } = isMovieTrending({ id })

  if (!isTrending) return null

  return (
    <div className="absolute top-0 right-0">
      <div
        className={`bg-red-600 text-white font-bold  items-center text-center flex flex-col w-fit ${isDifferentShape ? 'py-1 px-1.5' : 'rounded-md px-2 py-1 '}`}
      >
        <span className={`${isDifferentShape ? 'text-[9px]' : 'text-xs'}`}>TOP</span>
        <span className="text-base -mt-1.5">10</span>
      </div>
      {isDifferentShape && (
        <div className="h-0 w-0 rotate-180 border-b-[6px] lg:border-b-[8px] border-r-[34.1px] border-b-red-600 border-r-transparent" />
      )}
    </div>
  )
}

export default TrendingBadge
