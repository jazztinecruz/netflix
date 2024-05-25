import { Children, ChildrenProp, SVG } from '@/core/types/react'

import Symbol from '../symbol'

type TitleProps = {
  Icon?: SVG
  children: Children
}

const Group = ({ children }: ChildrenProp) => {
  return <div className="space-y-4 lg:space-y-6">{children}</div>
}

const Title = ({ children, Icon }: TitleProps) => {
  const titleStyle = 'text-lg lg:text-2xl font-semibold'
  if (!Icon) return <h2 className={titleStyle}>{children}</h2>
  return (
    <div className="flex items-center gap-4">
      <Symbol Icon={Icon} color="white" />
      <h2 className={titleStyle}>{children}</h2>
    </div>
  )
}

const List = ({ children }: ChildrenProp) => {
  return <ul className="grid grid-cols-3 gap-3 lg:gap-4">{children}</ul>
}

Group.Title = Title
Group.List = List
export default Group
