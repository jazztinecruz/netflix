'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavMenu = () => {
  const pathname = usePathname()

  return (
    <ul className="flex gap-2 lg:gap-4">
      {NAVMENUS.map((menu) => {
        const isActive =
          pathname === menu.url ? 'font-bold bg-white/10 lg:bg-transparent text-white' : 'font-medium text-secondary'

        return (
          <Link
            href={menu.url}
            key={menu.label}
            className={`${isActive} py-3 hover:bg-white/10 lg:hover:bg-transparent border border-secondary lg:border-none rounded-full lg:rounded-none px-4 lg:px-0`}
          >
            {menu.label}
          </Link>
        )
      })}
    </ul>
  )
}

export default NavMenu

type MenuItem = {
  label: string
  url: string
}

const NAVMENUS: MenuItem[] = [
  { label: 'Home', url: '/' },
  { label: 'New & Popular', url: '/popular' },
]
