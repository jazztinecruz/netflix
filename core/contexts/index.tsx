'use client'

import { Children } from '../types/react'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
  children: Children
}

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
