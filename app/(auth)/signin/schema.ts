import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, { message: 'Password must be at least 8 characters' }),
  remember: z.boolean().optional(),
})

export type SignInFields = z.infer<typeof SignInSchema>
