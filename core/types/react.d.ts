import { ReactNode } from 'react'

export type Children = ReactNode
export type Page = React.FC
export type SVG = React.ComponentType<React.SVGProps<SVGSVGElement>>
export interface IdProp {
  id: string
}
export interface ChildrenProp {
  children: Children
}
