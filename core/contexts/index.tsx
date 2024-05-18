'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

import { ChildrenProp } from '../types/react'

const Providers = ({ children }: ChildrenProp) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
