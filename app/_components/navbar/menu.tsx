'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavMenu = () => {
  return (
    <>
      {/* smaller screen */}
      <section className="relative lg:hidden w-fit">
        <Menu>
          <MenuButton className="flex items-center gap-2 outline-none">
            <span className="text-sm">Browse</span>
            <Triangle direction="down" />
          </MenuButton>

          <MenuItems className="absolute top-10 inset-x-2/4 -translate-x-2/4 w-72 bg-black/80 border border-gray-300/30 border-t-[3px] border-t-white rounded-t-sm outline-none">
            <Triangle />
            <ul className="flex flex-col justify-center text-center  text-white">
              {NAVMENUS.map((menu) => (
                <MenuItem key={menu.label}>
                  <NavMenuItem menu={menu} />
                </MenuItem>
              ))}
            </ul>
          </MenuItems>
        </Menu>
      </section>

      {/* larger screen */}
      <section className="hidden lg:block">
        <ul className="flex items-center gap-4">
          {NAVMENUS.map((menu) => (
            <NavMenuItem key={menu.label} menu={menu} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default NavMenu

const NavMenuItem = ({ menu }: { menu: MenuItem }) => {
  const pathname = usePathname()
  const isBold = pathname === menu.url ? 'font-bold' : 'font-medium'

  return (
    <Link href={menu.url}>
      <li className={`text-sm ${isBold} text-white py-3 hover:bg-white/10 lg:hover:bg-transparent`}>{menu.label}</li>
    </Link>
  )
}

const Triangle = ({ direction = 'up' }: { direction?: 'up' | 'down' }) => {
  const borders = 'border-l-transparent border-b-white border-r-transparent w-0 h-0'
  if (direction === 'down') {
    return <div className={`${borders} -top-4 border-l-[6px] border-b-[6px] border-r-[6px] rotate-180`} />
  }
  return (
    <div
      className={`${borders} absolute inset-x-2/4 -translate-x-2/4 -top-[11px] border-l-[8px] border-b-[8px] border-r-[8px]`}
    />
  )
}

type MenuItem = {
  label: string
  url: string
}

const NAVMENUS: MenuItem[] = [
  { label: 'Home', url: '/' },
  { label: 'New & Popular', url: '/popular' },
]
