'use client'

import { Checkbox, Input } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SignIn = () => {
  const [enabled, setEnabled] = useState(false)

  const fieldStyle =
    'border border-secondary rounded px-3 py-5 md:py-4 bg-inherit focus:outline-2 focus:outline-white placeholder:text-secondary placeholder:text-base'

  return (
    <div className="relative p-5 h-screen">
      <Image
        src="/backgrounds/signin.jpeg"
        alt="Sign In Netflix Background"
        fill
        className="object-cover absolute inset-0 -z-10 hidden md:block"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" />
      <div className="w-full max-w-7xl mx-auto grid grid-rows-[auto,1fr] h-full">
        <nav>
          <div className="w-28 h-20 md:w-36 md:h-28 relative">
            <Image src="/logo/netflix.png" alt="NETFLIX Logo" fill className="object-cover -ml-2 -mt-4" />
          </div>
        </nav>
        <div className="flex flex-col w-full max-w-lg md:m-auto bg-black/75 md:p-16 space-y-6 h-fit">
          <h1 className="text-3xl font-semibold">Sign In</h1>
          <form className="flex flex-col gap-4">
            <Input name="email" type="email" placeholder="Email Addess" className={fieldStyle} />
            <Input name="password" type="password" placeholder="Password" className={fieldStyle} />
            <button className="bg-red-600 text-white rounded py-3 px-3 font-semibold text-base">Sign In</button>
            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group size-5 rounded bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
              >
                <CheckIcon className="hidden size-3.5 fill-black group-data-[checked]:block" />
              </Checkbox>
              <span>Remember Me</span>
            </div>
            {/* Signup */}
            <div className="flex items-center gap-2 text-sm text-[#FFFFFFB3]">
              <span>New to Netflix?</span>
              <Link href="/signup" className="text-white font-medium">
                Sign Up now
              </Link>
            </div>
            {/* reCaPTCHA */}
            <span className="text-[#FFFFFFB3] text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <Link href="/" className="text-blue-600">
                Learn more
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
