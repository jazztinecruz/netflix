'use client'

import { Checkbox, Input } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import { SignInFields, SignInSchema } from './schema'

const Form = () => {
  const { register, handleSubmit, formState, setValue, watch } = useForm<SignInFields>({
    resolver: zodResolver(SignInSchema),
  })
  const { errors, isSubmitting } = formState

  const onSubmit: SubmitHandler<SignInFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  const fieldStyle =
    'border border-secondary rounded px-3 py-5 md:py-4 bg-inherit focus:outline-2 focus:outline-white placeholder:text-secondary placeholder:text-base'
  const errorMessageStyle = 'text-red-600 text-sm'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input
          {...register('email', {
            required: 'Email is required',
          })}
          name="email"
          type="email"
          placeholder="Email Addess"
          className={fieldStyle}
        />
        {errors.email && <span className={errorMessageStyle}>{errors.email?.message}</span>}
      </div>
      <div className="flex flex-col gap-2">
        <Input
          {...register('password')}
          name="password"
          type="password"
          placeholder="Password"
          className={fieldStyle}
        />
        {errors.password && <span className={errorMessageStyle}>{errors.password?.message}</span>}
      </div>
      <button disabled={isSubmitting} className="bg-red-600 text-white rounded py-3 px-3 font-semibold text-base">
        {isSubmitting ? 'Signing In' : 'Sign In'}
      </button>
      {/* remember me */}
      <div className="flex items-center gap-3">
        <Checkbox
          name="remember"
          checked={watch('remember')}
          onChange={(event) => setValue('remember', event)}
          className="group size-5 rounded bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
        >
          <CheckIcon className="hidden size-3.5 fill-black group-data-[checked]:block" />
        </Checkbox>
        <span>Remember Me</span>
      </div>
      {/* signup */}
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
  )
}

export default Form
