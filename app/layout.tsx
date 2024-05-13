import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MovieModal from '@/core/components/modal/ index'
import Providers from '@/core/contexts'
import '@/core/styles/globals.css'
import { Children } from '@/core/types/react'

import Navbar from './_components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix Clone | @jazztinecruz',
  description: 'Generated by create next app',
}

type Props = {
  children: Children
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-rows-[auto,1fr] bg-primary text-white`}>
        <Navbar />
        <main>
          <Providers>
            {children}
            {/* <MovieModal /> */}
          </Providers>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
