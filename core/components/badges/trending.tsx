type Props = {
  isDifferentShape?: boolean
}

const TrendingBadge = ({ isDifferentShape = false }: Props) => {
  return (
    <div>
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
