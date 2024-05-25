import { NoSymbolIcon } from '@heroicons/react/24/outline'

import Symbol from '../symbol'

type Props = {
  aspectRatio?: 'square' | 'video'
  type?: 'poster' | 'trailer' | 'logo' | 'backdrop'
}

const NotAvailable = ({ aspectRatio = 'video', type = 'trailer' }: Props) => {
  const formattedType = type.slice(0, 1).toUpperCase() + type.slice(1)

  return (
    <div
      className={`h-full w-full bg-gray-500 flex flex-col lg:flex-row items-center justify-center gap-2 rounded-md text-center opacity-75 aspect-${aspectRatio}`}
    >
      <Symbol Icon={NoSymbolIcon} />
      <span>{formattedType} Not Available</span>
    </div>
  )
}

export default NotAvailable
