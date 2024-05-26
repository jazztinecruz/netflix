import { UseQueryOptions, useQuery } from 'react-query'

const useCustomQuery = <T>(options: UseQueryOptions<T, unknown>) => {
  return useQuery<T>({
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...options,
  })
}

export default useCustomQuery
