import { SVG } from '@/core/types/react'

type Props = {
  Icon: SVG
  color?: 'black' | 'white'
}

const Symbol = ({ Icon, color = 'white' }: Props) => {
  return <Icon className={`w-7 h-7 text-${color}`} />
}

export default Symbol
