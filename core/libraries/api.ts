import axios from 'axios'

import grabError from './error'

type Props = {
  url: string
  params?: Record<string, string>
}

const api = async ({ url: getUrl, params }: Props) => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}${getUrl}`)
    url.searchParams.set('api_key', process.env.NEXT_PUBLIC_API_KEY!)

    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key])
      })
    }

    const options = { method: 'GET', headers: { accept: 'application/json' } }
    const response = await axios.get(url.toString(), options)
    const data = await response.data

    if (data.results) return data.results
    return data
  } catch (error) {
    console.error(`Error fetching in ${getUrl}:`, error)
    grabError(error)
    throw error
  }
}

export default api
