'use client'

import { Inter } from 'next/font/google'
import { useEffect } from 'react'

import Navbar from './_components/navbar'

const inter = Inter({ subsets: ['latin'] })

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-rows-[auto,1fr] bg-primary text-white`}>
        <Navbar />
        <div className="mx-auto flex flex-col justify-center items-center max-w-2xl text-center h-screen">
          <h2 className="text-4xl font-bold mb-8 text-white">Oops! Something went wrong!</h2>
          <p className="text-lg text-white mb-8">Error: {error.message}</p>
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors duration-300 ease-in-out"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
