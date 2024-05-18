import { Children, ChildrenProp, SVG } from '@/core/types/react'

import Symbol from '../symbol'

type TitleProps = {
  Icon?: SVG
  children: Children
}

const Group = ({ children }: ChildrenProp) => {
  return <div className="space-y-6">{children}</div>
}

const Title = ({ children, Icon }: TitleProps) => {
  const titleStyle = 'text-2xl font-semibold'
  if (!Icon) return <h2 className={titleStyle}>{children}</h2>
  return (
    <div className="flex items-center gap-4">
      <Symbol Icon={Icon} color="white" />
      <h2 className={titleStyle}>{children}</h2>
    </div>
  )
}

Group.Title = Title
export default Group
