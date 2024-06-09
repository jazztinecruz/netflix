import Image from 'next/image'

import Form from './form'

const SignIn = () => {
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
          <Form />
        </div>
      </div>
    </div>
  )
}

export default SignIn
